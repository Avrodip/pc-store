import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

const styles = {
  card: {
    maxWidth: 300,
    backgroundColor: "#171717",
    border: 1,
    borderColor: "#FFFFFF",
    color: "white",
    margin: "auto",
    marginTop: "50px",
    transition: "transform 0.15s ease-in-out, box-shadow 0.3s ease-in-out",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: 0
  },
  gridContainer: {
    display: "flex",
    position: "relative",
    padding: "2%",
    marginBottom: "2%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#171717", // Set the background color of the container to black
  },
  textWithImage: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#171717", // Set the background color of the textWithImage container
    padding: "3px", // Add padding to create space between each line
    marginBottom: "8px", // Add margin at the bottom to separate each TextWithImage component
  },
  image: {
    height: "20px", // Set the height of the image
    marginRight: "10px", // Adjust spacing between image and text
  },
  smallerText: {
    fontSize: "12px", // Adjust the font size as needed
  },
  media: {
    width: "40%",
    backgroundColor: "#171717",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20px",
  },
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    
  },
};

const TextWithImage = ({ imageUrl, text }) => (
  <div style={styles.textWithImage}>
    <img src={imageUrl} alt="icon" style={styles.image} />
    <Typography variant="body2" style={styles.smallerText}>
      {text}
    </Typography>
  </div>
);

const DorylusPage = () => {
  return (
    <div style={styles.parentContainer}>
    <Grid container sx={styles.gridContainer}>
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
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            padding: 2,
          }}
        >
          ANT PC DORYLUS CL940N
        </Typography>
        <Grid container sx={{ backgroundColor: "black" }}>
          <CardMedia
            component="img"
            height="170"
            image="https://ant-pc.com/Case/ANT_Esports_211_Air_Black.png"
            alt="green iguana"
            sx={styles.media}
          />
        </Grid>
        <br/>
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/001-processor.svg"
          text="INTEL CORE I3 10100 (4 CORE, 8 THREADS, UP TO 4.3 GHZ)"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/motherboard.svg"
          text="MSI H510M-A PRO"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/001-processor.svg"
          text="1 X 8GB G.SKILL RIPJAWS V DDR4 3200MHZ"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/003-graphics-card.svg"
          text="INTEGRATED GRAPHICS"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/004-hard-disk-drive.svg"
          text="256GB ADATA XPG ASX6000 PRO"
        />
        <Typography
          sx={{
            backgroundColor: "#101010",
            fontSize: "15px",
            textAlign: "center",
            padding: 1,
          }}
        >
          ₹ 28,033.00
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#171717",
            fontSize: "15px",
            textAlign: "center",
            padding: 1,
          }}
        >
          EMI starting from ₹931.10 / Month.
        </Typography>
        <Button
          sx={{ backgroundColor: "#CE0101", color: "white", width: "100%" }}
        >
          CONFIGURE NOW
        </Button>
      </Card>
    </Grid>
    <Grid container sx={styles.gridContainer}>
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
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            padding: 2,
          }}
        >
          ANT PC DORYLUS RZ360N
        </Typography>
        <Grid container sx={{ backgroundColor: "black" }}>
          <CardMedia
            component="img"
            height="170"
            image="https://ant-pc.com/Case/ANT_Esports_211_Air_Black.png"
            alt="green iguana"
            sx={styles.media}
          />
        </Grid>
        <br/>
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/001-processor.svg"
          text="AMD RYZEN 5 5600G (6CORE, 12THREADS ,UP TO 4.3 GHZ)"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/motherboard.svg"
          text="MSI B550M PRO VDH WIFI"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/001-processor.svg"
          text="1 X 8GB G.SKILL RIPJAWS V DDR4 3200MHZ"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/003-graphics-card.svg"
          text="INTEGRATED GRAPHICS"
        />
        <TextWithImage
          imageUrl="https://www.ant-pc.com/workstation-assets/assets/images/icon-svg/004-hard-disk-drive.svg"
          text="256GB ADATA XPG ASX6000 PRO"
        />
        <Typography
          sx={{
            backgroundColor: "#101010",
            fontSize: "15px",
            textAlign: "center",
            padding: 1,
          }}
        >
          ₹ 33,940.00
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#171717",
            fontSize: "15px",
            textAlign: "center",
            padding: 1,
          }}
        >
          EMI starting from ₹931.10 / Month.
        </Typography>
        <Button
          sx={{ backgroundColor: "#CE0101", color: "white", width: "100%" }}
        >
          CONFIGURE NOW
        </Button>
      </Card>
    </Grid>
    <br/>
    
    </div>
  );
};

export default DorylusPage;
