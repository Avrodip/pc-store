import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material';
import RegisterForm from '../forms/registerForm';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Grid item xs={12} sm={12} md={4} lg={4} color="primary"
                sx={{
                    background: "#171717",
                    color: "white",
                    position: "relative",
                    width: "100%",
                    padding: "180px 0 100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto"
                }}>
                <Box sx={{ p: 3, width: "80%", maxWidth: "600px", background: "black", borderRadius: "10px" }} >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>SIGN UP</Typography>
                    <Typography variant='h6' sx={{ textAlign: "center" }}>ALREADY HAVE AN ACCOUNT?
                        <Button color="error" component={Link} to="/login">
                            Login
                        </Button>
                    </Typography>
                    <RegisterForm />
                </Box>
            </Grid>
        </>
    )
}

export default Register;