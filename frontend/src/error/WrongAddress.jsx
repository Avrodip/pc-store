import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WrongAddress = () => {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);
        return () => clearInterval(countdown);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            navigate('/wrongAddress')
        }
    }, [timer]);

    return (
        <Grid container justifyContent="center">
            <Grid item pt={15} pb={15} >
                <Typography variant="h5" color="error" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    Please enter a proper address before proceeding to the payment page.
                </Typography>
                <Typography variant="h6" color="error" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    Redirecting to the address page in {timer} seconds...
                </Typography>
            </Grid>
        </Grid>
    );
};

export default WrongAddress;
