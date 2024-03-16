import React from 'react'
import MyOrders from './MyOrders'
import { Button } from '@mui/base'
import { Link, useNavigate } from "react-router-dom"
import { Grid } from '@mui/material'

const Dashboard = () => {
    const navigate = useNavigate();
    const userID = "b9cffee2-5d10-40fe-b93c-1756fc040801"

    const handleClick = () => {
        navigate(`/my-orders/${userID}`)
    }

    return (
        <Grid container mt={15}>
            <Button variant="contained" color='error' onClick={() => handleClick()}>My Orders</Button>
        </Grid >
    )
}

export default Dashboard;