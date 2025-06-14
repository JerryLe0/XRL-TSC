/* global d3 $ */
import pipeService from '../../service/pipeService'
import globalConfig from '../../service/globalConfig'

let DrawLineUp = function (id) {	
	this.id = id
    this.svgWidth = $('#' + id).width()
    this.svgHeight = $('#' + id).height()

    this.svg = d3.select('#' + id).append('svg')
        .attr('class', 'statisticSvg')
        .attr('width', this.svgWidth)
		.attr('height', this.svgHeight)

    var margin = {top: 35, right: 10, bottom: 10, left: 50};
    this.margin = margin;
	
	this.graphContainer = this.svg.append('g')
		.attr('class', 'g_main')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

}

DrawLineUp.prototype.layout = function (data) {
    console.log('data in lineup',data)
    const rewardBias = Math.abs(d3.min(data.rank_data,d => d.mean_episode_reward))
    const data_rank = data.rank_data.map(d => ({
        'intersection': d.intersection,
        'mean_episode_reward': d.mean_episode_reward + rewardBias,   //lineup要求所有指标为正，所以
        'mean_delay': d.mean_delay,
        'mean_queue': d.mean_queue,
    }))
    const data_dist = data.hist_data

    const innerHeight = this.svgHeight - this.margin.top - this.margin.bottom;
    const innerWidth = this.svgWidth - this.margin.left - this.margin.right;

    const svg = this.svg;
    const gRank = this.graphContainer.append("g").attr("class","g_rank");

    // 绘制rank
    const opacity = 0.6;
    const metrics = ['mean_episode_reward', 'mean_delay', 'mean_queue'];
    const series = d3.stack()
        .keys(metrics)
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone)(data_rank);
    
    console.log("series",series)
    console.log("series-min",d3.min(series, function(d) { return d3.min(d, function(d) { return d[0]; }); }))
    const xScaleRank = d3.scaleLinear()
        .domain([d3.min(series, function(d) { return d3.min(d, function(d) { return d[0]; }); }), d3.max(series, function(d) { return d3.max(d, function(d) { return d[1]; }); })])
        .range([0, innerWidth]);


    const yScaleRank = d3.scaleBand()
        .domain(data_rank.map(d => d.intersection))
        .range([70, innerHeight]);

    const yAxis = d3.axisLeft(yScaleRank)
        .tickSize(2)
        // .tickFormat(yTickFormat)
        
    const yAxisG = gRank.append('g').call(yAxis);

    //堆叠柱状图
    gRank.selectAll('.series')
        .data(series)
        .enter().append('g')
        .attr('class','series')
        .attr('fill', d=>globalConfig.getMetricColor(d.key))
        .attr('fill-opacity',opacity)
        .selectAll('rect')
        .data(data => data)
        .enter()
        .append('rect')
        .attr('x', d => xScaleRank(d[0]))
        .attr('y', d => yScaleRank(d.data.intersection))
        .attr('width', d=>Math.abs(xScaleRank(d[0])-xScaleRank(d[1])))
        .attr('height', yScaleRank.bandwidth())
        .attr('stroke', 'white')
        .attr('stroke-width',1);

    // 交互
    function hover() {
        if (!d3.select(this).classed("selected")) {
            d3.select(this).attr("fill-opacity", 0.5);
        }
    }

    const out = function() {
        if (!d3.select(this).classed("selected")) {
            d3.select(this).attr("fill-opacity", 0)
        }
    }

    function click() {
        // d3.select(this).each(episode => pipeService.emitSelectEpisode(episode));
    }

    const interactionG = gRank.append('g').attr('id','overview-interaction');
    interactionG.selectAll('rect.interaction').data(data_rank.map(d => d.intersection))
        .join('rect')
        .attr('class','interaction')
        .attr('x', 0)
        .attr('y', episode => yScaleRank(episode))
        .attr('width', innerWidth)
        .attr('height', yScaleRank.bandwidth())
        .attr('stroke', 'coral')
        .attr('stroke-width', 2)
        .attr('fill', 'coral')
        .attr('stroke-opacity', 0)
        .attr('fill-opacity', 0)
        .on('mouseover',hover)
        // .on('click',click)
        .on('mouseout',out);

    // 绘制直方图
    const titles = ['Reward', 'Delay', 'Queue']

    const histMargin = 6;
    const gDist = svg.select('.g_main').append("g").attr("class","g_dist")
        .selectAll('g').data(metrics).join('g')
        .attr('transform', (_,i) => `translate(${innerWidth*i/3 + i*histMargin - 10},0)`);

    const distXMax = innerWidth/3;

    function drawHist(metric,i) {
        const histData = data_dist[metric];

        const xScaleDist = d3.scaleBand()
            .domain(histData.map(d => d.x))
            .range([0, distXMax]);

        const yScaleDist = d3.scaleLinear()
            .domain([0, d3.max(histData, d => d.cnt)])
            .range([68, 0]);

        let g = d3.select(this);

        g.append('rect')
            .attr('class','bg-rect')
            .attr('x',-histMargin/2)
            .attr('width',distXMax + histMargin/2)
            .attr('height',68)
            .attr('fill','#d5e5f0')
            .attr('fill-opacity',0.5);
            // .attr('stroke','b')

        // 频次分布直方图
        g.selectAll('rect.dist').data(histData)
            .join('rect')
            .attr('class','dist')
            .attr('x', d => xScaleDist(d.x))
            .attr('y', d => yScaleDist(d.cnt))
            .attr('width', xScaleDist.bandwidth())
            .attr('height', d => (68- yScaleDist(d.cnt)))
            .attr('fill', globalConfig.getMetricColor(metric));

        g.append('text')
            .attr('transform',`translate(${distXMax/2},-10)`)
            .attr('class','title')
            .attr('text-anchor','middle')
            .text(titles[i])
            .style('font-family', 'Times New Roman')
            .style('font-weight', '600')
            .style('font-size', '16px');

        // 交互
        const hover = function() {
            d3.select(this).select('.bg-rect')
                .attr('fill-opacity',1);
        }

        const out = function() {
            d3.select(this).select('.bg-rect')
                .attr('fill-opacity',0.5);
        }

        g
        // .on('click',_ => pipeService.emitSelectFeature(metric))
        .on('mouseover',hover)
        .on('mouseout',out);

    }

    gDist.each(drawHist);

}

DrawLineUp.prototype.clearLineUp = function (){
    this.svg.selectAll("rect").remove();
    this.svg.selectAll("circle").remove();
    this.svg.selectAll("line").remove();
    this.svg.selectAll("text").remove();
    //this.svg.selectAll(".g_main").remove();
    this.svg.selectAll("path").remove();
    
};

export default DrawLineUp