# Uniform Detection Using YOLOv5
[프로젝트 시연움짤 or 사진]

[프로젝트 설명]

[프로젝트 구조도]

[db구조도]
 
---
## Usage
### Members
```
- Jaewoo Park (jerife@naver.com)
- Hyunjin Lee (shsan0324@gmail.com)
- Minah Choi (mina7245@gmail.com)
- Eunsu Shin (ses2201@g.hongik.ac.kr)
```




### Installation with virtual environment
```bash
git clone https://github.com/hynjxn/Uniform-Detection-Using-YOLOv5.git
cd Uniform-Detection-Using-YOLOv5

conda create -n project python=3.9
conda activate project

# PyTorch installation process may vary depending on your hardware (pytorch<=1.9.0)
conda install pytorch==1.9.0 torchvision==0.10.0 torchaudio==0.9.0 cpuonly -c pytorch
pip install -r requirements.txt
```

### Run with gunicorn
```bash
# gunicorn --bind [Host IP]:[Port] wsgi:app
gunicorn --bind 0.0.0.0:5000 wsgi:app
```
