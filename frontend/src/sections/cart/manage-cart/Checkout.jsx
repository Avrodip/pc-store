import React, { useEffect, useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, OutlinedInput, Button, Stack, TextField, FormControl, Typography, Select, MenuItem, Box, useMediaQuery, DialogContent, IconButton, DialogTitle, FormHelperText, InputLabel, Radio, RadioGroup } from '@mui/material'
import { DeleteOutlined, ArrowRightOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import ShippingAddress from './ShippingAddress';
import { getBillingAddressList } from '../../../services/checkout';
import BillingAddress from './BillingAddress';
import { indianStates, countries } from "../../../utils/contant";
// import Radio from '@mui/joy/Radio';


const Checkout = () => {
    const isBelow420px = useMediaQuery('(max-width:420px)');
    const is1200To1260px = useMediaQuery('(min-width: 1200px) and (max-width: 1260px)');
    const [openSignIn, setOpenSignIn] = useState(false);
    const [hasToken, setHasToken] = useState(false);
    const [isChangeForm, setIsChangeForm] = useState(true);
    const [isOpenAddress, setIsOpenAddress] = useState(false);
    const [isOpenShipping, setIsOpenShipping] = useState(false);
    const [isBillingAddress, setIsBillingAddress] = useState([]);
    const [selectedBillingID, setSelectedBillingID] = useState(null);

    const handleBillingID = (id) => {
        console.log("ID : ", id);
        setSelectedBillingID(id);
    }

    const handleBillingAddressOpen = () => {
        setIsOpenAddress(!isOpenAddress);
    }

    useEffect(() => {
        const fetchBillingAddress = async () => {
            const response = await getBillingAddressList();
            if (response.success) {
                // console.log(response.data[0][0]);
                setIsBillingAddress(response.data[0]);
            }
        }
        fetchBillingAddress();
    }, [])

    const formik = useFormik({
        initialValues: {
            fullName: '',
            contactNumber: '',
            email: '',
            gst: '',
            address: '',
            city: '',
            state: indianStates[0].name,
            country: countries[0].name,
            zipCode: '',
        },
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <>
            <Grid sx={{ mt: 15, p: 5, bgcolor: "#171717" }}>
                <Typography sx={{ color: "white", textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Billing & Shipping Address</Typography>
            </Grid>

            <Grid container sx={{ backgroundColor: "black", py: 8, display: "flex", justifyContent: "center" }}>

                <Grid item xs={12} lg={7} >

                    {/* FOR BILLING ADDRESS  */}
                    <Grid item sx={{ background: "#171717" }}>

                        <Grid item xs={12} >
                            <Stack spacing={1} >
                                <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "bold", textAlign: "center", pt: 2 }}>BILLING</Typography>
                            </Stack>
                        </Grid>

                        <Grid item sx={{ mt: 3, pt: 2, pl: 2 }}>
                            <Grid sx={{ display: "flex", justifyContent: "space-between", }}>
                                <Grid item>
                                    <Typography sx={{ fontSize: "20px" }}>Select Address</Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => handleBillingAddressOpen()} variant="contained" color='error' sx={{ mr: 2 }}>Add New Address</Button>
                                </Grid>
                            </Grid>
                            {
                                !isOpenAddress && (
                                    <Grid container sx={{ mt: 2, pb: 2 }}>
                                        <TableContainer sx={{ pr: 2 }}>
                                            <Table aria-label="simple table">
                                                <TableHead sx={{ border: 2 }}>
                                                    <TableRow sx={{ borderTop: 1 }} >
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Choose</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Name</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Email</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Street</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>City</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>State</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>ZipCode</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Phone</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody sx={{ border: 1 }} >
                                                    {isBillingAddress.length > 0 && isBillingAddress.slice(0, 3).map((address, index) => (
                                                        <TableRow key={index} alignItems={"center"} >
                                                            <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>
                                                                <Radio align={"center"} key={index} value={address?.id} onChange={() => handleBillingID(address?.id)} name="radio-buttons-group" sx={{ color: "white" }} />
                                                            </TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.fullName}</TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.email}</TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.streetAddress}</TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.city}</TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.state}</TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.zipCode}</TableCell>
                                                            <TableCell sx={{ textAlign: 'center', color: "white" }}>{address?.telephoneNumber}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                )
                            }
                        </Grid>

                        <Grid item > {isOpenAddress && (<BillingAddress handleBillingAddressOpen={handleBillingAddressOpen} />)} </Grid>

                    </Grid>

                    <br />

                    {/* FOR SHIPPING ADDRESS  */}
                    <Grid item sx={{ background: "#171717", }}>

                        <Grid item xs={12} >
                            <Stack spacing={1} >
                                <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "bold", textAlign: "center", pt: 2 }}>SHIPPING</Typography>
                            </Stack>
                        </Grid>

                        <Grid item sx={{ background: "#171717" }}>
                            <Grid item sx={{ m: 3, pt: 3 }}>
                                <Typography sx={{ textAlign: "center" }}>Please Choose Option</Typography>
                            </Grid>

                            <Grid container sx={{ display: "flex", justifyContent: "center", pb: 4, }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button variant="contained" sx={{ borderRadius: 0, background: "black" }}>
                                        Same As Billing Address
                                        <Radio value="primary" label="Primary" sx={{ color: "white" }} >
                                        </Radio>
                                    </Button>
                                    {/* <FormHelperText>{selectedBillingID ? null : 'Please Select the Billing Address'}</FormHelperText> */}
                                    <Button variant="contained" color='error' onClick={() => setIsOpenShipping(!isOpenShipping)} sx={{ borderRadius: 0 }}>Add New Shipping Address</Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            {isOpenShipping && (<ShippingAddress setIsOpenShipping={setIsOpenShipping} />)}
                        </Grid>

                    </Grid>

                </Grid>
            </Grid >
        </>
    )
}

export default Checkout