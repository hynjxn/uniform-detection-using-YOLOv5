import React from 'react';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import {Style} from "../Style";
import ClearIcon from '@mui/icons-material/Clear';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFloppyDisk} from "@fortawesome/free-solid-svg-icons";

function StudentAddForm({currentInfo, onChangeFunction, onSaveStudentFunction, onCloseModalFunction, addOrEdit}) {
    return (<div style={{
            display: "flex",
            padding: "20px",
            flexDirection: "column",
            alignItems:"center",
            position: "relative",
            width: "400px"
        }}>
            <div style={{fontSize: 24, fontWeight: "bold", width:"100%", textAlign:"left",marginBottom:"30px"}}>
                {addOrEdit==="Add"?"Add Student":"Edit Student Info"}
            </div>
            <div style={{display: "flex", alignItems: "center", width: "100%", marginBottom: "20px"}}>
                <div style={{width: "30%", marginRight: "15px", textAlign: "end"}}>StudentID</div>
                <CustomInput type="normalInput" name="student_id" value={currentInfo.student_id}
                             defaultValue={currentInfo.student_id} onChangeFunction={onChangeFunction}
                             placeholder="Ex) 21319"/>
            </div>
            <div style={{display: "flex", alignItems: "center", width: "100%", marginBottom: "20px"}}>
                <div style={{width: "30%", marginRight: "15px", textAlign: "end"}}>StudentName</div>
                <CustomInput type="normalInput" name="student_name" value={currentInfo.student_name}
                             defaultValue={currentInfo.student_name} onChangeFunction={onChangeFunction}
                             placeholder="Ex) 신은수"/>
            </div>
            <div style={{display: "flex", alignItems: "center", width: "100%", marginBottom: "20px"}}>
                <div style={{width: "30%", marginRight: "15px", textAlign: "end"}}>Parent PhoneNumber</div>
                <CustomInput type="normalInput" name="parent_ph" value={currentInfo.parent_ph}
                             defaultValue={currentInfo.parent_ph} onChangeFunction={onChangeFunction}
                             placeholder="Ex) 01047106206"/>
            </div>
            <div style={{display: "flex", alignItems: "center", width: "100%", marginBottom: "50px"}}>
                <div style={{width: "30%", marginRight: "15px", textAlign: "end"}}>PenaltyPoints</div>
                <CustomInput type="normalInput" name="penalty_points" value={currentInfo.penalty_points}
                             defaultValue={currentInfo.penalty_points} onChangeFunction={onChangeFunction}
                             placeholder="Ex) 0"/>
            </div>

            <CustomButton width="150px" content={<>
                <FontAwesomeIcon name="scanner" icon={faFloppyDisk} color={"white"}
                                 style={{fontSize: 20, marginRight: "10"}}/>
                <span style={{fontSize: 20, fontWeight: "bold"}}>SAVE</span>
            </>} onClickFunction={onSaveStudentFunction} backgroundColor={Style.color1}/>


            <ClearIcon style={{position: "absolute", top: "15", right: "15", color: Style.color1, cursor: "pointer"}}
                       onClick={onCloseModalFunction}/>



        </div>

    )
        ;
}

export default StudentAddForm;