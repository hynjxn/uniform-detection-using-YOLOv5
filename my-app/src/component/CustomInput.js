import React from 'react';
import {InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Style} from "../Style";

function CustomInput({type, onChangeFunction, input, select, placeholder}) {
    let element;
    if (type === "normalInput") {
        element = <OutlinedInput
            id="outlined-adornment-weight"
            name="input"
            value={input}
            onChange={onChangeFunction}
            style={{
                width: 300,
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                fontFamily: Style.font
            }}
            size="small"
            placeholder={placeholder}
        />
    } else if (type === "penaltyInput") {
        element =
            <OutlinedInput
                name="input"
                value={input}
                onChange={onChangeFunction}
                id="outlined-adornment-weight"
                style={{
                    width: 400,
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    fontFamily: Style.font
                }}
                startAdornment={
                    <select name="select" value={select} onChange={onChangeFunction}
                            style={{
                                border: "none",
                                outline: "none",
                                background: `${Style.color3}`,
                                marginRight: "20px",
                                backgroundColor: "transparent"
                            }}>
                        <option value="student_id">학번</option>
                        <option value="student_name">이름</option>
                    </select>
                }
                endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
            />
    }
    return (
        element

    );
}

export default CustomInput;
