import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Grid, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { gameCategories } from '../utils/contant';

const PhotoGallery = ({ photos, selectedButton }) => {
    const navigate = useNavigate();

    const handleImageClick = (label) => {
        const category = selectedButton === gameCategories.gaming ? '/gaming-pc' : '/workstation';
        const subCategory = label.replace(/\s/g, '');
        const product = 12345
        console.log("Printed details : ", category, "   ", subCategory, "   ", product)
        navigate(`${category}/${subCategory}/${product}`);
    };

    return (
        <>
            <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", backgroundColor: 'black', padding: '20px', borderRadius: '10px' }}>
                {photos.map((photo, index) => (
                    <Grid item key={index} onClick={() => handleImageClick(photo.label)} style={{ cursor: 'pointer' }}>
                        <div style={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '50%', margin: '0 auto', backgroundColor: 'white' }}>
                            <img src={photo.url} alt={photo.label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        </div>
                        <p style={{ color: 'white', textAlign: 'center', wordBreak: 'break-word', minWidth: '120px', maxWidth: '120px' }}>{photo.label}</p>
                    </Grid>
                ))}
            </Grid>

            <Grid container justifyContent="center" style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                <Grid item>
                    <Typography variant="body1" style={{ color: 'white', textAlign: 'center' }}>
                        <br />
                        Tired of seeing just the pre-build PC options online?<br />
                    </Typography>
                    <Typography>
                        It's time to Build It Yourself and get the highly customized configuration as per your requirement.<br /><br />
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

const MidSection = () => {
    const [selectedButton, setSelectedButton] = useState(gameCategories.gaming);

    const handleButtonClick = (category) => {
        setSelectedButton(category);
    };

    const gamingPhotos = [
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/dorylus-series-h.png', label: 'Predator' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/pharaoh series-h.png', label: 'Kraken' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/solenopsis series-h.png', label: 'Behemoth' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/NZXT_H7_Elite_White_Edition1.png', label: 'Slayer' },
    ];

    const workstationPhotos = [
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/ai-series-h.png', label: 'AI & Deep Learning' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/Architecture-Engineering-h.png', label: 'Home' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/Visual-Designing-h.png', label: 'Editing' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/trading-pc.png', label: 'Trading' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/trading-pc.png', label: 'CAD' },
    ];

    const photos = selectedButton === gameCategories.gaming ? gamingPhotos : workstationPhotos;

    return (
        <Grid >
            <AppBar position="static" style={{ backgroundColor: '#212529' }}>
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Button
                        color={selectedButton === gameCategories.gaming ? 'error' : 'inherit'}
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
                        // onMouseOver={() => handleButtonClick(gameCategories.gaming)}
                        onClick={() => handleButtonClick(gameCategories.gaming)}
                    >
                        Gaming
                    </Button>

                    <Button
                        color={selectedButton === gameCategories.workstation ? 'error' : 'inherit'}
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
                        // onMouseOver={() => handleButtonClick(gameCategories.workstation)}
                        onClick={() => handleButtonClick(gameCategories.workstation)}
                    >
                        Workstation
                    </Button>

                </Toolbar>
            </AppBar>

            <Grid container justifyContent="center" style={{ marginTop: '20px', backgroundColor: 'black' }}>
                <PhotoGallery photos={photos} selectedButton={selectedButton} />
            </Grid>
        </Grid>
    );
};

export default MidSection;
