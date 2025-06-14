/* global d3 $ */
import 'd3'
var DrawComparison= function (id) {	
	this.id = id
    this.svgWidth = $('#' + id).width()
    this.svgHeight = $('#' + id).height()

    this.svg = d3.select('#' + id).append('svg')
        .attr('class', 'statisticSvg')
        .attr('width', this.svgWidth)
		.attr('height', this.svgHeight)

    var margin = {top: 15, right: 36, bottom: 15, left: 36};
    this.margin = margin;     
	
	this.graphContainer = this.svg.append('g')
		.attr('class', 'g_main')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
}


DrawComparison.prototype.Comparison = function () {
    const svg = this.svg;
    const margin = {top: 30, right: 120, bottom: 20, left: 40};
    const width = this.svgWidth - margin.left - margin.right;
    const height = 200;

    svg.attr('height', height + margin.top + margin.bottom);

    // Define consistent colors for models
    const modelColors = {
        'MADDPG': '#e3bccb',    // Pink
        'Colight': '#d6c8e1',       // Light Purple
        'DQN': '#b6adcc'    // Purple
    };

    const metrics = ['Queue', 'Delay', 'Throughput', 'Reward'];
    const models = ["MADDPG", "Colight", "DQN"];
    const data = [[3.89, 3.97, 4.29], [0.17, 0.21, 0.23], [4375, 4309, 4234], [50.43, 51.79, 52.24]];

    // Adjust x-scale to use more horizontal space
    const xScale = d3.scalePoint()
        .domain(metrics)
        .range([margin.left, width + margin.left])
            .padding(0.1);

    // Create y scales for each metric
    const yScales = {};
    metrics.forEach((metric, i) => {
        const extent = d3.extent(data[i]);
        if (metric === 'Reward') {
            yScales[metric] = d3.scaleLinear()
                .domain([extent[1], extent[0]].map(v => -v))
                .range([height - margin.bottom, margin.top])
                .nice();
        } else {
            yScales[metric] = d3.scaleLinear()
                .domain(extent)
                .range([height - margin.bottom, margin.top])
                .nice();
        }
    });

    // Draw axes with adjusted positioning
    metrics.forEach(metric => {
        const x = xScale(metric);
        const axis = d3.axisLeft(yScales[metric])
            .ticks(5)
            .tickFormat(d => {
                if (metric === 'Reward') {
                    return d === 0 ? '0' : `-${(-d).toFixed(1)}`;
                }
                return d;
            });

        svg.append('g')
            .attr('transform', `translate(${x},0)`)
            .call(axis)
            .append('text')
            .attr('y', margin.top - 10)
            .attr('x', 0)
            .attr('text-anchor', 'middle')
            .attr('fill', 'black')
            .style('font-size', '14px')
            .style('font-family', 'Times New Roman')
            .style('font-weight', 'bold')
            .text(metric);
    });

    // Create line generator with curve interpolation
    const line = d3.line()
        .curve(d3.curveCardinal.tension(0.5))
        .x((d, i) => xScale(metrics[i]))
        .y((d, i, data) => {
            const metric = metrics[i];
            return yScales[metric](metric === 'Reward' ? -d : d);
        });

    // Track selected models in a Set instead of a single variable
    const selectedModels = new Set();
    const defaultOpacity = 0.8;
    const fadeOpacity = 0.2;
    const highlightOpacity = 1;
    const defaultStrokeWidth = 3;
    const highlightStrokeWidth = 4;

    // Add tooltip div
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid #999")
        .style("border-radius", "3px")
        .style("padding", "6px")
        .style("font-size", "12px")
        .style("font-family", "Times New Roman")
        .style("pointer-events", "none")
        .style("box-shadow", "0 1px 4px rgba(0,0,0,0.2)");

    // Axis hover indicators for showing data points on each axis
    const axisHoverGroups = {};
    metrics.forEach(metric => {
        axisHoverGroups[metric] = svg.append('g')
            .attr('class', 'axis-hover-indicators')
            .style('opacity', 0);
    });

    // Updated highlight function to handle multiple selections
    const updateVisibility = () => {
        // If no models are selected, show all models
        const hasSelections = selectedModels.size > 0;
        
        svg.selectAll('.model-path')
            .style('opacity', function() {
                const pathModel = d3.select(this).attr('data-model');
                if (!hasSelections) return defaultOpacity;
                return selectedModels.has(pathModel) ? highlightOpacity : fadeOpacity;
            })
            .style('stroke-width', function() {
                const pathModel = d3.select(this).attr('data-model');
                return selectedModels.has(pathModel) ? highlightStrokeWidth : defaultStrokeWidth;
            });

        // Update point markers
        svg.selectAll('.model-point')
            .style('opacity', function() {
                const pointModel = d3.select(this).attr('data-model');
                if (!hasSelections) return defaultOpacity;
                return selectedModels.has(pointModel) ? highlightOpacity : fadeOpacity;
            });

        // Update legend
        svg.selectAll('.legend-item')
            .each(function() {
                const legendModel = d3.select(this).attr('data-model');
                const isSelected = selectedModels.has(legendModel);
                
                d3.select(this).select('rect.legend-background')
                    .style('stroke', isSelected ? '#333' : 'none')
                    .style('stroke-width', isSelected ? 2 : 0);
                
                d3.select(this)
                    .style('opacity', !hasSelections || isSelected ? 1 : fadeOpacity);
            });
    };

    // Function to show data points on axis when hovering - modify to show values for rectangles
    const showAxisIndicators = (metric, modelName) => {
        // Clear any existing indicators
        axisHoverGroups[metric].selectAll('*').remove();
        
        // Show indicators for the hovered model or all selected models
        const modelsToShow = selectedModels.size > 0 ? 
            Array.from(selectedModels) : 
            (modelName ? [modelName] : models); // Show all models if none specified
            
        modelsToShow.forEach(model => {
            const modelIndex = models.indexOf(model);
            const metricIndex = metrics.indexOf(metric);
            const value = data[metricIndex][modelIndex];
            const displayValue = metric === 'Reward' ? -value : value;
            
            // Format the text value
            const textValue = displayValue.toFixed(2);
            
            // Add horizontal line to indicate position on axis
            axisHoverGroups[metric].append('line')
                .attr('x1', xScale(metric) - 5)
                .attr('x2', xScale(metric) - 1)
                .attr('y1', yScales[metric](displayValue))
                .attr('y2', yScales[metric](displayValue))
                .attr('stroke', modelColors[model])
                .attr('stroke-width', 2);
            
            // Determine positioning based on metric
            let rectX, textAnchor, adjustedTextX;
            
            // Calculate text width for a better fitting background rectangle
            const textWidth = textValue.length * 6.5; // Approximate width per character
            const rectWidth = textWidth + 12; // Add padding
            const rectHeight = 18; // Fixed height with some padding
            
            if (metric === 'Throughput' || metric === 'Reward') {
                // For Throughput and Reward, position text boxes to the LEFT of the axis
                rectX = xScale(metric) - rectWidth - 5;
                textAnchor = 'end';
                adjustedTextX = rectX + rectWidth - 6; // Position text near right edge of box
            } else {
                // For Queue and Delay, keep positioning to the right of the axis
                rectX = xScale(metric) + 5;
                textAnchor = 'start';
                adjustedTextX = rectX + 6; // Position text near left edge of box
            }
            
            // Add text value with white background
            axisHoverGroups[metric].append('rect')
                .attr('x', rectX)
                .attr('y', yScales[metric](displayValue) - rectHeight/2)
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('fill', 'white')
                .attr('stroke', '#333')
                .attr('stroke-width', 1)
                .attr('rx', 3);

            axisHoverGroups[metric].append('text')
                .attr('x', adjustedTextX)
                .attr('y', yScales[metric](displayValue))
                .attr('text-anchor', textAnchor)
                .attr('dominant-baseline', 'middle')
                .attr('fill', 'black')
                .attr('font-size', '10px')
                .attr('font-weight', 'bold')
                .text(textValue);
        });
        
        // Show the indicator group
        axisHoverGroups[metric].style('opacity', 1);
    };
    
    const hideAxisIndicators = (metric) => {
        axisHoverGroups[metric].style('opacity', 0);
    };

    // Draw lines for each model with interactions FIRST
    models.forEach((model, modelIndex) => {
        const modelData = metrics.map((_, i) => data[i][modelIndex]);

        // Draw the smoothed path with interaction attributes
        svg.append('path')
            .datum(modelData)
            .attr('d', line)
            .attr('stroke', modelColors[model])
            .attr('stroke-width', defaultStrokeWidth)
            .attr('fill', 'none')
            .attr('opacity', defaultOpacity)
            .attr('data-model', model)
            .attr('class', 'model-path')
            .style('cursor', 'pointer')
            .lower(); // Force lines to be drawn below other elements
    });

    // THEN add dots (after lines) to ensure they appear on top
    models.forEach((model, modelIndex) => {
        metrics.forEach((metric, metricIndex) => {
            const value = data[metricIndex][modelIndex];
            const displayValue = metric === 'Reward' ? -value : value;
            
            const pointShape = svg.append('g')
                .attr('class', 'model-point')
                .attr('data-model', model)
                .attr('data-metric', metric)
                .style('cursor', 'pointer');

            // Different shapes for different models with enhanced white borders
            switch(modelIndex) {
                case 0: // MADDPG - circle
                    pointShape.append('circle')
                        .attr('cx', xScale(metric))
                        .attr('cy', yScales[metric](displayValue))
                        .attr('r', 5)
                        .attr('fill', modelColors[model])
                        .attr('stroke', '#fff')
                        .attr('stroke-width', 2); // Increased stroke width for better visibility
                    break;
                case 1: // DQN - square
                    pointShape.append('rect')
                        .attr('x', xScale(metric) - 5)
                        .attr('y', yScales[metric](displayValue) - 5)
                        .attr('width', 10)
                        .attr('height', 10)
                        .attr('fill', modelColors[model])
                        .attr('stroke', '#fff')
                        .attr('stroke-width', 2);
                    break;
                case 2: // Colight - triangle
                    pointShape.append('path')
                        .attr('d', d3.symbol().type(d3.symbolTriangle).size(80))
                        .attr('transform', `translate(${xScale(metric)},${yScales[metric](displayValue)})`)
                        .attr('fill', modelColors[model])
                        .attr('stroke', '#fff')
                        .attr('stroke-width', 2);
                    break;
            }

            pointShape
                .on('mouseover', function(event) {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltip.html(`${model}<br/>${metric}: <b style="color: black">${displayValue.toFixed(2)}</b>`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 28) + "px");
                    
                    showAxisIndicators(metric, model);
                })
                .on('mouseout', function() {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                    
                    hideAxisIndicators(metric);
                });
        });
    });

    // Create interactive areas for each axis to show data on hover
    metrics.forEach(metric => {
        svg.append('rect')
            .attr('x', xScale(metric) - 20)
            .attr('y', margin.top)
            .attr('width', 40)
            .attr('height', height - margin.top - margin.bottom)
            .attr('fill', 'transparent')
            .style('cursor', 'crosshair')
            .on('mouseover', function() {
                // Show all models' data points when hovering over the axis area
                showAxisIndicators(metric);
            })
            .on('mouseout', function() {
                hideAxisIndicators(metric);
            });
    });

    // Add interactive legend
    const legend = svg.append('g')
        .attr('transform', `translate(${width + margin.left + 10}, ${margin.top})`);

    models.forEach((model, i) => {
        const legendItem = legend.append('g')
            .attr('class', 'legend-item')
            .attr('data-model', model)
            .attr('transform', `translate(0, ${i * 24})`)
            .style('cursor', 'pointer');

        // Add background rectangle for selection indication
        legendItem.append('rect')
            .attr('class', 'legend-background')
            .attr('x', -2)
            .attr('y', -12)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', modelColors[model])
            .attr('opacity', 0.3)
            .attr('rx', 2)
            .style('stroke', 'none');

        // Add different shapes to legend
        switch(i) {
            case 0: // MADDPG - circle
                legendItem.append('circle')
                    .attr('cx', 8)
                    .attr('cy', 0)
                    .attr('r', 5)
                    .attr('fill', modelColors[model])
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 1);
                break;
            case 1: // DQN - square
                legendItem.append('rect')
                    .attr('x', 3)
                    .attr('y', -5)
                    .attr('width', 10)
                    .attr('height', 10)
                    .attr('fill', modelColors[model])
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 1);
                break;
            case 2: // Colight - triangle
                legendItem.append('path')
                    .attr('d', d3.symbol().type(d3.symbolTriangle).size(80))
                    .attr('transform', 'translate(8,0)')
                    .attr('fill', modelColors[model])
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 1);
                break;
        }

        legendItem.append('text')
            .attr('x', 24)
            .attr('y', 4)
            .text(model)
            .style('font-family', 'Times New Roman')
            .style('font-size', '13px');
            
        // Add toggle selection on click
        legendItem.on('click', function() {
            // Toggle selection
            if (selectedModels.has(model)) {
                selectedModels.delete(model);
            } else {
                selectedModels.add(model);
            }
            
            // Update visibility
            updateVisibility();
        });
        
        // Add hover behavior to highlight without changing selection
        legendItem.on('mouseover', function() {
            // Temporarily highlight this model
            if (selectedModels.size === 0) {
                svg.selectAll('.model-path, .model-point')
                    .filter(function() {
                        return d3.select(this).attr('data-model') !== model;
                    })
                    .style('opacity', fadeOpacity);
                
                svg.selectAll('.model-path')
                    .filter(function() {
                        return d3.select(this).attr('data-model') === model;
                    })
                    .style('stroke-width', highlightStrokeWidth);
            }
        }).on('mouseout', function() {
            // Reset to selection state
            if (selectedModels.size === 0) {
                svg.selectAll('.model-path, .model-point')
                    .style('opacity', defaultOpacity);
                
                svg.selectAll('.model-path')
                    .style('stroke-width', defaultStrokeWidth);
            }
        });
    });

    // Add click handlers for paths and points to toggle selection
    svg.selectAll('.model-path, .model-point')
        .on('click', function() {
            const modelName = d3.select(this).attr('data-model');
            
            // Toggle selection
            if (selectedModels.has(modelName)) {
                selectedModels.delete(modelName);
            } else {
                selectedModels.add(modelName);
            }
            
            // Update visibility
            updateVisibility();
        });
};

DrawComparison.prototype.clearComparison = function () {
    this.svg.selectAll("*").remove();
};


export default DrawComparison