import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePassword } from '../../services/dashboard';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context-api/userContext';
import { useContext } from 'react';
import axios from 'axios';

function PasswordResetForm() {
    const { checkTokenValidity } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values) => {
            formSubmit(values);
        },
    });
    const formSubmit = async (values) => {
        checkTokenValidity()
            .then((result) => {
                if (result.success) {
                    const changePass = async () => {
                        const res = await axios.post('http://localhost:5050/api/auth/getUserByID', { userID: result.userID })
                        if (res.status === 200) {
                            const response = await changePassword({ password: values.password, email: res.data.data[0].email })
                            if (response.statusCode == 200) {
                                alert("Password Changed Successfully");
                            } else {
                                console.log("Something error happened")
                            }
                        }
                    }
                    changePass();
                } else {
                    handleSignIn();
                }
            })
            .catch((error) => {
                console.error("Error validating token:", error);
            });
    }

    return (
        <form onSubmit={formik.handleSubmit}>

            <Grid>
                <Typography sx={{ fontSize: "19px" }}>Change Password</Typography>
            </Grid>

            <ToastContainer />

            <Grid item xs={12} sm={8} md={5} lg={4} my={3}>
                <Stack spacing={1}>
                    <InputLabel htmlFor="password" sx={{ color: "white", fontSize: '13px' }}>New Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        value={formik.values.password}
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        placeholder="Enter New Password"
                        size="small"
                        sx={{ border: 1, color: "white" }}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                    />
                </Stack>
                {formik.touched.password && formik.errors.password && (
                    <FormHelperText error> {formik.errors.password} </FormHelperText>
                )}
            </Grid>

            <Grid item xs={12} sm={8} md={5} lg={4} my={3}>
                <Stack spacing={1}>
                    <InputLabel htmlFor="confirmPassword" sx={{ color: "white", fontSize: '13px' }}>Re-type New Password</InputLabel>
                    <OutlinedInput
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        type="text"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        placeholder="Re-type New Password"
                        size="small"
                        sx={{ border: 1, color: "white" }}
                        error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                    />
                </Stack>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <FormHelperText error> {formik.errors.confirmPassword} </FormHelperText>
                )}
            </Grid>

            <Grid>
                <Button variant="contained" color='success' sx={{ textTransform: 'none' }} type="submit">Confirm</Button>
            </Grid>

        </form>
    );
}

export default PasswordResetForm;