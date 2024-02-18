import React, { useEffect } from 'react'
import { Box, Typography, Grid, Button } from '@mui/material';
import axios from "axios";

const Payment = () => {
    const handleClick = async () => {
        console.log("hi");
        const response = await axios.post("http://localhost:5050/api/payment/checkout", {
          amount:1000,
        });
        console.log("Fdata", response.data);
        const options = {
          key: "rzp_test_QOkfFrm4AWGKax", // Enter the Key ID generated from the Dashboard
          amount: response.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Sachin",
          description: "Test Transaction",
          image:
            "https://media.licdn.com/dms/image/D4D03AQFC-JYSU_Uhag/profile-displayphoto-shrink_200_200/0/1665776397118?e=1704326400&v=beta&t=TGuuKEI7uCmSm9Ji1geeQbsQUw2oujCxcaihHNg_JEs",
          order_id: response.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "http://localhost:5050/api/payment/paymentverification",
          prefill: {
            name: "Sachin Kumar",
            email: "sachin.kumar@example.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rozar = new window.Razorpay(options);
        rozar.open();
    }
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
                <Button onClick={handleClick}>Add Cart Payment</Button>
            </Grid >
        </>
    )
}

export default Payment;