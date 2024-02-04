import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { Stack, Button, InputLabel, OutlinedInput, FormHelperText, Grid } from "@mui/material"
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import { successToast } from "../../components/reactToastify"
import ReCAPTCHA from "react-google-recaptcha";
import { userRegistration } from '../../services/authService';
import { useNavigate } from "react-router-dom";
const captchaKEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

// Form Validation Schema
const formValidation = Yup.object({
    firstName: Yup.string().min(3, 'First Name must be at least 3 characters').required('First Name is required'),
    lastName: Yup.string().min(3, 'Last Name must be at least 3 characters').required('Last Name is required'),
    emailID: Yup.string().email('Email is invalid').required('Email is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

const RegisterForm = () => {
    const [errors, setErrors] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setErrors(false);
        }, 3000)
    }, [errors])

    // Google captcha
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    // User Registration
    const customerRegister = async (values) => {
        const result = await userRegistration(values)
        if (result.statusCode == 200) {
            successToast("Registration Success", "top-right");
            navigate("/login")
        } else {
            setErrorMsg(result.message);
            setErrors(true);
        }
    }

    // Formik
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            emailID: '',
            contactNumber: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: formValidation,
        onSubmit: (values) => { customerRegister(values) }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ p: 3 }}>
                    <Grid item xs={12} md={6} >
                        <Stack spacing={1}>
                            <InputLabel htmlFor="firstname-signup" sx={{ color: "white" }}>First Name</InputLabel>
                            <OutlinedInput
                                id="firstname-login"
                                type="text"
                                value={formik.values.firstName}
                                name="firstName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter First Name"
                                fullWidth
                                size="small"
                                sx={{ border: 1, color: "white" }}
                                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                            />
                        </Stack>
                        {formik.touched.firstName && formik.errors.firstName && (
                            <FormHelperText error id="helper-text-firstname-signup">
                                {formik.errors.firstName}
                            </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="lastName-signup" sx={{ color: "white" }}>Last Name</InputLabel>
                            <OutlinedInput
                                id="LastName-signup"
                                type="text"
                                value={formik.values.lastName}
                                name="lastName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter Last Name"
                                fullWidth
                                size="small"
                                sx={{ border: 1, color: "white" }}
                                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                            />
                        </Stack>
                        {formik.touched.lastName && formik.errors.lastName && (
                            <FormHelperText error id="helper-text-lastName-signup">
                                {formik.errors.lastName}
                            </FormHelperText>
                        )}
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="email-signup" sx={{ color: "white" }}>Email</InputLabel>
                            <OutlinedInput
                                id="email-signup"
                                type="text"
                                value={formik.values.emailID}
                                name="emailID"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter Last Name"
                                fullWidth
                                size="small"
                                sx={{ border: 1, color: "white" }}
                                error={Boolean(formik.touched.emailID && formik.errors.emailID)}
                            />
                        </Stack>
                        {formik.touched.emailID && formik.errors.emailID && (
                            <FormHelperText error id="helper-text-EMAILID-signup">
                                {formik.errors.emailID}
                            </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="contact-signup" sx={{ color: "white" }}>Contact Number</InputLabel>
                            <OutlinedInput
                                id="contact-signup"
                                type="number"
                                value={formik.values.contactNumber}
                                name="contactNumber"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter Contact Number"
                                fullWidth
                                size="small"
                                sx={{ border: 1, color: "white" }}
                                error={Boolean(formik.touched.contactNumber && formik.errors.contactNumber)}
                            />
                        </Stack>
                        {formik.touched.contactNumber && formik.errors.contactNumber && (
                            <FormHelperText error id="helper-text-contactNumber-signup">
                                {formik.errors.contactNumber}
                            </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Password</InputLabel>
                            <OutlinedInput
                                id="password-signup"
                                type="password"
                                value={formik.values.password}
                                name="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter password"
                                fullWidth
                                size="small"
                                sx={{ border: 1, color: "white" }}
                                error={Boolean(formik.touched.password && formik.errors.password)}
                            />
                        </Stack>
                        {formik.touched.password && formik.errors.password && (
                            <FormHelperText error id="helper-text-password-signup">
                                {formik.errors.password}
                            </FormHelperText>
                        )}
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="confirmPassword-signup" sx={{ color: "white" }}>Confirm Password</InputLabel>
                            <OutlinedInput
                                id="confirmPassword-signup"
                                type="password"
                                value={formik.values.confirmPassword}
                                name="confirmPassword"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter Confirm password"
                                fullWidth
                                size="small"
                                sx={{ border: 1, color: "white" }}
                                error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                            />
                        </Stack>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <FormHelperText error id="helper-text-confirmPassword-signup">
                                {formik.errors.confirmPassword}
                            </FormHelperText>
                        )}
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                        <ReCAPTCHA sitekey={captchaKEY} onChange={onChange} />
                    </Grid>

                    <ToastContainer />

                    {
                        errors && (
                            <Grid item xs={12} >
                                <Stack spacing={1}>
                                    <FormHelperText error>
                                        {errorMsg}
                                    </FormHelperText>
                                </Stack>
                            </Grid>
                        )
                    }

                    <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                        <Button type="submit" color="error" variant="contained">Sign Up</Button>
                    </Grid>


                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <h5>By tapping Sign Up, you acknowledge that you have read
                            <br />
                            the Privacy Policy and agree to Terms & Conditions.
                        </h5>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default RegisterForm;