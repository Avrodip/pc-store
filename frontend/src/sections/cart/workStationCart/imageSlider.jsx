import React, { useState, useEffect } from 'react';
import { Paper, Button, Grid, Typography } from '@mui/material';
import { Slide } from '@mui/material';

const images = [
  'https://via.placeholder.com/800x400?text=Image1',
  'https://via.placeholder.com/800x400?text=Image2',
  'https://via.placeholder.com/800x400?text=Image3',
  'https://via.placeholder.com/800x400?text=Image4',
  'https://via.placeholder.com/800x400?text=Image5',
];

const sliderContainerStyle = {
  width: '100%',
  height: '50vh',
  overflow: 'hidden',
  display: 'flex',
  position: 'relative',
  transition: 'transform 0.5s ease-in-out', // CSS transition for smooth slide
};

const imageStyle = {
  width: '50%',
  height: '100%',
  objectFit: 'cover',
};

const buttonContainerStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
};

const buttonStyle = {
  margin: '5px',
};

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction) => {
    setSlideIndex((prevIndex) => (direction === 'up' ? (prevIndex - 1 + images.length) % images.length : (prevIndex + 1) % images.length));
  };

  return (
    <>
        <Typography marginTop='7%' padding='2%' height='20%' backgroundColor='#252525' textAlign='center' color='white'>
        HIGH PERFORMANCE CUSTOM BUILD WORKSTATIONS
        </Typography>
    <Grid style={sliderContainerStyle}>
        
      <Slide direction="down" in={true} timeout={500}>
        <Paper elevation={3} style={{ ...imageStyle, backgroundImage: `url(${images[slideIndex]})` }} />
      </Slide>
      <Slide direction="up" in={true} timeout={500}>
        <Paper elevation={3} style={{ ...imageStyle, backgroundImage: `url(${images[(slideIndex + 1) % images.length]})` }} />
      </Slide>
      <Grid style={buttonContainerStyle}>
        <Button variant="outlined" color="primary" style={buttonStyle} onClick={() => handleArrowClick('down')}>
          &#8595;
        </Button>
        <Button variant="outlined" color="primary" style={buttonStyle} onClick={() => handleArrowClick('up')}>
          &#8593;
        </Button>
      </Grid>
    </Grid>
    </>
  );
};

export default ImageSlider;
