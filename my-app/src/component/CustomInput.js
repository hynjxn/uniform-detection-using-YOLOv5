import React from 'react';
import {InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Style} from "../Style";

function CustomInput({type}) {
    let element;
    if(type==="scannerInput"){
        element = <OutlinedInput
            id="outlined-adornment-weight"
            style={{
                width: 300,
                borderRadius: "20px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                fontFamily: Style.font
            }}
            placeholder = "학번 입력"
        />
    }
    else if(type==="penaltyInput"){
        element =
            <OutlinedInput
                id="outlined-adornment-weight"
                style={{
                    width: 300,
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    fontFamily: Style.font

                }}
                startAdornment={
                    <select name="pets" id="pet-select" style={{
                        border: "none",
                        outline: "none",
                        background: `${Style.color3}`,
                        marginRight: "20px",
                        backgroundColor: "transparent"
                    }}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
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
