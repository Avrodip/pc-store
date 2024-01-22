import { Grid } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./footer.css"
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
    footerQuickLinks:{
        margin: '2%',
        color: 'white',
    },
    quickContent:{
        borderBottom: '2px solid #313134',
        fontWeight: '200',
        padding: '10px',
        color: 'white',
        marginTop: '10px',
        fontSize: '0.9rem',
        transition: 'border-bottom 0.3s ease-in-out, margin-left 0.3s ease-in-out',
        '&:hover': {
            borderBottom:  '2px solid #ABABAB',
            marginLeft: '5px',
        }
    },
    arrowIcon: {
        width: '12px',
        height: '12px',
        paddingRight: '5px'
    }
}

const Footer=()=>
{
    return(
        <>
            <Grid container style={{backgroundColor:"#1D1D1F"}}>
                 <Grid container display={'flex'}>
                   <Grid xs={12} sm={4} sx={styles.footerContact} backgroundColor={"#313134"}>
                        <Grid sx={styles.footerContact}>
                            <img src="images/Logo-idea-white.png"  
                            width={50} 
                            height={50} 
                            alt="logo" 
                            responsive lazy/>
                        </Grid>
                        <Grid sx={styles.footerContact} className="roboto-medium">
                            <span style={{fontSize: '1rem'}}>Scan the QR code to<br/> get complete product<br/> list</span>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} sx={styles.footerContact} backgroundColor={"#1D1D1F"}>
                        <Grid sx={styles.footerContact}>
                            <img src="images/Logo-idea-white.png"  
                            width={50} 
                            height={50} 
                            alt="logo" 
                            responsive lazy/>
                        </Grid>
                        <Grid sx={styles.footerContact} className="roboto-medium">
                            <span style={{fontSize: '1.4rem', fontWeight: '700'}}>Call us<br/> +91-8889766565</span>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} sx={styles.footerContact} backgroundColor={"#313134"}>
                        <Grid sx={styles.footerContact}>
                            <img src="images/Logo-idea-white.png"  
                            width={50} 
                            height={50} 
                            alt="logo" 
                            responsive lazy/>
                        </Grid>
                        <Grid sx={styles.footerContact} className="roboto-medium">
                            <span style={{fontSize: '1.4rem', fontWeight: '700'}}>Mail us<br/>sales@ant-pc.com </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={styles.footerQuickLinks} backgroundColor={"#1D1D1F"}>
                    <Grid xs={12} sm={3} style={{padding: '20px'}}>
                        <span style={{fontWeight: '500'}}>Quick Links </span>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Workstation</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Gaming</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Custom Liquid Cooling</span>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid xs={12} sm={3} style={{padding: '20px'}}>
                        <span style={{fontWeight: '500'}}>Info Links </span>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Our Clients</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>About us</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Contact us</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Blog</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Support</span>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid xs={12} sm={3} style={{padding: '20px'}}>
                        <span style={{fontWeight: '500'}}>Help</span>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Terms & Conditions</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Privacy Policy</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Return & Refund Policy</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>Shipping Policy</span>
                            </a>
                        </Grid>
                        <Grid sx={styles.quickContent}>
                            <a href="#" style={{textDecoration: "none", color: "white", display: 'flex'}}>
                                <span style={{color: '#BB020D'}}><PlayArrowIcon sx={styles.arrowIcon}/></span>
                                <span>E-waste management</span>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={3} style={{padding: '20px'}}>
                        <Grid container display={'flex'}>
                            <span style={
                                {padding: '5px', 
                                width: '30px', 
                                height: '30px', 
                                borderRadius: '50%', 
                                backgroundColor: '#313134', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center'}}><LocationOnIcon/></span>
                            <span style={{fontWeight: '500', padding: '5px'}}>Coorporate Address</span>
                        </Grid>
                        <Grid style={{padding: '10px', marginLeft: '40px', fontWeight: '200', fontSize: '0.9rem'}}>
                            <span>Ant Engineering Private Limited, Z-41, Okhla Phase II, New Delhi, 110020</span>
                        </Grid>

                        <Grid container display={'flex'}>
                        <span style={
                                {padding: '5px', 
                                width: '30px', 
                                height: '30px', 
                                borderRadius: '50%', 
                                backgroundColor: '#313134', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center'}}><QuestionMarkIcon/></span>
                            <span style={{fontWeight: '500', padding: '5px'}}>Enquire Now</span>
                        </Grid>
                        <Grid container display={'flex'} style={{padding: '10px', marginLeft: '40px', fontWeight: '200', fontSize: '0.9rem'}}>
                            <span style={{padding: '5px'}}><WhatsAppIcon/></span>
                            <span style={{padding: '5px'}}><MailOutlineIcon/></span>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Copyright/>
            </Grid>
            
        </>
    )
}
export default Footer;