import React, { useEffect, useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Stack, Typography, Box, useMediaQuery } from '@mui/material'
import { ArrowRightOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getBillingAddressByID, getShippingAddressByID } from '../../../services/address';
import { displayCartProductDetails } from '../../../services/configureCart';
import Payment from '../../payment/Payment';
import { successToast } from '../../../components/ReactToastify';

const styles = {
    section: {
        color: "white",
        fontSize: "10px",
        borderBottom: "1px solid #3e3e3e",
        padding: "4px"
    },
}
const userID = localStorage.getItem('pc-store-user')
const ConfirmCheckout = () => {
    const isBelow420px = useMediaQuery('(max-width:420px)');
    const is1200To1260px = useMediaQuery('(min-width: 1200px) and (max-width: 1260px)');
    const [cartProductDetails, setCartProductDetails] = useState([]);
    const [hasToken, setHasToken] = useState(false);
    const [expandedProducts, setExpandedProducts] = useState({});
    const [cartTotal, setCartTotal] = useState(0);
    const [billingAddress, setBillingAddress] = useState([])
    const [shippingAddress, setShippingAddress] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(true);
    const [isPayment, setIsPayment] = useState(false);
    const [isAddressPresent, setIsAddressPresent] = useState(null);
    // const [userID, setUserID] = useState(null);
    const [amount, setAmount] = useState(1000);
    const params = useParams();
    const navigate = useNavigate();
    const { shipping, billing } = params;

    useEffect(() => {
        getBilling();
        getShipping();
    }, [])
    const getBilling = async () => {
        const response = await getBillingAddressByID({ "userID": userID, "id": billing });

        if (response.success) {
            setBillingAddress(response.data[0][0]);
            setIsAddressPresent(response.data[0][0].length > 0 ? true : false)
        }
    }
    const getShipping = async () => {
        const response = await getShippingAddressByID({ "userID": userID, "id": shipping });
        console.log("userDfbvbf", response)
        if (response.success) {
            setShippingAddress(response.data[0][0]);
            setIsAddressPresent(response.data[0][0].length > 0 ? true : false)
        }
    }

    // useEffect(() => {
    //     if (!isAddressPresent) {
    //         successToast("Please choose Address!", 'top-right')
    //         navigate('/checkout')
    //     }
    // }, [isAddressPresent])

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

    const handlePayment = () => {
        setIsPayment(true);
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
            const response = await displayCartProductDetails({ "userID": userID });
            let totalPrice = 0;
            response.data[0]?.forEach((data) => {
                totalPrice += data?.price * data?.quantity;
            });
            setCartTotal(totalPrice);
            setCartProductDetails(response.data[0]);
        } catch (error) {
            console.log("Something error happened : ", error.message);
        }
    };

    return (
        <>
            <Grid sx={{ mt: 15, p: 5, bgcolor: "#171717" }}>
                <Typography sx={{ color: "white", textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Payment</Typography>
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
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    cartProductDetails?.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ color: "white", textAlign: 'left', width: "100px" }}>
                                                <img src='https://www.ant-pc.com/Case/ANT_Esports_211_Air_Black.png' style={{ height: "100px", width: "100px" }} />
                                            </TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'left' }}>
                                                <Typography>
                                                    ANT PC DORYLUS CL940N
                                                </Typography>
                                                <Typography component="h6" sx={{ fontSize: "12px", color: "yellow" }}>
                                                    Expected date of Dispatch : Feb 29, 2024
                                                </Typography>
                                                <Typography component="h6" color="error" sx={{ cursor: "pointer", fontSize: "12px", fontWeight: "bold", width: "80px" }} onClick={() => toggleViewMore(data.id)}>
                                                    View more <DownOutlined style={{ fontSize: "10px" }} />
                                                </Typography>

                                                {renderViewMoreSection(data)}

                                            </TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'center' }}>{data?.price}</TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'center' }}>
                                                <Typography sx={{ fontWeight: "bold" }}>{data?.quantity}</Typography>
                                            </TableCell>

                                            <TableCell sx={{ color: "white", textAlign: 'center' }}>₹{data?.price * data?.quantity}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ borderTop: 1 }} >
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'right', color: "white" }}>Shipping Price</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>₹ 1800</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableHead>
                                <TableRow sx={{ borderTop: 1 }} >
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>&nbsp;</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'right', color: "white" }}>Total</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>₹ {cartTotal + 1800}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>

                    <Grid container sx={{ display: "flex", justifyContent: { xs: "space-evenly", sm: "space-between" }, my: { xs: 3, lg: 5 } }}>
                        <Grid item
                            sx={{
                                ml: { xs: 2, sm: 2 },
                                width: { xs: "300px", sm: "auto" },
                            }}>
                            <Stack spacing={1}>
                                <Button component={Link} to="/" variant="contained" color="error"><ArrowLeftOutlined style={{ fontSize: "16px" }} />Home</Button>
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
                                <Button variant="contained" color='error' onClick={handlePayment}>Confirm to Pay<ArrowRightOutlined style={{ fontSize: "16px" }} /></Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} lg={4} sx={{ pt: 4, bgcolor: "#202020" }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography align='center'>Details</Typography>
                    </Box>

                    <Grid item sx={{ display: "flex", justifyContent: "space-between", flexDirection: isBelow420px ? 'column' : is1200To1260px ? 'column' : 'row', px: 4, gap: 2 }}>
                        <Grid sx={{ width: "100%" }}>
                            <Stack spacing={1}>
                                <Button variant="contained" sx={{
                                    background: "black", fontSize: "14px", px: 4, py: 2,
                                    backgroundColor: selectedAddress ? '#ce0101' : '#171717',
                                    '&:hover': {
                                        backgroundColor: selectedAddress ? '#ce0101' : '#171717',
                                    },
                                }} onClick={() => setSelectedAddress(true)}>Shipping Details</Button>
                            </Stack>
                        </Grid>

                        <Grid sx={{ width: "100%" }}>
                            <Stack spacing={1}>
                                <Button variant="contained" sx={{
                                    background: "black", fontSize: "14px", px: 4, py: 2,
                                    backgroundColor: selectedAddress ? '#171717' : '#ce0101',
                                    '&:hover': {
                                        backgroundColor: selectedAddress ? '#171717' : '#ce0101',
                                    },
                                }} onClick={() => setSelectedAddress(false)}>Billing Details</Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* Shipping Address */}
                    {selectedAddress && (
                        <Grid item sx={{ border: 1, m: 3, display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
                            <Grid sx={{ width: { xs: "100%", sm: "30%" }, borderRight: 1, borderBottom: { xs: 1, sm: 0 }, display: "flex", justifyContent: "center", alignItems: "center", p: { xs: 1, sm: 0 } }}>
                                <FontAwesomeIcon icon={faTruck} size="4x" />
                            </Grid>
                            <Grid sx={{ width: { xs: "100%", sm: "70%" }, pl: 2, py: 1 }}>
                                <Typography sx={{ fontSize: "13px" }}>{shippingAddress?.name}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{shippingAddress?.address}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{shippingAddress?.city}-{shippingAddress?.zipCode}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{shippingAddress?.state}, India</Typography>
                                <br />
                                <Typography sx={{ fontSize: "13px" }}>{shippingAddress?.contactNumber}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{shippingAddress?.email}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>GST: {billingAddress?.gst}</Typography>
                            </Grid>
                        </Grid>
                    )}

                    {/* Billing Address */}
                    {!selectedAddress && (
                        <Grid item sx={{ border: 1, m: 3, display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
                            <Grid sx={{ width: { xs: "100%", sm: "30%" }, borderRight: 1, borderBottom: { xs: 1, sm: 0 }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FontAwesomeIcon icon={faMoneyBill} size="4x" />
                            </Grid>
                            <Grid sx={{ width: { xs: "100%", sm: "70%" }, pl: 2, py: 1 }}>
                                <Typography sx={{ fontSize: "13px" }}>{billingAddress?.fullName}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{billingAddress?.streetAddress}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{billingAddress?.city}-{billingAddress?.zipCode}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{billingAddress?.state}, India</Typography>
                                <br />
                                <Typography sx={{ fontSize: "13px" }}>{billingAddress?.telephoneNumber}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>{billingAddress?.email}</Typography>
                                <Typography sx={{ fontSize: "13px" }}>GST: {billingAddress?.gst}</Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid >
            </Grid >
            {isPayment && <Payment userID={userID} amount={amount} />}
        </>
    )
}

export default ConfirmCheckout;