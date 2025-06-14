/* global d3 $ */
import 'd3'
var DrawQueue= function (id) {	
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


DrawQueue.prototype.CrossRoads = function (Jdata,startstep,endstep) {//给定数据
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.svgWidth/2},${this.svgHeight/2})`);
    // 颜色变换
    const getQueueColor = (value) => {
        if (value <= 3) return '#69b3a2';
        if (value <= 6) return 'yellow';
        return 'red';
    };
    /*
    g.append('circle')
    .attr('cx', -15).attr('cy', 0).attr('r', '5').attr('fill', 'red');
    g.append('circle')
    .attr('cx', 0).attr('cy', 0).attr('r', '5').attr('fill', 'yellow');
    g.append('circle')
    .attr('cx', 15).attr('cy', 0).attr('r', '5').attr('fill', 'green');
    g.append('line')
    .attr('x1', -15).attr('y1', 7.5).attr('x2', 15).attr('y2', 7.5).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -15).attr('y1', -7.5).attr('x2', 15).attr('y2', -7.5).attr("stroke", "black").attr("stroke-width", "1px");
    

    var arc_0 = d3.arc()
    .innerRadius(7)
    .outerRadius(8)
    .startAngle(0)
    .endAngle(Math.PI);
    g.append("path")
    .attr("d", arc_0)
    .attr("transform", "translate(15,0)");
    var arc_1 = d3.arc()
        .innerRadius(7)
        .outerRadius(8)
        .startAngle(0)
        .endAngle(-Math.PI);
    g.append("path")
    .attr("d", arc_1)
    .attr("transform", "translate(-15,0)");*/
    
    //东北角
    g.append('line')
    .attr('x1', 60).attr('y1', -96).attr('x2', 60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', -96).attr('x2', 40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 20).attr('y1', -96).attr('x2', 20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', 96).attr('y1', -60).attr('x2', 168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', -40).attr('x2', 168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 96).attr('y1', -20).attr('x2', 168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px");
    
    var arc1 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI)
        .endAngle(Math.PI/2*3);
    g.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(96,-96)");

    //西北角
    g.append('line')
    .attr('x1', -60).attr('y1', -96).attr('x2', -60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', -96).attr('x2', -40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -20).attr('y1', -96).attr('x2', -20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', -96).attr('y1', -60).attr('x2', -168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', -40).attr('x2', -168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -96).attr('y1', -20).attr('x2', -168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc2 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI);
    g.append("path")
    .attr("d", arc2)
    .attr("transform", "translate(-96,-96)");

    //西南角
    g.append('line')
    .attr('x1', -60).attr('y1', 96).attr('x2', -60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', 96).attr('x2', -40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -20).attr('y1', 96).attr('x2', -20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', -96).attr('y1', 60).attr('x2', -168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', 40).attr('x2', -168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -96).attr('y1', 20).attr('x2', -168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px");
    var arc3 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(0)
        .endAngle(Math.PI/2);
    g.append("path")
    .attr("d", arc3)
    .attr("transform", "translate(-96,96)");

    //东南角
    g.append('line')
    .attr('x1', 60).attr('y1', 96).attr('x2', 60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', 96).attr('x2', 40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 20).attr('y1', 96).attr('x2', 20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', 96).attr('y1', 60).attr('x2', 168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', 40).attr('x2', 168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 96).attr('y1', 20).attr('x2', 168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc4 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(-Math.PI/2)
        .endAngle(0);
    g.append("path")
    .attr("d", arc4)
    .attr("transform", "translate(96,96)");
    //人行横道线
    //东
    g.append('line')
    .attr('x1', 72).attr('y1', -54).attr('x2', 92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -48).attr('x2', 92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -42).attr('x2', 92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -36).attr('x2', 92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -30).attr('x2', 92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -24).attr('x2', 92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -18).attr('x2', 92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -12).attr('x2', 92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -6).attr('x2', 92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 0).attr('x2', 92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 54).attr('x2', 92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 48).attr('x2', 92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 42).attr('x2', 92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 36).attr('x2', 92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 30).attr('x2', 92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 24).attr('x2', 92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 18).attr('x2', 92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 12).attr('x2', 92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 6).attr('x2', 92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //西
    g.append('line')
    .attr('x1', -72).attr('y1', -54).attr('x2', -92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -48).attr('x2', -92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -42).attr('x2', -92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -36).attr('x2', -92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -30).attr('x2', -92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -24).attr('x2', -92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -18).attr('x2', -92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -12).attr('x2', -92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -6).attr('x2', -92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 0).attr('x2', -92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 54).attr('x2', -92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 48).attr('x2', -92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 42).attr('x2', -92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 36).attr('x2', -92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 30).attr('x2', -92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 24).attr('x2', -92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 18).attr('x2', -92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 12).attr('x2', -92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 6).attr('x2', -92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //南
    g.append('line')
    .attr('x1', -54).attr('y1', 72).attr('x2', -54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', 72).attr('x2', -48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', 72).attr('x2', -42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', 72).attr('x2', -36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', 72).attr('x2', -30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', 72).attr('x2', -24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', 72).attr('x2', -18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', 72).attr('x2', -12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', 72).attr('x2', -6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', 72).attr('x2', 0).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', 72).attr('x2', 54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', 72).attr('x2', 48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', 72).attr('x2', 42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', 72).attr('x2', 36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', 72).attr('x2', 30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', 72).attr('x2', 24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', 72).attr('x2', 18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', 72).attr('x2', 12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', 72).attr('x2', 6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //北
    g.append('line')
    .attr('x1', -54).attr('y1', -72).attr('x2', -54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', -72).attr('x2', -48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', -72).attr('x2', -42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', -72).attr('x2', -36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', -72).attr('x2', -30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', -72).attr('x2', -24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', -72).attr('x2', -18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', -72).attr('x2', -12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', -72).attr('x2', -6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', -72).attr('x2', 0).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', -72).attr('x2', 54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', -72).attr('x2', 48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', -72).attr('x2', 42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', -72).attr('x2', 36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', -72).attr('x2', 30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', -72).attr('x2', 24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', -72).attr('x2', 18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', -72).attr('x2', 12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', -72).attr('x2', 6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //双实线
    //东
    g.append('line')
    .attr('x1', 96).attr('y1', 1.2).attr('x2', 168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', 96).attr('y1', -1.2).attr('x2', 168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //北
    g.append('line')
    .attr('x1', 1.2).attr('y1', -96).attr('x2', 1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', -96).attr('x2', -1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //西
    g.append('line')
    .attr('x1', -96).attr('y1', 1.2).attr('x2', -168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -96).attr('y1', -1.2).attr('x2', -168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //南
    g.append('line')
    .attr('x1', 1.2).attr('y1', 96).attr('x2', 1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', 96).attr('x2', -1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");


    //各排队车辆数变化

    //东进口初始化
    const data_E = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_E = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+96},${this.svgHeight/2-60})`);
    const width_E = 60;
    const height_E = 60;

    const xScale_E = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_E]);

    const yScale_E = d3.scaleBand()
    .domain(data_E.map(d => d.name))
    .range([0, height_E])
    .padding(0.1);

    const rects_E = svg_E.selectAll('rect').data(data_E).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_E(d.name)).attr('height', yScale_E.bandwidth());
/*
    const texts_E = svg_E.selectAll('.datatext').data(data_E).join('text')
    .attr('class', 'datatext').text(d => d.value)
    .attr('y', d => yScale_E(d.name) + 6 + yScale_E.bandwidth() / 2);
*/
    //西进口初始化
    const data_W = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_W = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-96},${this.svgHeight/2+60}), rotate(180)`);
    const width_W = 60;
    const height_W = 60;
    const xScale_W = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_W]);

    const yScale_W = d3.scaleBand()
    .domain(data_W.map(d => d.name))
    .range([0, height_W]).padding(0.1);

    const rects_W = svg_W.selectAll('rect').data(data_W).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_W(d.name)).attr('height', yScale_W.bandwidth());
/*
    const texts_W = svg_W.selectAll('.datatext').data(data_W).join('text')
    .attr('class', 'datatext').text(d => d.value)
    .attr('y', d => yScale_E(d.name) + 6 + yScale_W.bandwidth() / 2);
*/
    //南进口初始化
    const data_S = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_S = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+60},${this.svgHeight/2+96}), rotate(90)`);
    const width_S = 60;
    const height_S = 60;

    const xScale_S = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_S]);

    const yScale_S = d3.scaleBand()
    .domain(data_S.map(d => d.name))
    .range([0, height_S]).padding(0.1);
     
   
    const rects_S = svg_S.selectAll('rect').data(data_S).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_S(d.name)).attr('height', yScale_S.bandwidth());
/*
    const texts_S = svg_S.selectAll('.datatext').data(data_S).join('text')
    .attr('class', 'datatext').text(d => d.value)
    .attr('y', d => yScale_S(d.name) + 6 + yScale_S.bandwidth() / 2);
*/
    //北进口初始化
    const data_N = [{name: 'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_N = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-60},${this.svgHeight/2-96}), rotate(270)`);
    const width_N = 60;
    const height_N = 60;
    const xScale_N = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_N]);

    const yScale_N = d3.scaleBand()
    .domain(data_N.map(d => d.name))
    .range([0, height_N])
    .padding(0.1);

    const rects_N = svg_N.selectAll('rect').data(data_N).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_N(d.name)).attr('height', yScale_N.bandwidth());

    // 决策可视化
    const svg_action_North = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_N = svg_action_North.append('circle').attr('cx', 310).attr('cy', -42).attr('r', '6').attr('fill', 'red');

    const svg_action_East = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_E = svg_action_East.append('circle').attr('cx', 400).attr('cy', -10).attr('r', '6').attr('fill', 'red');

    const svg_action_South = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_S = svg_action_South.append('circle').attr('cx', 368).attr('cy', 82).attr('r', '6').attr('fill', 'red');

    const svg_action_West = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_W = svg_action_West.append('circle').attr('cx', 276).attr('cy', 50).attr('r', '6').attr('fill', 'red');
    //console.log(Jdata);
    //console.log(Jdata[1]);
    //console.log(Jdata[1]['North_R'])
    
    
    //console.log(last_obs)
    //console.log(eachstep)
    //load data
    var last_obs = []
    for(var decide_step=startstep/10;decide_step<endstep/10;decide_step++){
        var eachstep = [
            Jdata[decide_step]['North_R'],Jdata[decide_step]['North_S'],Jdata[decide_step]['North_L'],
            Jdata[decide_step]['East_R'],Jdata[decide_step]['East_S'],Jdata[decide_step]['East_L'],
            Jdata[decide_step]['South_R'],Jdata[decide_step]['South_S'],Jdata[decide_step]['South_L'],
            Jdata[decide_step]['West_R'],Jdata[decide_step]['West_S'],Jdata[decide_step]['West_L']]
        last_obs[decide_step-startstep/10]=eachstep
    }
    //console.log(last_obs[0][1])

        var j=-1;
        var k=-1;
        var agent_action = 0;
        //新增动作统计表格
        g.append('text')
        .attr('x', -330).attr('y', -125).text('Action & Frequency').style("font-family", "Times New Roman").style("font-weight", "600");
        g.append('text')
        .attr('x', -305).attr('y', -105).text('of the Agent').style("font-family", "Times New Roman").style("font-weight", "600");

        g.append('line')
        .attr('x1', -220).attr('y1', -100).attr('x2', -320).attr('y2', -100).attr("stroke", "black").attr("stroke-width", "2.5px");
        g.append('text')
        .attr('x', -310).attr('y', -85).text('Act.').style("font-family", "Times New Roman");
        
        //a_0
        var a_0 = g.append('text')
        .attr('x', -300).attr('y', -65).text('a').style("font-family", "Times New Roman");//.style("font-style", "italic");
        a_0.append('tspan')
        .text('0') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a0 = g.append('text').attr('x', -250).attr('y', -65).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_1
        var a_1 = g.append('text')
        .attr('x', -300).attr('y', -45).text('a').style("font-family", "Times New Roman");
        a_1.append('tspan')
        .text('1') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a1 = g.append('text').attr('x', -250).attr('y', -45).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_2
        var a_2 = g.append('text')
        .attr('x', -300).attr('y', -25).text('a').style("font-family", "Times New Roman");
        a_2.append('tspan')
        .text('2') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a2 = g.append('text').attr('x', -250).attr('y', -25).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_3
        var a_3 = g.append('text')
        .attr('x', -300).attr('y', -5).text('a').style("font-family", "Times New Roman");
        a_3.append('tspan')
        .text('3') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a3 = g.append('text').attr('x', -250).attr('y', -5).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_4
        var a_4 = g.append('text')
        .attr('x', -300).attr('y', 15).text('a').style("font-family", "Times New Roman");
        a_4.append('tspan')
        .text('4') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a4 = g.append('text').attr('x', -250).attr('y', 15).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_5
        var a_5 = g.append('text')
        .attr('x', -300).attr('y', 35).text('a').style("font-family", "Times New Roman");
        a_5.append('tspan')
        .text('5') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a5 = g.append('text').attr('x', -250).attr('y', 35).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_6
        var a_6 = g.append('text')
        .attr('x', -300).attr('y', 55).text('a').style("font-family", "Times New Roman");
        a_6.append('tspan')
        .text('6') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a6 = g.append('text').attr('x', -250).attr('y', 55).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_7
        var a_7 = g.append('text')
        .attr('x', -300).attr('y', 75).text('a').style("font-family", "Times New Roman");
        a_7.append('tspan')
        .text('7') // 角标内容
        .attr('x', function() {
          var bbox = this.parentNode.getBBox(); // 获取文本的bbox
          return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
          var bbox = this.parentNode.getBBox();
          return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a7 = g.append('text').attr('x', -250).attr('y', 75).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
        g.append('text')
        .attr('x', -260).attr('y', -85).text('Freq.').style("font-family", "Times New Roman");
        g.append('line')
        .attr('x1', -220).attr('y1', -80).attr('x2', -320).attr('y2', -80).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', -60).attr('x2', -320).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', -40).attr('x2', -320).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', -20).attr('x2', -320).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 0).attr('x2', -320).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 20).attr('x2', -320).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 40).attr('x2', -320).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 60).attr('x2', -320).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 80).attr('x2', -320).attr('y2', 80).attr("stroke", "black").attr("stroke-width", "1px");


        //新增文字提醒
        g.append('text').attr('x', 117).attr('y', -170).text('Current Interval:').text('Current Interval:').style("font-family", "Times New Roman").style("font-weight", '600');
        const step = g.append('text').attr('x', 230).attr('y', -170).attr("font-size",30).style("font-family","Times New Roman").text('0');
        g.append('text').attr('x', 130).attr('y', -150).text('Current Phase:').style("font-family", "Times New Roman").style("font-weight", '600');
        const phase = g.append('text').attr('x', 230).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('DefaultPhase');
        //var text_phase = 'North L & S';
        var cnt_phase0 = 0;
        var cnt_phase1 = 0;
        var cnt_phase2 = 0;
        var cnt_phase3 = 0;
        var cnt_phase4 = 0;
        var cnt_phase5 = 0;
        var cnt_phase6 = 0;
        var cnt_phase7 = 0;


        (async () => {
            for(var i=startstep/10;i<endstep/10;i++){
                let transition = d3.transition().duration(1200);
                step.transition(transition).text(`[${i * 10}, ${i * 10 + 10}]`);
                j=j+1;
                agent_action = Jdata[i-1]['actions(index)']
                //console.log(agent_action)
                if (agent_action==0){
                    cnt_phase0 = cnt_phase0 + 1;
                    cnt_a0.transition(transition)
                    .text(cnt_phase0);
                    // 新增文字提醒(北进口直左)
                    phase.transition(transition)
                    .text('North L & S');
                    
                    signal_N.transition(transition) 
                    .attr('fill', 'green');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==1){
                    cnt_phase1 = cnt_phase1 + 1;
                    cnt_a1.transition(transition)
                    .text(cnt_phase1)
                    // 新增文字提醒(东进口直左)
                    phase.transition(transition)
                    .text('East L & S');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'green');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==2){
                    cnt_phase2 = cnt_phase2 + 1;
                    cnt_a2.transition(transition)
                    .text(cnt_phase2)
                    // 新增文字提醒(南进口直左)
                    phase.transition(transition)
                    .text('South L & S');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'green');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==3){
                    cnt_phase3 = cnt_phase3 + 1;
                    cnt_a3.transition(transition)
                    .text(cnt_phase3)
                    // 新增文字提醒(西进口直左)
                    phase.transition(transition)
                    .text('West L & S');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                }
                // 新增相位（May 3rd）
                // 南北直行
                if (agent_action==4){
                    cnt_phase4 = cnt_phase4 + 1;
                    cnt_a4.transition(transition)
                    .text(cnt_phase4)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('N & S Stright');
                    signal_N.transition(transition) 
                    .attr('fill', 'green');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'green');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                // N & S Left
                if (agent_action==5){
                    cnt_phase5 = cnt_phase5 + 1;
                    cnt_a5.transition(transition)
                    .text(cnt_phase5)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('N & S Left');
                    signal_N.transition(transition) 
                    .attr('fill', 'green');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'green');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                // 东西直行
                if (agent_action==6){
                    cnt_phase6 = cnt_phase6 + 1;
                    cnt_a6.transition(transition)
                    .text(cnt_phase6)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('E & W Stright');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'green');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                }
                // 东西左转
                if (agent_action==7){
                    cnt_phase7 = cnt_phase7 + 1;
                    cnt_a7.transition(transition)
                    .text(cnt_phase7)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('E & W Left');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'green');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                }

                //北
                data_N.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%12], 8);
                    });
                   
                    rects_N.transition(transition) 
                    .attr('width', d => xScale_N(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //东
                data_E.forEach(d => 
                {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%12], 8);
                });

                    rects_E.transition(transition) 
                    .attr('width', d => xScale_E(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //南
                data_S.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%12], 8);
                });

                    rects_S.transition(transition)
                    .attr('width', d => xScale_S(d.value))
                     .attr('fill', d => getQueueColor(d.value));
               
                //西
                data_W.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%12], 8);
                });
                   
                    rects_W.transition(transition) 
                    .attr('width', d => xScale_W(d.value))
                     .attr('fill', d => getQueueColor(d.value));
                

                await transition.end();
                }
            })()

};

//三岔路口J22
DrawQueue.prototype.TriJ22 = function (Jdata,startstep,endstep) {//给定数据
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.svgWidth/2},${this.svgHeight/2})`);
    // 颜色变换
    const getQueueColor = (value) => {
        if (value <= 3) return '#69b3a2';
        if (value <= 6) return 'yellow';
        return 'red';
    };

    //东北角
    g.append('line')
    .attr('x1', 60).attr('y1', -96).attr('x2', 60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', -96).attr('x2', 40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 20).attr('y1', -96).attr('x2', 20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', 96).attr('y1', -60).attr('x2', 168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', -40).attr('x2', 168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 96).attr('y1', -20).attr('x2', 168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px");
    
    var arc1 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI)
        .endAngle(Math.PI/2*3);
    g.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(96,-96)");

    //西北角
    g.append('line')
    .attr('x1', -60).attr('y1', -96).attr('x2', -60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', -96).attr('x2', -40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -20).attr('y1', -96).attr('x2', -20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', -96).attr('y1', -60).attr('x2', -168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', -40).attr('x2', -168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -96).attr('y1', -20).attr('x2', -168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc2 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI);
    g.append("path")
    .attr("d", arc2)
    .attr("transform", "translate(-96,-96)");

    //西南角
    g.append('line')
    .attr('x1', -96).attr('y1', 60).attr('x2', -168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', 40).attr('x2', -168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -96).attr('y1', 20).attr('x2', -168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px");


    //东南角
    g.append('line')
    .attr('x1', 96).attr('y1', 60).attr('x2', 168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', 40).attr('x2', 168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 96).attr('y1', 20).attr('x2', 168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线


    //人行横道线
    //东
    g.append('line')
    .attr('x1', 72).attr('y1', -54).attr('x2', 92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -48).attr('x2', 92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -42).attr('x2', 92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -36).attr('x2', 92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -30).attr('x2', 92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -24).attr('x2', 92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -18).attr('x2', 92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -12).attr('x2', 92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -6).attr('x2', 92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 0).attr('x2', 92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 54).attr('x2', 92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 48).attr('x2', 92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 42).attr('x2', 92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 36).attr('x2', 92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 30).attr('x2', 92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 24).attr('x2', 92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 18).attr('x2', 92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 12).attr('x2', 92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 6).attr('x2', 92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //西
    g.append('line')
    .attr('x1', -72).attr('y1', -54).attr('x2', -92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -48).attr('x2', -92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -42).attr('x2', -92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -36).attr('x2', -92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -30).attr('x2', -92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -24).attr('x2', -92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -18).attr('x2', -92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -12).attr('x2', -92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -6).attr('x2', -92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 0).attr('x2', -92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 54).attr('x2', -92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 48).attr('x2', -92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 42).attr('x2', -92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 36).attr('x2', -92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 30).attr('x2', -92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 24).attr('x2', -92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 18).attr('x2', -92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 12).attr('x2', -92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 6).attr('x2', -92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");


    //北
    g.append('line')
    .attr('x1', -54).attr('y1', -72).attr('x2', -54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', -72).attr('x2', -48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', -72).attr('x2', -42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', -72).attr('x2', -36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', -72).attr('x2', -30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', -72).attr('x2', -24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', -72).attr('x2', -18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', -72).attr('x2', -12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', -72).attr('x2', -6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', -72).attr('x2', 0).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', -72).attr('x2', 54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', -72).attr('x2', 48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', -72).attr('x2', 42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', -72).attr('x2', 36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', -72).attr('x2', 30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', -72).attr('x2', 24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', -72).attr('x2', 18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', -72).attr('x2', 12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', -72).attr('x2', 6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //双实线
    //东
    g.append('line')
    .attr('x1', 96).attr('y1', 1.2).attr('x2', 168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', 96).attr('y1', -1.2).attr('x2', 168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //北
    g.append('line')
    .attr('x1', 1.2).attr('y1', -96).attr('x2', 1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', -96).attr('x2', -1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //西
    g.append('line')
    .attr('x1', -96).attr('y1', 1.2).attr('x2', -168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -96).attr('y1', -1.2).attr('x2', -168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");

    //南进口实线
    g.append('line')
    .attr('x1', -96).attr('y1', 60).attr('x2', 96).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.5px");


    //各排队车辆数变化

    //东进口初始化
    const data_E = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_E = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+96},${this.svgHeight/2-60})`);
    const width_E = 60;
    const height_E = 60;

    const xScale_E = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_E]);

    const yScale_E = d3.scaleBand()
    .domain(data_E.map(d => d.name))
    .range([0, height_E])
    .padding(0.1);

    const rects_E = svg_E.selectAll('rect').data(data_E).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_E(d.name)).attr('height', yScale_E.bandwidth());

    //西进口初始化
    const data_W = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_W = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-96},${this.svgHeight/2+60}), rotate(180)`);
    const width_W = 60;
    const height_W = 60;
    const xScale_W = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_W]);

    const yScale_W = d3.scaleBand()
    .domain(data_W.map(d => d.name))
    .range([0, height_W]).padding(0.1);

    const rects_W = svg_W.selectAll('rect').data(data_W).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_W(d.name)).attr('height', yScale_W.bandwidth());

    //南进口初始化
    const data_S = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_S = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+60},${this.svgHeight/2+96}), rotate(90)`);
    const width_S = 60;
    const height_S = 60;

    const xScale_S = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_S]);

    const yScale_S = d3.scaleBand()
    .domain(data_S.map(d => d.name))
    .range([0, height_S]).padding(0.1);
     
   
    const rects_S = svg_S.selectAll('rect').data(data_S).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_S(d.name)).attr('height', yScale_S.bandwidth());

    //北进口初始化
    const data_N = [{name: 'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_N = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-60},${this.svgHeight/2-96}), rotate(270)`);
    const width_N = 60;
    const height_N = 60;
    const xScale_N = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_N]);

    const yScale_N = d3.scaleBand()
    .domain(data_N.map(d => d.name))
    .range([0, height_N])
    .padding(0.1);

    const rects_N = svg_N.selectAll('rect').data(data_N).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_N(d.name)).attr('height', yScale_N.bandwidth());

    // 决策可视化
    const svg_action_North = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_N = svg_action_North.append('circle').attr('cx', 310).attr('cy', -42).attr('r', '6').attr('fill', 'red');

    const svg_action_East = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_E = svg_action_East.append('circle').attr('cx', 400).attr('cy', -10).attr('r', '6').attr('fill', 'red');

    const svg_action_West = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_W = svg_action_West.append('circle').attr('cx', 276).attr('cy', 50).attr('r', '6').attr('fill', 'red');

    
    //load data
    var last_obs = []
    for(var decide_step=startstep/10;decide_step<endstep/10;decide_step++){
        var eachstep = [
            Jdata[decide_step]['North_R'],Jdata[decide_step]['North_S'],Jdata[decide_step]['North_L'],
            Jdata[decide_step]['East_R'],Jdata[decide_step]['East_S'],Jdata[decide_step]['East_L'],
            Jdata[decide_step]['West_R'],Jdata[decide_step]['West_S'],Jdata[decide_step]['West_L']]
        last_obs[decide_step-startstep/10]=eachstep
    }

        var j=-1;
        var k=-1;
        var agent_action = 0;
        //新增动作统计表格
        g.append('text')
        .attr('x', -330).attr('y', -65).text('Action & Frequency').style("font-family", "Times New Roman").style("font-weight", "600");
        g.append('text')
        .attr('x', -305).attr('y', -45).text('of the Agent').style("font-family", "Times New Roman").style("font-weight", "600");


        g.append('line')
        .attr('x1', -220).attr('y1', -40).attr('x2', -320).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "2.5px");
        g.append('text')
        .attr('x', -310).attr('y', -25).text('Act.').style("font-family", "Times New Roman");
        
        //a_0
        var a_0 = g.append('text')
        .attr('x', -300).attr('y', -5).text('a').style("font-family", "Times New Roman");//.style("font-style", "italic");
        a_0.append('tspan')
        .text('0') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a0 = g.append('text').attr('x', -250).attr('y', -5).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_1
        var a_1 = g.append('text')
        .attr('x', -300).attr('y', 15).text('a').style("font-family", "Times New Roman");
        a_1.append('tspan')
        .text('1') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a1 = g.append('text').attr('x', -250).attr('y', 15).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_2
        var a_2 = g.append('text')
        .attr('x', -300).attr('y', 35).text('a').style("font-family", "Times New Roman");
        a_2.append('tspan')
        .text('2') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a2 = g.append('text').attr('x', -250).attr('y', 35).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        
        g.append('text')
        .attr('x', -260).attr('y', -25).text('Freq.').style("font-family", "Times New Roman");
        g.append('line')
        .attr('x1', -220).attr('y1', -20).attr('x2', -320).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 0).attr('x2', -320).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 20).attr('x2', -320).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 40).attr('x2', -320).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "1px");
     
        
        //新增文字提醒
        g.append('text').attr('x', 117).attr('y', -170).text('Current Interval:').text('Current Interval:').style("font-family", "Times New Roman").style("font-weight", '600');
        const step = g.append('text').attr('x', 230).attr('y', -170).attr("font-size",30).style("font-family","Times New Roman").text('0');
        g.append('text').attr('x', 130).attr('y', -150).text('Current Phase:').style("font-family", "Times New Roman").style("font-weight", '600');
        const phase = g.append('text').attr('x', 230).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('Default Phase');
        //var text_phase = 'North L & S';
        var cnt_phase0 = 0;
        var cnt_phase1 = 0;
        var cnt_phase2 = 0;

        

        (async () => {
            for(var i=startstep/10;i<endstep/10;i++){
                let transition = d3.transition().duration(1200);
                step.transition(transition).text(`[${i * 10}, ${i * 10 + 10}]`);
                j=j+1;
                agent_action = Jdata[i-1]['actions(index)']
                //console.log(agent_action)
                if (agent_action==0){
                    cnt_phase0 = cnt_phase0 + 1;
                    cnt_a0.transition(transition)
                    .text(cnt_phase0);
                    // 新增文字提醒(北进口左转)
                    phase.transition(transition)
                    .text('North Left');
                    signal_N.transition(transition) 
                    .attr('fill', 'green');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==1){
                    cnt_phase1 = cnt_phase1 + 1;
                    cnt_a1.transition(transition)
                    .text(cnt_phase1)
                    // 新增文字提醒(东进口直行)
                    phase.transition(transition)
                    .text('East Stright');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'green');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==2){
                    cnt_phase2 = cnt_phase2 + 1;
                    cnt_a2.transition(transition)
                    .text(cnt_phase2)
                    // 新增文字提醒(West L & S)
                    phase.transition(transition)
                    .text('West Left & Stright');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                }

                //北
                data_N.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                    });
                   
                    rects_N.transition(transition) 
                    .attr('width', d => xScale_N(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //东
                data_E.forEach(d => 
                {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });

                    rects_E.transition(transition) 
                    .attr('width', d => xScale_E(d.value))
                     .attr('fill', d => getQueueColor(d.value));
               
                //西
                data_W.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });
                   
                    rects_W.transition(transition) 
                    .attr('width', d => xScale_W(d.value))
                     .attr('fill', d => getQueueColor(d.value));
                

                await transition.end();
                }
            })()

};

//三岔路口J11
DrawQueue.prototype.TriJ11 = function (Jdata,startstep,endstep) {//给定数据
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.svgWidth/2},${this.svgHeight/2})`);
    // 颜色变换
    const getQueueColor = (value) => {
        if (value <= 3) return '#69b3a2';
        if (value <= 6) return 'yellow';
        return 'red';
    };
    
    //东北角
    g.append('line')
    .attr('x1', 60).attr('y1', -96).attr('x2', 60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', -96).attr('x2', 40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 20).attr('y1', -96).attr('x2', 20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', 96).attr('y1', -60).attr('x2', 168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', -40).attr('x2', 168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 96).attr('y1', -20).attr('x2', 168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px");
    
    var arc1 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI)
        .endAngle(Math.PI/2*3);
    g.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(96,-96)");

    //西北角
    g.append('line')
    .attr('x1', -60).attr('y1', -96).attr('x2', -60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', -96).attr('x2', -40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -20).attr('y1', -96).attr('x2', -20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");

    //西南角
    g.append('line')
    .attr('x1', -60).attr('y1', 96).attr('x2', -60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', 96).attr('x2', -40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -20).attr('y1', 96).attr('x2', -20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线


    //东南角
    g.append('line')
    .attr('x1', 60).attr('y1', 96).attr('x2', 60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', 96).attr('x2', 40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 20).attr('y1', 96).attr('x2', 20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', 96).attr('y1', 60).attr('x2', 168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', 40).attr('x2', 168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 96).attr('y1', 20).attr('x2', 168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc4 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(-Math.PI/2)
        .endAngle(0);
    g.append("path")
    .attr("d", arc4)
    .attr("transform", "translate(96,96)");
    //人行横道线
    //东
    g.append('line')
    .attr('x1', 72).attr('y1', -54).attr('x2', 92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -48).attr('x2', 92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -42).attr('x2', 92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -36).attr('x2', 92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -30).attr('x2', 92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -24).attr('x2', 92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -18).attr('x2', 92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -12).attr('x2', 92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -6).attr('x2', 92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 0).attr('x2', 92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 54).attr('x2', 92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 48).attr('x2', 92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 42).attr('x2', 92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 36).attr('x2', 92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 30).attr('x2', 92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 24).attr('x2', 92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 18).attr('x2', 92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 12).attr('x2', 92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 6).attr('x2', 92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //南
    g.append('line')
    .attr('x1', -54).attr('y1', 72).attr('x2', -54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', 72).attr('x2', -48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', 72).attr('x2', -42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', 72).attr('x2', -36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', 72).attr('x2', -30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', 72).attr('x2', -24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', 72).attr('x2', -18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', 72).attr('x2', -12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', 72).attr('x2', -6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', 72).attr('x2', 0).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', 72).attr('x2', 54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', 72).attr('x2', 48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', 72).attr('x2', 42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', 72).attr('x2', 36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', 72).attr('x2', 30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', 72).attr('x2', 24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', 72).attr('x2', 18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', 72).attr('x2', 12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', 72).attr('x2', 6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //北
    g.append('line')
    .attr('x1', -54).attr('y1', -72).attr('x2', -54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', -72).attr('x2', -48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', -72).attr('x2', -42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', -72).attr('x2', -36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', -72).attr('x2', -30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', -72).attr('x2', -24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', -72).attr('x2', -18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', -72).attr('x2', -12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', -72).attr('x2', -6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', -72).attr('x2', 0).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', -72).attr('x2', 54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', -72).attr('x2', 48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', -72).attr('x2', 42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', -72).attr('x2', 36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', -72).attr('x2', 30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', -72).attr('x2', 24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', -72).attr('x2', 18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', -72).attr('x2', 12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', -72).attr('x2', 6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //双实线
    //东
    g.append('line')
    .attr('x1', 96).attr('y1', 1.2).attr('x2', 168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', 96).attr('y1', -1.2).attr('x2', 168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //北
    g.append('line')
    .attr('x1', 1.2).attr('y1', -96).attr('x2', 1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', -96).attr('x2', -1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //南
    g.append('line')
    .attr('x1', 1.2).attr('y1', 96).attr('x2', 1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', 96).attr('x2', -1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");

    //西实线补齐
    g.append('line')
    .attr('x1', -60).attr('y1', 96).attr('x2', -60).attr('y2', -96).attr("stroke", "black").attr("stroke-width", "2.5px");

    //各排队车辆数变化
    //东进口初始化
    const data_E = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_E = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+96},${this.svgHeight/2-60})`);
    const width_E = 60;
    const height_E = 60;

    const xScale_E = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_E]);

    const yScale_E = d3.scaleBand()
    .domain(data_E.map(d => d.name))
    .range([0, height_E])
    .padding(0.1);

    const rects_E = svg_E.selectAll('rect').data(data_E).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_E(d.name)).attr('height', yScale_E.bandwidth());


    //南进口初始化
    const data_S = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_S = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+60},${this.svgHeight/2+96}), rotate(90)`);
    const width_S = 60;
    const height_S = 60;

    const xScale_S = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_S]);

    const yScale_S = d3.scaleBand()
    .domain(data_S.map(d => d.name))
    .range([0, height_S]).padding(0.1);
     
   
    const rects_S = svg_S.selectAll('rect').data(data_S).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_S(d.name)).attr('height', yScale_S.bandwidth());

    //北进口初始化
    const data_N = [{name: 'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_N = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-60},${this.svgHeight/2-96}), rotate(270)`);
    const width_N = 60;
    const height_N = 60;
    const xScale_N = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_N]);

    const yScale_N = d3.scaleBand()
    .domain(data_N.map(d => d.name))
    .range([0, height_N])
    .padding(0.1);

    const rects_N = svg_N.selectAll('rect').data(data_N).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_N(d.name)).attr('height', yScale_N.bandwidth());

    // 决策可视化
    const svg_action_North = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_N = svg_action_North.append('circle').attr('cx', 310).attr('cy', -42).attr('r', '6').attr('fill', 'red');

    const svg_action_East = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_E = svg_action_East.append('circle').attr('cx', 400).attr('cy', -10).attr('r', '6').attr('fill', 'red');

    const svg_action_South = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_S = svg_action_South.append('circle').attr('cx', 368).attr('cy', 82).attr('r', '6').attr('fill', 'red');

    
    //load data
    var last_obs = []
    for(var decide_step=startstep/10;decide_step<endstep/10;decide_step++){
        var eachstep = [
            Jdata[decide_step]['North_R'],Jdata[decide_step]['North_S'],Jdata[decide_step]['North_L'],
            Jdata[decide_step]['East_R'],Jdata[decide_step]['East_S'],Jdata[decide_step]['East_L'],
            Jdata[decide_step]['South_R'],Jdata[decide_step]['South_S'],Jdata[decide_step]['South_L']]
        last_obs[decide_step-startstep/10]=eachstep
    }

        var j=-1;
        var k=-1;
        var agent_action = 0;
        //新增动作统计表格
        g.append('text')
        .attr('x', -330).attr('y', -65).text('Action & Frequency').style("font-family", "Times New Roman").style("font-weight", "600");
        g.append('text')
        .attr('x', -305).attr('y', -45).text('of the Agent').style("font-family", "Times New Roman").style("font-weight", "600");

        g.append('line')
        .attr('x1', -220).attr('y1', -40).attr('x2', -320).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "2.5px");
        g.append('text')
        .attr('x', -310).attr('y', -25).text('Act.').style("font-family", "Times New Roman");
        
        //a_0
        var a_0 = g.append('text')
        .attr('x', -300).attr('y', -5).text('a').style("font-family", "Times New Roman");//.style("font-style", "italic");
        a_0.append('tspan')
        .text('0') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a0 = g.append('text').attr('x', -250).attr('y', -5).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_1
        var a_1 = g.append('text')
        .attr('x', -300).attr('y', 15).text('a').style("font-family", "Times New Roman");
        a_1.append('tspan')
        .text('1') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a1 = g.append('text').attr('x', -250).attr('y', 15).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_2
        var a_2 = g.append('text')
        .attr('x', -300).attr('y', 35).text('a').style("font-family", "Times New Roman");
        a_2.append('tspan')
        .text('2') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a2 = g.append('text').attr('x', -250).attr('y', 35).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        
        g.append('text')
        .attr('x', -260).attr('y', -25).text('Freq.').style("font-family", "Times New Roman");
        g.append('line')
        .attr('x1', -220).attr('y1', -20).attr('x2', -320).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 0).attr('x2', -320).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 20).attr('x2', -320).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 40).attr('x2', -320).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "1px");
     
        //新增文字提醒
        g.append('text').attr('x', 117).attr('y', -170).text('Current Interval:').text('Current Interval:').style("font-family", "Times New Roman").style("font-weight", '600');
        const step = g.append('text').attr('x', 230).attr('y', -170).attr("font-size",30).style("font-family","Times New Roman").text('0');
        g.append('text').attr('x', 130).attr('y', -150).text('Current Phase:').style("font-family", "Times New Roman").style("font-weight", '600');
        const phase = g.append('text').attr('x', 230).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('Default Phase');
        //var text_phase = 'North L & S';
        var cnt_phase0 = 0;
        var cnt_phase1 = 0;
        var cnt_phase2 = 0;

        (async () => {
            for(var i=startstep/10;i<endstep/10;i++){
                let transition = d3.transition().duration(1200);
                step.transition(transition).text(`[${i * 10}, ${i * 10 + 10}]`);
                j=j+1;
                agent_action = Jdata[i-1]['actions(index)']
                //console.log(agent_action)
                if (agent_action==0){
                    cnt_phase0 = cnt_phase0 + 1;
                    cnt_a0.transition(transition)
                    .text(cnt_phase0)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('North L & S');

                    signal_N.transition(transition) 
                    .attr('fill', 'green');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==1){
                    cnt_phase1 = cnt_phase1 + 1;
                    cnt_a1.transition(transition)
                    .text(cnt_phase1)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('East Left');

                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'green');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                }

                if (agent_action==2){
                    cnt_phase2 = cnt_phase2 + 1;
                    cnt_a2.transition(transition)
                    .text(cnt_phase2)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('South Straight');

                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'green');
                }
                /*if (agent_action==3){
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                }*/


                //北
                data_N.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                    });
                   
                    rects_N.transition(transition) 
                    .attr('width', d => xScale_N(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //东
                data_E.forEach(d => 
                {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });

                    rects_E.transition(transition) 
                    .attr('width', d => xScale_E(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //南
                data_S.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });

                    rects_S.transition(transition)
                    .attr('width', d => xScale_S(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                await transition.end();
                }
            })()

};

//三岔路口J15
DrawQueue.prototype.TriJ15 = function (Jdata,startstep,endstep) {//给定数据
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.svgWidth/2},${this.svgHeight/2})`);
    const getQueueColor = (value) => {
        if (value <= 3) return '#69b3a2';
        if (value <= 6) return 'yellow';
        return 'red';
    };

    //东北角
    g.append('line')
    .attr('x1', 60).attr('y1', -96).attr('x2', 60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', -96).attr('x2', 40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 20).attr('y1', -96).attr('x2', 20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    

    //西北角
    g.append('line')
    .attr('x1', -60).attr('y1', -96).attr('x2', -60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', -96).attr('x2', -40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -20).attr('y1', -96).attr('x2', -20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', -96).attr('y1', -60).attr('x2', -168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', -40).attr('x2', -168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -96).attr('y1', -20).attr('x2', -168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc2 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI);
    g.append("path")
    .attr("d", arc2)
    .attr("transform", "translate(-96,-96)");

    //西南角
    g.append('line')
    .attr('x1', -60).attr('y1', 96).attr('x2', -60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', 96).attr('x2', -40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -20).attr('y1', 96).attr('x2', -20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', -96).attr('y1', 60).attr('x2', -168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', 40).attr('x2', -168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -96).attr('y1', 20).attr('x2', -168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px");
    var arc3 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(0)
        .endAngle(Math.PI/2);
    g.append("path")
    .attr("d", arc3)
    .attr("transform", "translate(-96,96)");

    //东南角
    g.append('line')
    .attr('x1', 60).attr('y1', 96).attr('x2', 60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', 96).attr('x2', 40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 20).attr('y1', 96).attr('x2', 20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");

    //人行横道线
    //西
    g.append('line')
    .attr('x1', -72).attr('y1', -54).attr('x2', -92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -48).attr('x2', -92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -42).attr('x2', -92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -36).attr('x2', -92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -30).attr('x2', -92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -24).attr('x2', -92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -18).attr('x2', -92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -12).attr('x2', -92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -6).attr('x2', -92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 0).attr('x2', -92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 54).attr('x2', -92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 48).attr('x2', -92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 42).attr('x2', -92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 36).attr('x2', -92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 30).attr('x2', -92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 24).attr('x2', -92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 18).attr('x2', -92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 12).attr('x2', -92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 6).attr('x2', -92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //南
    g.append('line')
    .attr('x1', -54).attr('y1', 72).attr('x2', -54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', 72).attr('x2', -48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', 72).attr('x2', -42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', 72).attr('x2', -36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', 72).attr('x2', -30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', 72).attr('x2', -24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', 72).attr('x2', -18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', 72).attr('x2', -12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', 72).attr('x2', -6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', 72).attr('x2', 0).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', 72).attr('x2', 54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', 72).attr('x2', 48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', 72).attr('x2', 42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', 72).attr('x2', 36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', 72).attr('x2', 30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', 72).attr('x2', 24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', 72).attr('x2', 18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', 72).attr('x2', 12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', 72).attr('x2', 6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //北
    g.append('line')
    .attr('x1', -54).attr('y1', -72).attr('x2', -54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', -72).attr('x2', -48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', -72).attr('x2', -42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', -72).attr('x2', -36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', -72).attr('x2', -30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', -72).attr('x2', -24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', -72).attr('x2', -18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', -72).attr('x2', -12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', -72).attr('x2', -6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', -72).attr('x2', 0).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', -72).attr('x2', 54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', -72).attr('x2', 48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', -72).attr('x2', 42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', -72).attr('x2', 36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', -72).attr('x2', 30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', -72).attr('x2', 24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', -72).attr('x2', 18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', -72).attr('x2', 12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', -72).attr('x2', 6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //双实线
    //北
    g.append('line')
    .attr('x1', 1.2).attr('y1', -96).attr('x2', 1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', -96).attr('x2', -1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //西
    g.append('line')
    .attr('x1', -96).attr('y1', 1.2).attr('x2', -168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -96).attr('y1', -1.2).attr('x2', -168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //南
    g.append('line')
    .attr('x1', 1.2).attr('y1', 96).attr('x2', 1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', 96).attr('x2', -1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");

    //东实线补齐
    g.append('line')
    .attr('x1', 60).attr('y1', 96).attr('x2', 60).attr('y2', -96).attr("stroke", "black").attr("stroke-width", "2.5px");

    //各排队车辆数变化
    //西进口初始化
    const data_W = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_W = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-96},${this.svgHeight/2+60}), rotate(180)`);
    const width_W = 60;
    const height_W = 60;
    const xScale_W = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_W]);

    const yScale_W = d3.scaleBand()
    .domain(data_W.map(d => d.name))
    .range([0, height_W]).padding(0.1);

    const rects_W = svg_W.selectAll('rect').data(data_W).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_W(d.name)).attr('height', yScale_W.bandwidth());

    //南进口初始化
    const data_S = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_S = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+60},${this.svgHeight/2+96}), rotate(90)`);
    const width_S = 60;
    const height_S = 60;

    const xScale_S = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_S]);

    const yScale_S = d3.scaleBand()
    .domain(data_S.map(d => d.name))
    .range([0, height_S]).padding(0.1);
     
   
    const rects_S = svg_S.selectAll('rect').data(data_S).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_S(d.name)).attr('height', yScale_S.bandwidth());

    //北进口初始化
    const data_N = [{name: 'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_N = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-60},${this.svgHeight/2-96}), rotate(270)`);
    const width_N = 60;
    const height_N = 60;
    const xScale_N = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_N]);

    const yScale_N = d3.scaleBand()
    .domain(data_N.map(d => d.name))
    .range([0, height_N])
    .padding(0.1);

    const rects_N = svg_N.selectAll('rect').data(data_N).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_N(d.name)).attr('height', yScale_N.bandwidth());

    // 决策可视化
    const svg_action_North = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_N = svg_action_North.append('circle').attr('cx', 310).attr('cy', -42).attr('r', '6').attr('fill', 'red');

    const svg_action_South = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_S = svg_action_South.append('circle').attr('cx', 368).attr('cy', 82).attr('r', '6').attr('fill', 'red');

    const svg_action_West = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_W = svg_action_West.append('circle').attr('cx', 276).attr('cy', 50).attr('r', '6').attr('fill', 'red');
    
    
    //load data
    var last_obs = []
    for(var decide_step=startstep/10;decide_step<endstep/10;decide_step++){
        var eachstep = [
            Jdata[decide_step]['North_R'],Jdata[decide_step]['North_S'],Jdata[decide_step]['North_L'],
            Jdata[decide_step]['South_R'],Jdata[decide_step]['South_S'],Jdata[decide_step]['South_L'],
            Jdata[decide_step]['West_R'],Jdata[decide_step]['West_S'],Jdata[decide_step]['West_L']]
        last_obs[decide_step-startstep/10]=eachstep
    }
    console.log(last_obs);
    
        var j = -1;
        var k = -1;
        var agent_action = 0;
        //新增动作统计表格
        g.append('text')
        .attr('x', -330).attr('y', -65).text('Action & Frequency').style("font-family", "Times New Roman").style("font-weight", "600");
g.append('text')
        .attr('x', -305).attr('y', -45).text('of the Agent').style("font-family", "Times New Roman").style("font-weight", "600");

        g.append('line')
        .attr('x1', -220).attr('y1', -40).attr('x2', -320).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "2.5px");
        g.append('text')
        .attr('x', -310).attr('y', -25).text('Act.').style("font-family", "Times New Roman");
        
        //a_0
        var a_0 = g.append('text')
        .attr('x', -300).attr('y', -5).text('a').style("font-family", "Times New Roman");//.style("font-style", "italic");
        a_0.append('tspan')
        .text('0') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a0 = g.append('text').attr('x', -250).attr('y', -5).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_1
        var a_1 = g.append('text')
        .attr('x', -300).attr('y', 15).text('a').style("font-family", "Times New Roman");
        a_1.append('tspan')
        .text('1') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a1 = g.append('text').attr('x', -250).attr('y', 15).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_2
        var a_2 = g.append('text')
        .attr('x', -300).attr('y', 35).text('a').style("font-family", "Times New Roman");
        a_2.append('tspan')
        .text('2') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a2 = g.append('text').attr('x', -250).attr('y', 35).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        
        g.append('text')
        .attr('x', -260).attr('y', -25).text('Freq.').style("font-family", "Times New Roman");
        g.append('line')
        .attr('x1', -220).attr('y1', -20).attr('x2', -320).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 0).attr('x2', -320).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 20).attr('x2', -320).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 40).attr('x2', -320).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "1px");


        
        
        //新增文字提醒
        g.append('text').attr('x', 117).attr('y', -170).text('Current Interval:').text('Current Interval:').style("font-family", "Times New Roman").style("font-weight", '600');
        const step = g.append('text').attr('x', 230).attr('y', -170).attr("font-size",30).style("font-family","Times New Roman").text('0');
        g.append('text').attr('x', 130).attr('y', -150).text('Current Phase:').style("font-family", "Times New Roman").style("font-weight", '600');
        const phase = g.append('text').attr('x', 230).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('Default Phase');
        //var text_phase = 'North L & S';
        var cnt_phase0 = 0;
        var cnt_phase1 = 0;
        var cnt_phase2 = 0;

        (async () => {
            for(var i=startstep/10;i<endstep/10;i++){
                let transition = d3.transition().duration(1200);
                step.transition(transition).text(`[${i * 10}, ${i * 10 + 10}]`);
                j=j+1;
                agent_action = Jdata[i-1]['actions(index)']
                //console.log(agent_action)
                if (agent_action==0){
                    cnt_phase0 = cnt_phase0 + 1;
                    cnt_a0.transition(transition)
                    .text(cnt_phase0)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('North Straight');

                    signal_N.transition(transition) 
                    .attr('fill', 'green');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==1){
                    cnt_phase1 = cnt_phase1 + 1;
                    cnt_a1.transition(transition)
                    .text(cnt_phase1)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('South L & S');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'green');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==2){
                    cnt_phase2 = cnt_phase2 + 1;
                    cnt_a2.transition(transition)
                    .text(cnt_phase2)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('West Left');
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                }
                /*if (agent_action==3){
                    signal_N.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                }*/


                //北
                data_N.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                    });
                   
                    rects_N.transition(transition)
                    .attr('width', d => xScale_N(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //南
                data_S.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });

                    rects_S.transition(transition)
                    .attr('width', d => xScale_S(d.value))
                     .attr('fill', d => getQueueColor(d.value));
               
                //西
                data_W.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });
                   
                    rects_W.transition(transition) 
                    .attr('width', d => xScale_W(d.value))
                     .attr('fill', d => getQueueColor(d.value));
                

                await transition.end();
                }
            })()

};

DrawQueue.prototype.QuaJ23 = function (Jdata,startstep,endstep) {//给定数据
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.svgWidth/2},${this.svgHeight/2})`);
    const getQueueColor = (value) => {
        if (value <= 3) return '#69b3a2';
        if (value <= 6) return 'yellow';
        return 'red';
    };
    //东北角
    g.append('line')
    .attr('x1', 60).attr('y1', -110).attr('x2', 60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', -96).attr('x2', 40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 20).attr('y1', -96).attr('x2', 20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', -36).attr('y1', -60).attr('x2', 168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 96).attr('y1', -40).attr('x2', 168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 96).attr('y1', -20).attr('x2', 168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("transform", "rotate(45),translate(20,-50)");
    
    var arc1 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI*5/4)
        .endAngle(Math.PI/2*3);
    g.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(96,-110)");

    //西北角
    g.append('line')
    .attr('x1', -60).attr('y1', -96).attr('x2', -60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', -96).attr('x2', -40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -20).attr('y1', -96).attr('x2', -20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', -96).attr('y1', -60).attr('x2', -168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', -40).attr('x2', -168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -96).attr('y1', -20).attr('x2', -168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc2 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI);
    g.append("path")
    .attr("d", arc2)
    .attr("transform", "translate(-96,-96)");

    //西南角
    g.append('line')
    .attr('x1', -60).attr('y1', 96).attr('x2', -60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', 96).attr('x2', -40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -20).attr('y1', 96).attr('x2', -20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    g.append('line')
    .attr('x1', -96).attr('y1', 60).attr('x2', -168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -96).attr('y1', 40).attr('x2', -168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', -96).attr('y1', 20).attr('x2', -168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px");
    var arc3 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(0)
        .endAngle(Math.PI/2);
    g.append("path")
    .attr("d", arc3)
    .attr("transform", "translate(-96,96)");

    //东南角
    g.append('line')
    .attr('x1', 60).attr('y1', 96).attr('x2', 60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', 96).attr('x2', 40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 20).attr('y1', 96).attr('x2', 20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', 96).attr('y1', 60).attr('x2', 168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 96).attr('y1', 40).attr('x2', 168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12").attr("transform", "rotate(45),translate(20,-50)");//车道线
    g.append('line')
    .attr('x1', 96).attr('y1', 20).attr('x2', 168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12").attr("transform", "rotate(45),translate(20,-50)");//车道线


    var arc4 = d3.arc()
        .innerRadius(7.8)
        .outerRadius(10.2)
        .startAngle(Math.PI*3/2)
        .endAngle(Math.PI/4*9);
    g.append("path")
    .attr("d", arc4)
    .attr("transform", "translate(69,96)");
    
    //人行横道线
    //东
    g.append('line')
    .attr('x1', 72).attr('y1', -54).attr('x2', 92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -48).attr('x2', 92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -42).attr('x2', 92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -36).attr('x2', 92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -30).attr('x2', 92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -24).attr('x2', 92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -18).attr('x2', 92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -12).attr('x2', 92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', -6).attr('x2', 92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 0).attr('x2', 92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 54).attr('x2', 92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 48).attr('x2', 92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 42).attr('x2', 92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 36).attr('x2', 92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 30).attr('x2', 92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 24).attr('x2', 92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 18).attr('x2', 92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 12).attr('x2', 92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 72).attr('y1', 6).attr('x2', 92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(45),translate(20,-50)");

    //西
    g.append('line')
    .attr('x1', -72).attr('y1', -54).attr('x2', -92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -48).attr('x2', -92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -42).attr('x2', -92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -36).attr('x2', -92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -30).attr('x2', -92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -24).attr('x2', -92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -18).attr('x2', -92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -12).attr('x2', -92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', -6).attr('x2', -92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 0).attr('x2', -92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 54).attr('x2', -92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 48).attr('x2', -92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 42).attr('x2', -92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 36).attr('x2', -92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 30).attr('x2', -92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 24).attr('x2', -92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 18).attr('x2', -92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 12).attr('x2', -92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -72).attr('y1', 6).attr('x2', -92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //南
    g.append('line')
    .attr('x1', -54).attr('y1', 72).attr('x2', -54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', 72).attr('x2', -48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', 72).attr('x2', -42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', 72).attr('x2', -36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', 72).attr('x2', -30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', 72).attr('x2', -24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', 72).attr('x2', -18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', 72).attr('x2', -12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', 72).attr('x2', -6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', 72).attr('x2', 0).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', 72).attr('x2', 54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', 72).attr('x2', 48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', 72).attr('x2', 42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', 72).attr('x2', 36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', 72).attr('x2', 30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', 72).attr('x2', 24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', 72).attr('x2', 18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', 72).attr('x2', 12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', 72).attr('x2', 6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //北
    g.append('line')
    .attr('x1', -54).attr('y1', -72).attr('x2', -54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', -72).attr('x2', -48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', -72).attr('x2', -42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', -72).attr('x2', -36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', -72).attr('x2', -30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', -72).attr('x2', -24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', -72).attr('x2', -18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', -72).attr('x2', -12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', -72).attr('x2', -6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', -72).attr('x2', 0).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', -72).attr('x2', 54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', -72).attr('x2', 48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', -72).attr('x2', 42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', -72).attr('x2', 36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', -72).attr('x2', 30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', -72).attr('x2', 24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', -72).attr('x2', 18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', -72).attr('x2', 12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', -72).attr('x2', 6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //双实线
    //东
    g.append('line')
    .attr('x1', 96).attr('y1', 1.2).attr('x2', 168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px").attr("transform", "rotate(45),translate(20,-50)");
    g.append('line')
    .attr('x1', 96).attr('y1', -1.2).attr('x2', 168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px").attr("transform", "rotate(45),translate(20,-50)");
    //北
    g.append('line')
    .attr('x1', 1.2).attr('y1', -96).attr('x2', 1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', -96).attr('x2', -1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //西
    g.append('line')
    .attr('x1', -96).attr('y1', 1.2).attr('x2', -168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -96).attr('y1', -1.2).attr('x2', -168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //南
    g.append('line')
    .attr('x1', 1.2).attr('y1', 96).attr('x2', 1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', 96).attr('x2', -1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");


    //各排队车辆数变化

    //东进口初始化
    const data_E = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_E = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+96},${this.svgHeight/2-60})`);
    const width_E = 60;
    const height_E = 60;

    const xScale_E = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_E]);

    const yScale_E = d3.scaleBand()
    .domain(data_E.map(d => d.name))
    .range([0, height_E])
    .padding(0.1);

    const rects_E = svg_E.selectAll('rect').data(data_E).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_E(d.name)).attr('height', yScale_E.bandwidth()).attr("transform", "rotate(45),translate(90,0)");

    //西进口初始化
    const data_W = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_W = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-96},${this.svgHeight/2+60}), rotate(180)`);
    const width_W = 60;
    const height_W = 60;
    const xScale_W = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_W]);

    const yScale_W = d3.scaleBand()
    .domain(data_W.map(d => d.name))
    .range([0, height_W]).padding(0.1);

    const rects_W = svg_W.selectAll('rect').data(data_W).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_W(d.name)).attr('height', yScale_W.bandwidth());

    //南进口初始化
    const data_S = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_S = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+60},${this.svgHeight/2+96}), rotate(90)`);
    const width_S = 60;
    const height_S = 60;

    const xScale_S = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_S]);

    const yScale_S = d3.scaleBand()
    .domain(data_S.map(d => d.name))
    .range([0, height_S]).padding(0.1);
     
   
    const rects_S = svg_S.selectAll('rect').data(data_S).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_S(d.name)).attr('height', yScale_S.bandwidth());

    //北进口初始化
    const data_N = [{name: 'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_N = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-60},${this.svgHeight/2-96}), rotate(270)`);
    const width_N = 60;
    const height_N = 60;
    const xScale_N = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_N]);

    const yScale_N = d3.scaleBand()
    .domain(data_N.map(d => d.name))
    .range([0, height_N])
    .padding(0.1);

    const rects_N = svg_N.selectAll('rect').data(data_N).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_N(d.name)).attr('height', yScale_N.bandwidth());

    // 决策可视化
    const svg_action_North = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_N = svg_action_North.append('circle').attr('cx', 310).attr('cy', -42).attr('r', '6').attr('fill', 'red');

    const svg_action_East = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_E = svg_action_East.append('circle').attr('cx', 453).attr('cy', 23).attr('r', '6').attr('fill', 'red');

    const svg_action_South = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_S = svg_action_South.append('circle').attr('cx', 368).attr('cy', 82).attr('r', '6').attr('fill', 'red');

    const svg_action_West = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_W = svg_action_West.append('circle').attr('cx', 276).attr('cy', 50).attr('r', '6').attr('fill', 'red');

    
    //load data
    var last_obs = []
    for(var decide_step=startstep/10;decide_step<endstep/10;decide_step++){
        var eachstep = [
            Jdata[decide_step]['North_R'],Jdata[decide_step]['North_S'],Jdata[decide_step]['North_L'],
            Jdata[decide_step]['East_R'],Jdata[decide_step]['East_S'],Jdata[decide_step]['East_L'],
            Jdata[decide_step]['South_R'],Jdata[decide_step]['South_S'],Jdata[decide_step]['South_L'],
            Jdata[decide_step]['West_R'],Jdata[decide_step]['West_S'],Jdata[decide_step]['West_L']]
        last_obs[decide_step-startstep/10]=eachstep
    }

        var j=-1;
        var k=-1;
        var agent_action = 0;
                //新增动作统计表格
                g.append('text')
                .attr('x', -330).attr('y', -125).text('Action & Frequency').style("font-family", "Times New Roman").style("font-weight", "600");
                g.append('text')
                .attr('x', -305).attr('y', -105).text('of the Agent').style("font-family", "Times New Roman").style("font-weight", "600");
                g.append('line')
                .attr('x1', -220).attr('y1', -100).attr('x2', -320).attr('y2', -100).attr("stroke", "black").attr("stroke-width", "2.5px");
                g.append('text')
                .attr('x', -310).attr('y', -85).text('Act.').style("font-family", "Times New Roman");
                
                //a_0
                var a_0 = g.append('text')
                .attr('x', -300).attr('y', -65).text('a').style("font-family", "Times New Roman");//.style("font-style", "italic");
                a_0.append('tspan')
                .text('0') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a0 = g.append('text').attr('x', -250).attr('y', -65).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_1
                var a_1 = g.append('text')
                .attr('x', -300).attr('y', -45).text('a').style("font-family", "Times New Roman");
                a_1.append('tspan')
                .text('1') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a1 = g.append('text').attr('x', -250).attr('y', -45).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_2
                var a_2 = g.append('text')
                .attr('x', -300).attr('y', -25).text('a').style("font-family", "Times New Roman");
                a_2.append('tspan')
                .text('2') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a2 = g.append('text').attr('x', -250).attr('y', -25).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_3
                var a_3 = g.append('text')
                .attr('x', -300).attr('y', -5).text('a').style("font-family", "Times New Roman");
                a_3.append('tspan')
                .text('3') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a3 = g.append('text').attr('x', -250).attr('y', -5).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_4
                var a_4 = g.append('text')
                .attr('x', -300).attr('y', 15).text('a').style("font-family", "Times New Roman");
                a_4.append('tspan')
                .text('4') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a4 = g.append('text').attr('x', -250).attr('y', 15).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_5
                var a_5 = g.append('text')
                .attr('x', -300).attr('y', 35).text('a').style("font-family", "Times New Roman");
                a_5.append('tspan')
                .text('5') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a5 = g.append('text').attr('x', -250).attr('y', 35).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_6
                var a_6 = g.append('text')
                .attr('x', -300).attr('y', 55).text('a').style("font-family", "Times New Roman");
                a_6.append('tspan')
                .text('6') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a6 = g.append('text').attr('x', -250).attr('y', 55).attr("font-size", 30).style("font-family","Times New Roman").text(0);
        
                //a_7
                var a_7 = g.append('text')
                .attr('x', -300).attr('y', 75).text('a').style("font-family", "Times New Roman");
                a_7.append('tspan')
                .text('7') // 角标内容
                .attr('x', function() {
                  var bbox = this.parentNode.getBBox(); // 获取文本的bbox
                  return bbox.x + bbox.width - 7; // 设置为文本宽度之后
                })
                .attr('y', function() {
                  var bbox = this.parentNode.getBBox();
                  return bbox.y + bbox.height; // 设置为文本高度之后
                })
                .attr('font-size', '8px') // 可以调整角标字体大小
                .attr('fill', 'black') // 可以调整角标颜色
                .attr('dy', '0px')    // 设置角标与文本之间的距离
                .style("font-family", "Times New Roman");
        
                const cnt_a7 = g.append('text').attr('x', -250).attr('y', 75).attr("font-size", 30).style("font-family","Times New Roman").text(0);
                
                g.append('text')
                .attr('x', -260).attr('y', -85).text('Freq.').style("font-family", "Times New Roman");
                g.append('line')
                .attr('x1', -220).attr('y1', -80).attr('x2', -320).attr('y2', -80).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', -60).attr('x2', -320).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', -40).attr('x2', -320).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', -20).attr('x2', -320).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', 0).attr('x2', -320).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', 20).attr('x2', -320).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', 40).attr('x2', -320).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', 60).attr('x2', -320).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "1px");
                g.append('line')
                .attr('x1', -220).attr('y1', 80).attr('x2', -320).attr('y2', 80).attr("stroke", "black").attr("stroke-width", "1px");
        
        
                //新增文字提醒
                g.append('text').attr('x', 117).attr('y', -170).text('Current Interval:').style("font-family", "Times New Roman").style("font-weight", '600');
                const step = g.append('text').attr('x', 230).attr('y', -170).attr("font-size",30).style("font-family","Times New Roman").text('0');
                g.append('text').attr('x', 130).attr('y', -150).text('Current Phase:').style("font-family", "Times New Roman").style("font-weight", '600');
                const phase = g.append('text').attr('x', 230).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('Default Phase');
                //var text_phase = 'North L & S';
                var cnt_phase0 = 0;
                var cnt_phase1 = 0;
                var cnt_phase2 = 0;
                var cnt_phase3 = 0;
                var cnt_phase4 = 0;
                var cnt_phase5 = 0;
                var cnt_phase6 = 0;
                var cnt_phase7 = 0;

                (async () => {
                    for(var i=startstep/10;i<endstep/10;i++){
                        let transition = d3.transition().duration(1200);
                        step.transition(transition).text(`[${i * 10}, ${i * 10 + 10}]`);
                        j=j+1;
                        agent_action = Jdata[i-1]['actions(index)']
                        //console.log(agent_action)
                        if (agent_action==0){
                            cnt_phase0 = cnt_phase0 + 1;
                            cnt_a0.transition(transition)
                            .text(cnt_phase0)
                            // 新增文字提醒()
                            phase.transition(transition)
                            .text('North Straight');
                            cnt_phase0 = cnt_phase0 + 1;
                            cnt_a0.transition(transition)
                            .text(cnt_phase0);
                            // 新增文字提醒()
                            phase.transition(transition)
                            .text('North L & S');
                            
                            signal_N.transition(transition) 
                            .attr('fill', 'green');
                            signal_E.transition(transition) 
                            .attr('fill', 'red');
                            signal_S.transition(transition) 
                            .attr('fill', 'red');
                            signal_W.transition(transition) 
                            .attr('fill', 'red');
                        }
                        if (agent_action==1){
                            cnt_phase1 = cnt_phase1 + 1;
                            cnt_a1.transition(transition)
                            .text(cnt_phase1)
                            // 新增文字提醒()
                            phase.transition(transition)
                            .text('East L & S');
                            signal_N.transition(transition) 
                            .attr('fill', 'red');
                            signal_E.transition(transition) 
                            .attr('fill', 'green');
                            signal_S.transition(transition) 
                            .attr('fill', 'red');
                            signal_W.transition(transition) 
                            .attr('fill', 'red');
                        }
                        if (agent_action==2){
                            cnt_phase2 = cnt_phase2 + 1;
                            cnt_a2.transition(transition)
                            .text(cnt_phase2)
                            // 新增文字提醒()
                            phase.transition(transition)
                            .text('South L & S');
                            signal_N.transition(transition) 
                            .attr('fill', 'red');
                            signal_E.transition(transition) 
                            .attr('fill', 'red');
                            signal_S.transition(transition) 
                            .attr('fill', 'green');
                            signal_W.transition(transition) 
                            .attr('fill', 'red');
                        }
                        if (agent_action==3){
                            cnt_phase3 = cnt_phase3 + 1;
                            cnt_a3.transition(transition)
                            .text(cnt_phase3)
                            // 新增文字提醒()
                            phase.transition(transition)
                            .text('West L & S');
                            signal_N.transition(transition) 
                            .attr('fill', 'red');
                            signal_E.transition(transition) 
                            .attr('fill', 'red');
                            signal_S.transition(transition) 
                            .attr('fill', 'red');
                            signal_W.transition(transition) 
                            .attr('fill', 'green');
                        }
                        // 新增相位（May 3rd）
                        // 南北直行
                        if (agent_action==4){
                            cnt_phase4 = cnt_phase4 + 1;
                            cnt_a4.transition(transition)
                            .text(cnt_phase4)
                            // 新增文字提醒(南北直行)
                            phase.transition(transition)
                            .text('N & S Stright');
                            signal_N.transition(transition) 
                            .attr('fill', 'green');
                            signal_E.transition(transition) 
                            .attr('fill', 'red');
                            signal_S.transition(transition) 
                            .attr('fill', 'green');
                            signal_W.transition(transition) 
                            .attr('fill', 'red');
                        }
                        // 南北左转
                        if (agent_action==5){
                            cnt_phase5 = cnt_phase5 + 1;
                            cnt_a5.transition(transition)
                            .text(cnt_phase5)
                            // 新增文字提醒(南北左转)
                            phase.transition(transition)
                            .text('N & S Left');
                            signal_N.transition(transition) 
                            .attr('fill', 'green');
                            signal_E.transition(transition) 
                            .attr('fill', 'red');
                            signal_S.transition(transition) 
                            .attr('fill', 'green');
                            signal_W.transition(transition) 
                            .attr('fill', 'red');
                        }
                        // 东西直行
                        if (agent_action==6){
                            cnt_phase6 = cnt_phase6 + 1;
                            cnt_a6.transition(transition)
                            .text(cnt_phase6)
                            // 新增文字提醒(东西直行)
                            phase.transition(transition)
                            .text('E & W Stright');
                            signal_N.transition(transition) 
                            .attr('fill', 'red');
                            signal_E.transition(transition) 
                            .attr('fill', 'green');
                            signal_S.transition(transition) 
                            .attr('fill', 'red');
                            signal_W.transition(transition) 
                            .attr('fill', 'green');
                        }
                        // 东西左转
                        if (agent_action==7){
                            cnt_phase7 = cnt_phase7 + 1;
                            cnt_a7.transition(transition)
                            .text(cnt_phase7)
                            // 新增文字提醒(东西左转)
                            phase.transition(transition)
                            .text('E & W Left');
                            signal_N.transition(transition) 
                            .attr('fill', 'red');
                            signal_E.transition(transition) 
                            .attr('fill', 'green');
                            signal_S.transition(transition) 
                            .attr('fill', 'red');
                            signal_W.transition(transition) 
                            .attr('fill', 'green');
                        }
        
                        //北
                        data_N.forEach(d => {
                            k=k+1;
                            d.value = Math.min(last_obs[j%10][k%12], 8);
                            });
                           
                            rects_N.transition(transition) 
                            .attr('width', d => xScale_N(d.value))
                             .attr('fill', d => getQueueColor(d.value));
        
                        //东
                        data_E.forEach(d => 
                        {
                            k=k+1;
                            d.value = Math.min(last_obs[j%10][k%12], 8);
                        });
        
                            rects_E.transition(transition) 
                            .attr('width', d => xScale_E(d.value))
                             .attr('fill', d => getQueueColor(d.value));
        
                        //南
                        data_S.forEach(d => {
                            k=k+1;
                            d.value = Math.min(last_obs[j%10][k%12], 8);
                        });
        
                            rects_S.transition(transition)
                            .attr('width', d => xScale_S(d.value))
                             .attr('fill', d => getQueueColor(d.value));
                       
                        //西
                        data_W.forEach(d => {
                            k=k+1;
                            d.value = Math.min(last_obs[j%10][k%12], 8);
                        });
                           
                            rects_W.transition(transition) 
                            .attr('width', d => xScale_W(d.value))
                             .attr('fill', d => getQueueColor(d.value));
                        
        
                        await transition.end();
                        }
                    })()
        
        };

DrawQueue.prototype.TriJ18 = function (Jdata,startstep,endstep) {//给定数据
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.svgWidth/2},${this.svgHeight/2})`);
    const getQueueColor = (value) => {
        if (value <= 3) return '#69b3a2';
        if (value <= 6) return 'yellow';
        return 'red';
    };

    //东北角
    g.append('line')
    .attr('x1', 60).attr('y1', -96).attr('x2', 60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 40).attr('y1', -96).attr('x2', 40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12").attr("transform", "rotate(-45)");//车道线
    g.append('line')
    .attr('x1', 20).attr('y1', -96).attr('x2', 20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12").attr("transform", "rotate(-45)");//车道线

    g.append('line')
    .attr('x1', 96).attr('y1', -60).attr('x2', 168).attr('y2', -60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', -40).attr('x2', 168).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 96).attr('y1', -20).attr('x2', 168).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "0.6px");
    
    var arc1 = d3.arc()
        .innerRadius(170.8)
        .outerRadius(173.2)
        .startAngle(Math.PI)
        .endAngle(Math.PI/4*5);
    g.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(96,-232)");

    //西北角
    g.append('line')
    .attr('x1', -60).attr('y1', -96).attr('x2', -60).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "2.4px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -40).attr('y1', -96).attr('x2', -40).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -20).attr('y1', -96).attr('x2', -20).attr('y2', -168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("transform", "rotate(-45)");

    //西南角
    g.append('line')
    .attr('x1', -60).attr('y1', 96).attr('x2', -60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', -40).attr('y1', 96).attr('x2', -40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', -20).attr('y1', 96).attr('x2', -20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    var arc2 = d3.arc()
        .innerRadius(170.8)
        .outerRadius(173.2)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI/4);
    g.append("path")
    .attr("d", arc2)
    .attr("transform", "translate(-232,96)");

    //东南角
    g.append('line')
    .attr('x1', 60).attr('y1', 96).attr('x2', 60).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 40).attr('y1', 96).attr('x2', 40).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");
    g.append('line')
    .attr('x1', 20).attr('y1', 96).attr('x2', 20).attr('y2', 168).attr("stroke", "black").attr("stroke-width", "0.6px");

    g.append('line')
    .attr('x1', 96).attr('y1', 60).attr('x2', 168).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "2.4px");
    g.append('line')
    .attr('x1', 96).attr('y1', 40).attr('x2', 168).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线
    g.append('line')
    .attr('x1', 96).attr('y1', 20).attr('x2', 168).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "0.6px").attr("stroke-dasharray", "12, 12");//车道线

    var arc4 = d3.arc()
        .innerRadius(34.8)
        .outerRadius(37.2)
        .startAngle(-Math.PI/2)
        .endAngle(0);
    g.append("path")
    .attr("d", arc4)
    .attr("transform", "translate(96,96)");
    //人行横道线
    //东
    g.append('line')
    .attr('x1', 72).attr('y1', -54).attr('x2', 92).attr('y2', -54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -48).attr('x2', 92).attr('y2', -48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -42).attr('x2', 92).attr('y2', -42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -36).attr('x2', 92).attr('y2', -36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -30).attr('x2', 92).attr('y2', -30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -24).attr('x2', 92).attr('y2', -24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -18).attr('x2', 92).attr('y2', -18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -12).attr('x2', 92).attr('y2', -12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', -6).attr('x2', 92).attr('y2', -6).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 0).attr('x2', 92).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 54).attr('x2', 92).attr('y2', 54).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 48).attr('x2', 92).attr('y2', 48).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 42).attr('x2', 92).attr('y2', 42).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 36).attr('x2', 92).attr('y2', 36).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 30).attr('x2', 92).attr('y2', 30).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 24).attr('x2', 92).attr('y2', 24).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 18).attr('x2', 92).attr('y2', 18).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 12).attr('x2', 92).attr('y2', 12).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 72).attr('y1', 6).attr('x2', 92).attr('y2', 6).attr("stroke", "black").attr("stroke-width", "2.5px");

    //南
    g.append('line')
    .attr('x1', -54).attr('y1', 72).attr('x2', -54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -48).attr('y1', 72).attr('x2', -48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -42).attr('y1', 72).attr('x2', -42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -36).attr('y1', 72).attr('x2', -36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -30).attr('y1', 72).attr('x2', -30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -24).attr('y1', 72).attr('x2', -24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -18).attr('y1', 72).attr('x2', -18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -12).attr('y1', 72).attr('x2', -12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', -6).attr('y1', 72).attr('x2', -6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 0).attr('y1', 72).attr('x2', 0).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 54).attr('y1', 72).attr('x2', 54).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 48).attr('y1', 72).attr('x2', 48).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 42).attr('y1', 72).attr('x2', 42).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 36).attr('y1', 72).attr('x2', 36).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 30).attr('y1', 72).attr('x2', 30).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 24).attr('y1', 72).attr('x2', 24).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 18).attr('y1', 72).attr('x2', 18).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 12).attr('y1', 72).attr('x2', 12).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");
    g.append('line')
    .attr('x1', 6).attr('y1', 72).attr('x2', 6).attr('y2', 92).attr("stroke", "black").attr("stroke-width", "2.5px");

    //北
    g.append('line')
    .attr('x1', -54).attr('y1', -72).attr('x2', -54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -48).attr('y1', -72).attr('x2', -48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -42).attr('y1', -72).attr('x2', -42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -36).attr('y1', -72).attr('x2', -36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -30).attr('y1', -72).attr('x2', -30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -24).attr('y1', -72).attr('x2', -24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -18).attr('y1', -72).attr('x2', -18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -12).attr('y1', -72).attr('x2', -12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -6).attr('y1', -72).attr('x2', -6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 0).attr('y1', -72).attr('x2', 0).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 54).attr('y1', -72).attr('x2', 54).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 48).attr('y1', -72).attr('x2', 48).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 42).attr('y1', -72).attr('x2', 42).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 36).attr('y1', -72).attr('x2', 36).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 30).attr('y1', -72).attr('x2', 30).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 24).attr('y1', -72).attr('x2', 24).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 18).attr('y1', -72).attr('x2', 18).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 12).attr('y1', -72).attr('x2', 12).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', 6).attr('y1', -72).attr('x2', 6).attr('y2', -92).attr("stroke", "black").attr("stroke-width", "2.5px").attr("transform", "rotate(-45)");

    //双实线
    //东
    g.append('line')
    .attr('x1', 96).attr('y1', 1.2).attr('x2', 168).attr('y2', 1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', 96).attr('y1', -1.2).attr('x2', 168).attr('y2', -1.2).attr("stroke", "orange").attr("stroke-width", "1.2px");
    //北（改为西进口May 4th）
    g.append('line')
    .attr('x1', 1.2).attr('y1', -96).attr('x2', 1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px").attr("transform", "rotate(-45)");
    g.append('line')
    .attr('x1', -1.2).attr('y1', -96).attr('x2', -1.2).attr('y2', -168).attr("stroke", "orange").attr("stroke-width", "1.2px").attr("transform", "rotate(-45)");
    //南
    g.append('line')
    .attr('x1', 1.2).attr('y1', 96).attr('x2', 1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");
    g.append('line')
    .attr('x1', -1.2).attr('y1', 96).attr('x2', -1.2).attr('y2', 168).attr("stroke", "orange").attr("stroke-width", "1.2px");


    //各排队车辆数变化
    //东进口初始化
    const data_E = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_E = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+96},${this.svgHeight/2-60})`);
    const width_E = 60;
    const height_E = 60;

    const xScale_E = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_E]);

    const yScale_E = d3.scaleBand()
    .domain(data_E.map(d => d.name))
    .range([0, height_E])
    .padding(0.1);

    const rects_E = svg_E.selectAll('rect').data(data_E).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_E(d.name)).attr('height', yScale_E.bandwidth());


    //南进口初始化
    const data_S = [{name:'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_S = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2+60},${this.svgHeight/2+96}), rotate(90)`);
    const width_S = 60;
    const height_S = 60;

    const xScale_S = d3.scaleLinear()
    .domain([0, 6.4]).range([0, width_S]);

    const yScale_S = d3.scaleBand()
    .domain(data_S.map(d => d.name))
    .range([0, height_S]).padding(0.1);
     
   
    const rects_S = svg_S.selectAll('rect').data(data_S).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_S(d.name)).attr('height', yScale_S.bandwidth());

    //北进口（改为西进口）初始化
    const data_W = [{name: 'L', value:0}, 
                    {name:'S', value:0}, 
                    {name:'R', value:0}]; //数据
    const svg_W = this.svg.append('g').attr('transform', `translate(${this.svgWidth/2-60},${this.svgHeight/2-96}), rotate(270)`);
    const width_W = 60;
    const height_W = 60;
    const xScale_W = d3.scaleLinear()
    .domain([0, 6.4])
    .range([0, width_W]);

    const yScale_W = d3.scaleBand()
    .domain(data_W.map(d => d.name))
    .range([0, height_W])
    .padding(0.1);

    const rects_W = svg_W.selectAll('rect').data(data_W).join('rect')
    .attr('fill', 'green').attr('opacity', 0.8)
    .attr('y', d => yScale_W(d.name)).attr('height', yScale_W.bandwidth()).attr("transform", "rotate(-45),translate(-14,-85.5)");

    // 决策可视化
    const svg_action_West = this.svg.append('g').attr('transform', `translate(-35,205)`);
    const signal_W = svg_action_West.append('circle').attr('cx', 310).attr('cy', -42).attr('r', '6').attr('fill', 'red');

    const svg_action_East = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_E = svg_action_East.append('circle').attr('cx', 400).attr('cy', -10).attr('r', '6').attr('fill', 'red');

    const svg_action_South = this.svg.append('g').attr('transform', `translate(0,170)`);
    const signal_S = svg_action_South.append('circle').attr('cx', 368).attr('cy', 82).attr('r', '6').attr('fill', 'red');

    
    //load data
    var last_obs = []
    for(var decide_step=startstep/10;decide_step<endstep/10;decide_step++){
        var eachstep = [
            Jdata[decide_step]['North_R'],Jdata[decide_step]['North_S'],Jdata[decide_step]['North_L'],
            Jdata[decide_step]['East_R'],Jdata[decide_step]['East_S'],Jdata[decide_step]['East_L'],
            Jdata[decide_step]['South_R'],Jdata[decide_step]['South_S'],Jdata[decide_step]['South_L']]
        last_obs[decide_step-startstep/10]=eachstep
    }

        var j=-1;
        var k=-1;
        var agent_action = 0;
        //新增动作统计表格
        g.append('text')
        .attr('x', -330).attr('y', -65).text('Action & Frequency').style("font-family", "Times New Roman").style("font-weight", "600");
g.append('text')
        .attr('x', -305).attr('y', -45).text('of the Agent').style("font-family", "Times New Roman").style("font-weight", "600");

        g.append('line')
        .attr('x1', -220).attr('y1', -40).attr('x2', -320).attr('y2', -40).attr("stroke", "black").attr("stroke-width", "2.5px");
        g.append('text')
        .attr('x', -310).attr('y', -25).text('Act.').style("font-family", "Times New Roman");
        
        //a_0
        var a_0 = g.append('text')
        .attr('x', -300).attr('y', -5).text('a').style("font-family", "Times New Roman");//.style("font-style", "italic");
        a_0.append('tspan')
        .text('0') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a0 = g.append('text').attr('x', -250).attr('y', -5).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_1
        var a_1 = g.append('text')
        .attr('x', -300).attr('y', 15).text('a').style("font-family", "Times New Roman");
        a_1.append('tspan')
        .text('1') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a1 = g.append('text').attr('x', -250).attr('y', 15).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        //a_2
        var a_2 = g.append('text')
        .attr('x', -300).attr('y', 35).text('a').style("font-family", "Times New Roman");
        a_2.append('tspan')
        .text('2') // 角标内容
        .attr('x', function() {
            var bbox = this.parentNode.getBBox(); // 获取文本的bbox
            return bbox.x + bbox.width - 7; // 设置为文本宽度之后
        })
        .attr('y', function() {
            var bbox = this.parentNode.getBBox();
            return bbox.y + bbox.height; // 设置为文本高度之后
        })
        .attr('font-size', '8px') // 可以调整角标字体大小
        .attr('fill', 'black') // 可以调整角标颜色
        .attr('dy', '0px')    // 设置角标与文本之间的距离
        .style("font-family", "Times New Roman");

        const cnt_a2 = g.append('text').attr('x', -250).attr('y', 35).attr("font-size", 30).style("font-family","Times New Roman").text(0);

        
        g.append('text')
        .attr('x', -260).attr('y', -25).text('Freq.').style("font-family", "Times New Roman");
        g.append('line')
        .attr('x1', -220).attr('y1', -20).attr('x2', -320).attr('y2', -20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 0).attr('x2', -320).attr('y2', 0).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 20).attr('x2', -320).attr('y2', 20).attr("stroke", "black").attr("stroke-width", "1px");
        g.append('line')
        .attr('x1', -220).attr('y1', 40).attr('x2', -320).attr('y2', 40).attr("stroke", "black").attr("stroke-width", "1px");


        
        
        //新增文字提醒
        g.append('text').attr('x', 117).attr('y', -170).text('Current Interval:').text('Current Interval:').style("font-family", "Times New Roman").style("font-weight", '600');
        const step = g.append('text').attr('x', 230).attr('y', -170).attr("font-size",30).style("font-family","Times New Roman").text('0');
        g.append('text').attr('x', 130).attr('y', -150).text('Current Phase:').style("font-family", "Times New Roman").style("font-weight", '600');
        const phase = g.append('text').attr('x', 230).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('Default Phase');
        //var text_phase = 'North L & S';
        var cnt_phase0 = 0;
        var cnt_phase1 = 0;
        var cnt_phase2 = 0;

        (async () => {
            for(var i=startstep/10;i<=endstep/10;i++){
                let transition = d3.transition().duration(1200);
                step.transition(transition).text(`[${i * 10}, ${i * 10 + 10}]`);
                j=j+1;
                agent_action = Jdata[i-1]['actions(index)']
                //console.log(agent_action)
                if (agent_action==0){
                    cnt_phase0 = cnt_phase0 + 1;
                    cnt_a0.transition(transition)
                    .text(cnt_phase0)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('East L & S');
                    signal_E.transition(transition) 
                    .attr('fill', 'green');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                }
                if (agent_action==1){
                    cnt_phase1 = cnt_phase1 + 1;
                    cnt_a1.transition(transition)
                    .text(cnt_phase1)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('South Left');

                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'green');
                }
                if (agent_action==2){
                    cnt_phase2 = cnt_phase2 + 1;
                    cnt_a2.transition(transition)
                    .text(cnt_phase2)
                    // 新增文字提醒()
                    phase.transition(transition)
                    .text('West Straight');

                    signal_W.transition(transition) 
                    .attr('fill', 'green');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                }
                /*if (agent_action==3){
                    signal_W.transition(transition) 
                    .attr('fill', 'red');
                    signal_E.transition(transition) 
                    .attr('fill', 'red');
                    signal_S.transition(transition) 
                    .attr('fill', 'red');
                }*/


                //北(改为西)
                data_W.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                    });
                   
                    rects_W.transition(transition) 
                    .attr('width', d => xScale_W(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //东
                data_E.forEach(d => 
                {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });

                    rects_E.transition(transition) 
                    .attr('width', d => xScale_E(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                //南
                data_S.forEach(d => {
                    k=k+1;
                    d.value = Math.min(last_obs[j%10][k%9], 8);
                });

                    rects_S.transition(transition)
                    .attr('width', d => xScale_S(d.value))
                     .attr('fill', d => getQueueColor(d.value));

                await transition.end();
                }
            })()
};


DrawQueue.prototype.clear = function (){
    this.svg.selectAll("rect").remove();
    this.svg.selectAll("circle").remove();
    this.svg.selectAll("line").remove();
    this.svg.selectAll("path").remove();
    this.svg.selectAll("text").remove();
    this.svg.selectAll("table").remove();
};


export default DrawQueue