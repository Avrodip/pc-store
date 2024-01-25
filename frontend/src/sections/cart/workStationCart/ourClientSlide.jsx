import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Card, CardContent, Container, Link, Grid } from '@mui/material';

const IconsSlider = () => {
    const icons = [
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-6.png', link: 'https://www.microsoft.com/en-in' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-7.png', link: 'https://gailonline.com/' },
        { src: 'https://www.ant-pc.com/assets/images/client-logo/client-8.png', link: 'https://www.samsung.com/in/smartphones/galaxy-s24-ultra/?page=home' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-9.png', link: 'https://www.ricoh.co.in/' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-10.png', link: 'https://www.techmahindra.com/en-in/?f=2019600127' },
        { src: 'https://www.ant-pc.com/workstation-assets/assets/images/client-logo/client-11.png', link: 'https://www.thapar.edu/' },
    ];

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Adjust the number of items to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Grid sx={{ width: '99%', backgroundColor: 'white', padding: '2%', marginTop: '3%', marginBottom: '3%' }}>
            <Container>
                <Typography variant="h4" color='#252525' fontSize='30px' gutterBottom>
                    OUR CLIENTS
                </Typography>
                <Typography color='#494949' fontStyle='poppins Helvetica' gutterBottom>
                    Ant PC is the leading contributor of Fast and Reliable Custom Built Workstations and Gaming PCs. We cater to major award-winning VFX artists, Research Organizations, animators & editors, top universities, leading architectural firms and renowned professionals just like you. organizations choose Ant PC because they hunt for perfect reliable and high-performance solutions for their high-end computing tasks. Ant PC is the definition of next generation high performance custom built computing.
                </Typography>
            </Container>
            <Container sx={{ position: 'relative' }}>
                <br />
                <Slider {...sliderSettings}>
                    {icons.map((icon, index) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: 'white',
                                padding: 1,
                                position: 'relative',
                            }}
                        >
                            <Link href={icon.link} underline="none">
                                <img src={icon.src} alt={`Icon ${index + 1}`} style={{ width: '50%' }} />
                            </Link>
                        </Card>
                    ))}
                </Slider>
            </Container>
        </Grid>
    );
};

export default IconsSlider;
