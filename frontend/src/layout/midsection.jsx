import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Grid, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { gameCategories } from '../utils/contant';

const PhotoGallery = ({ photos, selectedButton }) => {
    const navigate = useNavigate();

    const handleImageClick = (label) => {
        const category = selectedButton === gameCategories.gaming ? '/gaming-pc' : '/workstation';
        const subCategory = label.replace(/\s/g, '');
        navigate(`${category}/${subCategory}`);
    };

    return (
        <>
            <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", backgroundColor: 'black', padding: '20px', borderRadius: '10px' }}>
                {photos.map((photo, index) => (
                    <Grid item key={index} class="animate__animated animate__slideInUp" onClick={() => handleImageClick(photo.label)} style={{ cursor: 'pointer' }}>
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
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/dorylus-series-h.png', label: 'Dorylus Series' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/pharaoh series-h.png', label: 'Pharaoh Series' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/solenopsis series-h.png', label: 'Solenopsis Series' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/NZXT_H7_Elite_White_Edition1.png', label: 'Metallica Series' },
    ];

    const workstationPhotos = [
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/ai-series-h.png', label: 'AI & Deep Learning' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/Architecture-Engineering-h.png', label: 'Architecture & Engineering' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/Visual-Designing-h.png', label: 'Visual Designing & Effects' },
        { url: 'https://www.ant-pc.com/assets/2022-theme/images/trading-pc.png', label: 'Trading PC' },
    ];

    const photos = selectedButton === gameCategories.gaming ? gamingPhotos : workstationPhotos;

    return (
        <Grid sx={{ my: 4 }}>
            <AppBar position="static" style={{ backgroundColor: '#212529' }}>
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Button
                        component={Link}
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
                        onMouseOver={() => handleButtonClick(gameCategories.gaming)}
                        onClick={() => handleButtonClick(gameCategories.gaming)}
                    >
                        Gaming
                    </Button>

                    <Button
                        component={Link}
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
                        onMouseOver={() => handleButtonClick(gameCategories.workstation)}
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
