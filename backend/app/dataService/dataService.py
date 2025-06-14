# -*- coding: utf-8 -*-
import time
import json
import os
import sys
import cv2

try:
    import GlobalVariable as GV
except ImportError:
    import app.dataService.GlobalVariable as GV

class DataService(object):
    def __init__(self):
        self.GV = GV
        print('=================================================')
        return

    def initialization(self, video_id):
        self.video_id = video_id
        result = {'test': 'test'}
        return result

    def test(self):
        print(self.GV.test)


    # 本项目数据（test决策过程）
    # def get_test_result(self):
    #     with open('{}/process(final).csv'.format(GV.DATA_FOLDER), 'r') as rf:
    #         result = json.load(rf)
    #     return result 
    
    # 新增
    def get_model_result(self):
        with open('{}/metrics(model).json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result
    
    """
    # 本项目数据（test结果）
    def get_final_result(self):
        with open('{}/metrics(intersection).json'.format(GV.DATA_FOLDER), 'r') as rf:
            rank_data = json.load(rf)

        rank_data.sort(key=lambda d:d['mean_queue'],reverse=True)

        #hist_data = {
        #    "mean_queue": [{"x":28.8718750, "cnt":1}, {"x":35.3531250, "cnt":0}, {"x":41.834375, "cnt":1},{"x":48.3156250, "cnt":3}, {"x":54.796875, "cnt":1}, {"x":61.278125, "cnt":1},{"x":67.759375, "cnt":2}, {"x":74.240625, "cnt":2}, {"x":80.7218750, "cnt":0},{"x":87.203125, "cnt":1}],
        #    "mean_delay": [{"x": 0.443491089, "cnt":1}, {"x":0.464070347, "cnt":1}, {"x": 0.484649605, "cnt":2},{"x":0.505228863, "cnt":1}, {"x":0.5258081210, "cnt":2}, {"x":0.546387379, "cnt":1},{"x":0.566966637, "cnt":2}, {"x":0.5875458950, "cnt":1}, {"x":0.608125153, "cnt":0},{"x":0.628704411, "cnt":1}],
        #    "mean_episode_reward": [{"x":-5.2803503165, "cnt":1}, {"x":-4.8273017495, "cnt":0}, {"x":-4.3742531824999995, "cnt":2},{"x":-3.9212046154999998, "cnt":0}, {"x":-3.4681560485, "cnt":6}, {"x":-3.0151074814999994, "cnt":0},{"x":-2.5620589144999997, "cnt":1}, {"x":-2.1090103475, "cnt":0}, {"x":-1.6559617804999995, "cnt":1},{"x":-1.2029132134999998, "cnt":1}]
        #}
        hist_data = {
                "mean_queue": [{"x": 7.400312499999999, "cnt": 1},{"x": 8.6259375, "cnt": 0},{"x": 9.8515625, "cnt": 1},{"x": 11.0771875, "cnt": 4},{"x": 12.302812499999998, "cnt": 2},{"x": 13.528437499999999, "cnt": 0},{"x": 14.7540625, "cnt": 1},{"x": 15.9796875, "cnt": 1},{"x": 17.2053125, "cnt": 1},{"x": 18.4309375, "cnt": 1}],
                "mean_delay":[{"x": 0.295088479, "cnt": 1},{"x": 0.301586357, "cnt": 1},{"x": 0.30808423500000004, "cnt": 0},{"x": 0.314582113, "cnt": 2},{"x": 0.321079991, "cnt": 2},{"x": 0.327577869, "cnt": 2},{"x": 0.33407574700000003, "cnt": 0},{"x": 0.340573625, "cnt": 0},{"x": 0.347071503, "cnt": 2},{"x": 0.353569381, "cnt": 2}],
                "mean_episode_reward": [{"x":-0.816598838, "cnt": 2},{"x": -0.670838434, "cnt": 1},{"x": -0.52507803, "cnt": 2},{"x": -0.37931762599999996, "cnt": 1},{"x": -0.23355722199999995, "cnt": 0},{"x": -0.08779681799999994, "cnt": 2},{"x": 0.05796358600000007, "cnt": 2},{"x": 0.20372399000000008, "cnt": 1},{"x": 0.3494843940000001, "cnt": 0},{"x": 0.49524479800000004, "cnt": 1}]
                }
        
        result = {
            "rank_data": rank_data,
            "hist_data": hist_data
        }

        return result 
    
    # J21交叉口数据
    def get_J21(self):
        with open('{}/J21.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
   
    # J22交叉口数据
    def get_J22(self):
        with open('{}/J22.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J23交叉口数据
    def get_J23(self):
        with open('{}/J23.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J18交叉口数据
    def get_J18(self):
        with open('{}/J18.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J16交叉口数据
    def get_J16(self):
        with open('{}/J16.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J15交叉口数据
    def get_J15(self):
        with open('{}/J15.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J14交叉口数据
    def get_J14(self):
        with open('{}/J14.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J11交叉口数据
    def get_J11(self):
        with open('{}/J11.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J09交叉口数据
    def get_J09(self):
        with open('{}/J09.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J08交叉口数据
    def get_J08(self):
        with open('{}/J08.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J07交叉口数据
    def get_J07(self):
        with open('{}/J07.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J06交叉口数据
    def get_J06(self):
        with open('{}/J06.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网排队拥挤数据
    def get_NetworkQueue(self):
        with open('{}/NetworkQueue.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网相关性分析数据
    def get_intersection_affinity(self):
        with open('{}/intersection_affinity.json'.format(GV.DATA_FOLDER), 'r') as rf:
            result = json.load(rf)
        return result
    """
    
    ## 新增各模型各参数(lzy: April 12th)
    # 本项目数据（test结果）
    def get_MADDPG_final_result(self):
        with open('{}/metrics(intersection).json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            rank_data = json.load(rf)
        rank_data.sort(key=lambda d:d['mean_queue'],reverse=True)
        hist_data = {
                "mean_queue": [{"x": 7.400312499999999, "cnt": 1},{"x": 8.6259375, "cnt": 0},{"x": 9.8515625, "cnt": 1},{"x": 11.0771875, "cnt": 4},{"x": 12.302812499999998, "cnt": 2},{"x": 13.528437499999999, "cnt": 0},{"x": 14.7540625, "cnt": 1},{"x": 15.9796875, "cnt": 1},{"x": 17.2053125, "cnt": 1},{"x": 18.4309375, "cnt": 1}],
                "mean_delay":[{"x": 0.295088479, "cnt": 1},{"x": 0.301586357, "cnt": 1},{"x": 0.30808423500000004, "cnt": 0},{"x": 0.314582113, "cnt": 2},{"x": 0.321079991, "cnt": 2},{"x": 0.327577869, "cnt": 2},{"x": 0.33407574700000003, "cnt": 0},{"x": 0.340573625, "cnt": 0},{"x": 0.347071503, "cnt": 2},{"x": 0.353569381, "cnt": 2}],
                "mean_episode_reward": [{"x":-0.816598838, "cnt": 2},{"x": -0.670838434, "cnt": 1},{"x": -0.52507803, "cnt": 2},{"x": -0.37931762599999996, "cnt": 1},{"x": -0.23355722199999995, "cnt": 0},{"x": -0.08779681799999994, "cnt": 2},{"x": 0.05796358600000007, "cnt": 2},{"x": 0.20372399000000008, "cnt": 1},{"x": 0.3494843940000001, "cnt": 0},{"x": 0.49524479800000004, "cnt": 1}]
                }
        result = {
            "rank_data": rank_data,
            "hist_data": hist_data
        }
        return result 
    
    # J21交叉口数据
    def get_MADDPG_J21(self):
        with open('{}/J21.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
   
    # J22交叉口数据
    def get_MADDPG_J22(self):
        with open('{}/J22.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J23交叉口数据
    def get_MADDPG_J23(self):
        with open('{}/J23.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J18交叉口数据
    def get_MADDPG_J18(self):
        with open('{}/J18.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J16交叉口数据
    def get_MADDPG_J16(self):
        with open('{}/J16.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J15交叉口数据
    def get_MADDPG_J15(self):
        with open('{}/J15.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J14交叉口数据
    def get_MADDPG_J14(self):
        with open('{}/J14.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J11交叉口数据
    def get_MADDPG_J11(self):
        with open('{}/J11.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J09交叉口数据
    def get_MADDPG_J09(self):
        with open('{}/J09.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J08交叉口数据
    def get_MADDPG_J08(self):
        with open('{}/J08.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J07交叉口数据
    def get_MADDPG_J07(self):
        with open('{}/J07.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J06交叉口数据
    def get_MADDPG_J06(self):
        with open('{}/J06.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网排队拥挤数据
    def get_MADDPG_NetworkQueue(self):
        with open('{}/NetworkQueue.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网相关性分析数据
    def get_MADDPG_intersection_affinity(self):
        with open('{}/intersection_affinity.json'.format(GV.DATA_FOLDER + 'MADDPG/'), 'r') as rf:
            result = json.load(rf)
        return result 

    ## DQN网络测试数据
    def get_DQN_final_result(self):
        with open('{}/metrics(intersection).json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            rank_data = json.load(rf)
        rank_data.sort(key=lambda d:d['mean_queue'],reverse=True)
        hist_data = {
                "mean_queue": [{"x":1.3976388931,"cnt":4.0},{"x":2.6540277481,"cnt":3.0},{"x":3.9104166031,"cnt":2.0},{"x":5.1668054581,"cnt":0.0},{"x":6.423194313,"cnt":0.0},{"x":7.679583168,"cnt":1.0},{"x":8.935972023,"cnt":1.0},{"x":10.192360878,"cnt":0.0},{"x":11.448749733,"cnt":0.0},{"x":12.705138588,"cnt":1.0}],
                "mean_delay":[{"x":1.6272409916,"cnt":5.0},{"x":2.8609824657,"cnt":1.0},{"x":4.0947239399,"cnt":2.0},{"x":5.328465414,"cnt":0.0},{"x":6.5622068882,"cnt":1.0},{"x":7.7959483624,"cnt":1.0},{"x":9.0296898365,"cnt":1.0},{"x":10.2634313107,"cnt":0.0},{"x":11.4971727848,"cnt":0.0},{"x":12.730914259,"cnt":1.0}],
                "mean_episode_reward": [{"x":-0.2908145297,"cnt":1.0},{"x":-0.2706100669,"cnt":1.0},{"x":-0.250405604,"cnt":1.0},{"x":-0.2302011412,"cnt":0.0},{"x":-0.2099966783,"cnt":0.0},{"x":-0.1897922155,"cnt":2.0},{"x":-0.1695877526,"cnt":1.0},{"x":-0.1493832897,"cnt":2.0},{"x":-0.1291788269,"cnt":0.0},{"x":-0.108974364,"cnt":4.0}]
                }
        result = {
            "rank_data": rank_data,
            "hist_data": hist_data
        }
        return result 
    
    # J21交叉口数据
    def get_DQN_J21(self):
        with open('{}/J21.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
   
    # J22交叉口数据
    def get_DQN_J22(self):
        with open('{}/J22.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J23交叉口数据
    def get_DQN_J23(self):
        with open('{}/J23.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J18交叉口数据
    def get_DQN_J18(self):
        with open('{}/J18.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J16交叉口数据
    def get_DQN_J16(self):
        with open('{}/J16.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J15交叉口数据
    def get_DQN_J15(self):
        with open('{}/J15.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J14交叉口数据
    def get_DQN_J14(self):
        with open('{}/J14.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J11交叉口数据
    def get_DQN_J11(self):
        with open('{}/J11.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J09交叉口数据
    def get_DQN_J09(self):
        with open('{}/J09.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J08交叉口数据
    def get_DQN_J08(self):
        with open('{}/J08.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J07交叉口数据
    def get_DQN_J07(self):
        with open('{}/J07.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J06交叉口数据
    def get_DQN_J06(self):
        with open('{}/J06.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网排队拥挤数据
    def get_DQN_NetworkQueue(self):
        with open('{}/NetworkQueue.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网相关性分析数据
    def get_DQN_intersection_affinity(self):
        with open('{}/intersection_affinity.json'.format(GV.DATA_FOLDER + 'DQN/'), 'r') as rf:
            result = json.load(rf)
        return result 
        ## Colight网络测试数据
    def get_Colight_final_result(self):
        with open('{}/metrics(intersection).json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            rank_data = json.load(rf)
        rank_data.sort(key=lambda d:d['mean_queue'],reverse=True)
        hist_data = {
                "mean_queue": [{"x": 7.400312499999999, "cnt": 1},{"x": 8.6259375, "cnt": 0},{"x": 9.8515625, "cnt": 1},{"x": 11.0771875, "cnt": 4},{"x": 12.302812499999998, "cnt": 2},{"x": 13.528437499999999, "cnt": 0},{"x": 14.7540625, "cnt": 1},{"x": 15.9796875, "cnt": 1},{"x": 17.2053125, "cnt": 1},{"x": 18.4309375, "cnt": 1}],
                "mean_delay":[{"x": 0.295088479, "cnt": 1},{"x": 0.301586357, "cnt": 1},{"x": 0.30808423500000004, "cnt": 0},{"x": 0.314582113, "cnt": 2},{"x": 0.321079991, "cnt": 2},{"x": 0.327577869, "cnt": 2},{"x": 0.33407574700000003, "cnt": 0},{"x": 0.340573625, "cnt": 0},{"x": 0.347071503, "cnt": 2},{"x": 0.353569381, "cnt": 2}],
                "mean_episode_reward": [{"x":-0.816598838, "cnt": 2},{"x": -0.670838434, "cnt": 1},{"x": -0.52507803, "cnt": 2},{"x": -0.37931762599999996, "cnt": 1},{"x": -0.23355722199999995, "cnt": 0},{"x": -0.08779681799999994, "cnt": 2},{"x": 0.05796358600000007, "cnt": 2},{"x": 0.20372399000000008, "cnt": 1},{"x": 0.3494843940000001, "cnt": 0},{"x": 0.49524479800000004, "cnt": 1}]
                }
        result = {
            "rank_data": rank_data,
            "hist_data": hist_data
        }
        return result 
    
    # J21交叉口数据
    def get_Colight_J21(self):
        with open('{}/J21.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
   
    # J22交叉口数据
    def get_Colight_J22(self):
        with open('{}/J22.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J23交叉口数据
    def get_Colight_J23(self):
        with open('{}/J23.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J18交叉口数据
    def get_Colight_J18(self):
        with open('{}/J18.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J16交叉口数据
    def get_Colight_J16(self):
        with open('{}/J16.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J15交叉口数据
    def get_Colight_J15(self):
        with open('{}/J15.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J14交叉口数据
    def get_Colight_J14(self):
        with open('{}/J14.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J11交叉口数据
    def get_Colight_J11(self):
        with open('{}/J11.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J09交叉口数据
    def get_Colight_J09(self):
        with open('{}/J09.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J08交叉口数据
    def get_Colight_J08(self):
        with open('{}/J08.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J07交叉口数据
    def get_Colight_J07(self):
        with open('{}/J07.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # J06交叉口数据
    def get_Colight_J06(self):
        with open('{}/J06.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网排队拥挤数据
    def get_Colight_NetworkQueue(self):
        with open('{}/NetworkQueue.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 
    
    # 路网相关性分析数据
    def get_Colight_intersection_affinity(self):
        with open('{}/intersection_affinity.json'.format(GV.DATA_FOLDER + 'Colight/'), 'r') as rf:
            result = json.load(rf)
        return result 

if __name__ == '__main__':
    dataService = DataService()

