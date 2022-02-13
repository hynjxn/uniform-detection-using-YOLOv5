import React from 'react';
import CustomInput from "./CustomInput";
import CustomizedTable from "./CustomizedTable";

function PenaltyPage(props) {
    return (
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <CustomInput/>
            <CustomizedTable />

        </div>
    );
}

export default PenaltyPage;