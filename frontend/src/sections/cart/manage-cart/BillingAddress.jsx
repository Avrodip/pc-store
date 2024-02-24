import React, { useState } from 'react'
import { Grid, OutlinedInput, Stack, InputLabel, Select, MenuItem, Button, FormHelperText } from '@mui/material'
import { useFormik } from 'formik';
import { indianStates, countries, StatusCode } from "../../../utils/contant";
import { ArrowRightOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import { createUpdateBillingAddress } from '../../../services/checkout';


const validationSchema = Yup.object({
    fullName: Yup.string().required('This field is Required'),
    telephoneNumber: Yup.string().required('This field is Required'),
    email: Yup.string().required('This field is Required'),
    gst: Yup.string().required('This field is Required'),
    streetAddress: Yup.string().required('This field is Required'),
    city: Yup.string().required('This field is Required'),
    state: Yup.string().required('This field is Required'),
    country: Yup.string().required('This field is Required'),
    zipcode: Yup.string().required('This field is Required'),
})

const userID = localStorage.getItem('pc-store-user')
const BillingAddress = ({ handleBillingAddressOpen }) => {

    const formik = useFormik({
        initialValues: {
            actionType: 1,
            userID: userID,
            id: null,
            orderID: null,

            fullName: '',
            telephoneNumber: '',
            email: '',
            pan: null,
            gst: '',
            streetAddress: '',
            city: '',
            country: countries[0].name,
            state: indianStates[0].name,
            zipcode: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            const response = await createUpdateBillingAddress(values);
            if (response.statusCode === StatusCode.success) {
                handleBillingAddressOpen();
            }
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <Grid container sx={{ display: "flex", justifyContent: "center", background: "#171717", mt: 3, pr: 2, }} spacing={2}>
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
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>GST</InputLabel>
                            <OutlinedInput
                                name='gst'
                                value={formik.values.gst}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter GST'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.gst && formik.errors.gst ? formik.errors.gst : null}</FormHelperText>
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
                                value={formik.values.state}
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
                                value={formik.values.zipcode}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter ZIP code'
                            />
                            <FormHelperText sx={{ color: "red" }}>{formik.touched.zipcode && formik.errors.zipcode ? formik.errors.zipcode : null}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item sx={{ display: "flex", justifyContent: "center", pb: 2, gap: 2 }}>
                        <Grid item>
                            <Stack spacing={1}>
                                <Button variant="contained" type='submit' color='error' onClick={handleBillingAddressOpen}>Back</Button>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack spacing={1}>
                                <Button variant="contained" type='submit' color='error'>Next<ArrowRightOutlined style={{ fontSize: "16px" }} /></Button>
                            </Stack>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </>
    )
}

export default BillingAddress