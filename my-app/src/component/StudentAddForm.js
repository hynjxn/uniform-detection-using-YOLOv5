import React from 'react';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import {Style} from "../Style";
import ClearIcon from '@mui/icons-material/Clear';

function StudentAddForm({currentInfo, onChangeFunction, onSaveStudentFunction, onCloseModalFunction, }) {
    return (<div style={{
            display: "flex",
            padding: "70px 30px 30px 20px",
            flexDirection: "column",
            alignItems: "flex-end",
            position: "relative"
        }}>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}>학번</div>
                <CustomInput type="normalInput" name="student_id" value={currentInfo.student_id} defaultValue={currentInfo.student_id} onChangeFunction={onChangeFunction} placeholder="예시) 21319"/>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}>이름</div>
                <CustomInput type="normalInput" name="student_name" value={currentInfo.student_name} defaultValue={currentInfo.student_name} onChangeFunction={onChangeFunction} placeholder="예시) 신은수"/>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}><span>학부모<br/>전화번호</span></div>
                <CustomInput type="normalInput" name="parent_ph" value={currentInfo.parent_ph} defaultValue={currentInfo.parent_ph} onChangeFunction={onChangeFunction} placeholder="예시) 01047106206"/>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "50px"}}>
                <div style={{width: "60px", marginRight: "15px", textAlign: "end"}}>벌점</div>
                <CustomInput type="normalInput" name="penalty_points"  value={currentInfo.penalty_points} defaultValue={currentInfo.penalty_points} onChangeFunction={onChangeFunction} placeholder="예시) 0"/>
            </div>

            <CustomButton content="저장하기" onClickFunction={onSaveStudentFunction} backgroundColor={Style.color1}/>
            <ClearIcon style={{position:"absolute", top: "15", right: "15", color: Style.color1, cursor: "pointer"}} onClick={onCloseModalFunction}/>
        </div>

    )
        ;
}

export default StudentAddForm;