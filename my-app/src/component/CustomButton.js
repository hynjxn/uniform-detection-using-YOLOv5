import React from 'react';
import Button from '@mui/material/Button';

function CustomButton({content, backgroundColor}) {
    return (
        <Button variant="contained" style={{backgroundColor: `${backgroundColor}`, fontWeight: 600}}>{content}</Button>

    );
}

export default CustomButton;