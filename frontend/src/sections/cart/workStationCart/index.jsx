import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import OurClientSlide from './ourClientSlide'
import QualitySupport from './quality&support'
import ImageSlider from './imageSlider';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
    card: {
        maxWidth: 300,
        backgroundColor: '#212529',
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
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>AI AND DEEP LEARNING</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img1n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/theano.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/caffe.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>3D DESIGN & ANIMATION</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img2n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        Take your animation to the next level with space & depth using these custom PCs.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex' marginLeft='5%'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/3ds-Max.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Maya.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>RENDERING</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img3n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        Fully customized PCs that offer the most Powerful Rendering Solutions just at your fingertips.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex' marginLeft='5%'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Blender.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Vray.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>ENGINEERING</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img4n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '30%', width: '35%', height: '20%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        Workstations for Engineering are designed to deliver the best result possible in no time.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/2DS-Catia.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="100%"
                            width='100%'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/2DS-Solidwork.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/creo.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Autodesk-Autocad.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>VIDEO EDITING</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img5n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        Highly optimized & specialized computers to attain excellent Video Editing experience.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Pr.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Ae.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/davinchi.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>GRAPHIC DESIGNING</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img6n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        Built to perform exceptionally to enhance your creativity & bring life to your Design.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Id.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Ai.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/PS.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Coreldraw.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>TRADING PC</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img7n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        High-performing & the most reliable PCs to take better care of your Trading needs.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/MetaTrade4.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/RichLiveTrade.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Trading-View.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <Card
                    sx={{ ...styles.card, ...cardAnimationStyles }}
                    elevation={5}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
                >
                    <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: 2 }}>AUDIO PRODUCTION</Typography>
                    <Grid container sx={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.ant-pc.com/workstation-assets/assets/images/workstation-pList-img8n.png"
                            alt="green iguana"
                            sx={{ objectFit: 'cover', marginLeft: '25%', width: '47%', height: '50%', backgroundColor: 'black' }}
                        />
                    </Grid>
                    <Typography sx={{ padding: 3 }}>
                        One-of-a-kind solution for high-quality digital Audio that makes the difference.
                    </Typography>
                    <Typography sx={{ backgroundColor: 'black', fontSize: '15px', textAlign: 'center', padding: 1 }}>
                        Ideal-For
                    </Typography>
                    <Grid display='flex'>
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Reason-Studios.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Ableton.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                        <CardMedia
                            component="img"
                            height="50"
                            width='50px'
                            image="https://www.ant-pc.com/workstation-assets/assets/images/Studio-One.png"
                            alt="green iguana"
                            sx={{ backgroundColor: '#212529', padding: 2, width: '30%' }}
                        />
                    </Grid>
                    <Button sx={{ backgroundColor: '#CE0101', color: 'white', width: '100%' }}>View More</Button>
                </Card>
                <OurClientSlide />
                <QualitySupport />
            </Grid>
        </>
    );
}