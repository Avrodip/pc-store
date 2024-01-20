import React, { useState } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.ant-pc.com/assets/2022-theme/images/Banner-1.webp',
    'https://www.ant-pc.com/assets/2022-theme/images/Banner-6.webp',
    'https://www.ant-pc.com/assets/2022-theme/images/Nvidia_RTX_470_Web_Banner.webp',
    'https://www.ant-pc.com/assets/2022-theme/images/Workstation-content-creation.webp',
    'https://www.ant-pc.com/assets/2022-theme/images/EMI-BannerN.webp',
    'https://www.ant-pc.com/assets/2022-theme/images/Workstation_PC_Banner.webp',
    // Add more image URLs as needed
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: index === currentIndex ? 'block' : 'none',
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          onClick={goToPrevSlide}
          style={{ color: 'white', fontSize: '24px', margin: '20px', backgroundColor: 'black', borderRadius: '50%', padding: '10px' }}
        >
          &lt;
        </button>
        <button
          onClick={goToNextSlide}
          style={{ color: 'white', fontSize: '24px', margin: '20px', backgroundColor: 'black', borderRadius: '50%', padding: '10px' }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
