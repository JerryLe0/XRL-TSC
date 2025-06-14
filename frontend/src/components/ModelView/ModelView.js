// /* global d3 $ */
import drawModel from './drawModel.js'
import dataService from '../../service/dataService.js'
import pipeService from '../../service/pipeService.js'
import globalConfig from '../../service/globalConfig.js'

export default {
    name: 'ModelView',
    components: {
    },
    props: {
        FDGId: String,
        FDGData: Object
    },
    data() {
        return {
            Model_name: globalConfig.defaultModelname,
            Model_name_info: {},
            containerId: 'ModelContainer',
            modelName: globalConfig.defaultModelname,
        }
    },
    
    watch: {
        click_cnt: function(new_click_cnt){
            //接收的参数为变化后的值，如果接收两个参数，一个为新值一个为旧值
            console.log("click",new_click_cnt);
        },

        Model_name: function(selected_modelName) {
            console.log("选中modelName:",selected_modelName)
            pipeService.emitmodelName(selected_modelName)
            this.modelName = selected_modelName
        }
    },

    mounted: function () {
        this.drawModel = new drawModel(this.containerId)
        dataService.modelData((callback) => {
            const data = callback.data
            this.drawModel.layout(data)
        })
    },


    methods: { 
        search(){
            dataService.modelData((callback) => {
                const data = callback.data
                this.drawModel.clear();
                this.drawModel.Model(this.modelName, data)
            })
        },

    },

}