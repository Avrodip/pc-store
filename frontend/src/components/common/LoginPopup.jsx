import React from 'react'
import { Box, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LoginForm from '../../sections/forms/loginForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const LoginPopup = ({ location, handleSignIn }) => {
    return (
        <BootstrapDialog onClose={handleSignIn} aria-labelledby="customized-dialog-title" open={true} >
            <Box sx={{ border: "1px solid pink", maxWidth: "400px" }} >
                <DialogTitle sx={{ m: 0, p: 2, color: "white", background: "black", textAlign: "center" }} id="customized-dialog-title">
                    SIGN IN
                </DialogTitle>
                <IconButton aria-label="close" onClick={handleSignIn} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}>
                    <CloseIcon />
                </IconButton>

                <DialogContent dividers sx={{ background: "black" }}>
                    <LoginForm location={location} handleSignIn={handleSignIn} />
                </DialogContent>
            </Box>
        </BootstrapDialog>
    )
}

export default LoginPopup