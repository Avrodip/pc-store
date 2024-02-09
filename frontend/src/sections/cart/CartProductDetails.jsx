import React, { useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, OutlinedInput, Button, Stack, TextField, FormControl, Typography, Select, MenuItem, Box, useMediaQuery } from '@mui/material'
import { DeleteOutlined, ArrowRightOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';

const styles = {
    section: {
        color: "white",
        fontSize: "10px",
        borderBottom: "1px solid #3e3e3e",
        padding: "4px"
    },
}

const data = [
    { label: 'PROCESSOR:', value: 'Intel Core i3 10100 (4 Core, 8 Threads, Up to 4.3 GHz)' },
    { label: 'MOTHERBOARD:', value: 'MSI H510M-A Pro' },
    { label: 'RAM::', value: 'MSI H510M-A Pro' },
    { label: 'RAM QTY:', value: '8GB G.Skill Ripjaws V DDR4 3200MHz' },
    { label: 'GRAPHIC CARD:', value: 'Integrated Graphics' },
    { label: 'GRAPHIC CARD QTY:', value: '1' },
    { label: 'SSD:', value: '256GB ADATA XPG ASX6000 Pro' },
    { label: 'SSD Qty:', value: '1' },
    { label: 'HDD:', value: 'None' },
    { label: 'HDD QTY:', value: '1' },
    { label: 'POWERSUPPLY:', value: 'Deepcool PF550' },
    { label: 'CPU COOLER:', value: 'CPU Stock Cooler' },
    { label: 'CABINET:', value: 'ANT Esports 211 Air Black' },
    { label: 'OS:', value: 'Microsoft Windows 11 Home 64-Bit Trial' },
    { label: 'SUPPORT:', value: 'Standard - 3 years RTB (offsite) part replacement/repair warranty from Ant PC with Lifetime technical support (Remotely) & 7 Days DOA Policy.' },
    { label: 'DISPATCH DATE:', value: 'Feb 18, 2024' }

];

const CartProductDetails = () => {
    const isBelow420px = useMediaQuery('(max-width:420px)');
    const is1200To1260px = useMediaQuery('(min-width: 1200px) and (max-width: 1260px)');
    const [isViewMore, setViewMore] = useState(false);

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
                                <TableRow>
                                    <TableCell sx={{ color: "white", textAlign: 'left', width: "100px" }}>
                                        <img src='https://www.ant-pc.com/Case/ANT_Esports_211_Air_Black.png' style={{ height: "100px", width: "100px" }} />
                                    </TableCell>

                                    <TableCell sx={{ color: "white", textAlign: 'left' }}>
                                        <Typography>
                                            ANT PC DORYLUS CL940N
                                        </Typography>
                                        <Typography component="h6" color="error" sx={{ cursor: "pointer", fontSize: "12px", fontWeight: "bold" }} onClick={() => setViewMore(!isViewMore)}>
                                            View more <DownOutlined style={{ fontSize: "10px" }} />
                                        </Typography>

                                        {
                                            isViewMore && (
                                                <Table className="animate__animated animate__zoomIn animate__slow-400ms">
                                                    <TableBody sx={{ border: "1px solid #3e3e3e" }}>
                                                        {
                                                            data.map((d) => (
                                                                <TableRow >
                                                                    <TableCell style={styles.section}>{d?.label}</TableCell>
                                                                    <TableCell style={styles.section}>{d?.value}</TableCell>
                                                                </TableRow>
                                                            ))
                                                        }
                                                    </TableBody>
                                                </Table>
                                            )
                                        }

                                    </TableCell>

                                    <TableCell sx={{ color: "white", textAlign: 'center' }}>₹28,309.00</TableCell>
                                    <TableCell sx={{ color: "white", textAlign: 'center' }}>
                                        <Select
                                            value={10}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </TableCell>
                                    <TableCell sx={{ color: "white", textAlign: 'center' }}>₹56,618</TableCell>
                                    <TableCell sx={{ color: "white", textAlign: 'center' }} >
                                        <DeleteOutlined style={{ color: 'red' }} />
                                    </TableCell>
                                </TableRow>

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
                                <Button variant="contained" color='error'>Proceed to Checkout<ArrowRightOutlined style={{ fontSize: "16px" }} /></Button>
                            </Stack>
                        </Grid>
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