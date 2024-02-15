import React, { useEffect, useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, OutlinedInput, Button, Stack, TextField, FormControl, Typography, Select, MenuItem, Box, useMediaQuery, DialogContent, IconButton, DialogTitle, FormHelperText, InputLabel } from '@mui/material'
import { DeleteOutlined, ArrowRightOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import ShippingAddress from './ShippingAddress';

const Checkout = () => {
    const isBelow420px = useMediaQuery('(max-width:420px)');
    const is1200To1260px = useMediaQuery('(min-width: 1200px) and (max-width: 1260px)');
    const [cartProductDetails, setCartProductDetails] = useState([]);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [hasToken, setHasToken] = useState(false);
    const [isChangeForm, setIsChangeForm] = useState(true);
    const [isOpenAddress, setIsOpenAddress] = useState(false);
    const [isOpenShipping, setIsOpenShipping] = useState(false);


    const indianStates = [
        { name: 'Andhra Pradesh', code: 'AP' },
        { name: 'Arunachal Pradesh', code: 'AR' },
        { name: 'Assam', code: 'AS' },
        { name: 'Bihar', code: 'BR' },
        { name: 'Chhattisgarh', code: 'CG' },
        { name: 'Goa', code: 'GA' },
        { name: 'Gujarat', code: 'GJ' },
        { name: 'Haryana', code: 'HR' },
        { name: 'Himachal Pradesh', code: 'HP' },
        { name: 'Jharkhand', code: 'JH' },
        { name: 'Karnataka', code: 'KA' },
        { name: 'Kerala', code: 'KL' },
        { name: 'Madhya Pradesh', code: 'MP' },
        { name: 'Maharashtra', code: 'MH' },
        { name: 'Manipur', code: 'MN' },
        { name: 'Meghalaya', code: 'ML' },
        { name: 'Mizoram', code: 'MZ' },
        { name: 'Nagaland', code: 'NL' },
        { name: 'Odisha', code: 'OR' },
        { name: 'Punjab', code: 'PB' },
        { name: 'Rajasthan', code: 'RJ' },
        { name: 'Sikkim', code: 'SK' },
        { name: 'Tamil Nadu', code: 'TN' },
        { name: 'Telangana', code: 'TG' },
        { name: 'Tripura', code: 'TR' },
        { name: 'Uttar Pradesh', code: 'UP' },
        { name: 'Uttarakhand', code: 'UT' },
        { name: 'West Bengal', code: 'WB' },
        { name: 'Andaman and Nicobar Islands', code: 'AN' },
        { name: 'Chandigarh', code: 'CH' },
        { name: 'Dadra and Nagar Haveli', code: 'DN' },
        { name: 'Daman and Diu', code: 'DD' },
        { name: 'Lakshadweep', code: 'LD' },
        { name: 'Delhi', code: 'DL' },
        { name: 'Puducherry', code: 'PY' }
    ];

    const countries = [
        { name: 'India' },
        { name: 'Pakistan' },
        { name: 'Bangladesh' },
        { name: 'Nepal' },
        { name: 'Sri Lanka' }
    ];

    const formik = useFormik({
        initialValues: {
            fullName: '',
            contactNumber: '',
            email: '',
            gst: '',
            address: '',
            city: '',
            state: indianStates[0].name,
            country: countries[0].name,
            zipCode: '',
        },
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <>
            <Grid sx={{ pt: 15, p: 5, bgcolor: "#171717" }}>
                <Typography sx={{ color: "white", textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Billing & Shipping Address</Typography>
            </Grid>

            <Grid container sx={{ gap: { xs: 1, lg: 5 }, backgroundColor: "black", px: { xs: 1, sm: 2, md: 4 }, py: 8, display: "flex", justifyContent: "center" }}>

                <Grid item xs={12} lg={7} >

                    <Grid item sx={{ display: "flex", ml: -2 }}>
                        <Grid item sm={6} md={6} >
                            <Stack spacing={1} >
                                <Button variant="contained" onClick={() => setIsChangeForm(true)} sx={{ borderRadius: 0, backgroundColor: isChangeForm ? 'red' : '#171717', '&:hover': { backgroundColor: isChangeForm ? 'red' : '#171717', }, fontSize: "20px" }}>Billing</Button>
                            </Stack>
                        </Grid>

                        <Grid item sm={6} md={6} >
                            <Stack spacing={1} >
                                <Button variant="contained" onClick={() => { setIsChangeForm(false); setIsOpenAddress(false) }} sx={{ borderRadius: 0, backgroundColor: isChangeForm ? '#171717' : 'red', ' &:hover': { backgroundColor: isChangeForm ? '#171717' : 'red', }, fontSize: "20px" }}>Shipping</Button>
                            </Stack>
                        </Grid>

                    </Grid>
                    {isOpenAddress && (
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container sx={{ display: "flex", justifyContent: "center", background: "#171717", mt: 3, pr: 2 }} spacing={2}>
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
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Contact Number</InputLabel>
                                        <OutlinedInput
                                            name='contactNumber'
                                            value={formik.values.contactNumber}
                                            onChange={formik.handleChange}
                                            size='small'
                                            sx={{ width: "100%", color: "white", border: 1 }}
                                            placeholder='Enter Contact Number'
                                        />
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
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel sx={{ color: 'white', fontSize: "13px" }}>GST</InputLabel>
                                        <OutlinedInput
                                            name='gst'
                                            value={formik.values.gst}
                                            onChange={formik.handleChange}
                                            size='small'
                                            sx={{ width: "100%", color: "white", border: 1 }}
                                            placeholder='Enter GST'
                                        />
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Address</InputLabel>
                                        <OutlinedInput
                                            name='address'
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                            size='small'
                                            sx={{ width: "100%", color: "white", border: 1 }}
                                            placeholder='Enter Address'
                                        />
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
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel sx={{ color: 'white', fontSize: "13px" }}>State</InputLabel>
                                        <Select
                                            name='state'
                                            value={formik.values.state}
                                            onChange={formik.handleChange}
                                            size='small'
                                            sx={{ width: "100%", color: "white", border: 1 }}>
                                            {indianStates.map((state, index) => (<MenuItem key={index} value={state.name}>{state.name}</MenuItem>))}
                                        </Select>
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
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel sx={{ color: 'white', fontSize: "13px" }}>ZIP code</InputLabel>
                                        <OutlinedInput
                                            name='zipCode'
                                            value={formik.values.zipCode}
                                            onChange={formik.handleChange}
                                            size='small'
                                            sx={{ width: "100%", color: "white", border: 1 }}
                                            placeholder='Enter ZIP code'
                                        />
                                    </Stack>
                                </Grid>

                                <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                                    <Stack spacing={1}>
                                        <Button variant="contained" type='submit' color='error'>Next<ArrowRightOutlined style={{ fontSize: "16px" }} /></Button>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </form>)}
                    <Grid item sx={{ background: "#171717" }}>
                        <Grid item sx={{ m: 3, pt: 3 }}>
                            <Typography sx={{ textAlign: "center" }}>Please Choose Option</Typography>
                        </Grid>

                        <Grid container sx={{ display: "flex", justifyContent: "center", pb: 4, }}>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Button variant="contained" color='error' sx={{ mr: 2, borderRadius: 0 }}>Same As Billing Address</Button>
                                <Button variant="contained" color='error' onClick={() => setIsOpenShipping(!isOpenAddress)} sx={{ borderRadius: 0 }}>Add New Shipping Address</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {isOpenShipping && (<ShippingAddress />)}

                    <Grid item sx={{ display: "flex", justifyContent: "space-between", mt: 3, pt: 2, pl: 2, background: "#171717", height: "200px" }}>
                        <Grid item >
                            <Typography sx={{ fontSize: "20px" }}>Select Address</Typography>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => setIsOpenAddress(!isOpenAddress)} variant="contained" color='error' sx={{ mr: 2 }}>Add New Address</Button>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={12} lg={4} sx={{ pt: 4, bgcolor: "#171717" }}>
                    <Grid item >
                        <Box sx={{ pb: 2 }}>
                            <Typography align='center'>ORDER DETAILS</Typography>
                        </Box>

                        <Grid item sx={{ px: 2 }}>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>ANT PC PHARAOH RZ500X X 1</Typography>
                                <Typography>₹ 137394</Typography>
                            </Box>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>Sub Total</Typography>
                                <Typography>₹ 1800</Typography>
                            </Box>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>Shipping Charges</Typography>
                                <Typography>₹ 1800</Typography>
                            </Box>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>Total</Typography>
                                <Typography>₹ 139194</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid >
        </>
    )
}

export default Checkout