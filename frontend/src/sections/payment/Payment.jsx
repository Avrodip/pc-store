import React, { useEffect, useState } from 'react'
import axios from "axios";
import { getUserDetailsByID } from '../../services/authService';

const Payment = ({ userID, amount, billing, shipping }) => {
    const [userDetails, setUserDetails] = useState(null)


    useEffect(() => (
        fetchUserDetails()
    ), [])
    const fetchUserDetails = async () => {
        const response = await getUserDetailsByID({ userID: userID })
        setUserDetails(response.data[0])
    }

    const data = {
        userID: userID,
        amount: amount * 100,
        billingID: billing,
        shippingID: shipping
    }

    useEffect(() => {
        handleClick();
    }, [])
    const handleClick = async () => {
        const response = await axios.post("http://localhost:5050/api/payment/checkout", data);

        console.log("Fdata", response.data);
        const options = {
            key: "rzp_test_QOkfFrm4AWGKax",
            amount: response.data.order.amount,
            currency: "INR",
            name: "Sachin",
            description: "Test Transaction",
            image: "https://media.licdn.com/dms/image/D4D03AQFC-JYSU_Uhag/profile-displayphoto-shrink_200_200/0/1665776397118?e=1704326400&v=beta&t=TGuuKEI7uCmSm9Ji1geeQbsQUw2oujCxcaihHNg_JEs",
            order_id: response.data.order.id,
            callback_url: "http://localhost:5050/api/payment/paymentverification",
            prefill: {
                userID: userDetails?.userID,
                name: userDetails?.firstName + userDetails?.lastName,
                email: userDetails?.email,
                contact: userDetails?.contact,
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
        </>
    )
}

export default Payment;