import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import RegisterForm from '../forms/registerForm';


const Register = () => {
    return (
        <>
            <Grid item xs={12} sm={12} md={4} lg={4} color="primary" sx={{ display: "flex", justifyContent: "center", background: "#171717", color: "white", alignItems: "center" }}>
                <Box sx={{ p: 2, width: "500px", background: "black" }} >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>SIGN UP</Typography>
                    <Typography variant='h6' sx={{ textAlign: "center" }}>ALREADY HAVE AN ANT PC ACCOUNT? SIGN IN</Typography>
                    <RegisterForm />
                </Box>
            </Grid>
        </>
    )
}

export default Register;