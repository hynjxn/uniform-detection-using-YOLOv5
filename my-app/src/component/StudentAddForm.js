import React from 'react';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import {Style} from "../Style";
import ClearIcon from '@mui/icons-material/Clear';

function StudentAddForm({onSaveStudentFunction, onCloseModalFunction}) {
    return (<div style={{
            display: "flex",
            padding: "70px 30px 30px 20px",
            flexDirection: "column",
            alignItems: "flex-end",
            position: "relative"
        }}>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}>학번</div>
                <CustomInput type="normalInput" placeholder="예시) 21319"/>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}>이름</div>
                <CustomInput type="normalInput" placeholder="예시) 신은수"/>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}><span>학부모<br/>전화번호</span></div>
                <CustomInput type="normalInput" placeholder="예시) 01047106206"/>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "50px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}>벌점</div>
                <CustomInput type="normalInput" placeholder="예시) 0"/>
            </div>

            <CustomButton content="저장하기" onClickFunction={onSaveStudentFunction} backgroundColor={Style.color1}/>

            <ClearIcon style={{position:"absolute", top: "15", right: "15", color: Style.color1}} onClick={onCloseModalFunction}/>
        </div>

    )
        ;
}

export default StudentAddForm;