import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PhotoGallery = ({ photos, selectedButton }) => {
  const navigate = useNavigate();

  const handleImageClick = (label) => {
    const basePath = selectedButton === 'gaming' ? '/gaming-pc' : '/workstation';
    const formattedLabel = label.replace(/\s/g, ''); // Remove spaces
    navigate(`${basePath}/${formattedLabel}`);
  };

  return (
    <>
    <br/>
      <Grid container spacing={2} justifyContent="center" style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px' }}>
        {photos.map((photo, index) => (
          <Grid item key={index} onClick={() => handleImageClick(photo.label)} style={{ cursor: 'pointer' }}>
            <div style={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '50%', margin: '0 auto', backgroundColor: 'white' }}>
              <img src={photo.url} alt={photo.label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <p style={{ color: 'white', textAlign: 'center', wordBreak: 'break-word',minWidth: '120px',maxWidth: '120px' }}>{photo.label}</p>
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
          <Button
            component={Link}
            to="/build-it-yourself"
            color="primary"
            variant="contained"
            style={{ marginTop: '10px', marginLeft: '35%', backgroundColor: 'red', width: '200px' }}
            endIcon={<ArrowForwardIcon />}
          >
            Build It Yourself
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const MidSection = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
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
    { url: 'https://www.ant-pc.com/assets/2022-theme/images/digital-audio-h.png', label: 'Audio Production' },
    // Add more workstation photos as needed
  ];

  const photos = selectedButton === 'gaming' ? gamingPhotos : workstationPhotos;

  return (
    <div>
        <br/>
      <AppBar position="static" style={{ backgroundColor: '#212529' }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/gaming-pc"
            color={selectedButton === 'gaming' ? 'secondary' : 'inherit'}
            style={{ color: selectedButton === 'gaming' ? 'red' : 'white', marginRight: '10px' }}
            onClick={() => handleButtonClick('gaming')}
          >
            Gaming
          </Button>
          <Button
            component={Link}
            to="/workstation-pc"
            color={selectedButton === 'workstation' ? 'secondary' : 'inherit'}
            style={{ color: selectedButton === 'workstation' ? 'red' : 'white', marginLeft: '10px' }}
            onClick={() => handleButtonClick('workstation')}
          >
            Workstation
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center" style={{ marginTop: '20px', backgroundColor: 'black' }}>
        <PhotoGallery photos={photos} selectedButton={selectedButton} />
      </Grid>
    </div>
  );
};

export default MidSection;
