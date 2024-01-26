import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const styles = {
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    width: 250,
    margin: '20px',
    backgroundColor: '#212529',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px', // Add this property to round the corners
    transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      borderColor: '#CE0101',
      boxShadow: '0 0 20px rgba(206, 1, 1, 0.8)',
    },
  },
  media: {
    height: 85,
    width: 'auto',
    marginBottom: '20px' // Optional: Add this property to round the corners of the image
  },
  mainTypography: {
    fontSize: '22px',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    margin: '20px 0 0',
  },
  contentTypography: {
    fontSize: '15px',
    fontFamily: 'Roboto, sans-serif',
    margin: '20px 0 0',
  },
};

const cardsData = [
  {
    title: 'Ultimate Craftsmanship',
    description:
      'Every system, at Ant PC, is assembled & quality checked by experts who handle only one PC at a time to ensure that your dream PC is up to the mark.',
    imageUrl: 'https://www.ant-pc.com/assets/2022-theme/images/focus-icon1h.png',
  },
  {
    title: 'Peak Performance',
    description:
      'Each machine over here from high-end workstations to entry-level systems is equipped with the most reliable components to ensure that they’re operating at peak performance.',
    imageUrl: 'https://www.ant-pc.com/assets/2022-theme/images/focus-icon2h.png',
  },
  {
    title: 'Precise Testing',
    description:
      'We strive to deliver quality builds with utmost precision. And, that’s why before we dispatch any product, we take it through various significant benchmark tests.',
    imageUrl: 'https://www.ant-pc.com/assets/2022-theme/images/focus-icon3h.png',
  },
  {
    title: 'Designed to Be Unique',
    description:
      'Ant PC knows the true power of uniqueness, and thus we work hard to encourage it. Hence, we bring you limitless custom solutions designed to your specifications.',
    imageUrl: 'https://www.ant-pc.com/assets/2022-theme/images/focus-icon4nh.png',
  },
];

export default function FocusCart() {
  return (
    <>
      <br />
      <Typography sx={{ ...styles.mainTypography, textAlign: 'center' }}>Our Focus</Typography>

      <Grid container sx={styles.gridContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} sx={styles.card} elevation={5}>
            <CardMedia component="img" height="100" width="100" sx={styles.media} image={card.imageUrl} alt={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={styles.mainTypography}>
                {card.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={styles.contentTypography}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}
