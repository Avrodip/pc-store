import { Grid } from "@mui/material";
const styles = {
    copyrightBox: {
        minHeight: '40px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}
const Copyright = () => {
    return (
        <>
            <Grid container sx={styles.copyrightBox}>
                <Grid className="roboto-regular">© 2024 ANT-PC. ALL RIGHTS RESERVED.</Grid>
                <Grid className="roboto-regular">Design by TechMotion</Grid>
            </Grid>
        </>
    )
}
export default Copyright;