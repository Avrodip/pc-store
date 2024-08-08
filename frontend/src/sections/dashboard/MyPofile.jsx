import { Grid, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../../context-api/userContext';

const useStyles = makeStyles({
    table: {
        maxWidth: '450px',
        margin: '20px 0',
    },
    tableCell_1: {
        border: '1px solid #fff',
        color: '#fff',
        width: '150px'
    },
    tableCell_2: {
        border: '1px solid #fff',
        color: '#fff',
        width: '300px'
    }
})

const MyProfile = () => {
    const classes = useStyles()
    const { checkTokenValidity } = useContext(AuthContext)
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        getUserProfile();
    }, [])
    const getUserProfile = async () => {

        checkTokenValidity()
            .then((result) => {
                if (result.success) {
                    const createCart = async () => {
                        const response = await axios.post("http://localhost:5050/api/auth/getUserByID", { userID: result.userID })
                        setUserDetails(response.data.data[0])
                    }
                    createCart();
                } else {
                    handleSignIn();
                }
            })
            .catch((error) => {
                console.error("Error validating token:", error);
            });
        const result = checkTokenValidity();
    }


    return (
        <Grid container>

            {/* <Typography>Dear, {userDetails?.firstName + " " + userDetails?.lastName}
                <br />
                From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information.
            </Typography> */}


            <TableContainer>
                <Table className={classes.table}>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.tableCell_1}>Name</TableCell>
                            <TableCell className={classes.tableCell_2}>{userDetails?.firstName + " " + userDetails?.lastName}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className={classes.tableCell_1}>Phone No.</TableCell>
                            <TableCell className={classes.tableCell_2}>{userDetails?.contact}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className={classes.tableCell_1}>Email Id</TableCell>
                            <TableCell className={classes.tableCell_2}>{userDetails?.email}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Grid >
    )
}

export default MyProfile;