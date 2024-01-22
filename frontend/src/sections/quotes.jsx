import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Card, CardContent, Container } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Quotes = () => {
  const quotes = [
    "As per the view of one of our satisfied customers, 'Bought a PC for gaming and coding purpose from ANT PC. They delivered a great pc in the promised time(2 weeks) to my Bangalore home. Thank you ANT pc!'",
    "I'm glad to have found these guys. I just placed an order last Thursday & had my PC received on Monday. The prices they provide are decent & the support they provide is exceptional. Special shout-out to Tousif for being patient with my questions & even coordinating on his day off to help with the order. Thank you guys!!",
    // Add more quotes as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <ul style={{ margin: '0' }}>{dots}</ul>
      </div>
    ),
  };

  const quoteSymbolStyle = {
    position: 'absolute',
    top: '-2%',
    left: '-5%',
    fontSize: '3em',
    color: 'red',
  };
  
  const quoteSymbolStyleBottomRight = {
    position: 'absolute',
    bottom: '2%',
    right: '-5%',
    fontSize: '3em',
    color: 'red',
  };
  

  return (
    <>
    <br/>
    <Container>
    <Typography variant="h4" align="center" gutterBottom>
        Our Happy Customers
      </Typography>
    </Container>
    <Container maxWidth="sm" sx={{ position: 'relative' }}>
      <br/>
      <FormatQuoteIcon style={quoteSymbolStyle} />
      <Slider {...sliderSettings}>
        {quotes.map((quote, index) => (
          <Card key={index} sx={{ backgroundColor: 'black', borderRadius: 4, boxShadow: 3, padding: 2, position: 'relative' }}>
            <CardContent>
              <Typography variant="body1" align="center" style={{ color: 'white' }}>
                {quote}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
      <FormatQuoteIcon style={quoteSymbolStyleBottomRight} />
    </Container>
    </>
  );
};

export default Quotes;
