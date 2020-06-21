# -*- coding: utf-8 -*-
"""
Created on Sat Jun 20 12:22:15 2020

@author: ASUS
"""

def function_per_frame(video, channel, function):
    reshaped_video = video[:, :, :, channel].reshape(video.shape[0], -1)
    return function(reshaped_video, axis=-1)