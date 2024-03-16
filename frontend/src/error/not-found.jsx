import { Button } from '@mui/base';
import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Not_found = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return (
        <Grid container my={15}>
            <Typography sx={{ textAlign: "center", fontSize: "25px", fontWeight: "bold", width: '100%' }}>404 Not Found</Typography>
        </Grid>
    )
}

export default Not_found;