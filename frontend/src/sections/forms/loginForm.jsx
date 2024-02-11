import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Stack, FormHelperText, Button, InputLabel, OutlinedInput, Grid } from "@mui/material"
import * as Yup from 'yup';
import { userLogin } from '../../services/authService';
import { ToastContainer } from 'react-toastify';
import { successToast } from "../../components/ReactToastify"

// Form Validation Schema
const formValidation = Yup.object({
    emailID: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm = ({ location }) => {
    const [errors, setErrors] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setErrors(false);
        }, 3000)
    }, [errors])

    const customerLogin = async (values) => {
        const result = await userLogin(values)
        if (result.statusCode == 200) {
            successToast("Login Success", "top-right");
            localStorage.setItem("pc-store", result.data.token)
            window.location.href = location;
        } else {
            setErrorMsg(result.message);
            setErrors(true);
        }
    }

    const formik = useFormik({
        initialValues: {
            emailID: '',
            password: '',
        },
        validationSchema: formValidation,
        onSubmit: (values) => { customerLogin(values) }
    })

    return (
        <form onSubmit={formik.handleSubmit} >
            <Grid container spacing={2} sx={{ p: 2, backgroundColor: "black" }}>

                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="emailID-signin" sx={{ color: "white" }}>Email ID</InputLabel>
                        <OutlinedInput
                            id="emailID-signin"
                            value={formik.values.emailID}
                            name="emailID"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Enter Email ID"
                            fullWidth
                            size="small"
                            sx={{ border: 1, color: "white" }}
                            error={Boolean(formik.touched.emailID && formik.errors.emailID)}
                        />
                    </Stack>
                    {formik.touched.emailID && formik.errors.emailID && (
                        <FormHelperText error id="helper-text-emailID-signin">
                            {formik.errors.emailID}
                        </FormHelperText>
                    )}
                </Grid>

                <Grid item xs={12} >
                    <Stack spacing={1}>
                        <InputLabel htmlFor="password-signin" sx={{ color: "white" }}>Password</InputLabel>
                        <OutlinedInput
                            id="password-signin"
                            value={formik.values.password}
                            name="password"
                            type='password'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Enter Password"
                            fullWidth
                            size="small"
                            sx={{ border: 1, color: "white" }}
                            error={Boolean(formik.touched.password && formik.errors.password)}
                        />
                    </Stack>
                    {formik.touched.password && formik.errors.password && (
                        <FormHelperText error id="helper-text-password-signin">
                            {formik.errors.password}
                        </FormHelperText>
                    )}
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
                    <Button type="submit" color="error" variant="contained">Sign IN</Button>
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <h5>By logging in, you agree to our Terms & Conditions and to receive Ant PC emails &
                        updates and acknowledge that you read our Privacy Policy.
                    </h5>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm;