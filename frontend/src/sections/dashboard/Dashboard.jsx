import React, { useEffect, useState } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouse, faShoppingCart, faKey } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from "@mui/styles"
import MyOrders from "./MyOrders"
import MyProfile from "./MyPofile"
import MyAddress from "./MyAddress"
import ChangePassword from "./ChangePassword"
import { useLocation } from 'react-router-dom';


const useStyles = makeStyles({
    main_title: {
        width: '100%',
        textAlign: 'center',
        background: '#171717',
        padding: "24px",
        fontSize: '25px',
        fontWeight: 600
    },
    button: {
        color: '#fff',
        fontSize: '15px',
        textTransform: 'none',
        borderRadius: 0,
        fontWeight: 500,
        border: '1px solid rgba(255, 255, 255, .2)',
        justifyContent: 'flex-start',
        '&:hover': {
            background: '#ce0101'
        }
    },
    iconGrid: {
        padding: '10px 20px',
    },
    '@media (max-width: 599.95px)': {
        iconGrid: {
            padding: '5px',
        }
    },
});

const Dashboard = () => {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState('profile');
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const handleClick = (page) => {
        setCurrentPage(page);
    }


    return (
        <Grid container xs={12} my={15} >

            <Typography xs={12} className={classes.main_title}>Dashboard</Typography>

            <Grid item xs={12} mx="auto" sx={{ display: { xs: 'block', md: 'flex' }, gap: { xs: 1, md: 4 }, m: { xs: 4, md: 5 } }}>

                <Grid xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Button className={classes.button} sx={{ background: currentPage === 'profile' ? '#ce0101' : 'none', }}
                        onClick={() => handleClick('profile')}>
                        <Grid className={classes.iconGrid}>
                            <FontAwesomeIcon icon={faUser} />
                        </Grid>
                        <Grid>
                            My Profile
                        </Grid>
                    </Button>

                    <Button className={classes.button} sx={{ background: currentPage === 'address' ? '#ce0101' : 'none', }}
                        onClick={() => handleClick('address')}>
                        <Grid className={classes.iconGrid}>
                            <FontAwesomeIcon icon={faHouse} />
                        </Grid>
                        <Grid>
                            Address Book
                        </Grid>
                    </Button>

                    <Button className={classes.button} sx={{ background: currentPage === 'orders' ? '#ce0101' : 'none', }}
                        onClick={() => handleClick('orders')}>
                        <Grid className={classes.iconGrid}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Grid>
                        <Grid>
                            My Order
                        </Grid>
                    </Button>

                    <Button className={classes.button} sx={{ background: currentPage === 'change_password' ? '#ce0101' : 'none', }}
                        onClick={() => handleClick('change_password')}>
                        <Grid className={classes.iconGrid}>
                            <FontAwesomeIcon icon={faKey} />
                        </Grid>
                        <Grid>
                            Change Password
                        </Grid>
                    </Button>

                </Grid>

                <Grid xs={12} md={9} my={3}>
                    {(() => {
                        switch (currentPage) {
                            case 'profile':
                                return <MyProfile />;
                            case 'address':
                                return <MyAddress />;
                            case 'orders':
                                return <MyOrders />;
                            case 'change_password':
                                return <ChangePassword />;
                        }
                    })()}
                </Grid>

            </Grid >
        </Grid >
    )
}

export default Dashboard;