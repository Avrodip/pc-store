import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';

const ImageSlider = () => {
    const images = [
        '/Images/banner1/Budget Gaming/1.jpg',
        '/Images/banner1/Budget Gaming/2.jpg',
        '/Images/banner1/Budget Gaming/3.jpg',
        '/Images/banner1/Budget Gaming/4.jpg',
        '/Images/banner1/Budget Gaming/5.jpg',
        '/Images/banner1/Budget Gaming/6.jpg',
        // Add more image URLs as needed
    ];

    const sliderRef = useRef(null);

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Grid style={{ position: 'relative', marginTop: "100px" }}>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <Grid key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{ width: '100%', height: '600px'}}
                        />
                    </Grid>
                ))}
            </Slider>
            <Grid style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={goToPrevSlide} style={{ backgroundColor: 'black', borderRadius: '50%', padding: '10px', border: 'none', cursor: 'pointer' }}>
                    <ArrowBackIosIcon style={{ color: 'white', fontSize: '24px' }} />
                </button>
                <button onClick={goToNextSlide} style={{ backgroundColor: 'black', borderRadius: '50%', padding: '10px', border: 'none', cursor: 'pointer' }}>
                    <ArrowForwardIosIcon style={{ color: 'white', fontSize: '24px' }} />
                </button>
            </Grid>
        </Grid>
    );
};

export default ImageSlider;
