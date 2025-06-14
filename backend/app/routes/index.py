'''
    The RESTful style api server
'''
from pprint import pprint

from app import app
from app import dataService

import json
import numpy as np
import os
import re
import logging
import mimetypes
import subprocess

from flask import send_file, request, jsonify, render_template, send_from_directory, Response
from flask_cors import cross_origin

LOG = logging.getLogger(__name__)

MB = 1 << 20
BUFF_SIZE = 10 * MB
# ################################################################################ route
@app.route('/')
def index():
    print('main url!')
    return json.dumps('/')
    # return render_template('index.html')

@app.route('/test')
def test():
    return json.dumps('test')

# 新增
@app.route('/modelData')
def _get_model_info():
    result = dataService.get_model_result()
    return json.dumps(result)
'''
# 本项目
@app.route('/LineUpData')
def _get_LineUp_info():
    result = dataService.get_final_result()
    return json.dumps(result)

@app.route('/EachCrossroads/J21')
def _get_J21_info():
    result = dataService.get_J21()
    return json.dumps(result)

@app.route('/EachCrossroads/J22')
def _get_J22_info():
    result = dataService.get_J22()
    return json.dumps(result)

@app.route('/EachCrossroads/J23')
def _get_J23_info():
    result = dataService.get_J23()
    return json.dumps(result)

@app.route('/EachCrossroads/J18')
def _get_J18_info():
    result = dataService.get_J18()
    return json.dumps(result)

@app.route('/EachCrossroads/J16')
def _get_J16_info():
    result = dataService.get_J16()
    return json.dumps(result)

@app.route('/EachCrossroads/J15')
def _get_J15_info():
    result = dataService.get_J15()
    return json.dumps(result)

@app.route('/EachCrossroads/J14')
def _get_J14_info():
    result = dataService.get_J14()
    return json.dumps(result)

@app.route('/EachCrossroads/J11')
def _get_J11_info():
    result = dataService.get_J11()
    return json.dumps(result)

@app.route('/EachCrossroads/J09')
def _get_J09_info():
    result = dataService.get_J09()
    return json.dumps(result)

@app.route('/EachCrossroads/J08')
def _get_J08_info():
    result = dataService.get_J08()
    return json.dumps(result)

@app.route('/EachCrossroads/J07')
def _get_J07_info():
    result = dataService.get_J07()
    return json.dumps(result)

@app.route('/EachCrossroads/J06')
def _get_J06_info():
    result = dataService.get_J06()
    return json.dumps(result)

@app.route('/NetworkQueue')
def _get_NetworkQueue_info():
    result = dataService.get_NetworkQueue()
    return json.dumps(result)

@app.route('/intersection_affinity')
def _get_intersection_affinity_info():
    result = dataService.get_intersection_affinity()
    return json.dumps(result)
'''

## 新增各模型测试数据
@app.route('/MADDPG/LineUpData')
def _get_MADDPG_LineUp_info():
    result = dataService.get_MADDPG_final_result()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J21')
def _get_MADDPG_J21_info():
    result = dataService.get_MADDPG_J21()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J22')
def _get_MADDPG_J22_info():
    result = dataService.get_MADDPG_J22()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J23')
def _get_MADDPG_J23_info():
    result = dataService.get_MADDPG_J23()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J18')
def _get_MADDPG_J18_info():
    result = dataService.get_MADDPG_J18()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J16')
def _get_MADDPG_J16_info():
    result = dataService.get_MADDPG_J16()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J15')
def _get_MADDPG_J15_info():
    result = dataService.get_MADDPG_J15()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J14')
def _get_MADDPG_J14_info():
    result = dataService.get_MADDPG_J14()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J11')
def _get_MADDPG_J11_info():
    result = dataService.get_MADDPG_J11()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J09')
def _get_MADDPG_J09_info():
    result = dataService.get_MADDPG_J09()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J08')
def _get_MADDPG_J08_info():
    result = dataService.get_MADDPG_J08()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J07')
def _get_MADDPG_J07_info():
    result = dataService.get_MADDPG_J07()
    return json.dumps(result)

@app.route('/MADDPG/EachCrossroads/J06')
def _get_MADDPG_J06_info():
    result = dataService.get_MADDPG_J06()
    return json.dumps(result)

@app.route('/MADDPG/NetworkQueue')
def _get_MADDPG_NetworkQueue_info():
    result = dataService.get_MADDPG_NetworkQueue()
    return json.dumps(result)

@app.route('/MADDPG/intersection_affinity')
def _get_MADDPG_intersection_affinity_info():
    result = dataService.get_MADDPG_intersection_affinity()
    return json.dumps(result)

## DQN
@app.route('/DQN/LineUpData')
def _get_DQN_LineUp_info():
    result = dataService.get_DQN_final_result()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J21')
def _get_DQN_J21_info():
    result = dataService.get_DQN_J21()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J22')
def _get_DQN_J22_info():
    result = dataService.get_DQN_J22()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J23')
def _get_DQN_J23_info():
    result = dataService.get_DQN_J23()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J18')
def _get_DQN_J18_info():
    result = dataService.get_DQN_J18()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J16')
def _get_DQN_J16_info():
    result = dataService.get_DQN_J16()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J15')
def _get_DQN_J15_info():
    result = dataService.get_DQN_J15()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J14')
def _get_DQN_J14_info():
    result = dataService.get_DQN_J14()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J11')
def _get_DQN_J11_info():
    result = dataService.get_DQN_J11()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J09')
def _get_DQN_J09_info():
    result = dataService.get_DQN_J09()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J08')
def _get_DQN_J08_info():
    result = dataService.get_DQN_J08()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J07')
def _get_DQN_J07_info():
    result = dataService.get_DQN_J07()
    return json.dumps(result)

@app.route('/DQN/EachCrossroads/J06')
def _get_DQN_J06_info():
    result = dataService.get_DQN_J06()
    return json.dumps(result)

@app.route('/DQN/NetworkQueue')
def _get_DQN_NetworkQueue_info():
    result = dataService.get_DQN_NetworkQueue()
    return json.dumps(result)

@app.route('/DQN/intersection_affinity')
def _get_DQN_intersection_affinity_info():
    result = dataService.get_DQN_intersection_affinity()
    return json.dumps(result)

## Colight
@app.route('/Colight/LineUpData')
def _get_Colight_LineUp_info():
    result = dataService.get_Colight_final_result()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J21')
def _get_Colight_J21_info():
    result = dataService.get_Colight_J21()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J22')
def _get_Colight_J22_info():
    result = dataService.get_Colight_J22()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J23')
def _get_Colight_J23_info():
    result = dataService.get_Colight_J23()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J18')
def _get_Colight_J18_info():
    result = dataService.get_Colight_J18()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J16')
def _get_Colight_J16_info():
    result = dataService.get_Colight_J16()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J15')
def _get_Colight_J15_info():
    result = dataService.get_Colight_J15()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J14')
def _get_Colight_J14_info():
    result = dataService.get_Colight_J14()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J11')
def _get_Colight_J11_info():
    result = dataService.get_Colight_J11()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J09')
def _get_Colight_J09_info():
    result = dataService.get_Colight_J09()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J08')
def _get_Colight_J08_info():
    result = dataService.get_Colight_J08()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J07')
def _get_Colight_J07_info():
    result = dataService.get_Colight_J07()
    return json.dumps(result)

@app.route('/Colight/EachCrossroads/J06')
def _get_Colight_J06_info():
    result = dataService.get_Colight_J06()
    return json.dumps(result)

@app.route('/Colight/NetworkQueue')
def _get_Colight_NetworkQueue_info():
    result = dataService.get_Colight_NetworkQueue()
    return json.dumps(result)

@app.route('/Colight/intersection_affinity')
def _get_Colight_intersection_affinity_info():
    result = dataService.get_Colight_intersection_affinity()
    return json.dumps(result)

if __name__ == '__main__':
    pass
