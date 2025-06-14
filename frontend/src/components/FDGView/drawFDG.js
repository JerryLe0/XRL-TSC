/* global d3 $ */
//import Correlationjs from 'Correlation.js'
// import pipeService from '../../service/pipeService.js'

let DrawFDG = function (id) {
    this.id = id
    this.svgWidth = $('#' + id).width()
    this.svgHeight = $('#' + id).height()

    this.svg = d3.select('#' + id).append('svg')
        .attr('class', 'statisticSvg')
        .attr('width', this.svgWidth)
		.attr('height', this.svgHeight)
    var margin = {top: 15, right: 36, bottom: 15, left: 36};
    this.margin = margin;     
	
}

DrawFDG.prototype.drawFDG = function(data,step,Jnum){
    console.log(data)
    console.log(data[step])
    console.log(Jnum)
    console.log(data[step][Jnum])
    //console.log(data[step]["J21"]["J07"])
    //console.log(data[step]["J21"]["J07"]["-10"])
    //var marge = this.margin
    //var svg = d3.select("svg")
    var width = this.svg.attr("width")
    var height = this.svg.attr("height")
    var g = this.svg.append("g")
        
    //准备数据
    function getmax(dataArray){
        let max = 0
        for (let item of dataArray) {
            if (max < item)
                max = item
        }
        return max
    }
    function getmin(dataArray){
        let min = 100
        for (let item of dataArray) {
            if (min > item)
                min = item
        }
        return min
    }
    
    function normalization(distribution, max, min) {
        var temp = distribution
        for (var i=0;i<temp.length;i++){
            if(temp[i]==0){
                temp[i]=0.1
            }
            temp[i] = (1-((temp[i] - min) / (max - min+0.001))) + 0.3
        }
        return temp
      }

    var nodes = []
    var edges = []
    var datamax = 0
    var datamin = 100
    var normalizedArray = []

    if (Jnum=="J21"){
        nodes = [{name:'J21'}, 
        {name:'J14:-10'}, {name:'J14:-20'}, {name:'J14:-30'}, {name:'J14:-40'}, 
        {name:'J22:-10'}, {name:'J22:-20'}, {name:'J22:-30'}, {name:'J22:-40'}]
        var dataArray = [data[step][Jnum]["J14"]["-10"],data[step][Jnum]["J14"]["-20"],
                        data[step][Jnum]["J14"]["-30"],data[step][Jnum]["J14"]["-40"],
                        data[step][Jnum]["J22"]["-10"],data[step][Jnum]["J22"]["-20"],
                        data[step][Jnum]["J22"]["-30"],data[step][Jnum]["J22"]["-40"]]
        //var dataArray = data[step][Jnum]["J14"]
        //console.log(dataArray)
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        //console.log(getmax(dataArray))
        //console.log(getmin(dataArray))
        normalizedArray = normalization(dataArray,datamin,datamax)
        //console.log(normalizedArray)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]}]
        /*edges = [
            {source:0,target:1,value:1/data[step][Jnum]["J14"]["-10"]+1},
            {source:0,target:2,value:1/data[step][Jnum]["J14"]["-20"]+1},
            {source:0,target:3,value:1/data[step][Jnum]["J14"]["-30"]+1},
            {source:0,target:4,value:1/data[step][Jnum]["J14"]["-40"]+1},
            {source:0,target:5,value:1/data[step][Jnum]["J22"]["-10"]+1},
            {source:0,target:6,value:1/data[step][Jnum]["J22"]["-20"]+1},
            {source:0,target:7,value:1/data[step][Jnum]["J22"]["-30"]+1},
            {source:0,target:8,value:1/data[step][Jnum]["J22"]["-40"]+1}]*/
    }

    if (Jnum=="J22"){
        nodes = [{name:'J22'}, 
        {name:'J21:-10'}, {name:'J21:-20'}, {name:'J21:-30'}, {name:'J21:-40'}, 
        {name:'J23:-10'}, {name:'J23:-20'}, {name:'J23:-30'}, {name:'J23:-40'}]
        dataArray = [data[step][Jnum]["J21"]["-10"],data[step][Jnum]["J21"]["-20"],
                        data[step][Jnum]["J21"]["-30"],data[step][Jnum]["J21"]["-40"],
                        data[step][Jnum]["J23"]["-10"],data[step][Jnum]["J23"]["-20"],
                        data[step][Jnum]["J23"]["-30"],data[step][Jnum]["J23"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]}]
    }

    if (Jnum=="J16"){
        nodes = [{name:'J16'}, 
        {name:'J11:-10'}, {name:'J11:-20'}, {name:'J11:-30'}, {name:'J11:-40'}, 
        {name:'J18:-10'}, {name:'J18:-20'}, {name:'J18:-30'}, {name:'J18:-40'}]
        dataArray = [data[step][Jnum]["J11"]["-10"],data[step][Jnum]["J11"]["-20"],
                        data[step][Jnum]["J11"]["-30"],data[step][Jnum]["J11"]["-40"],
                        data[step][Jnum]["J18"]["-10"],data[step][Jnum]["J18"]["-20"],
                        data[step][Jnum]["J18"]["-30"],data[step][Jnum]["J18"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]}]
    }

    if (Jnum=="J11"){
        nodes = [{name:'J11'}, 
        {name:'J09:-10'}, {name:'J09:-20'}, {name:'J09:-30'}, {name:'J09:-40'}, 
        {name:'J16:-10'}, {name:'J16:-20'}, {name:'J16:-30'}, {name:'J16:-40'}]
        dataArray = [data[step][Jnum]["J09"]["-10"],data[step][Jnum]["J09"]["-20"],
                        data[step][Jnum]["J09"]["-30"],data[step][Jnum]["J09"]["-40"],
                        data[step][Jnum]["J16"]["-10"],data[step][Jnum]["J16"]["-20"],
                        data[step][Jnum]["J16"]["-30"],data[step][Jnum]["J16"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]}]
    }
    
    if (Jnum=="J06"){
        nodes = [{name:'J06'}, 
        {name:'J07:-10'}, {name:'J07:-20'}, {name:'J07:-30'}, {name:'J07:-40'}, 
        {name:'J14:-10'}, {name:'J14:-20'}, {name:'J14:-30'}, {name:'J14:-40'}]
        dataArray = [data[step][Jnum]["J07"]["-10"],data[step][Jnum]["J07"]["-20"],
                        data[step][Jnum]["J07"]["-30"],data[step][Jnum]["J07"]["-40"],
                        data[step][Jnum]["J14"]["-10"],data[step][Jnum]["J14"]["-20"],
                        data[step][Jnum]["J14"]["-30"],data[step][Jnum]["J14"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]}]
    }

    if (Jnum=="J09"){
        nodes = [{name:'J09'}, 
        {name:'J08:-10'}, {name:'J08:-20'}, {name:'J08:-30'}, {name:'J08:-40'}, 
        {name:'J11:-10'}, {name:'J11:-20'}, {name:'J11:-30'}, {name:'J11:-40'}]
        dataArray = [data[step][Jnum]["J08"]["-10"],data[step][Jnum]["J08"]["-20"],
                        data[step][Jnum]["J08"]["-30"],data[step][Jnum]["J08"]["-40"],
                        data[step][Jnum]["J11"]["-10"],data[step][Jnum]["J11"]["-20"],
                        data[step][Jnum]["J11"]["-30"],data[step][Jnum]["J11"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]}]
    }

    if (Jnum=="J23"){
        nodes = [{name:'J23'}, 
        {name:'J15:-10'}, {name:'J15:-20'}, {name:'J15:-30'}, {name:'J15:-40'}, 
        {name:'J18:-10'}, {name:'J18:-20'}, {name:'J18:-30'}, {name:'J18:-40'},
        {name:'J22:-10'}, {name:'J22:-20'}, {name:'J22:-30'}, {name:'J22:-40'}
    ]
        dataArray = [data[step][Jnum]["J15"]["-10"],data[step][Jnum]["J15"]["-20"],
                        data[step][Jnum]["J15"]["-30"],data[step][Jnum]["J15"]["-40"],
                        data[step][Jnum]["J18"]["-10"],data[step][Jnum]["J18"]["-20"],
                        data[step][Jnum]["J18"]["-30"],data[step][Jnum]["J18"]["-40"],
                        data[step][Jnum]["J22"]["-10"],data[step][Jnum]["J22"]["-20"],
                        data[step][Jnum]["J22"]["-30"],data[step][Jnum]["J22"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]},
            {source:0,target:9,value:normalizedArray[8]},
            {source:0,target:10,value:normalizedArray[9]},
            {source:0,target:11,value:normalizedArray[10]},
            {source:0,target:12,value:normalizedArray[11]}]
    }

    if (Jnum=="J18"){
        nodes = [{name:'J18'}, 
        {name:'J08:-10'}, {name:'J08:-20'}, {name:'J08:-30'}, {name:'J08:-40'}, 
        {name:'J16:-10'}, {name:'J16:-20'}, {name:'J16:-30'}, {name:'J16:-40'},
        {name:'J23:-10'}, {name:'J23:-20'}, {name:'J23:-30'}, {name:'J23:-40'}
    ]
        dataArray = [data[step][Jnum]["J08"]["-10"],data[step][Jnum]["J08"]["-20"],
                        data[step][Jnum]["J08"]["-30"],data[step][Jnum]["J08"]["-40"],
                        data[step][Jnum]["J16"]["-10"],data[step][Jnum]["J16"]["-20"],
                        data[step][Jnum]["J16"]["-30"],data[step][Jnum]["J16"]["-40"],
                        data[step][Jnum]["J23"]["-10"],data[step][Jnum]["J23"]["-20"],
                        data[step][Jnum]["J23"]["-30"],data[step][Jnum]["J23"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]},
            {source:0,target:9,value:normalizedArray[8]},
            {source:0,target:10,value:normalizedArray[9]},
            {source:0,target:11,value:normalizedArray[10]},
            {source:0,target:12,value:normalizedArray[11]}]
    }

    if (Jnum=="J14"){
        nodes = [{name:'J14'}, 
        {name:'J06:-10'}, {name:'J06:-20'}, {name:'J06:-30'}, {name:'J06:-40'}, 
        {name:'J15:-10'}, {name:'J15:-20'}, {name:'J15:-30'}, {name:'J15:-40'},
        {name:'J21:-10'}, {name:'J21:-20'}, {name:'J21:-30'}, {name:'J21:-40'}
    ]
        dataArray = [data[step][Jnum]["J06"]["-10"],data[step][Jnum]["J06"]["-20"],
                        data[step][Jnum]["J06"]["-30"],data[step][Jnum]["J06"]["-40"],
                        data[step][Jnum]["J15"]["-10"],data[step][Jnum]["J15"]["-20"],
                        data[step][Jnum]["J15"]["-30"],data[step][Jnum]["J15"]["-40"],
                        data[step][Jnum]["J21"]["-10"],data[step][Jnum]["J21"]["-20"],
                        data[step][Jnum]["J21"]["-30"],data[step][Jnum]["J21"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]},
            {source:0,target:9,value:normalizedArray[8]},
            {source:0,target:10,value:normalizedArray[9]},
            {source:0,target:11,value:normalizedArray[10]},
            {source:0,target:12,value:normalizedArray[11]}]
    }

    if (Jnum=="J15"){
        nodes = [{name:'J15'}, 
        {name:'J07:-10'}, {name:'J07:-20'}, {name:'J07:-30'}, {name:'J07:-40'}, 
        {name:'J14:-10'}, {name:'J14:-20'}, {name:'J14:-30'}, {name:'J14:-40'},
        {name:'J23:-10'}, {name:'J23:-20'}, {name:'J23:-30'}, {name:'J23:-40'}
    ]
        dataArray = [data[step][Jnum]["J07"]["-10"],data[step][Jnum]["J07"]["-20"],
                        data[step][Jnum]["J07"]["-30"],data[step][Jnum]["J07"]["-40"],
                        data[step][Jnum]["J14"]["-10"],data[step][Jnum]["J14"]["-20"],
                        data[step][Jnum]["J14"]["-30"],data[step][Jnum]["J14"]["-40"],
                        data[step][Jnum]["J23"]["-10"],data[step][Jnum]["J23"]["-20"],
                        data[step][Jnum]["J23"]["-30"],data[step][Jnum]["J23"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]},
            {source:0,target:9,value:normalizedArray[8]},
            {source:0,target:10,value:normalizedArray[9]},
            {source:0,target:11,value:normalizedArray[10]},
            {source:0,target:12,value:normalizedArray[11]}]
    }

    if (Jnum=="J07"){
        nodes = [{name:'J07'}, 
        {name:'J06:-10'}, {name:'J06:-20'}, {name:'J06:-30'}, {name:'J06:-40'}, 
        {name:'J08:-10'}, {name:'J08:-20'}, {name:'J08:-30'}, {name:'J08:-40'},
        {name:'J15:-10'}, {name:'J15:-20'}, {name:'J15:-30'}, {name:'J15:-40'}
    ]
        dataArray = [data[step][Jnum]["J06"]["-10"],data[step][Jnum]["J06"]["-20"],
                        data[step][Jnum]["J06"]["-30"],data[step][Jnum]["J06"]["-40"],
                        data[step][Jnum]["J08"]["-10"],data[step][Jnum]["J08"]["-20"],
                        data[step][Jnum]["J08"]["-30"],data[step][Jnum]["J08"]["-40"],
                        data[step][Jnum]["J15"]["-10"],data[step][Jnum]["J15"]["-20"],
                        data[step][Jnum]["J15"]["-30"],data[step][Jnum]["J15"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]},
            {source:0,target:9,value:normalizedArray[8]},
            {source:0,target:10,value:normalizedArray[9]},
            {source:0,target:11,value:normalizedArray[10]},
            {source:0,target:12,value:normalizedArray[11]}]
    }

    if (Jnum=="J08"){
        nodes = [{name:'J08'}, 
        {name:'J07:-10'}, {name:'J07:-20'}, {name:'J07:-30'}, {name:'J07:-40'}, 
        {name:'J09:-10'}, {name:'J09:-20'}, {name:'J09:-30'}, {name:'J09:-40'},
        {name:'J18:-10'}, {name:'J18:-20'}, {name:'J18:-30'}, {name:'J18:-40'}
    ]
        dataArray = [data[step][Jnum]["J07"]["-10"],data[step][Jnum]["J07"]["-20"],
                        data[step][Jnum]["J07"]["-30"],data[step][Jnum]["J07"]["-40"],
                        data[step][Jnum]["J09"]["-10"],data[step][Jnum]["J09"]["-20"],
                        data[step][Jnum]["J09"]["-30"],data[step][Jnum]["J09"]["-40"],
                        data[step][Jnum]["J18"]["-10"],data[step][Jnum]["J18"]["-20"],
                        data[step][Jnum]["J18"]["-30"],data[step][Jnum]["J18"]["-40"]]
        datamax = getmax(dataArray)
        datamin = getmin(dataArray)
        normalizedArray = normalization(dataArray,datamin,datamax)
        edges = [
            {source:0,target:1,value:normalizedArray[0]},
            {source:0,target:2,value:normalizedArray[1]},
            {source:0,target:3,value:normalizedArray[2]},
            {source:0,target:4,value:normalizedArray[3]},
            {source:0,target:5,value:normalizedArray[4]},
            {source:0,target:6,value:normalizedArray[5]},
            {source:0,target:7,value:normalizedArray[6]},
            {source:0,target:8,value:normalizedArray[7]},
            {source:0,target:9,value:normalizedArray[8]},
            {source:0,target:10,value:normalizedArray[9]},
            {source:0,target:11,value:normalizedArray[10]},
            {source:0,target:12,value:normalizedArray[11]}]
    }
    //console.log(nodes);
    //console.log(edges);
    //设置一个colorScale，为了让不同的扇形呈现不同的颜色
    var colorScale = [d3.rgb('#eeced1'), 
                    d3.rgb('#95b196'), d3.rgb('#a1b99d'), d3.rgb('#a6cba9'), d3.rgb('#c2d2b5'),
                    d3.rgb('#7e97ad'), d3.rgb('#99a5bf'), d3.rgb('#b1c2d6'), d3.rgb('#c1cbd7'), 
                    d3.rgb('#9a8fab'), d3.rgb('#c8bfd0'), d3.rgb('#d6c7d9'), d3.rgb('#e7e2e8'), 
                    d3.rgb('#939391'), d3.rgb('#a6a5aa'), d3.rgb('#bfbfbf'), d3.rgb('#dcdcdc')
                    ]
    
    var colorScale_Edge = [
					d3.rgb('#95b196'), d3.rgb('#a1b99d'), d3.rgb('#a6cba9'), d3.rgb('#c2d2b5'),
					d3.rgb('#7e97ad'), d3.rgb('#99a5bf'), d3.rgb('#b1c2d6'), d3.rgb('#c1cbd7'), 
					d3.rgb('#9a8fab'), d3.rgb('#c8bfd0'), d3.rgb('#d6c7d9'), d3.rgb('#e7e2e8'), 
                    d3.rgb('#939391'), d3.rgb('#a6a5aa'), d3.rgb('#bfbfbf'), d3.rgb('#dcdcdc')
					]                
    //新建一个力导向图
    var forceSimulation = d3.forceSimulation()
        .force("link",d3.forceLink())
        .force("charge",d3.forceManyBody())
        .force("center",d3.forceCenter());
        
    //初始化力导向图，也就是传入数据
    //生成节点数据
    forceSimulation.nodes(nodes)
        .on("tick",ticked);//这个函数很重要，后面给出具体实现和说明
    //生成边数据
    forceSimulation.force("link")
        .links(edges)
        .distance(function(d){//每一边的长度
            return d.value*80;
        })    	
    // 设置图形的中心位置	
    forceSimulation.force("center")
        .x(width/2)
        .y(height/2);
    // 浏览器的控制台输出
    // console.log(nodes);
    // console.log(edges);
    
    // 绘制边
    var links = g.append("g")
        .selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .attr("stroke",function(d,i){
            return colorScale_Edge[i];
        })
        .attr("stroke-width",1);
    var linksText = g.append("g")
        .selectAll("text")
        .data(edges)
        .enter()
        .append("text")
        .text(function(d){
            return d.relation;
        })
    
    // 绘制节点
    // 为节点和节点上的文字分组
    var gs = g.selectAll(".circleText")
        .data(nodes)
        .enter()
        .append("g")
        .attr("transform",function(d,i){
            var cirX = d.x;
            var cirY = d.y;
            return "translate("+cirX+","+cirY+")";
        })
        .call(d3.drag()
            .on("start",started)
            .on("drag",dragged)
            .on("end",ended)
        );
        
    //绘制节点
    gs.append("circle")
        .attr("r",10)
        .attr("fill",function(d,i){
            return colorScale[i];
        })
    //文字
    gs.append("text")
        .attr("x",-10)
        .attr("y",-20)
        .attr("dy",10)
        .style("font-family", "Times New Roman")
        .text(function(d){
            return d.name;
        })
    
    function ticked(){
        links
            .attr("x1",function(d){return d.source.x;})
            .attr("y1",function(d){return d.source.y;})
            .attr("x2",function(d){return d.target.x;})
            .attr("y2",function(d){return d.target.y;});
            
        linksText
            .attr("x",function(d){
            return (d.source.x+d.target.x)/2;
        })
        .attr("y",function(d){
            return (d.source.y+d.target.y)/2;
        });
            
        gs
            .attr("transform",function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
    function started(d){
        if(!d3.event.active){
            forceSimulation.alphaTarget(0.8).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(d){
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function ended(d){
        if(!d3.event.active){
            forceSimulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
    }
}

DrawFDG.prototype.clear = function(){
    this.svg.selectAll("circle").remove();
    this.svg.selectAll("line").remove();
    this.svg.selectAll("text").remove();

}

export default DrawFDG
