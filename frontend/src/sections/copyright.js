import { Grid } from "@mui/material";
const styles={
    copyrightBox:{
        minHeight: '40px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
const Copyright=()=>{
    return(
        <>
            <Grid container sx={styles.copyrightBox}>
                <Grid className="roboto-regular">© 2024 ANT-PC. ALL RIGHTS RESERVED.</Grid>
            </Grid>
        </>
    )
}
export default Copyright;