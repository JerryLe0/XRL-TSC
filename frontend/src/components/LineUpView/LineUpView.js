// /* global d3 $ */
import dataService from '../../service/dataService.js'
import DrawLineUp from './drawLineUp.js'
import globalConfig from '../../service/globalConfig.js'
import pipeService from '../../service/pipeService'

export default {
    name: 'LineUpView',
    components: {
    },
    props: {
        videoId: String,
        videoData: Object
    },
    data() {
        return {
            containerId: 'lineUpContainer',   //此处记得改
            modelName: globalConfig.defaultModelname,
        }
    },
    watch: {

    },
    methods: {
        clearLineUp(){
            this.DrawLineUp.clearLineUp()
        },
        redrawLineUp(){
            this.DrawLineUp.clearLineUp()
            if (this.modelName == 'MADDPG'){
                dataService.MADDPG_LineUpData((callback) => {
                    const data = callback.data
                    this.DrawLineUp.layout(data);
                })
            }
    
            if (this.modelName == 'DQN'){
                dataService.DQN_LineUpData((callback) => {
                    const data = callback.data
                    this.DrawLineUp.layout(data);
                })
            }
    
            if (this.modelName == 'Colight'){
                dataService.Colight_LineUpData((callback) => {
                    const data = callback.data
                    this.DrawLineUp.layout(data);
                })
            }
        },
    },

    mounted: function () {
        this.DrawLineUp = new DrawLineUp(this.containerId)

        // 新增
        pipeService.onmodelName((msg) => {   //接收信号
            console.log("LineUpView收到来自ModelView的modelName:", msg);
            this.modelName=msg;
        })

    }
}
