import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Card, CardContent, Container, Link, Grid } from '@mui/material';

const QualitySupport = () => {
    const icons = [
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-6.png', link: 'https://www.microsoft.com/en-in' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-7.png', link: 'https://gailonline.com/' },
        { src: 'https://www.ant-pc.com/assets/images/client-logo/client-8.png', link: 'https://www.samsung.com/in/smartphones/galaxy-s24-ultra/?page=home' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-9.png', link: 'https://www.ricoh.co.in/' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-10.png', link: 'https://www.techmahindra.com/en-in/?f=2019600127' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-11.png', link: 'https://www.thapar.edu/' },
    ];
    return (
        <Grid sx={{ width: '99%', backgroundColor: '#212529',marginBottom: '1%' }}>
            <Container>
                <Typography variant="h4" color='white' textAlign='center' fontSize='30px' gutterBottom>
                    Quality & Support
                </Typography>
                <Grid justifyContent='center' marginLeft = '25%' width='60%' >
                <Typography color='white' textAlign = 'center'>
                    To enhance your ownership experience, our systems go through rigorous testing procedures.
                    Further sweetening the deal, we also provide unmatched hassle-free support options.
                </Typography>
                </Grid>                
            </Container>
            <Container sx={{ position: 'relative' }}>

            </Container>
        </Grid>
    );
};

export default QualitySupport;
