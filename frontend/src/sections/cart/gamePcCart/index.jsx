import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import ImageSlider from '../workStationCart/imageSlider';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
    card: {
        maxWidth: 300,
        backgroundColor: '#171717',
        border: 1,
        borderColor: '#FFFFFF',  // Set the initial border color
        color: 'white',
        margin: 'auto',
        marginTop: '50px',
        transition: 'transform 0.15s ease-in-out, box-shadow 0.3s ease-in-out',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Add a default box shadow
    },
    media: {
        height: 140,
    },
    gridContainer: {
        display: 'flex',
        position: 'relative',
        padding: '2%',
        marginBottom: "2%",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    lizardTypography: {
        color: '#FFFFFF',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif',
        margin: '50px 0 20px 0',  // Add margin-bottom to create space
    },
    mainTypography: {
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        margin: '40px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewMoreButton: {
        backgroundColor: '#CE0101',
        color: '#FFFFFF',
        padding: '6px 25px',
        border: '2px solid transparent',
        transition: 'border-color 0.3s ease-in-out',
        '&:hover': {
            borderColor: '#CE0101',
        },
        margin: '20px 0 0 0'
    },
};

export default function WorkStationCart() {
    const [animate, setAnimate] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        // Set animate to false after a short delay (adjust the delay as needed)
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 500);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, []); // Run this effect only once, on mount

    const cardAnimationStyles = {
        // Add animation styles based on the animate state
        transform: animate ? 'translateY(-20px) scale(1.1)' : 'translateY(0) scale(1)',
        opacity: animate ? 0 : 1,
        transition: 'transform 0.5s ease, opacity 0.5s ease',
    };
    return (
        <>
            <ImageSlider />
            <Grid container sx={{ ...styles.gridContainer, ...cardAnimationStyles }}>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>DORYLUS SERIES</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/extra/images/ANT_Esports_690_Air4.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Grid sx={{ backgroundColor: '#171717' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '400', marginTop: 3, marginLeft: 3 }}>
                            BUDGET GAMING
                        </Typography>
                        <Typography sx={{ marginLeft: 3, marginTop: 1 }}>
                            Enjoy all your favourite latest games without breaking the bank.
                        </Typography>
                    </Grid>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '15px', textAlign: 'center', marginTop: '5%' }}>
                        Starts form
                    </Typography>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '25px', fontWeight: '400', textAlign: 'center', padding: 1 }}>
                        ₹ 28,309.00
                    </Typography>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>PHARAOH SERIES</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/extra/images/product-img3n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Grid sx={{ backgroundColor: '#171717' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '400', marginTop: 3, marginLeft: 3 }}>
                            ENTHUSIAST GAMING
                        </Typography>
                        <Typography sx={{ marginLeft: 3, marginTop: 1 }}>
                            Series that smashes 1080p and can handle 1440p with a few tweaks.
                        </Typography>
                    </Grid>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '15px', textAlign: 'center', marginTop: '5%' }}>
                        Starts form
                    </Typography>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '25px', fontWeight: '400', textAlign: 'center', padding: 1 }}>
                        ₹ 113,898.00
                    </Typography>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>SOLENOPSIS SERIES</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/extra/images/Phanteks_Metallic_Gear_Neo_Qube_Black2.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Grid sx={{ backgroundColor: '#171717' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '400', marginTop: 3, marginLeft: 3 }}>
                            EXTREME GAMING
                        </Typography>
                        <Typography sx={{ marginLeft: 3, marginTop: 1 }}>
                            Extreme grade with high-end 4k and VR gaming experience.
                        </Typography>
                    </Grid>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '15px', textAlign: 'center', marginTop: '5%' }}>
                        Starts form
                    </Typography>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '25px', fontWeight: '400', textAlign: 'center', padding: 1 }}>
                        ₹  196,364.00
                    </Typography>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>METALLICA SERIES</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/extra/images/metallica-img-N.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Grid sx={{ backgroundColor: '#171717' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '400', marginTop: 3, marginLeft: 3 }}>
                            STREAMING
                        </Typography>
                        <Typography sx={{ marginLeft: 3, marginTop: 1 }}>
                            Top of the line Streaming ready gaming system.
                        </Typography>
                    </Grid>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '15px', textAlign: 'center', marginTop: '5%' }}>
                        Starts form
                    </Typography>
                    <Typography sx={{ backgroundColor: '#101010', fontSize: '25px', fontWeight: '400', textAlign: 'center', padding: 1 }}>
                        ₹  404,206.00
                    </Typography>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
            </Grid>
        </>
    );
}