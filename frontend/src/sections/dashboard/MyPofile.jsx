import { Grid, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

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

    return (
        <Grid container>

            <Typography>Dear, Ajay Prajapati
                <br />
                From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information.
            </Typography>


            <TableContainer>
                <Table className={classes.table}>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.tableCell_1}>Name</TableCell>
                            <TableCell className={classes.tableCell_2}>Ajay</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className={classes.tableCell_1}>Phone No.</TableCell>
                            <TableCell className={classes.tableCell_2}>Ajay</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className={classes.tableCell_1}>Email Id</TableCell>
                            <TableCell className={classes.tableCell_2}>Ajay</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Grid >
    )
}

export default MyProfile;