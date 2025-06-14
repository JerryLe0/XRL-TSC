import axios from 'axios'

const GET_REQUEST = 'get'
const POST_REQUEST = 'post'
const dataServerUrl = process.env.DATA_SERVER_URL || 'http://127.0.0.1:5010'

function request(url, params, type, callback) {
    let func
    if (type === GET_REQUEST) {
        func = axios.get
    } else if (type === POST_REQUEST) {
        func = axios.post
    }

    func(url, params).then((response) => {
        if (response.status === 200) {
            callback(response)
        } else {
            console.error(response) /* eslint-disable-line */
        }
    })
    .catch((error) => {
        console.error(error) /* eslint-disable-line */
    })
}

function initialization(videoId, callback) {
    const url = `${dataServerUrl}/initialization/${videoId}`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function videoData(videoId, callback) {
    const url = `${dataServerUrl}/video/${videoId}`
    const params = {}
    request(url, params, GET_REQUEST, callback)   
}

function poseData(videoId, callback) {
    const url = `${dataServerUrl}/pose/${videoId}`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function videoInfo(videoId, callback) {
    const url = `${dataServerUrl}/videoInfo/${videoId}`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function visionData(videoId, callback) {
    const url = `${dataServerUrl}/video/${videoId}`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function audioData(videoId, interval, sliding_speed, callback) {
    const url = `${dataServerUrl}/audio/${videoId}/${interval}/${sliding_speed}`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function textData(videoId, callback) {
    const url = `${dataServerUrl}/text/${videoId}`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function barchartData(callback) {
    const url = `${dataServerUrl}/barchart`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function treechartData(callback) {
    const url = `${dataServerUrl}/treechart`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function linechartData(callback) {
    const url = `${dataServerUrl}/linechart`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function zytData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/zytData`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function dailyData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/stock/daily`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

//新增
function modelData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/modelData`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

/*
//本项目
function LineUpData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/LineUpData`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J21Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J21`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J22Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J22`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J23Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J23`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J18Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J18`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J16Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J16`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J15Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J15`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J14Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J14`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J11Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J11`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J09Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J09`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J08Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J08`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J07Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J07`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function J06Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/EachCrossroads/J06`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function NetworkQueueData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/NetworkQueue`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}


function intersection_affinityData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/intersection_affinity`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}
*/
// MADDPG
function MADDPG_LineUpData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/LineUpData`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J21Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J21`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J22Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J22`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J23Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J23`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J18Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J18`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J16Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J16`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J15Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J15`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J14Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J14`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J11Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J11`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J09Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J09`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J08Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J08`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J07Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J07`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_J06Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/EachCrossroads/J06`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_NetworkQueueData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/NetworkQueue`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function MADDPG_intersection_affinityData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/MADDPG/intersection_affinity`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

// DQN
function DQN_LineUpData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/LineUpData`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J21Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J21`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J22Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J22`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J23Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J23`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J18Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J18`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J16Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J16`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J15Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J15`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J14Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J14`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J11Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J11`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J09Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J09`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J08Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J08`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J07Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J07`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_J06Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/EachCrossroads/J06`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_NetworkQueueData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/NetworkQueue`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function DQN_intersection_affinityData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/DQN/intersection_affinity`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

// Colight
function Colight_LineUpData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/LineUpData`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J21Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J21`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J22Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J22`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J23Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J23`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J18Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J18`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J16Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J16`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J15Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J15`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J14Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J14`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J11Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J11`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J09Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J09`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J08Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J08`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J07Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J07`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_J06Data(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/EachCrossroads/J06`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_NetworkQueueData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/NetworkQueue`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}

function Colight_intersection_affinityData(callback) {   //callback为一个函数
    const url = `${dataServerUrl}/Colight/intersection_affinity`
    const params = {}
    request(url, params, GET_REQUEST, callback)
}


export default {
    dataServerUrl,
    initialization,
    videoInfo,
    poseData,
    visionData,
    audioData,
    textData,
    barchartData,
    treechartData,
    linechartData,
    zytData,
    dailyData,
    videoData,
    modelData, //新增
    /*
    LineUpData,  //LineUp
    J21Data,     //交叉口J1
    J22Data,     //交叉口J2
    J23Data,     //交叉口J3
    J18Data,     //交叉口J18
    J16Data,     //交叉口J16
    J15Data,     //交叉口J15
    J14Data,     //交叉口J14
    J11Data,     //交叉口J11
    J09Data,     //交叉口J09
    J08Data,     //交叉口J08
    J07Data,     //交叉口J07
    J06Data,     //交叉口J06
    NetworkQueueData,
    intersection_affinityData,*/

    MADDPG_LineUpData,  //LineUp
    MADDPG_J21Data,     //交叉口J1
    MADDPG_J22Data,     //交叉口J2
    MADDPG_J23Data,     //交叉口J3
    MADDPG_J18Data,     //交叉口J18
    MADDPG_J16Data,     //交叉口J16
    MADDPG_J15Data,     //交叉口J15
    MADDPG_J14Data,     //交叉口J14
    MADDPG_J11Data,     //交叉口J11
    MADDPG_J09Data,     //交叉口J09
    MADDPG_J08Data,     //交叉口J08
    MADDPG_J07Data,     //交叉口J07
    MADDPG_J06Data,     //交叉口J06
    MADDPG_NetworkQueueData,
    MADDPG_intersection_affinityData,

    DQN_LineUpData,  //LineUp
    DQN_J21Data,     //交叉口J1
    DQN_J22Data,     //交叉口J2
    DQN_J23Data,     //交叉口J3
    DQN_J18Data,     //交叉口J18
    DQN_J16Data,     //交叉口J16
    DQN_J15Data,     //交叉口J15
    DQN_J14Data,     //交叉口J14
    DQN_J11Data,     //交叉口J11
    DQN_J09Data,     //交叉口J09
    DQN_J08Data,     //交叉口J08
    DQN_J07Data,     //交叉口J07
    DQN_J06Data,     //交叉口J06
    DQN_NetworkQueueData,
    DQN_intersection_affinityData,

    Colight_LineUpData,  //LineUp
    Colight_J21Data,     //交叉口J1
    Colight_J22Data,     //交叉口J2
    Colight_J23Data,     //交叉口J3
    Colight_J18Data,     //交叉口J18
    Colight_J16Data,     //交叉口J16
    Colight_J15Data,     //交叉口J15
    Colight_J14Data,     //交叉口J14
    Colight_J11Data,     //交叉口J11
    Colight_J09Data,     //交叉口J09
    Colight_J08Data,     //交叉口J08
    Colight_J07Data,     //交叉口J07
    Colight_J06Data,     //交叉口J06
    Colight_NetworkQueueData,
    Colight_intersection_affinityData,

}
