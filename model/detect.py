import cv2
import torch
import yaml

''' DEFINE MODEL '''
with open('./model/config/yolov5.yaml') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)

model = torch.hub.load('./model/yolov5',
                       'custom',
                       path=config['model_param']['path'],
                       source='local')  # local repo
model.conf = float(config['model_param']['conf']) # confidence threshold (0-1)
model.iou = float(config['model_param']['iou'])  # NMS IoU threshold (0-1)
''' DEFINE MODEL '''


def do_detect(img):
    img_copy = img.copy()
    preds = model(img_copy, size=512)
    preds_df = preds.pandas().xyxy[0]
    label2color = {
        'pants': (0, 0, 255), # Red
        'short_skirt': (0, 0, 255), # Red
        'normal_skirt': (255, 0, 0), # Blue
        't_shirt': (0, 0, 255), # Red
        'open_top': (0, 0, 255), # Red
        'normal_top': (255, 0, 0), # Blue
    }


    best_score_top = 0
    best_score_bottom = 0
    best_name_top = None
    best_name_bottom = None

    for idx, df in preds_df.iterrows():
        score = round(float(df['confidence'])*100,2)
        class_name = df['name']
        print("class_name:",class_name)

        # 상의 예측값
        if class_name in ['t_shirt', 'open_top', 'normal_top']:
            if best_score_top<score:
                best_score_top = score
                best_name_top = class_name
                top_x1 = int(df['xmin'])
                top_y1 = int(df['ymin'])
                top_x2 = int(df['xmax'])
                top_y2 = int(df['ymax'])
        # 하의 예측값
        else:
            if best_score_bottom<score:
                best_score_bottom = score
                best_index_bottom = idx
                best_name_bottom = class_name
                bottom_x1 = int(df['xmin'])
                bottom_y1 = int(df['ymin'])
                bottom_x2 = int(df['xmax'])
                bottom_y2 = int(df['ymax'])

    data_dict = {}
    # 싱의 그리기
    if best_name_top is not None:
        data_dict[best_name_top] = best_score_top
        text = "{} : {}".format(best_name_top, best_score_top)
        cv2.rectangle(img_copy, (top_x1, top_y1), (top_x2, top_y2), color=label2color[best_name_top], thickness=3)
        cv2.putText(img_copy, text, (top_x1, top_y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 1, label2color[best_name_top], 2)
    else:
        data_dict['[DETECT ERROR]: TOP'] = 0
    # 하의 그리기
    if best_name_bottom is not None:
        data_dict[best_name_bottom] = best_score_bottom
        text = "{} : {}".format(best_name_bottom, best_score_bottom)
        cv2.rectangle(img_copy, (bottom_x1, bottom_y1), (bottom_x2, bottom_y2), color=label2color[best_name_bottom], thickness=5)
        cv2.putText(img_copy, text, (bottom_x1, bottom_y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 1, label2color[best_name_bottom], 2)
    else:
        data_dict['[DETECT ERROR]: BOTTOM'] = 0

    return img_copy, data_dict