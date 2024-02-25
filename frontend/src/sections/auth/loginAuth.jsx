import React, { useEffect } from 'react'
import { Box, Typography, Grid, Button } from '@mui/material';
import LoginForm from '../forms/loginForm';
import { Link, useLocation } from 'react-router-dom';

const LoginAuth = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
                <Box sx={{ p: 3, width: "80%", maxWidth: "450px", background: "black", borderRadius: "10px" }} >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>SIGN IN</Typography>
                    <Typography variant='h6' sx={{ textAlign: "center" }}>NEW TO ANT PC?
                        <Button color="error" component={Link} to="/register">
                            Register
                        </Button>
                    </Typography>

                    <LoginForm location={""} />
                </Box>
            </Grid >
        </>
    )
}

export default LoginAuth;