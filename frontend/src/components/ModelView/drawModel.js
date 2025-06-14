/* global d3 $ */
import 'd3'
var DrawModel= function (id) {	
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


DrawModel.prototype.Model = function (model_name, data) {
    const centerX = (this.svgWidth / 2) - 20;
    const startY = 40;
    const lineHeight = 28;
    
    this.clear();
    
    const data_rank = data.map(d => ({
        'model_name': d.model_name,
        'mean_episode_reward': Number(d.mean_episode_reward).toFixed(2),
        'mean_delay': Number(d.mean_delay).toFixed(2),
        'mean_queue': Number(d.mean_queue).toFixed(2),
        'mean_throughput': Number(d.mean_throughput).toFixed(2)
    }));

    const svg = this.svg;
    const model = data_rank.find(d => d.model_name === model_name);

    if (model) {
        // Title - centered
        svg.append("text")
            .attr("x", this.svgWidth / 2)
            .attr("y", startY)
            .text(model_name + " Performance")
            .style("font-size", "18px")
            .style("font-family", "Times New Roman")
            .style("font-weight", "bold")
            .style("text-anchor", "middle");

        const metricsWidth = 90;
        const valueWidth = 70;
        const unitWidth = 40;
        const totalWidth = metricsWidth + valueWidth + unitWidth;
        const startX = centerX - (totalWidth / 2);

        // Calculate total content height and adjust vertical positioning
        const totalRows = 5; // header + 4 metrics rows
        const contentHeight = totalRows * lineHeight;
        const boxHeight = contentHeight + 40; // Add padding
        const verticalStart = startY + 25; // Adjusted starting position

        // Add background rectangle
        svg.append("rect")
            .attr("x", startX + 10)
            .attr("y", startY + 10)
            .attr("width", totalWidth + 20)
            .attr("height", boxHeight - 45)
            .attr("fill", "#f8f8f8")
            .attr("rx", 5);

        // Column headers - adjusted vertical position
        const headers = ["Metrics", "Value", "Unit"];
        headers.forEach((header, i) => {
            svg.append("text")
                .attr("x", i === 0 ? startX + metricsWidth :
                       i === 1 ? startX + metricsWidth + (valueWidth / 2) :
                       startX + metricsWidth + valueWidth + (unitWidth / 2))
                .attr("y", verticalStart)
                .text(header)
                .style("font-size", "14px")
                .style("font-family", "Times New Roman")
                .style("font-weight", "bold")
                .style("text-anchor", i === 0 ? "end" : "middle");
        });

        // Metrics data with adjusted vertical spacing
        const metrics = [
            { label: "Queue", value: model.mean_queue, unit: "veh" },
            { label: "Delay", value: model.mean_delay, unit: "s" },
            { label: "Throughput", value: model.mean_throughput, unit: "veh" },
            { label: "Reward", value: model.mean_episode_reward, unit: "" }
        ];

        metrics.forEach((metric, i) => {
            const rowY = verticalStart + ((i + 1) * lineHeight);

            // Metrics label
            svg.append("text")
                .attr("x", startX + metricsWidth)
                .attr("y", rowY)
                .text(metric.label)
                .style("font-size", "14px")
                .style("font-family", "Times New Roman")
                .style("text-anchor", "end");

            // Value
            svg.append("text")
                .attr("x", startX + metricsWidth + (valueWidth / 2))
                .attr("y", rowY)
                .text(metric.value)
                .style("font-size", "14px")
                .style("font-family", "Times New Roman")
                .style("text-anchor", "middle");

            // Unit
            svg.append("text")
                .attr("x", startX + metricsWidth + valueWidth + (unitWidth / 2))
                .attr("y", rowY)
                .text(metric.unit)
                .style("font-size", "14px")
                .style("font-family", "Times New Roman")
                .style("fill", "#666666")
                .style("text-anchor", "middle");
        });
    }
};

// Make layout function identical to Model function except for model selection
DrawModel.prototype.layout = function (data) {
    // Use the same code as Model function but with default MADDPG model
    const model_name = 'MADDPG';
    this.Model(model_name, data);
};

DrawModel.prototype.clear = function (){
    this.svg.selectAll("rect").remove();
    this.svg.selectAll("circle").remove();
    this.svg.selectAll("line").remove();
    this.svg.selectAll("path").remove();
    this.svg.selectAll("text").remove();
    
};


export default DrawModel