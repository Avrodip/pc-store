import { Button } from '@mui/base'
import { Grid, Stack, Typography, AppBar, Toolbar, } from '@mui/material'
import React from 'react'
import { gameCategories } from '../../utils/contant'
import { Link } from 'react-router-dom'

const CartProductSpecs = () => {

    const data = [
        {
            title: "this is title"
        }, {}, {}, {}, {}, {}, {}, {}
    ]

    return (
        <Grid container sx={{ my: 4 }}>
            {/* <Grid>
                <Grid item>
                    <Stack spacing={1}>
                        <Button variant="contained" color='error'>Specifications</Button>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack spacing={1}>
                        <Button variant="contained" color='error'>Additional Information</Button>
                    </Stack>
                </Grid>
            </Grid> */}

            {/* <AppBar position="static" style={{ backgroundColor: '#212529' }}>
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Button
                        // color={selectedButton === gameCategories.gaming ? 'error' : 'inherit'}
                        sx={{
                            marginRight: '10px',
                            position: 'relative',
                            ':hover:before': {
                                width: '100%',
                            },
                            ':before': {
                                content: '""',
                                position: 'absolute',
                                width: '0',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                backgroundColor: 'red',
                                visibility: 'visible',
                                transition: 'all 0.3s',
                            },
                        }}
                    >
                        Gaming
                    </Button>

                    <Button
                        // color={selectedButton === gameCategories.workstation ? 'error' : 'inherit'}
                        sx={{
                            marginRight: '10px',
                            position: 'relative',
                            ':hover:before': {
                                width: '100%',
                            },
                            ':before': {
                                content: '""',
                                position: 'absolute',
                                width: '0',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                backgroundColor: 'red',
                                visibility: 'visible',
                                transition: 'all 0.3s',
                            },
                        }}
                    >
                        Workstation
                    </Button>

                </Toolbar>
            </AppBar> */}

            <Grid container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", my: 4, gap: 3, width: "100%", mx: { xs: 4, sm: 0 } }}>
                {
                    data.map((item, index) => (
                        <Grid item xs={12} sm={5} md={3} lg={2} sx={{ background: "#171717", fontSize: "16px", fontWeight: 400, width: "250px", height: "150px", pl: 2, pr: 4, pt: 2 }}>
                            <Typography color="error">CPU</Typography>
                            <Typography>Intel Core i3 10100 (4 Core, 8 Threads, Up to 4.3 GHz)</Typography>
                        </Grid>
                    ))
                }
            </Grid>

        </Grid >
    )
}

export default CartProductSpecs