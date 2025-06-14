//import Vue from 'vue'
import mitt from 'mitt'

const bus = mitt()

var pipeService = {
    
    Draw_J21: 'J21',   //信号名称
    Draw_J22: 'J22',
    Draw_J23: 'J23',
    Draw_J18: 'J18',
    Draw_J16: 'J16',
    Draw_J15: 'J15',
    Draw_J14: 'J14',
    Draw_J11: 'J11',
    Draw_J09: 'J09',
    Draw_J08: 'J08',
    Draw_J07: 'J07',
    Draw_J06: 'J06',
    startStep: 'startStep',
    endStep: 'endStep',
    // 新增
    modelName: 'modelName',

    // 新增
    emitmodelName: function (msg) {
        bus.emit(this.modelName, msg)
    },

    onmodelName: function(callback) {
        bus.on(this.modelName, function (msg) {
            callback(msg)
        })
    },

    emitstartStep: function (msg) {
        bus.emit(this.startStep, msg)
    },
    onstartStep: function(callback) {
        bus.on(this.startStep, function (msg) {
            callback(msg)
        })
    },

    emitendStep: function (msg) {
        bus.emit(this.endStep, msg)
    },
    onendStep: function(callback) {
        bus.on(this.endStep, function (msg) {
            callback(msg)
        })
    },
 
    emit_J21: function (msg) {
        bus.emit(this.Draw_J21, msg)
    },
    on_J21: function(callback) {
        bus.on(this.Draw_J21, function (msg) {
            callback(msg)
        })
    }, 

    emit_J22: function (msg) {
        bus.emit(this.Draw_J22, msg)
    },
    on_J22: function(callback) {
        bus.on(this.Draw_J22, function (msg) {
            callback(msg)
        })
    }, 

    emit_J23: function (msg) {
        bus.emit(this.Draw_J23, msg)
    },
    on_J23: function(callback) {
        bus.on(this.Draw_J23, function (msg) {
            callback(msg)
        })
    }, 

    emit_J18: function (msg) {
        bus.emit(this.Draw_J18, msg)
    },
    on_J18: function(callback) {
        bus.on(this.Draw_J18, function (msg) {
            callback(msg)
        })
    }, 

    emit_J16: function (msg) {
        bus.emit(this.Draw_J16, msg)
    },
    on_J16: function(callback) {
        bus.on(this.Draw_J16, function (msg) {
            callback(msg)
        })
    }, 

    emit_J15: function (msg) {
        bus.emit(this.Draw_J15, msg)
    },
    on_J15: function(callback) {
        bus.on(this.Draw_J15, function (msg) {
            callback(msg)
        })
    }, 

    emit_J14: function (msg) {
        bus.emit(this.Draw_J14, msg)
    },
    on_J14: function(callback) {
        bus.on(this.Draw_J14, function (msg) {
            callback(msg)
        })
    }, 

    emit_J11: function (msg) {
        bus.emit(this.Draw_J11, msg)
    },
    on_J11: function(callback) {
        bus.on(this.Draw_J11, function (msg) {
            callback(msg)
        })
    }, 

    emit_J09: function (msg) {
        bus.emit(this.Draw_J09, msg)
    },
    on_J09: function(callback) {
        bus.on(this.Draw_J09, function (msg) {
            callback(msg)
        })
    }, 

    emit_J08: function (msg) {
        bus.emit(this.Draw_J08, msg)
    },
    on_J08: function(callback) {
        bus.on(this.Draw_J08, function (msg) {
            callback(msg)
        })
    }, 

    emit_J07: function (msg) {
        bus.emit(this.Draw_J07, msg)
    },
    on_J07: function(callback) {
        bus.on(this.Draw_J07, function (msg) {
            callback(msg)
        })
    }, 

    emit_J06: function (msg) {
        bus.emit(this.Draw_J06, msg)
    },
    on_J06: function(callback) {
        bus.on(this.Draw_J06, function (msg) {
            callback(msg)
        })
    }, 
}

export default pipeService

