import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, createTheme, FormHelperText, InputLabel, Stack, OutlinedInput, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

// Define your MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        background: {
            default: '#171717',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', // Border color
                        },
                        '& .MuiInputBase-input': {
                            color: 'white', // Input text color
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white', // Border color when focused
                        },

                    },
                },
            },
        },
    },
});

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [iseVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };

    const handleSendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:5050/api/auth/forgetPassword', { email });
            if (response.status === 200) {
                alert("otp sent successfully....Please enter")
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    };

    const handleSubmit = async () => {
        if (!email) {
            alert("Please enter email")
            return;
        } else if (!email) {
            alert("Please enter otp")
            return;
        } else {
            try {
                const response = await axios.post('http://localhost:5050/api/auth/verifyotp', { email, otp });
                console.log("response", response)
                if (response.data.success && response.status === 200) {
                    alert("otp verified successfully")
                    setIsVerified(true);
                }
            } catch (error) {
                alert("wrong otp")
            }
        }
    };

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5050/api/auth/setNewPassword', { email, password: values.password });
                if (response.status === 200) {
                    alert("Password changed successfully");
                    setIsVerified(false);
                    navigate('/login')
                }
            } catch (error) {
                console.error('Error setting new password:', error);
            }
        },
    })

    return (
        <>
            {
                iseVerified ?
                    <form onSubmit={formik.handleSubmit}>
                        <Grid width={'25%'} xs={12} sx={{ mx: 'auto', my: 16, border: 1, p: 2 }}>

                            <Grid>
                                <Typography sx={{ fontSize: "19px" }}>Change Password</Typography>
                            </Grid>

                            <Grid item xs={12} sm={8} md={5} lg={4} my={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password" sx={{ color: "white", fontSize: '13px' }}>New Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        value={formik.values.password}
                                        type="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        placeholder="Enter New Password"
                                        size="small"
                                        sx={{ border: 1, color: "white" }}
                                        error={Boolean(formik.touched.password && formik.errors.password)}
                                    />
                                </Stack>
                                {formik.touched.password && formik.errors.password && (
                                    <FormHelperText error> {formik.errors.password} </FormHelperText>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={8} md={5} lg={4} my={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="confirmPassword" sx={{ color: "white", fontSize: '13px' }}>Re-type New Password</InputLabel>
                                    <OutlinedInput
                                        id="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        type="text"
                                        name="confirmPassword"
                                        onChange={formik.handleChange}
                                        placeholder="Re-type New Password"
                                        size="small"
                                        sx={{ border: 1, color: "white" }}
                                        error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                                    />
                                </Stack>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                    <FormHelperText error> {formik.errors.confirmPassword} </FormHelperText>
                                )}
                            </Grid>

                            <Grid>
                                <Button variant="contained" color='success' sx={{ textTransform: 'none' }} type="submit">Confirm</Button>
                            </Grid>

                        </Grid>

                    </form>
                    :
                    <ThemeProvider theme={theme}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box
                                    sx={{
                                        background: "#171717",
                                        color: "white",
                                        padding: "40px",
                                        borderRadius: "10px",
                                        maxWidth: "450px",
                                        marginTop: "100px",
                                    }}
                                >
                                    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "30px" }}>Forget Password</Typography>
                                    <Typography variant="body1">Enter your Email</Typography>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        type='email'
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={email}
                                        onChange={handleEmailChange}
                                        sx={{
                                            marginBottom: '5%',
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleSendOtp}
                                        style={{ marginTop: "20px", marginBottom: "20px" }}
                                    >
                                        Send OTP
                                    </Button>
                                    <Typography variant="body1">Enter OTP</Typography>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={otp}
                                        onChange={handleOtpChange}
                                    />
                                    <Button
                                        variant="contained"
                                        color="error"
                                        fullWidth
                                        onClick={handleSubmit}
                                        style={{ marginTop: "20px" }}
                                    >
                                        Submit
                                    </Button>
                                    <Typography variant="body1" sx={{ textAlign: "center", marginTop: "20px" }}>
                                        Remember your password? <Link to="/login">Login</Link>
                                    </Typography>
                                </Box>
                                <br />
                            </Grid>
                        </Grid>
                    </ThemeProvider>
            }

        </>
    );
};

export default ForgetPassword;
