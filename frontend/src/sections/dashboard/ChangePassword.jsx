import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StatusCode } from '../../utils/contant';
import { warningToast } from '../../components/ReactToastify';
import { changePassword } from '../../services/dashboard';
import { ToastContainer } from 'react-toastify';

function PasswordResetForm() {
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
        const response = await changePassword({ password: values.password, confirmPassword: values.confirmPassword });
        if (response.statusCode === StatusCode.success) {
            alert("Password Changed Successfully");
        } else {
            warningToast(response.message, "bottom-right")
        }
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