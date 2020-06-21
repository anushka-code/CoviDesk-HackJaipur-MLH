from flask import Flask, request, jsonify
import cv2
from validation import validate_video
from preprocessing import process_video
from endpoints import calculate_spo2, calculate_heart_rate

app= Flask(__name__)
# Create a VideoCapture object and read from input file
@app.route('/hello', methods=['POST'])
def inference():
# If the input is the camera, pass 0 instead of the video file name
    body = request.json
    cap = cv2.VideoCapture(body.get('video'))
    validate_video(cap)
    video = process_video(cap)
    spo2_disc = calculate_spo2(video, discretize=True)
    bpm = calculate_heart_rate(video)
    result = { "spo2": spo2_disc,"bpm" : bpm}
    return jsonify(result)
            

