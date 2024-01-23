import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

const styles = {
  card: {
    maxWidth: 345,
    backgroundColor: '#212529',
    color: 'white',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    transition: 'transform 0.15s ease-in-out',
    '&:hover': { transform: 'scale3d(1.05, 1.05, 1)', borderColor: '#FFFFFF' },
  },
  media: {
    height: 140,
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    margin: '20px 0 0 0',  // Add margin-top to create space
  },
};

export default function ActionAreaCard() {
  return (
    <Grid container sx={styles.gridContainer}>
      <Card
        sx={styles.card}
        elevation={5}
        onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
        onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
      >
        <CardMedia
  component="img"
  height="140"
  image="https://www.ant-pc.com/assets/2022-theme/images/workstation-sm.png"
  alt="green iguana"
/>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={styles.mainTypography}>
              Workstation
            </Typography>
            <Button sx={styles.viewMoreButton}>View More</Button>
          </CardContent>
      </Card>

      <Card
        sx={styles.card}
        elevation={5}
        onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)')}
        onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)')}
      >
          <CardMedia component="img" height="140" image="https://www.ant-pc.com/assets/2022-theme/images/gaming-sm.png" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={styles.mainTypography}>
              Gaming PC
            </Typography>
            <Button sx={styles.viewMoreButton}>View More</Button>
          </CardContent>
      </Card>
    </Grid>
  );
}
