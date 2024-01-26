import React from 'react'
import { useFormik } from 'formik';
import { TextField, Stack, FormControl, Button, InputLabel, OutlinedInput, Grid } from "@mui/material"
import * as Yup from 'yup';

// Form Validation Schema
const formValidation = Yup.object({
    firstName: Yup.string().min(3, 'First Name must be at least 3 characters').required('First Name is required'),
    lastName: Yup.string().min(3, 'Last Name must be at least 3 characters').required('Last Name is required'),
    emailID: Yup.string().email('Email is invalid').required('Email is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

const LoginForm = () => {

    const customerRegister = (values) => {
        console.log("Form Submit ", values)
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            emailID: '',
            contactNumber: '',
            password: '',
            confirmPassword: ''
        },
        // validationSchema: formValidation,
        onSubmit: (values) => { customerRegister(values) }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ p: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField name="firstName" label="First Name" placeholder='Enter First Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName} fullWidth
                        InputProps={{ style: { color: "rgb(179, 175, 170)", border: '1px solid #ced4da' } }}
                        InputLabelProps={{ style: { color: 'white' } }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField name="lastName" label="Last Name" placeholder='Enter Last Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName} fullWidth
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField name="emailID" label="Email" placeholder='Enter Email ID' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.emailID}
                        error={formik.touched.emailID && Boolean(formik.errors.emailID)}
                        helperText={formik.touched.emailID && formik.errors.emailID} fullWidth
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField name="contactNumber" label="Contact Number" placeholder='Enter Contact Number' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contactNumber}
                        error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                        helperText={formik.touched.contactNumber && formik.errors.contactNumber} fullWidth
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField name="password" label="Password" placeholder='Enter password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} fullWidth
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField name="confirmPassword" label="Confirm Password" placeholder='Enter Confirm Password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} fullWidth
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }} />
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                    <Button type="submit" color="error" variant="contained">Sign IN</Button>
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <h5>By tapping Sign Up, you acknowledge that you have read
                        <br />
                        the Privacy Policy and agree to Terms & Conditions.
                    </h5>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm;