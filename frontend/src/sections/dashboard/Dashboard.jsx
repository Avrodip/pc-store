import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Grid, Button } from '@mui/material'

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/my-orders`)
    }

    return (
        <Grid container xs={12} my={15} >
            <Grid item mx="auto">
                <Button
                    variant="contained"
                    sx={{ bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}
                    onClick={handleClick}
                >
                    My Orders
                </Button>
            </Grid>
        </Grid >
    )
}

export default Dashboard;