import React from 'react';
import Button from '@mui/material/Button';
import {Style} from "../Style";

function CustomButton({content, backgroundColor, borderColor, color, onClickFunction}) {
    return (
        <Button variant="contained" style={{
            backgroundColor: `${backgroundColor}`,
            border: `1.5px solid ${borderColor}`,
            width: "150px",
            height: "50px",
            color:`${color}`,
            fontWeight: 600,
            fontFamily: Style.font
        }} 청 onClick={onClickFunction}>{content}</Button>

    );
}

export default CustomButton;