import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Card, CardContent, Container, Link, Grid } from '@mui/material';

const QualitySupport = () => {
    return (
        <Grid sx={{ width: '99%', backgroundColor: '#000000' }}>
            <Container>
                <Typography variant="h4" color='white' textAlign='center' fontSize='30px' gutterBottom>
                    Quality & Support
                </Typography>
                <Grid justifyContent='center' marginLeft='25%' width='60%' >
                    <Typography color='white' textAlign='center'>
                        To enhance your ownership experience, our systems go through rigorous testing procedures.
                        Further sweetening the deal, we also provide unmatched hassle-free support options.
                    </Typography>
                </Grid>
            </Container>
            <Grid container display='flex' direction='row' marginTop='5%' width='80%' marginLeft='15%'>
                <Grid item container direction="column" alignItems="center" xs={3}>
                    <img src="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/Technical-Support-w.svg" style={{ width: '40%', height: '40%' }} alt="Technical Support icon" />
                    <Typography color='white' textAlign='center' padding='5%'>
                        Lifetime Technical Support
                    </Typography>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={3}>
                    <img src="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/Clock-w.svg" style={{ width: '40%', height: '40%' }} alt="Clock icon" />
                    <Typography color='white' textAlign='center' padding='5%'>
                        24 Hour Burn-In-Test
                    </Typography>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={3}>
                    <img src="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/Check-w.svg" style={{ width: '40%', height: '40%' }} alt="Check icon" />
                    <Typography color='white' textAlign='center' padding='5%'>
                        80+ Quality Check
                    </Typography>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={3}>
                    <img src="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/Location-w.svg" style={{ width: '40%', height: '40%' }} alt="Location icon" />
                    <Typography color='white' textAlign='center' padding='5%'>
                        3 Year Onsite Warranty*
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default QualitySupport;