import { Grid } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "../css/footer.css"
import Copyright from "./copyright";

const styles = {
    footerContact: {
        color: 'white',
        padding: '10px',
        minHeight: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrImage: {
        width: '100px',
        height: '100px',
        backgroundSize: 'cover'
    },
    footerQuickLinks: {
        margin: '2%',
        color: 'white',
    },
    quickContent: {
        borderBottom: '2px solid #313134',
        fontWeight: '200',
        padding: '10px',
        color: 'white',
        marginTop: '10px',
        fontSize: '1.1rem',
        transition: 'border-bottom 0.3s ease-in-out, margin-left 0.3s ease-in-out',
        '&:hover': {
            borderBottom: '2px solid #ABABAB',
            marginLeft: '5px',
        }
    },
    arrowIcon: {
        width: '20px',
        height: '20px',
        marginTop:'2px',
        paddingRight: '5px'
    }
}

const Footer = () => {
    return (
        <>
            <Grid container style={{ backgroundColor: "#1D1D1F" }}>
                <Grid container display={'flex'}>
                    <Grid xs={12} sm={4} sx={styles.footerContact} backgroundColor={"#313134"}>
                        <Grid sx={styles.footerContact}>
                            <img src="./Images/qr.jpg"
                                width={70}
                                height={70}
                                alt="logo"
                                responsive lazy />
                        </Grid>
                        <Grid sx={styles.footerContact} className="roboto-medium">
                            <span style={{ fontSize: '1rem' }}>Scan the QR code to<br /> get complete product<br /> list</span>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} sx={styles.footerContact} backgroundColor={"#1D1D1F"}>
                        <Grid sx={styles.footerContact}>
                            <img src="./Images/phone.png"
                                width={50}
                                height={50}
                                alt="logo"
                                responsive lazy />
                        </Grid>
                        <Grid sx={styles.footerContact} className="roboto-medium">
                            <span style={{ fontSize: '1.4rem', fontWeight: '700' }}>Call us<br /> +91-7054300844</span>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} sx={styles.footerContact} backgroundColor={"#313134"}>
                        <Grid sx={styles.footerContact}>
                            <img src="./Images/postcard.png"
                                width={50}
                                height={50}
                                alt="logo"
                                responsive lazy />
                        </Grid>
                        <Grid sx={styles.footerContact} className="roboto-medium">
                            <span style={{ fontSize: '1.4rem', fontWeight: '700' }}>Mail us<br /><a href="mailto:  admin@6gigahertz.com " style={{textDecoration: "none", color: 'white'}}>admin@6gigahertz.com</a></span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={styles.footerQuickLinks} backgroundColor={"#1D1D1F"}>
                    <Grid xs={12} sm={3} style={{ padding: '20px' }}>
                        <span style={{ fontWeight: '500' }}>Quick Links </span>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Workstation</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Gaming</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Custom Liquid Cooling</span>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid xs={12} sm={3} style={{ padding: '20px' }}>
                        <span style={{ fontWeight: '500' }}>Sitemap </span>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Home</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>About us</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Contact us</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>My Account</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Affiliate</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Blog</span>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid xs={12} sm={3} style={{ padding: '20px' }}>
                        <span style={{ fontWeight: '500' }}>Support</span>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Terms & Conditions</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Privacy</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Shipping & Return</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Refund & Cancellation</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{ textDecoration: "none", color: "white", display: 'flex' }}>
                                <span style={{ color: '#BB020D' }}><PlayArrowIcon sx={styles.arrowIcon} /></span>
                                <span>Order Tracking</span>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={3} style={{ padding: '20px' }}>
                        <Grid container display={'flex'}>
                            <span style={
                                {
                                    padding: '5px',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    backgroundColor: '#313134',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}><LocationOnIcon /></span>
                            <span style={{ fontWeight: '500', padding: '5px' }}>Contact</span>
                        </Grid>
                        <Grid style={{ padding: '10px', marginLeft: '40px', fontWeight: '200', fontSize: '0.9rem' }}>
                            <span>Lucknow</span>
                        </Grid>

                        <Grid container display={'flex'}>
                            <span style={
                                {
                                    padding: '5px',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    backgroundColor: '#313134',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}><QuestionMarkIcon /></span>
                            <span style={{ fontWeight: '500', padding: '5px' }}>Enquire Now</span>
                        </Grid>
                        <Grid container display={'flex'} style={{ padding: '10px', marginLeft: '40px', fontWeight: '200', fontSize: '0.9rem' }}>
                            <span style={{ padding: '5px' }}><WhatsAppIcon /></span>
                            <span style={{ padding: '5px' }}><MailOutlineIcon /></span>
                        </Grid>

                    </Grid>
                </Grid>
                <Copyright />
            </Grid>

        </>
    )
}
export default Footer;