<template>
  <div id="app" style="width: 1400px">
      <nav class="navbar sticky-top navbar-dark bg-dark" style="padding-top: 1px; padding-bottom: 1px; margin-bottom: 5px;">
          <div style="margin-top:5px; margin-left: 5px;">
              <span style="color:white; font-size:1.8rem; font-weight: bold; font-family:'Times New Roman', Times, serif; user-select: none">Explainable Multi-agent Reinforcement Learning System for Traffic Signal Control</span>
          </div>
      </nav>
      <div class="container-fluid" style="padding-left: 5px; padding-right: 5px">
          <div class="row" style="margin-left: 10px; margin-right: 10px">
            <div class="col-2 content" style="padding-left: 3px; padding-right: 3px">
              <ModelView></ModelView>
            </div>  
            <div class="col-10 content" style="padding-left: 3px; padding-right: 3px">
              <ComparisonView></ComparisonView>
            </div>

            <div class="col-6 content" style="padding-left: 3px; padding-right: 3px">
              <NetworkView></NetworkView>
              <QueueView></QueueView>
            </div>
            <div class="col-6 content" style="padding-left: 3px; padding-right: 3px">
              <LineUpView></LineUpView>
              <FDGView></FDGView>
            </div>

          </div>
      </div>      
  </div>
</template>

<script>
import dataService from './service/dataService.js'
/* global d3 $ _ */
import ModelView from './components/ModelView/modelView.vue'
import ComparisonView from './components/ComparisonView/ComparisonView.vue'
import FDGView from './components/FDGView/FDGView.vue'
import NetworkView from './components/NetworkView/NetworkView.vue'
import LineUpView from './components/LineUpView/LineUpView.vue'
import QueueView from './components/QueueView/QueueView.vue'


// import zytView from './components/zytView/zytView.vue'    //引入components

export default {
  name: 'app',
  components: {
    LineUpView,
    NetworkView,
    FDGView,
    QueueView,
    ComparisonView,
    ModelView,
  },
  data() {
    return {
        FDGList: [],
        FDGId: 'oceans',
        FDGData: {}
    }
  },
  mounted: function () {
    // this.$nextTick(() => {
    //   dataService.initialization(this.FDGId, (data) => {
    //     console.log('testing: ', data['data']) /* eslint-disable-line */
    //   })
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #808080; */
  width: 100%;
  margin: 0 auto;
}

.container {
  width: 100%;
  padding: 5px 5px 5px 5px;
}

.content {
  padding: 2px 2px 2px 2px;
}

footer {
  margin-left: 5px;
}

.title {
    font-size: 1.25em;
    font-weight: 400;
}
</style>
