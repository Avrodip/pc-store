import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import LoginForm from '../forms/loginForm';

const LoginAuth = () => {
    return (
        <>
            <Grid item xs={12} sm={12} md={4} lg={4} color="primary" sx={{ display: "flex", justifyContent: "center", background: "#171717", color: "white", alignItems: "center" }}>
                <Box sx={{ p: 2, width: "500px", background: "black" }} >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>SIGN IN</Typography>
                    <Typography variant='h6' sx={{ textAlign: "center" }}>NEW TO ANT PC? SIGN UP</Typography>
                    <LoginForm />
                </Box>
            </Grid>
        </>
    )
}

export default LoginAuth;