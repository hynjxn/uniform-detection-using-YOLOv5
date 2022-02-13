import React, {useEffect, useState} from 'react';
import CustomInput from "./CustomInput";
import CustomizedTable from "./CustomizedTable";

function PenaltyPage(props) {
    // const [content, setContent] = useState([]);

    const contents = [{
        id: 1, student_id: "21319", student_name: "신은수", parent_ph:
            "010-4710-6207", penalty_points: "-17"
    }, {
        id: 2, student_id: "21320", student_name: "신은수", parent_ph:
            "010-4710-6207", penalty_points: "-17"
    }];

    useEffect(()=>{
        //학생 불러오기
    }, []);


    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{marginBottom: "30px"}}>
                <CustomInput type="penaltyInput"/>
            </div>
            <CustomizedTable type="penaltyTable" contents={contents}/>

        </div>
    );
}

export default PenaltyPage;