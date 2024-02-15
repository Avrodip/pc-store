import { ArrowRightOutlined } from '@ant-design/icons'
import { Grid, Stack, InputLabel, OutlinedInput, Select, MenuItem, Button, FormHelperText } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const ShippingAddress = () => {

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
            actionType: 1,
            id: null,
            pan: null,
            gst: null,

            fullName: '',
            telephoneNumber: '',
            email: '',
            streetAddress: '',
            city: '',
            state: indianStates[0].name,
            country: countries[0].name,
            zipCode: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('This field is Required'),
            telephoneNumber: Yup.string().required('This field is Required'),
            email: Yup.string().email('Invalid email address').required('This field is Required'),
            streetAddress: Yup.string().required('This field is Required'),
            city: Yup.string().required('This field is Required'),
            state: Yup.string().required('This field is Required'),
            country: Yup.string().required('This field is Required'),
            zipCode: Yup.string().required('This field is Required'),
        }),
        onSubmit: async (values) => {
            const response = await createProductCart(values);
            console.log("Response : ", response);
        }
    })



    return (
        <Grid container >
            <form onSubmit={formik.handleSubmit}>
                <Grid container sx={{ display: "flex", justifyContent: "center", background: "#171717", mt: 3, pr: 2, pb: 3 }} spacing={2}>
                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
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
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.fullName && formik.errors.fullName}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5} lg={5} sx={{ mt: 1 }}>
                        <Stack spacing={1}>
                            <InputLabel sx={{ color: 'white', fontSize: "13px" }}>Contact Number</InputLabel>
                            <OutlinedInput
                                name='telephoneNumber'
                                type='number'
                                value={formik.values.telephoneNumber}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Contact Number'
                            />
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.telephoneNumber && formik.errors.telephoneNumber}
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
                                name='streetAddress'
                                value={formik.values.streetAddress}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter Address'
                            />
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.streetAddress && formik.errors.streetAddress}
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
                            <helperText>{formik.touched.state && formik.errors.state}</helperText>
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
                                name='zipCode'
                                value={formik.values.zipCode}
                                onChange={formik.handleChange}
                                size='small'
                                sx={{ width: "100%", color: "white", border: 1 }}
                                placeholder='Enter ZIP code'
                            />
                            <FormHelperText sx={{ color: "red" }}>
                                {formik.touched.zipCode && formik.errors.zipCode}
                            </FormHelperText>
                        </Stack>
                    </Grid>

                    <Grid xs={12} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Button type='submit' color='error' variant='outlined'>Save Address</Button>
                    </Grid>

                </Grid>
            </form>

        </Grid>
    )
}

export default ShippingAddress