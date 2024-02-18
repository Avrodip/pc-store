import React, { useEffect, useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, OutlinedInput, Button, Stack, TextField, FormControl, Typography, Select, MenuItem, Box, useMediaQuery, DialogContent, IconButton, DialogTitle, FormHelperText } from '@mui/material'
import { DeleteOutlined, ArrowRightOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import CloseIcon from '@mui/icons-material/Close';
import { deleteCartProduct, displayCartProductDetails, createProductCart } from '../../services/configureCart';
import DialogActions from '@mui/material/DialogActions';
import { useFormik } from 'formik';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import LoginForm from '../forms/loginForm';
import { useNavigate } from 'react-router-dom';

const styles = {
    section: {
        color: "white",
        fontSize: "10px",
        borderBottom: "1px solid #3e3e3e",
        padding: "4px"
    },
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const CartProductDetails = () => {
    const isBelow420px = useMediaQuery('(max-width:420px)');
    const is1200To1260px = useMediaQuery('(min-width: 1200px) and (max-width: 1260px)');
    const [cartProductDetails, setCartProductDetails] = useState([]);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [hasToken, setHasToken] = useState(false);
    const [expandedProducts, setExpandedProducts] = useState({});
    const [cartTotal, setCartTotal] = useState(0);
    const navigate = useNavigate();

    // Function to toggle the "View more" state for a specific product
    const toggleViewMore = (productId) => {
        setExpandedProducts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    };

    // JSX for rendering the "View more" section based on the expanded state
    const renderViewMoreSection = (data) => {
        if (expandedProducts[data.id]) {
            return (
                <Table className="animate__animated animate__zoomIn animate__slow-400ms">
                    <TableBody sx={{ border: "1px solid #3e3e3e" }}>
                        <TableRow>
                            <TableCell style={styles.section}>PROCESSOR:</TableCell>
                            <TableCell style={styles.section}>{data?.processor}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>MOTHERBOARD:</TableCell>
                            <TableCell style={styles.section}>{data?.motherBoard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>RAM:</TableCell>
                            <TableCell style={styles.section}>{data?.ram}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>RAM QTY:</TableCell>
                            <TableCell style={styles.section}>{data?.ramQuantity}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>GRAPHIC CARD:</TableCell>
                            <TableCell style={styles.section}>{data?.graphicCard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>SSD:</TableCell>
                            <TableCell style={styles.section}>{data?.primaryStorage}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={styles.section}>HDD:</TableCell>
                            <TableCell style={styles.section}>{data?.secondaryStorage}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>HDD QTY:</TableCell>
                            <TableCell style={styles.section}>{data?.hddQuantity}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>POWERSUPPLY:</TableCell>
                            <TableCell style={styles.section}>{data?.psu}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>CPU COOLER:</TableCell>
                            <TableCell style={styles.section}>{data?.cpuCooler}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>CABINET:</TableCell>
                            <TableCell style={styles.section}>{data?.casse}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>OS:</TableCell>
                            <TableCell style={styles.section}>{data?.os}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.section}>SUPPORT:</TableCell>
                            <TableCell style={styles.section}>{data?.support}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            );
        }
        return null;
    };

    const handleClickOpen = () => {
        console.log("Handle Click is called")
        setOpenSignIn(!openSignIn);
        navigate("/checkout")
    }

    useEffect(() => {
        const token = localStorage.getItem('pc-store');
        if (token) {
            setHasToken(true);
        } else {
            setHasToken(false);
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        try {
            const response = await displayCartProductDetails();
            console.log("Response : ", response.data[0])
            setCartProductDetails(response.data[0]);
        } catch (error) {
            console.log("Some thing error happenned : ", error.message)
        }
    };

    const deleteProduct = async (productID) => {
        const response = await deleteCartProduct({ id: productID });
        console.log("Response : after delete : ", response)
        fetchData();
    }

    const formik = useFormik({
        initialValues: {
            prodQuantity: 1
        }
    })

    const handleQuantityChange = async (productId, newQuantity) => {

        const productIndex = cartProductDetails.findIndex(product => product.id === productId);

        if (productIndex !== -1) {
            const updatedCartProductDetails = [...cartProductDetails];
            console.log("Product Index : ", updatedCartProductDetails)

            const productData = {
                user: 123,
                productType: 1,
                actionType: 2,

                id: updatedCartProductDetails[productIndex].id,
                processor: updatedCartProductDetails[productIndex].processor,
                motherBoard: updatedCartProductDetails[productIndex].motherBoard,
                ram: updatedCartProductDetails[productIndex].ram,
                ramQuantity: updatedCartProductDetails[productIndex].ramQuantity,
                graphicCard: updatedCartProductDetails[productIndex].graphicCard,
                hddQuantity: updatedCartProductDetails[productIndex].hddQuantity,
                price: updatedCartProductDetails[productIndex].price,
                quantity: newQuantity,
                primaryStorage: updatedCartProductDetails[productIndex].primaryStorage,
                secondaryStorage: updatedCartProductDetails[productIndex].secondaryStorage,
                casse: updatedCartProductDetails[productIndex].casse,
                cpuCooler: updatedCartProductDetails[productIndex].cpuCooler,
                psu: updatedCartProductDetails[productIndex].psu,
                support: updatedCartProductDetails[productIndex].support,
                os: updatedCartProductDetails[productIndex].os,
                monitor: updatedCartProductDetails[productIndex].monitor,
                monitorQuantity: updatedCartProductDetails[productIndex].monitorQuantity,
                keyboard: updatedCartProductDetails[productIndex].keyboard,
                mouse: updatedCartProductDetails[productIndex].mouse,
                wifi: updatedCartProductDetails[productIndex].wifi,
                customCable: updatedCartProductDetails[productIndex].customCable,
            };

            const response = await createProductCart(productData);
            console.log("Response received : ", response)
        }
    }

    return (
        <>
            <Grid sx={{ mt: 15, p: 5, bgcolor: "#171717" }}>
                <Typography sx={{ color: "white", textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>CART PRODUCT DETAILS</Typography>
            </Grid>

            <Grid container
                sx={{ gap: { xs: 1, lg: 5 }, backgroundColor: "black", px: { xs: 1, sm: 2, md: 4 }, py: 8, display: "flex", justifyContent: "center" }}>

                <Grid item xs={12} lg={7} >
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ borderTop: 1 }} >
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'left', color: "white", pl: 5 }}>Product</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'left', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Price</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Quantity</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Total</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    cartProductDetails?.map((data) => (
                                        <TableRow>
                                            <TableCell sx={{ color: "white", textAlign: 'left', width: "100px" }}>
                                                <img src='https://www.ant-pc.com/Case/ANT_Esports_211_Air_Black.png' style={{ height: "100px", width: "100px" }} />
                                            </TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'left' }}>
                                                <Typography>
                                                    ANT PC DORYLUS CL940N
                                                </Typography>
                                                <Typography component="h6" color="error" sx={{ cursor: "pointer", fontSize: "12px", fontWeight: "bold", width: "80px" }} onClick={() => toggleViewMore(data.id)}>
                                                    View more <DownOutlined style={{ fontSize: "10px" }} />
                                                </Typography>

                                                {renderViewMoreSection(data)}

                                            </TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'center' }}>{data?.price}</TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'center' }}>
                                                <Select
                                                    value={data.quantity}
                                                    onChange={(e) => {
                                                        formik.handleChange(e);
                                                        handleQuantityChange(data.id, parseInt(e.target.value));
                                                    }}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white", width: "80px" }}
                                                    IconComponent={() => <DownOutlined style={{ color: 'white', marginRight: "7px" }} />}
                                                >
                                                    {[1, 2, 3, 4, 5].map(quantity => (
                                                        <MenuItem key={quantity} value={quantity}>{quantity}</MenuItem>
                                                    ))}
                                                </Select>
                                            </TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'center' }}>₹{data?.price * formik.values.prodQuantity}</TableCell>
                                            <TableCell sx={{ color: "white", textAlign: 'center' }} >
                                                <DeleteOutlined style={{ color: 'red' }} onClick={() => { deleteProduct(data.id); }} />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid container sx={{ display: "flex", justifyContent: { xs: "space-evenly", sm: "space-between" }, my: { xs: 3, lg: 5 } }}>
                        <Grid item
                            sx={{
                                ml: { xs: 2, sm: 2 },
                                width: { xs: "300px", sm: "auto" },
                            }}>
                            <Stack spacing={1}>
                                <Button variant="contained" color="error"><ArrowLeftOutlined style={{ fontSize: "16px" }} />Continue Shopping</Button>
                            </Stack>
                        </Grid>

                        <Grid item
                            sx={{
                                ml: { xs: 2, sm: 2 },
                                mt: { xs: 2, sm: 0 },
                                pr: { sm: 2 },
                                width: { xs: "300px", sm: "auto" },
                            }}>
                            <Stack spacing={1}>
                                <Button variant="contained" color='error' onClick={handleClickOpen}>Proceed to Checkout<ArrowRightOutlined style={{ fontSize: "16px" }} /></Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid>
                        {
                            openSignIn && hasToken === false && (
                                <BootstrapDialog
                                    onClose={false}
                                    aria-labelledby="customized-dialog-title"
                                    open={true}
                                >
                                    <Box sx={{ border: 2 }}>
                                        <DialogTitle sx={{ m: 0, p: 2, color: "white", background: "black", textAlign: "center" }} id="customized-dialog-title">
                                            SIGN IN
                                        </DialogTitle>
                                        <IconButton
                                            aria-label="close"
                                            onClick={() => setOpenSignIn(false)}
                                            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <DialogContent dividers sx={{ background: "black" }}>

                                            <LoginForm location={"/cart"} />

                                        </DialogContent>
                                    </Box>
                                </BootstrapDialog>
                            )
                        }
                    </Grid>

                </Grid>

                <Grid item xs={12} lg={4} sx={{ pt: 4, pb: 3, bgcolor: "#171717" }}>
                    <Grid item sx={{ px: 2, pb: 4 }}>
                        <Box>
                            <Typography align='center'>COUPON CODE</Typography>
                        </Box>

                        <Grid item sx={{ mt: 2 }}>
                            <FormControl variant="outlined" fullWidth>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    sx={{ width: "100%", border: "1px dashed white", color: "white" }}
                                    placeholder='Enter coupon code'
                                />
                            </FormControl>
                        </Grid>

                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Grid item sx={{ mt: 2, width: "300px" }}>
                                <Stack spacing={1}>
                                    <Button variant="contained" color='error'>Apply</Button>
                                </Stack>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item sx={{ py: 4, backgroundColor: "#202020" }}>
                        <Box sx={{ mb: 2 }}>
                            <Typography align='center'>CHOOSE DELIVERY</Typography>
                        </Box>

                        <Grid item sx={{ display: "flex", justifyContent: "space-between", flexDirection: isBelow420px ? 'column' : is1200To1260px ? 'column' : 'row', px: 4, gap: 2 }}>
                            <Grid sx={{ width: "100%" }}>
                                <Stack spacing={1}>
                                    <Button variant="contained" sx={{ background: "black", fontSize: "14px", px: 4, py: 2 }}>By Surface</Button>
                                </Stack>
                            </Grid>

                            <Grid sx={{ width: "100%" }}>
                                <Stack spacing={1}>
                                    <Button variant="contained" sx={{ background: "black", fontSize: "14px", px: 4, py: 2 }}>By Air</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item sx={{ pt: 4 }}>
                        <Box>
                            <Typography align='center'>ORDER DETAILS</Typography>
                        </Box>

                        <Grid item sx={{ px: 2 }}>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>Product Total</Typography>
                                <Typography>₹ 137394</Typography>
                            </Box>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>Shipping Charges</Typography>
                                <Typography>₹ 1800</Typography>
                            </Box>
                            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,.2)", display: "flex", justifyContent: "space-between", mb: "10px", pb: "4px" }}>
                                <Typography>Total</Typography>
                                <Typography>₹ 139194</Typography>
                            </Box>

                            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                                <Stack spacing={1}>
                                    <Button variant="contained" color='error'>Proceed to Checkout<ArrowRightOutlined style={{ fontSize: "16px" }} /></Button>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid >
            </Grid >
        </>
    )
}

export default CartProductDetails