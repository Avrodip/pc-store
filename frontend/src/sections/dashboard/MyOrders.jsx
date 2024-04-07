import React, { useContext, useEffect, useState } from 'react'
import { Typography, Grid, Button, Table, TableCell, TableRow, TableHead, TableBody, TableContainer, colors } from '@mui/material';
import { StatusCode } from '../../utils/contant';
import { cancelOrderByUserID, getOrderDetailsByUserID } from '../../services/orders';
import { AuthContext } from '../../context-api/userContext';

const MyOrders = () => {
    const [orderDetails, setOrderDetails] = useState(null)
    const { checkTokenValidity } = useContext(AuthContext);

    useEffect(() => {
        productOrderDetails()
    }, [])
    const productOrderDetails = async () => {
        checkTokenValidity().then((result) => {
            if (result.success) {
                const orderDetails = async () => {
                    const response = await getOrderDetailsByUserID({ userID: result.userID });
                    if (response.statusCode === StatusCode.success) {
                        setOrderDetails(response.data[0])
                    }
                }
                orderDetails();
            }
        })
    }

    // const handleCancelOrder = async (productID) => {
    //     checkTokenValidity().then((result) => {
    //         if (result.success) {
    //             const createCart = async () => {
    //                 const response = await cancelOrderByUserID({ userID: result.userID, id: productID });
    //                 if (response.statusCode == 200) {
    //                     productOrderDetails();
    //                 } else {
    //                     console.log("Something error happened")
    //                 }
    //             }
    //             createCart();
    //         } else {
    //             handleSignIn();
    //         }
    //     })
    //         .catch((error) => {
    //             console.error("Error validating token:", error);
    //         });
    // }

    return (
        <>
            <Grid >
                <Typography sx={{ color: "white", textAlign: "center", fontSize: "15px", fontWeight: "bold" }}>My Orders</Typography>
            </Grid>

            <Grid container my={5} justifyContent={'center'}>
                <TableContainer sx={{ marginRight: 0 }}>
                    <Table sx={{ border: 1 }}>
                        <TableHead>
                            <TableRow sx={{ borderTop: 1 }} >
                                <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Sr.No.</TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: 'left', color: "white" }}>Order #</TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: 'left', color: "white" }}>Product Name</TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Order Total</TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Status</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {orderDetails && orderDetails.map((product, index) => {
                                const utcDate = new Date(product.date);
                                const istDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000));
                                const formattedISTDate = istDate.toLocaleString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                });

                                return (
                                    <TableRow key={index}>
                                        <TableCell sx={{ color: "white", textAlign: 'center', width: "100px" }}>{index + 1}</TableCell>
                                        <TableCell sx={{ color: "white", textAlign: 'center', width: "100px" }}>{product?.orderID}</TableCell>
                                        <TableCell sx={{ color: "white", textAlign: 'center' }}>ANT PC DORYLUS CL940N</TableCell>
                                        <TableCell sx={{ color: "white", textAlign: 'center' }}>&#8377; {product?.price / 100}</TableCell>
                                        <TableCell sx={{ color: "white", textAlign: 'center', color: 'yellow' }}>{formattedISTDate}</TableCell>
                                        <TableCell sx={{ color: "white", textAlign: 'center', fontWeight: "bold" }}>{product?.status}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid>
                <Typography>If you want to cancel the Order then pls contact to the Support team</Typography>
                <Typography>Support Team Details are here</Typography>
                <Typography>Email at : <span style={{ color: 'yellow' }}>pc-store@support.com</span></Typography>
            </Grid>
        </>
    )

}

export default MyOrders