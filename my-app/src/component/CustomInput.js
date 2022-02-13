import React from 'react';
import {InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Style} from "../Style";

function CustomInput(props) {
    return (
        <>
            <OutlinedInput
                id="outlined-adornment-weight"
                style={{width: 300, borderRadius: "20px"}}
                startAdornment={
                    <select name="pets" id="pet-select" style={{
                        border: "none",
                        outline: "none",
                        background: `${Style.color3}`,
                        marginRight: "20px"
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
        </>

    );
}

export default CustomInput;
