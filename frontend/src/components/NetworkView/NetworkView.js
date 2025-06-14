// /* global d3 $ */
import dataService from '../../service/dataService.js'
import pipeService from '../../service/pipeService.js'
import globalConfig from '../../service/globalConfig.js'
import DrawNetwork from './drawNetwork.js'

export default {
    name: 'NetworkView',
    components: {},
    props: {
        videoId: String,
        videoData: Object
    },
    data() {
        return {
            containerId: 'NetworkContainer',
            startStep: globalConfig.defaultstartStep,
            startStep_info: {},
            endStep: globalConfig.defaultendStep,
            endStep_info: {},
            startstep: 0,
            endstep: 0,
            modelName: globalConfig.defaultModelname,
        }
    },

    watch: {
        startStep: function(selected_startStep) {
            console.log("选中startStep:",selected_startStep)
            pipeService.emitstartStep(selected_startStep)
            this.startstep = selected_startStep
        },
        endStep: function(selected_endStep) {
            console.log("选中endStep:",selected_endStep)
            pipeService.emitendStep(selected_endStep)
            this.endstep = selected_endStep
        }
    },

    mounted: function () {
        // 新增
        pipeService.onmodelName((msg) => {   //接收信号
            console.log("NetworkView收到来自ModelView的modelName:", msg);
            this.modelName=msg;
        })

        //D3路网，作路网各道路拥挤程度图
        this.DrawNetwork = new DrawNetwork()
        this.DrawNetwork.drawInit();   //加载drawInit函数
        this.DrawNetwork.drawNetwork()
    },  

    methods: {
        Start(){
            this.DrawNetwork.clearRect()
            //NetworkQueueData
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_NetworkQueueData((callback) => {
                    const NetworkData = callback.data
                    this.DrawNetwork.NetworkQueuing(this.startstep,this.endstep,NetworkData)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_NetworkQueueData((callback) => {
                    const NetworkData = callback.data
                    this.DrawNetwork.NetworkQueuing(this.startstep,this.endstep,NetworkData)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_NetworkQueueData((callback) => {
                    const NetworkData = callback.data
                    this.DrawNetwork.NetworkQueuing(this.startstep,this.endstep,NetworkData)
                })
            }
            // dataService.NetworkQueueData((callback) => {
            //     const NetworkData = callback.data
            //     this.DrawNetwork.NetworkQueuing(this.startstep,this.endstep,NetworkData)
            // })
        },

        J21(){
            pipeService.emit_J21('J21');
        },
        
        J22(){
            pipeService.emit_J22('J22');
        },
        
        J23(){
            pipeService.emit_J23('J23');
        },

        J18(){
            pipeService.emit_J18('J18');
        },
        
        J16(){
            pipeService.emit_J16('J16');
        },
        
        J15(){
            pipeService.emit_J15('J15');
        },

        J14(){
            pipeService.emit_J14('J14');
        },

        J11(){
            pipeService.emit_J11('J11');
        },
        
        J09(){
            pipeService.emit_J09('J09');
        },
        
        J08(){
            pipeService.emit_J08('J08');
        },

        J07(){
            pipeService.emit_J07('J07');
        },
        
        J06(){
            pipeService.emit_J06('J06');
        },

    },

  

    

}
