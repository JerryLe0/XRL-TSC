import DrawFDG from './drawFDG.js'
import dataService from '../../service/dataService.js'
import pipeService from '../../service/pipeService.js'
import globalConfig from '../../service/globalConfig.js'

export default {
    name: 'FDGView',
    components: {
    },
    props: {
        FDGList: Array,
        FDGId: String,
        FDGData: Object
    },
    data() {
        return {
            Step: "50",
            Jnum: "J06",
            containerId: 'FDGContainer',    //定义内部变量remote_click_cnt
            modelName: globalConfig.defaultModelname,
        }
    },
    watch: {
        Step: function(selected_Step) {
            console.log("选中startStep:",selected_Step)
            this.Step = selected_Step
        },
    },
    methods: {
        redrawFDG(){
            this.draw()
        },

        draw(){
            this.drawFDG.clear()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_intersection_affinityData((callback) => {
                    const data = callback.data
                    //console.log(this.containerId)
                    this.drawFDG.drawFDG(data,this.Step,this.Jnum);    
                    })
                }

            if (this.modelName == 'DQN'){
                dataService.DQN_intersection_affinityData((callback) => {
                    const data = callback.data
                    //console.log(this.containerId)
                    this.drawFDG.drawFDG(data,this.Step,this.Jnum);    
                    })
                }

            if (this.modelName == 'Colight'){
                dataService.Colight_intersection_affinityData((callback) => {
                    const data = callback.data
                    //console.log(this.containerId)
                    //this.drawFDG.clear()
                    this.drawFDG.drawFDG(data,this.Step,this.Jnum);    
                    })
                }
        }
    },
    
    mounted: function () {
        this.drawFDG = new DrawFDG(this.containerId)

        

        // 新增
        pipeService.onmodelName((msg) => {   //接收信号
            console.log("FDGView收到来自ModelView的modelName:", msg);
            this.modelName=msg;
        })


        pipeService.on_J21((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J21",msg);
            this.Jnum = "J21"
            //this.draw()
        })

        pipeService.on_J22((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J22",msg);
            this.Jnum = "J22"
            //this.draw()
        })
        
        pipeService.on_J23((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J23",msg);
            this.Jnum = "J23"
            //this.draw()
        })

        pipeService.on_J18((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J18",msg);
            this.Jnum = "J18"
            //this.draw()
        })

        pipeService.on_J16((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J16",msg);
            this.Jnum = "J16"
            //this.draw()
        })
        
        pipeService.on_J15((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J15",msg);
            this.Jnum = "J15"
            //this.draw()
        })

        pipeService.on_J14((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J14",msg);
            this.Jnum = "J14"
            //this.draw()
        })

        pipeService.on_J11((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J11",msg);
            this.Jnum = "J11"
            //this.draw()
        })

        pipeService.on_J09((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J09",msg);
            this.Jnum = "J09"
            //this.draw()
        })
        
        pipeService.on_J08((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J08",msg);
            this.Jnum = "J08"
            //this.draw()
        })

        pipeService.on_J07((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J07",msg);
            this.Jnum = "J07"
            //this.draw()
        })
        
        pipeService.on_J06((msg) => {   //接收信号
            console.log("FDGView收到来自NetworkView的msg: J06",msg);
            this.Jnum = "J06"
            //this.draw()
        })
        

    }
}
