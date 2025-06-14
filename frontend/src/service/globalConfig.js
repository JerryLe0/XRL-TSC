// this file set the global configurations for the whole system

// ----------------- Please configure the settings here --------------------
// const backendServerModes = ['localhost', 'hkust-server', 'aws-server']
// const curServerMode = backendServerModes[2]


const metricColorDict = {
    'mean_episode_reward': '#b6adcc',
    'mean_delay': '#d6c8e1',
    'mean_queue': '#e3bccb',
}

const getMetricColor = function(metric) {
    return metricColorDict[metric]
}

const defaultstartStep = 0
const defaultendStep = 90
const defaultModelname = 'MADDPG'


export default {
    getMetricColor,
    defaultstartStep,
    defaultendStep,
    defaultModelname

}
