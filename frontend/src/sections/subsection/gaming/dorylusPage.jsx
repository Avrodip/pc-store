import * as React from "react";
import { Button, Grid, Box, CardMedia, Card, styled, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const styles = {
    card: {
        maxWidth: 400,
        backgroundColor: "#171717",
        border: "1px solid rgba(255,255,255,.1)",
        color: "white",
        margin: "auto",
        marginTop: "50px",
        transition: "transform 0.15s ease-in-out, box-shadow 0.3s ease-in-out",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    textWithImage: {
        display: "flex",
        alignItems: "start",
        backgroundColor: "#171717",
        padding: "3px",
        marginBottom: "8px",
    },
    image: {
        height: "20px",
        marginRight: "10px",
    },
    smallerText: {
        fontSize: "12px",
    }
};

const TextWithImage = ({ imageUrl, text }) => (
    <Box style={styles.textWithImage} >
        <img src={imageUrl} alt="icon" style={styles.image} />
        <Typography variant="body2" style={styles.smallerText}>
            {text}
        </Typography>
    </Box>
);

const data = [
    {
        title: "ANT PC DORYLUS CL940N",
        image: "https://ant-pc.com/Case/ANT_Esports_211_Air_Black.png",
        price: "28,033.00",
        emi: "931.10",
        processor: "INTEL CORE I3 10100 (4 CORE, 8 THREADS, UP TO 4.3 GHZ)",
        motherBoard: "MSI H510M-A PRO",
        RAM: "1 X 8GB G.SKILL RIPJAWS V DDR4 3200MHZ",
        graphicsType: "INTEGRATED GRAPHICS",
        SSD: "256GB ADATA XPG ASX6000 PRO"
    },
    {
        title: "ANT PC DORYLUS RZ360N",
        image: "https://www.ant-pc.com/Case/Deepcool_MATREXX_40_3Fs1.png",
        price: "33,033.00",
        emi: "1199.10",
        processor: "AMD RYZEN 5 5600G (6CORE, 12THREADS, UP TO 4.4 GHZ)",
        motherBoard: "MSI B550M PRO VDH WIFI",
        RAM: "1 X 8GB G.SKILL RIPJAWS V DDR4 3200MHZ",
        graphicsType: "INTEGRATED GRAPHICS",
        SSD: "256GB ADATA XPG ASX6000 PRO"
    }
];

const DorylusPage = () => {
    // const { category, subCategory } = useParams();



    let category = "gaming-pc";
    let subcategory = "Pharaoh";
    let product = "4567789"

    return (
        <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", gap: 3, paddingBottom: 7, paddingTop: 12 }}>
            {
                data.map((item, index) => (
                    <Grid key={index} item xs={12} md={4} lg={3} spacing={2}>
                        <Card
                            sx={styles.card}
                            elevation={5}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)")
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")
                            }
                        >
                            <Grid>
                                <Typography sx={{ color: "white", fontSize: { xs: "16px", sm: "18px", md: "20px" }, textAlign: "center", padding: 2 }}>
                                    {item?.title}
                                </Typography>
                            </Grid>

                            <Grid container sx={{ backgroundColor: "black", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Grid item xs={4} sm={3} md={2} sx={{ display: "flex", justifyContent: "center", marginTop: { xs: "-20%", sm: "-30%" } }}>
                                    <CardMedia component="img" sx={{ width: { xs: "40px", sm: "40px", md: "50px" } }} src="https://www.ant-pc.com/assets/images/icon-svg/free-shipping-icon.svg" />
                                </Grid>

                                <Grid item xs={4} sm={6} md={8} sx={{ display: "flex", justifyContent: "center" }}>
                                    <CardMedia
                                        component="img"
                                        image={item?.image}
                                        alt="green iguana"
                                        sx={{
                                            width: { xs: "150px", sm: "175px", md: "200px" },
                                            height: "auto",
                                            display: "block",
                                            maxWidth: "200px",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={4} sm={3} md={2} sx={{ display: "flex", justifyContent: "center", marginTop: { xs: "-20%", sm: "-30%" } }}>
                                    <CardMedia component="img" sx={{ width: { xs: "40px", sm: "40px", md: "50px" } }} src="https://www.ant-pc.com/assets/images/icon-svg/free-shipping-icon.svg" />
                                </Grid>
                            </Grid>

                            <Box sx={{ marginTop: 2, marginRight: 1, marginLeft: 1 }}>
                                <TextWithImage
                                    imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/001-processor.svg"
                                    text={item?.processor}
                                />
                                <TextWithImage
                                    imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/motherboard.svg"
                                    text={item?.motherBoard}
                                />
                                <TextWithImage
                                    imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/001-processor.svg"
                                    text={item?.RAM}
                                />
                                <TextWithImage
                                    imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/003-graphics-card.svg"
                                    text={item?.graphicsType}
                                />
                                <TextWithImage
                                    imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/004-hard-disk-drive.svg"
                                    text={item?.SSD}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    backgroundColor: "#101010",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    padding: 1,
                                }}
                            >
                                ₹ {item?.price}
                            </Typography>
                            <Typography
                                sx={{
                                    backgroundColor: "#171717",
                                    fontSize: "12px",
                                    textAlign: "center",
                                    padding: 1,
                                }}
                            >
                                EMI starting from <Box component="span" sx={{ color: "red" }}>₹{item?.emi}</Box> / Month.
                            </Typography>

                            <Button component={Link} to={`/${category}/${subcategory}/${product}`} sx={{ backgroundColor: "#CE0101", color: "white", width: "100%", borderRadius: 0, padding: 1.5 }}>
                                CONFIGURE NOW
                            </Button>
                        </Card>
                    </Grid >
                ))
            }
        </Grid >
    );
};

export default DorylusPage;
