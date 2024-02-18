import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Slide, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';


const ConfirmCheckout = () => {
    console.log("ConfirmCheckout")
    return (
        <>
            <Grid container mt={15}>
                <Grid item sx={{ width: "100%" }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }} color="primary">Thank you for your purchase</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ConfirmCheckout