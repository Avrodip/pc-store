import React, { useContext, useEffect, useState } from 'react'
import { Grid, OutlinedInput, Stack, InputLabel, Select, MenuItem, Button, FormHelperText } from '@mui/material'
import { useFormik } from 'formik';
import { indianStates, countries, StatusCode } from "../../utils/contant";
import { ArrowRightOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import { AuthContext } from '../../context-api/userContext';
import { useNavigate } from 'react-router-dom';
import { getShippingAddressByID } from '../../services/checkout';
import axios from 'axios';

const validationSchema = Yup.object({
    fullName: Yup.string().required('This field is Required'),
    telephoneNumber: Yup.string().required('This field is Required'),
    email: Yup.string().required('This field is Required'),
    streetAddress: Yup.string().required('This field is Required'),
    city: Yup.string().required('This field is Required'),
    state: Yup.string().required('This field is Required'),
    country: Yup.string().required('This field is Required'),
    zipcode: Yup.number().required('This field is Required')
        .test('len', 'ZipCode Must be exactly 6 Digits long', val => val?.toString().length === 6)
})

const userID = localStorage.getItem('pc-store-user')
const MyAddress = () => {
    const { checkTokenValidity } = useContext(AuthContext)
    const [isEdit, setIsEdit] = useState(false)
    const [shippingAddressList, setShippingAddressList] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        getShippingAddressList();
    }, [])
    const getShippingAddressList = async () => {
        checkTokenValidity()
            .then((result) => {
                if (result.success) {
                    const handleShiping = async () => {
                        const response = await axios.post("http://localhost:5050/api/shippingAddress/getShippingAddressList", { userID: result.userID })
                        if (response.status === StatusCode.success) {
                            const length = response.data.data.length
                            setShippingAddressList(response.data.data[0][length - 1])
                        }
                    }
                    handleShiping();
                } else {
                    navigate('/login')
                }
            })
            .catch((error) => {
                console.error("Error validating token:", error);
            });
    }

    const formik = useFormik({
        initialValues: {
            actionType: 1,
            userID: userID,
            id: "",

            fullName: '',
            telephoneNumber: '',
            email: '',
            gst: '',
            streetAddress: '',
            city: '',
            country: countries[0].name,
            state: "",
            zipcode: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            handleSubmit(values);
        }
    })
    const handleSubmit = async () => {
        checkTokenValidity()
            .then((result) => {
                if (result.success) {
                    const handleShiping = async () => {
                        const data = convertData(formik.values, result.userID)
                        const response = await axios.post("http://localhost:5050/api/shippingAddress/updateShippingAddress", data)
                        if (response.status === StatusCode.success) {
                            alert("Shipping Address Updated Successfully...")
                        }
                    }
                    handleShiping();
                } else {
                    navigate('/login')
                }
            })
            .catch((error) => {
                console.error("Error validating token:", error);
            });
    }

    const convertData = (data, userID) => {
        const convertedData = {
            actionType: 2,
            id: data?.id,
            userID: userID,

            name: data?.fullName,
            contactNumber: data.telephoneNumber,
            email: data.email,
            address: data.streetAddress,
            city: data.city,
            country: data.country,
            state: data.state,
            zipcode: data.zipcode,
            orderID: "order_NeigCSjXljx6BU",
            shippingStatus: 0,
        }
        return convertedData;
    }

    useEffect(() => {
        if (shippingAddressList) {
            formik.setValues({
                actionType: 2,
                id: shippingAddressList?.id,
                fullName: shippingAddressList?.name,
                telephoneNumber: shippingAddressList?.contactNumber,
                email: shippingAddressList?.email,
                streetAddress: shippingAddressList?.address,
                city: shippingAddressList?.city,
                country: shippingAddressList?.country,
                state: shippingAddressList?.state,
                zipcode: shippingAddressList?.zipCode,
            })
        }
    }, [shippingAddressList])

    return (
        <>
            <form onSubmit={formik.handleSubmit} >

                <Grid container sx={{ display: "flex", justifyContent: "center", background: "#171717", mt: 2, p: 1, gap: 1 }} >
                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Full Name</InputLabel>
                            <OutlinedInput
                                name='fullName'
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Full Name'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Contact Number</InputLabel>
                            <OutlinedInput
                                name='telephoneNumber'
                                value={formik.values.telephoneNumber}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Contact Number'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.telephoneNumber && formik.errors.telephoneNumber ? formik.errors.telephoneNumber : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Email</InputLabel>
                            <OutlinedInput
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Email'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Address</InputLabel>
                            <OutlinedInput
                                name='streetAddress'
                                value={formik.values.streetAddress}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Address'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.streetAddress && formik.errors.streetAddress ? formik.errors.streetAddress : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>City</InputLabel>
                            <OutlinedInput
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter City'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.city && formik.errors.city ? formik.errors.city : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>State</InputLabel>
                            <Select
                                name='state'
                                value={Array.isArray(indianStates) && indianStates.length > 0 ? formik.values.state : ""}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}>
                                {indianStates.map((state, index) => (<MenuItem key={index} value={state.name}>{state.name}</MenuItem>))}
                            </Select>
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.state && formik.errors.state ? formik.errors.state : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Country</InputLabel>
                            <Select
                                name='country'
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                            >
                                {countries.map((country, index) => (<MenuItem key={index} value={country.name}>{country.name}</MenuItem>))}
                            </Select>
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.country && formik.errors.country ? formik.errors.country : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>ZIP code</InputLabel>
                            <OutlinedInput
                                name='zipcode'
                                type='number'
                                value={formik.values.zipcode}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter ZIP code'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.zipcode && formik.errors.zipcode ? formik.errors.zipcode : null}</FormHelperText>
                        </Stack>
                    </Grid>

                </Grid>

                <br />

                <Grid textAlign={'center'}>
                    <Button variant="contained" onClick={() => formik.handleSubmit()} color='error'>Submit</Button>
                </Grid>

            </form>
        </>
    )
}

export default MyAddress;