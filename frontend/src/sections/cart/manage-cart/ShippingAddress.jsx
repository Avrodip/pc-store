import { ArrowRightOutlined } from '@ant-design/icons'
import { Grid, Stack, InputLabel, OutlinedInput, Select, MenuItem, Button, FormHelperText } from '@mui/material'
import { createUpdateShippingAddress } from '../../../services/checkout'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { successToast } from '../../../components/ReactToastify'
import ConfirmCheckout from './ConfirmCheckout'
import { countries, indianStates } from '../../../utils/contant'
import { useNavigate } from 'react-router-dom'

const ShippingAddress = ({ setIsOpenShipping }) => {
    const navigate = useNavigate()

    const handleConfirmCheckout = () => {
        navigate('/confirmCheckout')
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            contactNumber: '',
            email: '',
            address: '',
            city: '',
            state: indianStates[0].name,
            country: countries[0].name,
            zipcode: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('This field is Required'),
            contactNumber: Yup.string().required('This field is Required'),
            email: Yup.string().email('Invalid email address').required('This field is Required'),
            address: Yup.string().required('This field is Required'),
            city: Yup.string().required('This field is Required'),
            state: Yup.string().required('This field is Required'),
            country: Yup.string().required('This field is Required'),
            zipcode: Yup.string().required('This field is Required'),
        }),
        onSubmit: (values) => {
            // const fetchAPI = async () => {
            //     const response = await createUpdateShippingAddress({
            //         ...values,
            //         actionType: 1,
            //         id: null
            //     });
            //     if (response.statusCode == 200) {
            //         successToast("Address Saved Successfully", "top-right");
            //         setIsOpenShipping(false)
            //     }
            // }
            // fetchAPI();
            handleConfirmCheckout();
        }
    })

    return (
        <Grid container sx={{ pl: 2 }}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container sx={{ display: "flex", justifyContent: "center", background: "#171717", pr: 2, pb: 3 }} spacing={2}>
                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Full Name</InputLabel>
                            <OutlinedInput
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Full Name'
                            />
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.name && formik.errors.name}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Contact Number</InputLabel>
                            <OutlinedInput
                                name='contactNumber'
                                type='number'
                                value={formik.values.contactNumber}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Contact Number'
                            />
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.contactNumber && formik.errors.contactNumber}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.email && formik.errors.email}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.address && formik.errors.address}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                        <FormHelperText sx={{ color: "red" }}>
                            {formik.touched.city && formik.errors.city}
                        </FormHelperText>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                            <FormHelperText>{formik.touched.state && formik.errors.state}</FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.country && formik.errors.country}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.zipcode && formik.errors.zipcode}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <Button type='submit' variant="contained" color='error' onClick={handleConfirmCheckout}>Save Address & Checkout <ArrowRightOutlined /></Button>
                        </Grid>
                    </Grid>

                </Grid>
            </form>

        </Grid>
    )
}

export default ShippingAddress