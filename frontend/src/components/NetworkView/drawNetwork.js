/* global d3 $ */
// import List from 'list.js'
import pipeService from '../../service/pipeService'
// import globalConfig from '../../service/globalConfig'
import 'd3'

var DrawNetwork = function () {	
    this.name = "DrawNetwork";
    this.width = 600;
    this.height = 380;
    this.margin = {top:10, bottom:10, left:10, right:10}
}

DrawNetwork.prototype.drawInit = function() {
    const width = this.width;
    const height = this.height;
    
    this.svg = d3.select("#Networkview").select("#divSvg")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

}

DrawNetwork.prototype.drawNetwork = function () {//给定数据
    //const innerHeight = this.svgHeight - this.margin.top - this.margin.bottom;
    //const innerWidth = this.svgWidth - this.margin.left - this.margin.right;
    const g = this.svg.append('g')
    .attr('transform', `translate(${this.width/2},${this.height/2})`);
   
    //g.append('circle')
    //.attr('cx', 10).attr('cy', 10).attr('r', '6').attr('fill', 'red');
    
    
    //J15-midcross
    //West
    g.append('line')
    .attr('x1', -10).attr('y1', 0).attr('x2', -200).attr('y2', 0).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', 10).attr('x2', -200).attr('y2', 10).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', -10).attr('x2', -200).attr('y2', -10).attr("stroke", "black").attr("stroke-width", "1px");

    //South
    g.append('line')
    .attr('x1', 0).attr('y1', 10).attr('x2', 0).attr('y2', 140).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', 0).attr('x2', 10).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', 10).attr('x2', -10).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //North
    g.append('line')
    .attr('x1', 0).attr('y1', -10).attr('x2', 0).attr('y2', -140).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', 0).attr('x2', 10).attr('y2', -136.5).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', -10).attr('x2', -10).attr('y2', -140).attr("stroke", "black").attr("stroke-width", "1px");

    //South leftforward
    g.append('line')
    .attr('x1', -210).attr('y1', 10).attr('x2', -210).attr('y2', 140).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', 10).attr('x2', -220).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -200).attr('y1', 10).attr('x2', -200).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //North leftforward
    g.append('line')
    .attr('x1', -210).attr('y1', -10).attr('x2', -210).attr('y2', -140).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', -10).attr('x2', -220).attr('y2', -140).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -200).attr('y1', -10).attr('x2', -200).attr('y2', -140).attr("stroke", "black").attr("stroke-width", "1px");

    //West downforward
    g.append('line')
    .attr('x1', -10).attr('y1', 150).attr('x2', -200).attr('y2', 150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', 160).attr('x2', -200).attr('y2', 160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', 140).attr('x2', -200).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //West upforward(right)
    g.append('line')
    .attr('x1', -10).attr('y1', -150).attr('x2', -90).attr('y2', -150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', -160).attr('x2', -90).attr('y2', -160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', -140).attr('x2', -100).attr('y2', -140).attr("stroke", "black").attr("stroke-width", "1px");
    //West upforward(left)
    g.append('line')
    .attr('x1', -110).attr('y1', -150).attr('x2', -200).attr('y2', -150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -110).attr('y1', -160).attr('x2', -200).attr('y2', -160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -100).attr('y1', -140).attr('x2', -200).attr('y2', -140).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-parallel(J21)
    g.append('line')
    .attr('x1', -220).attr('y1', -150).attr('x2', -250).attr('y2', -150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', -160).attr('x2', -250).attr('y2', -160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', -140).attr('x2', -250).attr('y2', -140).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-parallel(J14)
    g.append('line')
    .attr('x1', -220).attr('y1', 0).attr('x2', -250).attr('y2', 0).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', 10).attr('x2', -250).attr('y2', 10).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', -10).attr('x2', -250).attr('y2', -10).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-parallel(J06)
    g.append('line')
    .attr('x1', -220).attr('y1', 150).attr('x2', -250).attr('y2', 150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', 160).attr('x2', -250).attr('y2', 160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', 140).attr('x2', -250).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J21)
    g.append('line')
    .attr('x1', -210).attr('y1', -160).attr('x2', -210).attr('y2', -190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', -160).attr('x2', -220).attr('y2', -190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -200).attr('y1', -160).attr('x2', -200).attr('y2', -190).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J22)
    g.append('line')
    .attr('x1', -100).attr('y1', -160).attr('x2', -100).attr('y2', -190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -110).attr('y1', -160).attr('x2', -110).attr('y2', -190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -90).attr('y1', -160).attr('x2', -90).attr('y2', -190).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J23)
    g.append('line')
    .attr('x1', 0).attr('y1', -160).attr('x2', 0).attr('y2', -190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', -163.5).attr('x2', 10).attr('y2', -190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', -160).attr('x2', -10).attr('y2', -190).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J07)
    g.append('line')
    .attr('x1', 0).attr('y1', 160).attr('x2', 0).attr('y2', 190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', 160).attr('x2', 10).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -10).attr('y1', 160).attr('x2', -10).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J06)
    g.append('line')
    .attr('x1', -210).attr('y1', 160).attr('x2', -210).attr('y2', 190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -220).attr('y1', 160).attr('x2', -220).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', -200).attr('y1', 160).attr('x2', -200).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");


    //East(J07)
    g.append('line')
    .attr('x1', 10).attr('y1', 150).attr('x2', 80).attr('y2', 150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', 160).attr('x2', 80).attr('y2', 160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', 140).attr('x2', 80).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J07)
    g.append('line')
    .attr('x1', 90).attr('y1', 160).attr('x2', 90).attr('y2', 190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 80).attr('y1', 160).attr('x2', 80).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 100).attr('y1', 160).attr('x2', 100).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");

    //East(J08)
    g.append('line')
    .attr('x1', 100).attr('y1', 150).attr('x2', 210).attr('y2', 150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 100).attr('y1', 160).attr('x2', 210).attr('y2', 160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 100).attr('y1', 140).attr('x2', 210).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //North(J08)
    g.append('line')
    .attr('x1', 90).attr('y1', 140).attr('x2', 90).attr('y2', -66.5).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 80).attr('y1', 140).attr('x2', 80).attr('y2', -66.5).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 100).attr('y1', 140).attr('x2', 100).attr('y2', -63).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J09)
    g.append('line')
    .attr('x1', 220).attr('y1', 160).attr('x2', 220).attr('y2', 190).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 210).attr('y1', 160).attr('x2', 210).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', 160).attr('x2', 230).attr('y2', 190).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-parallel(J09)
    g.append('line')
    .attr('x1', 230).attr('y1', 150).attr('x2', 260).attr('y2', 150).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', 160).attr('x2', 260).attr('y2', 160).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', 140).attr('x2', 260).attr('y2', 140).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-parallel(J11)
    g.append('line')
    .attr('x1', 230).attr('y1', 60).attr('x2', 260).attr('y2', 60).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', 70).attr('x2', 260).attr('y2', 70).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', 50).attr('x2', 260).attr('y2', 50).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-parallel(J16)
    g.append('line')
    .attr('x1', 230).attr('y1', -60).attr('x2', 260).attr('y2', -60).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', -70).attr('x2', 260).attr('y2', -70).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', -50).attr('x2', 260).attr('y2', -50).attr("stroke", "black").attr("stroke-width", "1px");

    //Short-vertical(J16)
    g.append('line')
    .attr('x1', 220).attr('y1', -70).attr('x2', 220).attr('y2', -100).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 210).attr('y1', -70).attr('x2', 210).attr('y2', -100).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', -70).attr('x2', 230).attr('y2', -100).attr("stroke", "black").attr("stroke-width", "1px");

    //North(J09)
    g.append('line')
    .attr('x1', 220).attr('y1', 140).attr('x2', 220).attr('y2', 70).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 210).attr('y1', 140).attr('x2', 210).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', 140).attr('x2', 230).attr('y2', 70).attr("stroke", "black").attr("stroke-width", "1px");

    //North(J11)
    g.append('line')
    .attr('x1', 220).attr('y1', -50).attr('x2', 220).attr('y2', 50).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 210).attr('y1', -50).attr('x2', 210).attr('y2', 60).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 230).attr('y1', -50).attr('x2', 230).attr('y2', 50).attr("stroke", "black").attr("stroke-width", "1px");

    //J23-J18
    g.append('line')
    .attr('x1', 10).attr('y1', -150).attr('x2', 85).attr('y2', -75).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', -136.5).attr('x2', 80).attr('y2', -66.5).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 10).attr('y1', -163.5).attr('x2', 90).attr('y2', -83.5).attr("stroke", "black").attr("stroke-width", "1px");
       
    //J19-J18
    g.append('line')
    .attr('x1', 210).attr('y1', -60).attr('x2', 100).attr('y2', -73.5).attr("stroke", "orange").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 210).attr('y1', -50).attr('x2', 100).attr('y2', -63).attr("stroke", "black").attr("stroke-width", "1px");
    g.append('line')
    .attr('x1', 210).attr('y1', -70).attr('x2', 90).attr('y2', -83.5).attr("stroke", "black").attr("stroke-width", "1px");

}
//data
DrawNetwork.prototype.NetworkQueuing = function (startstep,endstep,NetworkData) {//给定数据
    const g = this.svg.append('g').attr('transform', `translate(${this.width/2},${this.height/2})`);
    const rects_E11 = g.append('rect').attr('x',1).attr('y',10).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_minusE11 = g.append('rect').attr('x',-9).attr('y',10).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_E19 = g.append('rect').attr('x',1).attr('y',-140).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_minusE19 = g.append('rect').attr('x',-9).attr('y',-140).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_E10 = g.append('rect').attr('x',-209).attr('y',10).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_minusE10 = g.append('rect').attr('x',-219).attr('y',10).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_E18 = g.append('rect').attr('x',-209).attr('y',-140).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_minusE18 = g.append('rect').attr('x',-219).attr('y',-140).attr('fill','#69b3a2').attr('width',8).attr('height',130);
    const rects_E12 = g.append('rect').attr('x',91).attr('y',-65).attr('fill','#69b3a2').attr('width',8).attr('height',205);
    const rects_minusE12 = g.append('rect').attr('x',81).attr('y',-65).attr('fill','#69b3a2').attr('width',8).attr('height',205);
    const rects_E15 = g.append('rect').attr('x',221).attr('y',-50).attr('fill','#69b3a2').attr('width',8).attr('height',100);
    const rects_minusE15 = g.append('rect').attr('x',211).attr('y',-50).attr('fill','#69b3a2').attr('width',8).attr('height',100);
    const rects_E13 = g.append('rect').attr('x',221).attr('y',70).attr('fill','#69b3a2').attr('width',8).attr('height',70);
    const rects_minusE13 = g.append('rect').attr('x',211).attr('y',70).attr('fill','#69b3a2').attr('width',8).attr('height',70);
    const rects_E21 = g.append('rect').attr('x',221).attr('y',-100).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE21 = g.append('rect').attr('x',211).attr('y',-100).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_E04 = g.append('rect').attr('x',221).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE04 = g.append('rect').attr('x',211).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_E03 = g.append('rect').attr('x',91).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE03 = g.append('rect').attr('x',81).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_E02 = g.append('rect').attr('x',1).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE02 = g.append('rect').attr('x',-9).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_E01 = g.append('rect').attr('x',-209).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE01 = g.append('rect').attr('x',-219).attr('y',160).attr('fill','#69b3a2').attr('width',8).attr('height',30);

    const rects_E27 = g.append('rect').attr('x',-209).attr('y',-190).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE27 = g.append('rect').attr('x',-219).attr('y',-190).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_E28 = g.append('rect').attr('x',-99).attr('y',-190).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE28 = g.append('rect').attr('x',-109).attr('y',-190).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_E29 = g.append('rect').attr('x',1).attr('y',-190).attr('fill','#69b3a2').attr('width',8).attr('height',30);
    const rects_minusE29 = g.append('rect').attr('x',-9).attr('y',-190).attr('fill','#69b3a2').attr('width',8).attr('height',30);

    const rects_E05 = g.append('rect').attr('x',-250).attr('y',141).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_minusE05 = g.append('rect').attr('x',-250).attr('y',151).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_E06 = g.append('rect').attr('x',-200).attr('y',141).attr('fill','#69b3a2').attr('width',190).attr('height',8);
    const rects_minusE06 = g.append('rect').attr('x',-200).attr('y',151).attr('fill','#69b3a2').attr('width',190).attr('height',8);
    const rects_E07 = g.append('rect').attr('x',10).attr('y',141).attr('fill','#69b3a2').attr('width',70).attr('height',8);
    const rects_minusE07 = g.append('rect').attr('x',10).attr('y',151).attr('fill','#69b3a2').attr('width',70).attr('height',8);
    const rects_E08 = g.append('rect').attr('x',100).attr('y',141).attr('fill','#69b3a2').attr('width',110).attr('height',8);
    const rects_minusE08 = g.append('rect').attr('x',100).attr('y',151).attr('fill','#69b3a2').attr('width',110).attr('height',8);
    const rects_E09 = g.append('rect').attr('x',230).attr('y',141).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_minusE09 = g.append('rect').attr('x',230).attr('y',151).attr('fill','#69b3a2').attr('width',30).attr('height',8);

    const rects_E14 = g.append('rect').attr('x',230).attr('y',51).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_minusE14 = g.append('rect').attr('x',230).attr('y',61).attr('fill','#69b3a2').attr('width',30).attr('height',8);

    const rects_E20 = g.append('rect').attr('x',230).attr('y',-69).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_minusE20 = g.append('rect').attr('x',230).attr('y',-59).attr('fill','#69b3a2').attr('width',30).attr('height',8);

    const rects_E16 = g.append('rect').attr('x',-250).attr('y',-9).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_minusE16 = g.append('rect').attr('x',-250).attr('y',1).attr('fill','#69b3a2').attr('width',30).attr('height',8);

    const rects_E17 = g.append('rect').attr('x',-200).attr('y',-9).attr('fill','#69b3a2').attr('width',190).attr('height',8);
    const rects_minusE17 = g.append('rect').attr('x',-200).attr('y',1).attr('fill','#69b3a2').attr('width',190).attr('height',8);

    const rects_E24 = g.append('rect').attr('x',-250).attr('y',-159).attr('fill','#69b3a2').attr('width',30).attr('height',8);
    const rects_minusE24 = g.append('rect').attr('x',-250).attr('y',-149).attr('fill','#69b3a2').attr('width',30).attr('height',8);

    const rects_E25 = g.append('rect').attr('x',-200).attr('y',-159).attr('fill','#69b3a2').attr('width',90).attr('height',8);
    const rects_minusE25 = g.append('rect').attr('x',-200).attr('y',-149).attr('fill','#69b3a2').attr('width',90).attr('height',8);

    const rects_E26 = g.append('rect').attr('x',-90).attr('y',-159).attr('fill','#69b3a2').attr('width',80).attr('height',8);
    const rects_minusE26 = g.append('rect').attr('x',-90).attr('y',-149).attr('fill','#69b3a2').attr('width',80).attr('height',8);

    const rects_E23 = g.append('rect').attr('x',-92).attr('y',-112).attr('fill','#69b3a2').attr('width',100).attr('height',8).attr('transform','rotate(45)');
    const rects_minusE23 = g.append('rect').attr('x',-92).attr('y',-122).attr('fill','#69b3a2').attr('width',100).attr('height',8).attr('transform','rotate(45)');

    const rects_E22 = g.append('rect').attr('x',90).attr('y',-83).attr('fill','#69b3a2').attr('width',110).attr('height',8).attr('transform','rotate(6.58)');
    const rects_minusE22 = g.append('rect').attr('x',90).attr('y',-93).attr('fill','#69b3a2').attr('width',110).attr('height',8).attr('transform','rotate(6.58)');
    
    g.append('text').attr('x', 136).attr('y', -150).text('Current Time:').style("font-family", "Times New Roman").style("font-weight", "600");
    const step = g.append('text').attr('x', 236).attr('y', -150).attr("font-size",30).style("font-family","Times New Roman").text('0');
    
    //拥堵程度(颜色表示拥堵程度)
    function selectColor(QueuingNum){
        var color = '#69b3a2'
        if(QueuingNum<=6){
            color = '#69b3a2'
        }
        else if(QueuingNum>6&&QueuingNum<=12){
            color = 'yellow'
        }
        else if(QueuingNum>12){
            color = 'red'
        }
    return(color)
    }

    //transition
    (async () => {
        for(var i=startstep/10;i<=endstep/10;i++){
            let transition2 = d3.transition().duration(1200);
            step.transition(transition2).text(i*10);
            var color_E01 = selectColor(NetworkData[i]['E01'])
            rects_E01.transition(transition2).attr('fill', color_E01); 
            var color_E02 = selectColor(NetworkData[i]['E02'])
            rects_E02.transition(transition2).attr('fill', color_E02);
            var color_E03 = selectColor(NetworkData[i]['E03'])
            rects_E03.transition(transition2).attr('fill', color_E03);
            var color_E04 = selectColor(NetworkData[i]['E04'])
            rects_E04.transition(transition2).attr('fill', color_E04); 
            var color_E05 = selectColor(NetworkData[i]['E05'])
            rects_E05.transition(transition2).attr('fill', color_E05);
            var color_E06 = selectColor(NetworkData[i]['E06'])
            rects_E06.transition(transition2).attr('fill', color_E06);
            var color_E07 = selectColor(NetworkData[i]['E07'])
            rects_E07.transition(transition2).attr('fill', color_E07); 
            var color_E08 = selectColor(NetworkData[i]['E08'])
            rects_E08.transition(transition2).attr('fill', color_E08);
            var color_E09 = selectColor(NetworkData[i]['E09'])
            rects_E09.transition(transition2).attr('fill', color_E09);
            var color_E10 = selectColor(NetworkData[i]['E10'])
            rects_E10.transition(transition2).attr('fill', color_E10);
            var color_E11 = selectColor(NetworkData[i]['E11'])
            rects_E11.transition(transition2).attr('fill', color_E11); 
            var color_E12 = selectColor(NetworkData[i]['E12'])
            rects_E12.transition(transition2).attr('fill', color_E12);
            var color_E13 = selectColor(NetworkData[i]['E13'])
            rects_E13.transition(transition2).attr('fill', color_E13);
            var color_E14 = selectColor(NetworkData[i]['E14'])
            rects_E14.transition(transition2).attr('fill', color_E14); 
            var color_E15 = selectColor(NetworkData[i]['E15'])
            rects_E15.transition(transition2).attr('fill', color_E15);
            var color_E16 = selectColor(NetworkData[i]['E16'])
            rects_E16.transition(transition2).attr('fill', color_E16);
            var color_E17 = selectColor(NetworkData[i]['E17'])
            rects_E17.transition(transition2).attr('fill', color_E17); 
            var color_E18 = selectColor(NetworkData[i]['E18'])
            rects_E18.transition(transition2).attr('fill', color_E18);
            var color_E19 = selectColor(NetworkData[i]['E19'])
            rects_E19.transition(transition2).attr('fill', color_E19);
            var color_E20 = selectColor(NetworkData[i]['E20'])
            rects_E20.transition(transition2).attr('fill', color_E20);
            var color_E21 = selectColor(NetworkData[i]['E21'])
            rects_E21.transition(transition2).attr('fill', color_E21); 
            var color_E22 = selectColor(NetworkData[i]['E22'])
            rects_E22.transition(transition2).attr('fill', color_E22);
            var color_E23 = selectColor(NetworkData[i]['E23'])
            rects_E23.transition(transition2).attr('fill', color_E23);
            var color_E24 = selectColor(NetworkData[i]['E24'])
            rects_E24.transition(transition2).attr('fill', color_E24); 
            var color_E25 = selectColor(NetworkData[i]['E25'])
            rects_E25.transition(transition2).attr('fill', color_E25);
            var color_E26 = selectColor(NetworkData[i]['E26'])
            rects_E26.transition(transition2).attr('fill', color_E26);
            var color_E27 = selectColor(NetworkData[i]['E27'])
            rects_E27.transition(transition2).attr('fill', color_E27); 
            var color_E28 = selectColor(NetworkData[i]['E28'])
            rects_E28.transition(transition2).attr('fill', color_E28);
            var color_E29 = selectColor(NetworkData[i]['E29'])
            rects_E29.transition(transition2).attr('fill', color_E29);
            
            var color_minusE01 = selectColor(NetworkData[i]['minusE01'])
            rects_minusE01.transition(transition2).attr('fill', color_minusE01); 
            var color_minusE02 = selectColor(NetworkData[i]['minusE02'])
            rects_minusE02.transition(transition2).attr('fill', color_minusE02);
            var color_minusE03 = selectColor(NetworkData[i]['minusE03'])
            rects_minusE03.transition(transition2).attr('fill', color_minusE03);
            var color_minusE04 = selectColor(NetworkData[i]['minusE04'])
            rects_minusE04.transition(transition2).attr('fill', color_minusE04); 
            var color_minusE05 = selectColor(NetworkData[i]['minusE05'])
            rects_minusE05.transition(transition2).attr('fill', color_minusE05);
            var color_minusE06 = selectColor(NetworkData[i]['minusE06'])
            rects_minusE06.transition(transition2).attr('fill', color_minusE06);
            var color_minusE07 = selectColor(NetworkData[i]['minusE07'])
            rects_minusE07.transition(transition2).attr('fill', color_minusE07); 
            var color_minusE08 = selectColor(NetworkData[i]['minusE08'])
            rects_minusE08.transition(transition2).attr('fill', color_minusE08);
            var color_minusE09 = selectColor(NetworkData[i]['minusE09'])
            rects_minusE09.transition(transition2).attr('fill', color_minusE09);
            var color_minusE10 = selectColor(NetworkData[i]['minusE10'])
            rects_minusE10.transition(transition2).attr('fill', color_minusE10);
            var color_minusE11 = selectColor(NetworkData[i]['minusE11'])
            rects_minusE11.transition(transition2).attr('fill', color_minusE11); 
            var color_minusE12 = selectColor(NetworkData[i]['minusE12'])
            rects_minusE12.transition(transition2).attr('fill', color_minusE12);
            var color_minusE13 = selectColor(NetworkData[i]['minusE13'])
            rects_minusE13.transition(transition2).attr('fill', color_minusE13);
            var color_minusE14 = selectColor(NetworkData[i]['minusE14'])
            rects_minusE14.transition(transition2).attr('fill', color_minusE14); 
            var color_minusE15 = selectColor(NetworkData[i]['minusE15'])
            rects_minusE15.transition(transition2).attr('fill', color_minusE15);
            var color_minusE16 = selectColor(NetworkData[i]['minusE16'])
            rects_minusE16.transition(transition2).attr('fill', color_minusE16);
            var color_minusE17 = selectColor(NetworkData[i]['minusE17'])
            rects_minusE17.transition(transition2).attr('fill', color_minusE17); 
            var color_minusE18 = selectColor(NetworkData[i]['minusE18'])
            rects_minusE18.transition(transition2).attr('fill', color_minusE18);
            var color_minusE19 = selectColor(NetworkData[i]['minusE19'])
            rects_minusE19.transition(transition2).attr('fill', color_minusE19);
            var color_minusE20 = selectColor(NetworkData[i]['minusE20'])
            rects_minusE20.transition(transition2).attr('fill', color_minusE20);
            var color_minusE21 = selectColor(NetworkData[i]['minusE21'])
            rects_minusE21.transition(transition2).attr('fill', color_minusE21); 
            var color_minusE22 = selectColor(NetworkData[i]['minusE22'])
            rects_minusE22.transition(transition2).attr('fill', color_minusE22);
            var color_minusE23 = selectColor(NetworkData[i]['minusE23'])
            rects_minusE23.transition(transition2).attr('fill', color_minusE23);
            var color_minusE24 = selectColor(NetworkData[i]['minusE24'])
            rects_minusE24.transition(transition2).attr('fill', color_minusE24); 
            var color_minusE25 = selectColor(NetworkData[i]['minusE25'])
            rects_minusE25.transition(transition2).attr('fill', color_minusE25);
            var color_minusE26 = selectColor(NetworkData[i]['minusE26'])
            rects_minusE26.transition(transition2).attr('fill', color_minusE26);
            var color_minusE27 = selectColor(NetworkData[i]['minusE27'])
            rects_minusE27.transition(transition2).attr('fill', color_minusE27); 
            var color_minusE28 = selectColor(NetworkData[i]['minusE28'])
            rects_minusE28.transition(transition2).attr('fill', color_minusE28);
            var color_minusE29 = selectColor(NetworkData[i]['minusE29'])
            rects_minusE29.transition(transition2).attr('fill', color_minusE29);

            await transition2.end();
            }
           
        })()
        
}


DrawNetwork.prototype.clearRect = function () {
    this.svg.selectAll("rect").remove();
    this.svg.selectAll("text").remove();
}

export default DrawNetwork