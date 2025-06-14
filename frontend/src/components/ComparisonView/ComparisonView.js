// /* global d3 $ */
import drawComparison from './drawComparison.js'
import dataService from '../../service/dataService.js'
import pipeService from '../../service/pipeService.js'

export default {
    name: 'ComparisonView',
    components: {
    },
    props: {
        FDGId: String,
        FDGData: Object
    },
    data() {
        return {
            containerId: 'ComparisonContainer',   //此处记得改
            startstep: 0,
            endstep:0
        }
    },
    
    watch: {
        click_cnt: function(new_click_cnt){
            //接收的参数为变化后的值，如果接收两个参数，一个为新值一个为旧值
            console.log("click",new_click_cnt);
        }
    },

    mounted: function () {
        this.drawComparison = new drawComparison(this.containerId)
        //this.drawComparison.Comparison()
        //pipeService.onstartStep((msg) => {   //接收信号
        //    console.log("CrossroadsView收到来自NetworkView的startStep:",msg);
        //    this.startstep=msg;
        //})
        
        //pipeService.onendStep((msg) => {   //接收信号
        //    console.log("CrossroadsView收到来自NetworkView的endStep:",msg);
        //    this.endstep=msg;
        //})
    },


    methods: {
        clearComparison(){
            this.drawComparison.clearComparison()
        },
        
        redrawComparison(){
            this.drawComparison.clearComparison()       
            //dataService.J21Data((callback) => {
                //const data_J21 = callback.data
                //console.log(this.containerId)
            this.drawComparison.Comparison()
            //})
            },

        },
    }