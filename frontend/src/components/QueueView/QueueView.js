// /* global d3 $ */
import DrawQueue from './drawQueue.js'
import dataService from '../../service/dataService.js'
import pipeService from '../../service/pipeService.js'
import globalConfig from '../../service/globalConfig.js'

export default {
    name: 'QueueView',
    components: {
    },
    props: {
        videoId: String,
        videoData: Object
    },
    data() {
        return {
            containerId: 'QueueContainer',   // 此处记得改
            click_J21: 0,
            click_J22: 0,
            click_J23: 0,
            click_J18: 0,
            click_J16: 0,
            click_J15: 0,
            click_J14: 0,
            click_J11: 0,
            click_J09: 0,
            click_J08: 0,
            click_J07: 0,
            click_J06: 0,
            startstep: 0,
            endstep:0,
            modelName: globalConfig.defaultModelname,
        }
    },
    
    watch: {
        click_cnt: function(new_click_cnt){
            //接收的参数为变化后的值，如果接收两个参数，一个为新值一个为旧值
            console.log("click",new_click_cnt);
        }
    },

    mounted: function () {
        // 新增
        pipeService.onmodelName((msg) => {   //接收信号
            console.log("CrossroadsView收到来自ModelView的modelName:", msg);
            this.modelName=msg;
        })

        this.drawQueue = new DrawQueue(this.containerId)
        pipeService.onstartStep((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的startStep:",msg);
            this.startstep=msg;
        })
        
        pipeService.onendStep((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的endStep:",msg);
            this.endstep=msg;
        })
        
        pipeService.on_J21((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J21, 开始画图",msg);
        //pipeService.onstartStep((msg) => {   //接收信号
        //    console.log("CrossroadsView收到来自NetworkView的startStep:",msg);
        //})
            this.J21()
        })

        pipeService.on_J22((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J22, 开始画图",msg);
            this.J22()
        })
        
        pipeService.on_J23((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J23, 开始画图",msg);
            this.J23()
        })

        pipeService.on_J18((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J18, 开始画图",msg);
            this.J18()
        })

        pipeService.on_J16((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J16, 开始画图",msg);
            this.J16()
        })
        
        pipeService.on_J15((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J15, 开始画图",msg);
            this.J15()
        })

        pipeService.on_J14((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J14, 开始画图",msg);
            this.J14()
        })

        pipeService.on_J11((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J11, 开始画图",msg);
            this.J11()
        })

        pipeService.on_J09((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J09, 开始画图",msg);
            this.J09()
        })
        
        pipeService.on_J08((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J08, 开始画图",msg);
            this.J08()
        })

        pipeService.on_J07((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J07, 开始画图",msg);
            this.J07()
        })
        
        pipeService.on_J06((msg) => {   //接收信号
            console.log("CrossroadsView收到来自NetworkView的msg: J06, 开始画图",msg);
            this.J06()
        })

    },


    methods: { 
        clearQueue(){
            this.drawQueue.clear()
        },



        J21(){
            this.click_J21 = this.click_J21 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J21Data((callback) => {
                    const data_J21 = callback.data
                    this.drawQueue.CrossRoads(data_J21,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J21Data((callback) => {
                    const data_J21 = callback.data
                    this.drawQueue.CrossRoads(data_J21,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J21Data((callback) => {
                    const data_J21 = callback.data
                    this.drawQueue.CrossRoads(data_J21,this.startstep,this.endstep)
                })
            }
        },

        J22(){
            this.click_J22 = this.click_J22 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J22Data((callback) => {
                    const data_J22 = callback.data
                    this.drawQueue.TriJ22(data_J22,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J22Data((callback) => {
                    const data_J22 = callback.data
                    this.drawQueue.TriJ22(data_J22,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J22Data((callback) => {
                    const data_J22 = callback.data
                    this.drawQueue.TriJ22(data_J22,this.startstep,this.endstep)
                })
            }
        },

        J23(){
            this.click_J23 = this.click_J23 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J23Data((callback) => {
                    const data_J23 = callback.data
                    this.drawQueue.QuaJ23(data_J23,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J23Data((callback) => {
                    const data_J23 = callback.data
                    this.drawQueue.QuaJ23(data_J23,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J23Data((callback) => {
                    const data_J23 = callback.data
                    this.drawQueue.QuaJ23(data_J23,this.startstep,this.endstep)
                })
            }
        },

        J18(){
            this.click_18 = this.click_18 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J18Data((callback) => {
                    const data_J18 = callback.data
                    this.drawQueue.TriJ18(data_J18,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J18Data((callback) => {
                    const data_J18 = callback.data
                    this.drawQueue.TriJ18(data_J18,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J18Data((callback) => {
                    const data_J18 = callback.data
                    this.drawQueue.TriJ18(data_J18,this.startstep,this.endstep)
                })
            }
        },

        J16(){
            this.click_J16 = this.click_J16 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J16Data((callback) => {
                    const data_J16 = callback.data
                    this.drawQueue.CrossRoads(data_J16,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J16Data((callback) => {
                    const data_J16 = callback.data
                    this.drawQueue.CrossRoads(data_J16,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J16Data((callback) => {
                    const data_J16 = callback.data
                    this.drawQueue.CrossRoads(data_J16,this.startstep,this.endstep)
                })
            }
        },

        J15(){
            this.click_J15 = this.click_J15 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J15Data((callback) => {
                    const data_J15 = callback.data
                    this.drawQueue.TriJ15(data_J15,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J15Data((callback) => {
                    const data_J15 = callback.data
                    this.drawQueue.TriJ15(data_J15,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J15Data((callback) => {
                    const data_J15 = callback.data
                    this.drawQueue.TriJ15(data_J15,this.startstep,this.endstep)
                })
            }
        },

        J14(){
            this.click_J14 = this.click_J14 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J14Data((callback) => {
                    const data_J14 = callback.data
                    this.drawQueue.CrossRoads(data_J14,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J14Data((callback) => {
                    const data_J14 = callback.data
                    this.drawQueue.CrossRoads(data_J14,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J14Data((callback) => {
                    const data_J14 = callback.data
                    this.drawQueue.CrossRoads(data_J14,this.startstep,this.endstep)
                })
            }
        },
        
        J11(){
            this.click_J11 = this.click_J11 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J11Data((callback) => {
                    const data_J11 = callback.data
                    this.drawQueue.TriJ11(data_J11,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J11Data((callback) => {
                    const data_J11 = callback.data
                    this.drawQueue.TriJ11(data_J11,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J11Data((callback) => {
                    const data_J11 = callback.data
                    this.drawQueue.TriJ11(data_J11,this.startstep,this.endstep)
                })
            }
            
        },

        J09(){
            this.click_J09 = this.click_J09 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J09Data((callback) => {
                    const data_J09 = callback.data
                    this.drawQueue.CrossRoads(data_J09,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J09Data((callback) => {
                    const data_J09 = callback.data
                    this.drawQueue.CrossRoads(data_J09,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J09Data((callback) => {
                    const data_J09 = callback.data
                    this.drawQueue.CrossRoads(data_J09,this.startstep,this.endstep)
                })
            }
            
        },

        J08(){
            this.click_J08 = this.click_J08 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J08Data((callback) => {
                    const data_J08 = callback.data
                    this.drawQueue.CrossRoads(data_J08,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J08Data((callback) => {
                    const data_J08 = callback.data
                    this.drawQueue.CrossRoads(data_J08,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J08Data((callback) => {
                    const data_J08 = callback.data
                    this.drawQueue.CrossRoads(data_J08,this.startstep,this.endstep)
                })
            }
            
        },

        J07(){
            this.click_J07 = this.click_J07 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J07Data((callback) => {
                    const data_J07 = callback.data
                    this.drawQueue.CrossRoads(data_J07,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J07Data((callback) => {
                    const data_J07 = callback.data
                    this.drawQueue.CrossRoads(data_J07,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J07Data((callback) => {
                    const data_J07 = callback.data
                    this.drawQueue.CrossRoads(data_J07,this.startstep,this.endstep)
                })
            }
            
        },

        J06(){
            this.click_J06 = this.click_J06 + 1;
            //this.drawQueue = new DrawQueue(this.containerId)
            // 导入强化学习模型训练结果
            this.drawQueue.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_J06Data((callback) => {
                    const data_J06 = callback.data
                    this.drawQueue.CrossRoads(data_J06,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'DQN'){
                dataService.DQN_J06Data((callback) => {
                    const data_J06 = callback.data
                    this.drawQueue.CrossRoads(data_J06,this.startstep,this.endstep)
                })
            }

            if (this.modelName == 'Colight'){
                dataService.Colight_J06Data((callback) => {
                    const data_J06 = callback.data
                    this.drawQueue.CrossRoads(data_J06,this.startstep,this.endstep)
                })
            }
            
        },
    },

}