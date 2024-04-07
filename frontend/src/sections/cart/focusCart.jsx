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
    description: 'At 6gigahertz, each system is meticulously assembled and undergoes rigorous quality checks by our team of experts. Our specialists handle only one PC at a time, ensuring that each system meets our high standards, guaranteeing that your dream PC is nothing short of perfection."',
    imageUrl: './Images/card/technical-support.png',
  },
  {
    title: 'Peak Performance',
    description:'From high-end workstations to entry-level systems, each machine here is outfitted with dependable components to ensure peak performance.',
    imageUrl: './Images/card/performance.png',
  },
  {
    title: 'Precise Testing',
    description:"We are committed to providing high-quality constructions with meticulous attention to detail. Therefore, prior to sending out any product, we subject it to rigorous benchmark testing to ensure excellence.",
    imageUrl: './Images/card/testing.png',
  },
  {
    title: 'Designed to Be Unique',
    description:'At Ant PC, we recognize the immense potential of individuality, which is why we dedicate ourselves to promoting it. As a result, we offer an extensive range of personalized solutions tailored precisely to your needs.',
    imageUrl: './Images/card/idea.png',
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
