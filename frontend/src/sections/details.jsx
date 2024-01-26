import React from 'react';
import { AppBar, Toolbar, Button, Grid, Typography, Paper, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const DetailsComponent = () => {
    return (
        <Grid container spacing={2}>
            {/* Image 1 */}
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: 'black' }}>
                    {/* Replace 'your_image_url' with the actual image URL */}
                    <img
                        src="https://www.ant-pc.com/assets/2022-theme/images/Difference-pc.png"
                        alt="Details"
                        style={{ width: '100%', height: 'auto', maxWidth: '100%', border: 'none' }}
                    />
                </Paper>
            </Grid>

            {/* Text 1 */}
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: '20px', backgroundColor: 'black' }}>
                    <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
                        <br /><br /><br /><br /><br />
                        What Makes Us Stand Out?
                    </Typography>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        Since we started our journey in 2015, we’ve been striving to provide you with the ultimate Custom PC experience. We are a team of proficient professionals who are zealous to make all our valued customers happy & satisfied by offering premium-quality products & unmatched services. That’s why we are widely recognized as the most reliable Custom PC builder in India, specializing in building High-Performance Custom Workstation Computers, Gaming PCs, and Servers.
                    </Typography>
                    <br />
                    <Typography variant="body1" style={{ color: 'white' }}>
                        WE NEVER SETTLE FOR LESS & neither should you. We assure you that you’ll hardly find this level of craftsmanship & customizability elsewhere. And our industry-leading 3 Years Warranty along with Lifetime Technical Support always lets you enjoy Peak PC Performance without any worries.
                    </Typography>
                </Paper>
            </Grid>

            {/* Text 2 */}
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: '20px', backgroundColor: 'black' }}>
                    <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
                        <br /><br /><br /><br />
                        Bring Home Your Dream PC Now!
                    </Typography>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        Have any questions or queries that you would like to ask pertaining to a new ANT PC System or want to upgrade the existing one? Feel free to get in touch with us by simply dropping a mail at: sales@ant-pc.com or making a phone call on: +91-888 012 6872!
                    </Typography>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        You will assuredly get the right assistance at the right time from our dedicated team who is always ready and available to help you out.
                    </Typography>
                    <Typography variant="body1" style={{ color: 'white', marginTop: '10px' }}>
                        <br />
                        Let Our Team Do The Work For You!! <br />
                    </Typography>
                    <Button
                        component={Link}
                        to="/build-it-yourself"
                        color="primary"
                        variant="contained"
                        style={{ marginTop: '10px', backgroundColor: 'red', width: '150px', marginRight: '40%' }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Contact Us
                    </Button>
                </Paper>
            </Grid>

            {/* Image 2 */}
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: 'black' }}>
                    {/* Replace 'your_image_url' with the actual image URL */}
                    <img
                        src="https://www.ant-pc.com/assets/2022-theme/images/Bring-Home.jpg"
                        alt="Bring Home"
                        style={{ width: '100%', height: 'auto', maxWidth: '85%', border: 'none' }}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DetailsComponent;
