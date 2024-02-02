import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Stack, Button, InputLabel, OutlinedInput, Select, FormHelperText, Grid, Typography, MenuItem, CardMedia } from "@mui/material"
import { ArrowRightOutlined, DownloadOutlined, ShoppingCartOutlined, ShareAltOutlined } from "@ant-design/icons"
import 'animate.css';

const ConfigureCartProduct = () => {
    const [isChangeForm, setIsChangeForm] = useState(true);

    const images = [
        'https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow1.png',
        'https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow2.png',
        'https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow3.png'
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextImageIndex = (images.indexOf(selectedImage) + 1) % images.length;
            setSelectedImage(images[nextImageIndex]);
        }, 3000);
        return () => clearInterval(timer);
    }, [selectedImage, images]);

    const manageCartProducts = (values) => {
        console.log("Values : ", values)
    }

    // Formik
    const formik = useFormik({
        initialValues: {
            processor: '',
            motherBoard: '',
            ram: '',
            ramQty: '',
            graphics: '',
            primaryStorage: '',
            secondaryStorage: '',
            secondaryQty: '',
            case: '',
            cpuCooler: '',
            psu: '',
            support: ""
        },
        // validationSchema: formValidation,
        onSubmit: (values) => { manageCartProducts(values) }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid sx={{ py: 10, display: "flex", gap: 2, m: 4 }}>
                <Grid sx={{ width: "40%", pt: 2 }}>
                    <Grid item sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "25px" }}>ANT PC Pharaoh RL500</Typography>
                    </Grid>

                    <Grid item sx={{ display: "flex", p: 6 }}>

                        <Grid >
                            <CardMedia component="img" sx={{
                                width: "80%", transition: "transform .2s",
                                ':hover': {
                                    transform: "scale(1.2)",
                                },
                            }}
                                src={selectedImage} />
                        </Grid>

                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 5 }}>
                            <CardMedia component="img" sx={{ width: "60px", cursor: "pointer", transition: "transform .2s", ':hover': { transform: "scale(1.2)" } }}
                                src={images[0]} onClick={() => setSelectedImage(images[0])} />

                            <CardMedia component="img" sx={{ width: "60px", cursor: "pointer", transition: "transform .2s", ':hover': { transform: "scale(1.2)" } }}
                                src={images[1]} onClick={() => setSelectedImage(images[1])} />

                            <CardMedia component="img" sx={{ width: "60px", cursor: "pointer", transition: "transform .2s", ':hover': { transform: "scale(1.2)" } }}
                                src={images[2]} onClick={() => setSelectedImage(images[2])} />
                        </Grid>
                    </Grid>

                    <Grid item sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>₹ 33,339.10</Typography>
                        <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>(Inclusive Of All Taxes)</Typography>
                    </Grid>

                </Grid>

                <Grid sx={{ background: "#171717", width: "60%" }}>

                    <Grid item sx={{ display: "flex" }}>
                        <Grid item sm={6} md={6} sx={{ width: "50%" }}>
                            <Stack spacing={1}>
                                <Button variant="contained"
                                    // 
                                    sx={{
                                        borderRadius: 0,
                                        backgroundColor: isChangeForm ? 'red' : '#171717',
                                        '&:hover': {
                                            backgroundColor: isChangeForm ? 'red' : '#171717',
                                        },
                                        fontSize: "20px"
                                    }}
                                    onClick={() => setIsChangeForm(true)}
                                >Components</Button>
                            </Stack>
                        </Grid>

                        <Grid item sm={6} md={6} sx={{ width: "50%" }}>
                            <Stack spacing={1}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: 0,
                                        backgroundColor: isChangeForm ? '#171717' : 'red',
                                        '&:hover': {
                                            backgroundColor: isChangeForm ? '#171717' : 'red',
                                        },
                                        fontSize: "20px"
                                    }}
                                    onClick={() => setIsChangeForm(false)}
                                >
                                    ADD-ONS
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    {
                        isChangeForm ? (
                            <Grid container spacing={2} direction="row" sx={{ p: 2 }}>
                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="processor" sx={{ color: 'white' }}>PROCESSOR</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: 'white', width: '100%' }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="motherboard" sx={{ color: 'white' }}>
                                            MOTHERBOARD
                                        </InputLabel>
                                        <Select
                                            value={formik.values.motherBoard}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: 'white', width: '100%' }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1, display: "flex", gap: 2 }}>
                                    <Grid sx={{ width: "70%" }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>RAM 8 GB Total</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>
                                    <Grid sx={{ width: "30%" }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Qty : </InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>GRAPHIC CARD</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: "white" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Primary Storage For OS</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: "white" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1, display: "flex", gap: 2 }}>
                                    <Grid sx={{ width: "70%" }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Secondary Storage</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>
                                    <Grid sx={{ width: "30%" }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Qty : </InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>CASE</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: "white" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>CPU COOLER</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: "white" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>PSU</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: "white" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>SUPPORT</InputLabel>
                                        <Select
                                            value={formik.values.processor}
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            size="small"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ border: 1, color: "white" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Typography>
                                        Standard Support: 3 years RTB (offsite) part replacement/repair warranty from Ant PC with Lifetime technical support (Remotely) & 7 Days DOA Policy.
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ margin: "0 auto" }}>
                                    <Stack spacing={1}>
                                        <Button variant="contained" color='error'
                                            onClick={() => setIsChangeForm(false)}
                                        >Next<ArrowRightOutlined />
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        )
                            :
                            (
                                <Grid container spacing={2} direction="row" sx={{ p: 2 }}>
                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="processor" sx={{ color: 'white' }}>OS</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1, display: "flex", gap: 2 }}>
                                        <Grid sx={{ width: "70%" }}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>RAM 8 GB Total</InputLabel>
                                                <Select
                                                    value={formik.values.processor}
                                                    onChange={formik.handleChange}
                                                    displayEmpty
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white" }}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </Stack>
                                        </Grid>
                                        <Grid sx={{ width: "30%" }}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Qty : </InputLabel>
                                                <Select
                                                    value={formik.values.processor}
                                                    onChange={formik.handleChange}
                                                    displayEmpty
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white" }}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="processor" sx={{ color: 'white' }}>Keyboard</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="processor" sx={{ color: 'white' }}>Mouse</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="processor" sx={{ color: 'white' }}>Wi-Fi & Bluetooth</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="processor" sx={{ color: 'white' }}>Custom Cable</InputLabel>
                                            <Select
                                                value={formik.values.processor}
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid container sx={{ display: "flex", justifyContent: "center", gap: 1, m: 5 }}>
                                        <Grid item>
                                            <Stack spacing={1}>
                                                <Button variant="contained" color="error" >Download Quote  <DownloadOutlined style={{ fontSize: '20px', paddingLeft: 5 }} /></Button>
                                            </Stack>
                                        </Grid>

                                        <Grid item>
                                            <Stack spacing={1}>
                                                <Button variant="contained" color='error'>Add to Cart <ShoppingCartOutlined style={{ fontSize: '20px', paddingLeft: 5 }} /></Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            )
                    }

                    <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Grid item sx={{ py: 2, pl: 4 }}>
                            <Typography>
                                Expected date of Dispatch : Feb 12, 2024
                            </Typography>
                        </Grid>
                        <Grid item sx={{ py: 2, pr: 4 }}>
                            <Typography>
                                Share this configuration <ShareAltOutlined />
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </form >
    )
}

export default ConfigureCartProduct