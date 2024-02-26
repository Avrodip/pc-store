import React, { useEffect } from 'react'
import { Box, Typography, Grid, Button, Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';

const MyOrders = () => {

    const userID = 11;

    useEffect(() => {
        orderDetails()
    }, [])
    const orderDetails = () => {

    }


    return (
        <Grid container mt={15} mb={5}>
            <Grid></Grid>

            <Grid>
                <Table>
                    <TableHead>
                        <TableRow sx={{ borderTop: 1 }} >
                            <TableCell sx={{ fontWeight: "bold", textAlign: 'left', color: "white", pl: 5 }}>Sr.No.</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: 'left', color: "white" }}>Product Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Order Total</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: 'center', color: "white" }}>Cancel?</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ color: "white", textAlign: 'left', width: "100px" }}></TableCell>


                        </TableRow>
                    </TableBody>

                </Table>
            </Grid>

        </Grid>
    )
}

export default MyOrders