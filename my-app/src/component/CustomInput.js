import React from 'react';
import {InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Style} from "../Style";

function CustomInput({
                         type,
                         width,
                         name,
                         defaultValue,
                         onSearchFunction,
                         onChangeFunction,
                         input,
                         select,
                         placeholder
                     }) {
    let element;
    if (type === "normalInput") {
        element = <OutlinedInput
            size={"small"} id="outlined-adornment-weight"
            name={name}
            value={input}
            defaultValue={defaultValue}
            onChange={onChangeFunction}
            style={{
                width: "80%",
                borderRadius: "15px",
                fontFamily: Style.font,
                textAlign: "center"
            }}
            placeholder={placeholder}

        />
    } else if (type === "penaltyInput") {
        element =
            <form onSubmit={onSearchFunction} style={{
                width: width,
            }}>
                <OutlinedInput
                    name="input"
                    value={input}
                    onChange={onChangeFunction}
                    id="outlined-adornment-weight"
                    style={{
                        width: "100%",
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
                            <option value="student_id">StudentID</option>
                            <option value="student_name">StudentName</option>
                        </select>
                    }
                    endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                />
            </form>
    }
    return (
        element

    );
}

export default CustomInput;
