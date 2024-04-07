import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define your MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // White color for primary elements
    },
    background: {
      default: '#171717', // Dark background color
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5050/api/auth/forgetPassword', { email });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleSubmit = async() => {
    console.log("Email:", email);
    console.log("OTP:", otp);
    try {
        const response = await axios.post('http://localhost:5050/api/auth/verifyotp', { email ,otp});
        console.log("response",response)
        if(response.data.success && response.status === 200){
            alert("otp verified successfully")
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        alert("wrong otp")
      }
  };

  return (
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
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={email}
              onChange={handleEmailChange}
              sx={{
                marginBottom:'5%',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSendOtp}
              style={{ marginTop: "20px", marginBottom:"20px" }}
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
          <br/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgetPassword;
