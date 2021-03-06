# Uniform Detection Using YOLOv5

<div align="center">
    <img src="https://user-images.githubusercontent.com/68190553/160357007-8491d572-6e1c-47a5-9c5b-37ffdb9db4cb.png" width="40%"/><br/><br/>
<h2 align=center>This repo is a project to detect students inappropriate uniforms using YOLOv5 π</h2>
</div>

<div align="center">
    <img alt="Detect your uniform" src="https://user-images.githubusercontent.com/68190553/161666725-dc50ee98-67a3-4d04-aff8-6461dd37c8d6.png" width="80%"/><br/><br/>
</div>
Korean schools have rules for wearing neat school uniforms to school.However, some students go to school wearing school uniforms that are not neat or mended.Therefore, in Korean schools, student instructors often give penalty points to students who do not wear neat school uniforms.<br/><br/>

We decided that this process was very subjective and wasted manpower, so we planned this project to replace it with the role of artificial intelligence.
This project not only proposes artificial intelligence that replaces the role of the student instructor, but also proposes a service that can manage penalty points and attendance.
<br/> <br/>

> **Considering the limitations of data collection, this project was carried out on the premise of certain conditions.**<br/>
> i) It's a girls' high school where skirts and shirts are school uniforms.<br/>
> ii) Consider summer clothes only <br/>


<!--
νκ΅­ νκ΅λ λ¨μ ν κ΅λ³΅μ μκ³  λ±κ΅νλ νμΉμ΄ μμ΅λλ€. 
νμ§λ§ λͺλͺ νμλ€μ μΉλ§κΈΈμ΄λ₯Ό μμ νκ±°λ λ¨μ νμ§ μμ κ΅λ³΅μ μκ³  λ±κ΅ν©λλ€.
λλ¬Έμ νκ΅­ νκ΅μμ  νμμ§λμ μλμ΄ μ§μ  λ¨μ ν κ΅λ³΅μ μμ§ μμ νμλ€μκ² λ²μ μ μ£Όκ³€ ν©λλ€.

μ°λ¦¬λ μ΄ κ³Όμ μ΄ λ§€μ° μ£Όκ΄μ μ΄λ©° μΈλ ₯μ΄ λ­λΉλλ κ²μ΄λΌ νλ¨ν΄, 
μ΄λ₯Ό μΈκ³΅μ§λ₯μ μ­ν λ‘ λμ²΄νκ³ μνμ¬ μ΄ νλ‘μ νΈλ₯Ό κΈ°ννμ΅λλ€. 

μ νλ‘μ νΈλ μ λλΆ μ­ν μ λμ νλ μΈκ³΅μ§λ₯μ μ μν  λΏ μλλΌ λ²μ κ³Ό μΆμλ κ΄λ¦¬ν  μ μλ μλΉμ€λ₯Ό μ μν©λλ€.


μ΄ νλ‘μ νΈλ λ°μ΄ν° μμ§μ νκ³μ±μ κ³ λ €ν΄ νΉμ  μ‘°κ±΄μ μ μ νμ¬ μ§ννμ΅λλ€.<br/>
i) μΉλ§μ μμ΄μμΈ κ° κ΅λ³΅μΈ μ¬μ κ³ λ±νκ΅λΌ κ°μ <br/>
ii) μ¬λ¦μ μλ νκ³λ³΅λ§ κ³ λ €<br/>
-->

---

## Documentation
### Proejct Structure
<div align="center">
    <img src="https://user-images.githubusercontent.com/68190553/161418538-3f6b0638-cbf1-4b7c-ada9-0c8fbd3a0ac6.png" width="80%"/>
</div>

### ERD
<div align="center">
    <img alt="image" src="https://user-images.githubusercontent.com/94098910/161419628-909d6ab5-2efc-45ad-a27d-37d4c7d908d1.png" width="35%">
</div>



### Model Performance
<div align="center">
    <img src="https://user-images.githubusercontent.com/68190553/160384008-b2581bf0-6c54-4471-9ac0-d423a3ed2945.png" width="50%"/>
</div>
<details open>
<summary>YOLOv5 π</summary>
<div align="center">
    <img src="https://user-images.githubusercontent.com/68190553/160385861-c3a7b89d-4af5-4a18-b157-11f06664e9c9.png" width="90%"/><br/>
    Our model was trained with 1,500 data and exhibits stable performance. (mAP@0.5 : 0.940)<br/>
    And We trained a total of 400 iterations using W&B, one of MLOps.
</div>



</details>

### Members

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/jerife">
            <img src="https://user-images.githubusercontent.com/68190553/161420117-a4c01c9f-7ac0-4c18-a364-974df1574272.png" width="100px;" alt=""/>
            <br /><sub><b>Jaewoo Park</b></sub></a>
        </a>
      </td>
    <td align="center">
        <a href="https://github.com/hynjxn">
            <img src="https://user-images.githubusercontent.com/68190553/161420461-1067b26a-70af-4121-9024-70f8bb598b22.png" width="100px;" alt=""/>
            <br /><sub><b>Hyunjin Lee</b></sub></a>
        </a>
      </td>
    <td align="center">
        <a href="https://github.com/minah9999">
            <img src="https://user-images.githubusercontent.com/68190553/161420485-71dca094-b38a-43c4-b201-f63b86dce1fe.png" width="100px;" alt=""/>
            <br /><sub><b>Minah Choi</b></sub></a>
        </a>
      </td>
    <td align="center">
        <a href="https://github.com/ShinEun9">
            <img src="https://user-images.githubusercontent.com/68190553/161420569-30e9f979-8ab4-4772-9066-324a5f310fbf.png" width="100px;" alt=""/>
            <br /><sub><b>Eunsu Shin</b></sub></a>
        </a>
      </td>
</table>



```
- Jaewoo Park (jerife@naver.com)
- Hyunjin Lee (shsan0324@gmail.com)
- Minah Choi (mina7245@gmail.com)
- Eunsu Shin (ses2201@g.hongik.ac.kr)
```

---

## Usage
### Installation with virtual environment
```bash
$ git clone https://github.com/hynjxn/Uniform-Detection-Using-YOLOv5.git
$ cd Uniform-Detection-Using-YOLOv5

$ conda create -n project python=3.9
$ conda activate project

# PyTorch installation process may vary depending on your hardware (1.7.0 <= pytorch <= 1.9.0)
$ conda install pytorch==1.9.0 torchvision==0.10.0 torchaudio==0.9.0 cpuonly -c pytorch
$ pip install -r requirements.txt

# Edit info.yaml to connect with your DB
$ vim info.yaml
```
You can set info.yaml as follow:

```yaml
account:
  mysql:
    host: Input your DB host
    user: Input your id
    password: Input your PW
    db: Input your DB name
    charset: utf8mb4
```

### Run
```bash
# Run with python
$ python wsgi.py 

# Run with gunicorn
$ gunicorn --bind 0.0.0.0:5000 wsgi:app
```
