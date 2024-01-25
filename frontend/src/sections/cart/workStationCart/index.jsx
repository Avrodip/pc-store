import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import OurClientSlide from './ourClientSlide'
import QualitySupport from './quality&support'
import ImageSlider from './imageSlider';

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
        padding:'2%',
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
    return (
        <>
            <ImageSlider />
        <Grid container sx={styles.gridContainer}>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <Card
                sx={styles.card}
                elevation={5}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
            >
                    <Typography sx={{ color: 'white', fontSize:'20px',textAlign: 'center', padding:2 }}>AI AND DEEP LEARNING</Typography>
                <Grid container sx={{ backgroundColor: 'black' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
                        alt="green iguana"
                        sx={{ backgroundColor: 'black' }}
                    />
                </Grid>
                    <Typography  sx={{padding:3}}>
                    Push AI & ML boundaries while maintaining system stability and performance.
                    </Typography>
                    <Typography sx={{backgroundColor: 'black', fontSize:'15px' ,textAlign:'center', padding:1}}>
                        Ideal-For
                    </Typography>
                    <CardMedia
                        component="img"
                        height="50"
                        width='50px'
                        image="https://www.ant-pc.com/workstation-assets/assets/images/TF.png"
                        alt="green iguana"
                        sx={{ backgroundColor: '#212529', padding:2, width:'30%' }}
                    />
                    <Button sx={{backgroundColor: '#CE0101', color:'white', width: '100%'}}>View More</Button>
            </Card>
            <OurClientSlide />
            <QualitySupport />
        </Grid>
        </>
    );
}