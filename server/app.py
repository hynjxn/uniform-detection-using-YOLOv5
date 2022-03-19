from flask import Flask, jsonify, request, Response, send_from_directory
import time
import pymysql
import yaml
import cv2
import os
from server.model.detect import do_detect
import warnings
warnings.filterwarnings(action='ignore')

with open('info.yaml') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)
    mysql_config = config['account']['mysql']
    MYSQL_HOST = mysql_config['host']
    MYSQL_USER = mysql_config['user']
    MYSQL_PW = mysql_config['password']
    MYSQL_DB = mysql_config['db']
    MYSQL_CHAR = mysql_config['charset']


app = Flask(__name__, static_folder='../my-app/build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')




''' ########## Cam Function ########## '''
camera = cv2.VideoCapture(0)

data_dict = {}
stop_cam_2sec = False

def gen_frames():
    global data_dict
    global stop_cam_2sec

    begin = time.time()
    while True:
        success, frame = camera.read()  # read the camera frame
        pred_img, data_dict = do_detect(frame)
        # print(data_dict)

        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', pred_img)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result
        if stop_cam_2sec:
            time.sleep(2)
            stop_cam_2sec = False

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/scan', methods=['GET'])
def read_reviews():
    global stop_cam_2sec
    global data_dict

    return jsonify(data_dict)




''' ########## DB Function ########## '''
#db = pymysql.connect(host=MYSQL_HOST, user=MYSQL_USER, password=MYSQL_PW, db=MYSQL_DB, charset=MYSQL_CHAR)
db = 'a'
@app.route('/penalty/list', methods=['GET'])
def view_pen():
    cursor = db.cursor(pymysql.cursors.DictCursor)
    sql = "select * from penalty"
    cursor.execute(query=sql)
    result = cursor.fetchall()
    return jsonify({'result': 'success', 'penalties': result})

@app.route('/penalty/add', methods=['POST'])
def save_pen():
    id_receive = request.form['id_give']
    name_receive = request.form['name_give']
    phone_receive = request.form['phone_give']
    penalty_receive = request.form['penalty_give']
    cursor = db.cursor()
    sql = "insert into penalty values("+id_receive+", "+name_receive+", "+phone_receive+", "+penalty_receive+")"
    try:
        cursor.execute(sql)
        db.commit()
    except Exception as e:
        print(str(e))
        db.rollback()

    return jsonify({'result': 'success', 'msg': '저장 완료'})

@app.route('/penalty/delete', methods=['POST'])
def del_pen():
    id_receive = request.form['id_give']
    cursor = db.cursor()
    sql="delete from penalty where PEN_STU_ID="+id_receive
    try:
        cursor.execute(sql)
        db.commit()
    except Exception as e:
        print(str(e))
        db.rollback()

    return jsonify({'result': 'success', 'msg': '삭제 완료'})

@app.route('/applyDB', methods=['POST'])
def applyToDb():
    id_receive = request.form['id_give']
    point_receive = int(request.form['point_give'])
    cursor_1 = db.cursor()
    sql_1="select PEN_STU_NAME, PENALTY from penalty where PEN_STU_ID="+id_receive
    cursor_1.execute(query=sql_1)
    row = cursor_1.fetchone()

    if row is None:
        return jsonify({'result': 'fail', 'msg': '해당 학번이 없습니다.'})
    else:
        name = row[0]
        pre_penalty = row[1]
        new_penalty = str(pre_penalty+point_receive)
        cursor_2 = db.cursor()
        sql_2="update penalty set PENALTY="+new_penalty+" where PEN_STU_ID="+id_receive
        try:
            cursor_2.execute(sql_2)
            db.commit()
        except Exception as e:
            print(str(e))
            db.rollback()

        return jsonify({'result': 'success', 'pt':new_penalty, 'name':name})