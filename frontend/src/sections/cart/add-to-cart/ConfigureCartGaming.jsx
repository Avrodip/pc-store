import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Stack, Button, InputLabel, Select, Grid, Typography, MenuItem, CardMedia } from "@mui/material"
import { ArrowRightOutlined, DownloadOutlined, ShoppingCartOutlined, ShareAltOutlined } from "@ant-design/icons"
import 'animate.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CartProductSpecs from './CartProductSpecs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createProductCart } from '../../../services/configureCart';
import axios from 'axios';
import { AuthContext } from '../../../context-api/userContext';
import LoginPopup from '../../../components/common/LoginPopup';
import { warningToast } from '../../../components/ReactToastify';
import { ToastContainer } from 'react-toastify';

const userID = localStorage.getItem('pc-store-user')
const ConfigureCartGaming = () => {
    const [isChangeForm, setIsChangeForm] = useState(true);
    const [processorList, setProcessorList] = useState([])
    const [otherSpecs, setOtherSpecs] = useState(null);
    const [cpuID, setCpuID] = useState(1);
    const [tempData, setTempData] = useState([])
    const [isOpenSignIn, setIsOpenSignIn] = useState(false);
    const { pathname } = useLocation();
    const { checkTokenValidity } = useContext(AuthContext);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const getSubCategoryID = (subcategory) => {
        switch (subcategory) {
            case 'Predator':
                return 1;
            case 'Kraken':
                return 2;
            case 'Behemoth':
                return 3;
            case 'Slayer':
                return 4;
            default:
                return 1;
        }
    };
    const subCategoryID = getSubCategoryID(params.subcategory);

    useEffect(() => {
        const fetchData = async () => {
            const requestedData = { "type_id": subCategoryID }
            const response = await axios.post("http://localhost:5050/api/processor/getGamingCpuList", requestedData);
            setProcessorList(response.data.data[0])
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (processorList.length > 0) {
            const fetchData = async () => {
                const requestedData2 = { "cpu_id": cpuID == '' ? 1 : cpuID }
                let getOtherDetails;
                switch (subCategoryID) {
                    case 1:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcPredatorDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    case 2:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcKrakenDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    case 3:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcBehemothDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    case 4:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcSlayerDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    default:
                        break;
                }
            }
            fetchData();
        }
    }, [processorList, cpuID]);

    useEffect(() => {
        setOtherSpecs(tempData)
    }, [tempData])

    const images = [
        'https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow1.png',
        'https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow2.png',
        'https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow3.png'
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleSignIn = () => {
        warningToast("Please Login...", "bottom-right")
        setIsOpenSignIn(!isOpenSignIn)
    }

    const manageCartProductSpecs = (values) => {
        values.processor = processorList.find((pro => pro.cpu_id === values.processor))?.cpu_name
        if (values.processor === undefined) {
            values.processor = processorList[0]?.cpu_name
        }
        checkTokenValidity()
            .then((result) => {
                if (result.success) {
                    const createCart = async () => {
                        const response = await createProductCart({ ...values, userID: result.userID })
                        if (response.statusCode == 200) {
                            // handleAddToCart(response.data[0][0].id)
                            navigate('/cart');
                        } else {
                            console.log("Something error happened")
                        }
                    }
                    createCart();
                } else {
                    handleSignIn();
                }
            })
            .catch((error) => {
                console.error("Error validating token:", error);
            });
    }

    // Formik
    const formik = useFormik({
        initialValues: {
            actionType: 1,
            id: null,
            userID: userID ? userID : null,
            productType: 1,

            // Component Part
            processor: "",
            motherBoard: "",
            ram: "",
            ramQuantity: "",
            graphicCard: "",
            primaryStorage: "",
            secondaryStorage: "",
            hddQuantity: "",
            casse: "",
            cpuCooler: "",
            psu: "",
            support: "",

            // Add-on Part
            os: "cbcg",
            monitor: "gfhfg",
            monitorQuantity: 1,
            keyboard: "fghfgh",
            mouse: "fghgfxh",
            wifi: "fghfgh",
            customCable: "fxhftytf",

            price: 1200,
            quantity: 1,
        },
        onSubmit: (values) => {
            manageCartProductSpecs(values)
        }
    })

    useEffect(() => {
        if (otherSpecs) {
            formik.setFieldValue('ram', otherSpecs[1]?.[0]?.ram_name)
            formik.setFieldValue('motherBoard', otherSpecs[2]?.[0]?.motherboard_name)
            formik.setFieldValue('ramQuantity', 1)
            formik.setFieldValue('graphicCard', otherSpecs[0]?.[0]?.gpu_name)
            formik.setFieldValue('primaryStorage', otherSpecs[3]?.[0]?.storage_name)
            formik.setFieldValue('hddQuantity', 1)
            formik.setFieldValue('psu', otherSpecs[4]?.[0]?.smps_name)
            formik.setFieldValue('cpuCooler', otherSpecs[5]?.[0]?.cooler_name)
        }
    }, [otherSpecs])

    useEffect(() => {
        setCpuID(formik.values.processor)
    }, [formik.values.processor])



    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container sx={{ pt: 14, px: { xs: 0, sm: 1, md: 3 } }}>

                    <Grid item xs={12} md={6} lg={6} >
                        <Grid item sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>ANT PC Pharaoh RL500</Typography>
                        </Grid>

                        <Grid item sx={{ display: "flex", alignItems: "center", p: 6 }}>
                            <Grid item xs={8} >
                                <CardMedia component="img" sx={{
                                    width: "100%",
                                    transition: "transform .2s",
                                    ':hover': {
                                        transform: "scale(1.2)",
                                    },
                                }}
                                    src={selectedImage} />
                            </Grid>

                            <Grid item xs={4} sx={{ display: "flex", alignItems: "center", flexDirection: "column", mx: "auto", gap: 4 }}>
                                <CardMedia component="img" sx={{ width: { xs: "50%" }, cursor: "pointer", transition: "transform .2s", ':hover': { transform: "scale(1.2)" } }}
                                    src={images[0]} onClick={() => setSelectedImage(images[0])} />

                                <CardMedia component="img" sx={{ width: { xs: "50%" }, cursor: "pointer", transition: "transform .2s", ':hover': { transform: "scale(1.2)" } }}
                                    src={images[1]} onClick={() => setSelectedImage(images[1])} />

                                <CardMedia component="img" sx={{ width: { xs: "50%" }, cursor: "pointer", transition: "transform .2s", ':hover': { transform: "scale(1.2)" } }}
                                    src={images[2]} onClick={() => setSelectedImage(images[2])} />
                            </Grid>
                        </Grid>

                        <Grid item sx={{ textAlign: "center", pb: { xs: 4, sm: 4, md: 0 } }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>₹ 33,339.10</Typography>
                            <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>(Inclusive Of All Taxes)</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} sx={{ background: "#171717" }}>
                        <Grid item sx={{ display: "flex" }}>
                            <Grid item sm={6} md={6} sx={{ width: "50%" }}>
                                <Stack spacing={1}>
                                    <Button variant="contained"
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
                                                value={formik.values.processor || (processorList.length > 0 ? processorList[0].cpu_id : '')}
                                                name='processor'
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                            >
                                                {
                                                    processorList && processorList.map(processor => {
                                                        return (
                                                            <MenuItem
                                                                key={processor.cpu_id}
                                                                value={processor.cpu_id}>
                                                                {processor.cpu_name}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="motherboard" sx={{ color: 'white' }}> MOTHERBOARD</InputLabel>
                                            <Select
                                                value={formik.values.motherBoard}
                                                name='motherBoard'
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: 'white', width: '100%' }}
                                                IconComponent={() => <ExpandMoreIcon style={{ color: 'white' }} />}
                                            >
                                                {
                                                    otherSpecs && otherSpecs[2]?.map((specs) => (
                                                        <MenuItem
                                                            key={specs.motherboard_id}
                                                            value={specs.motherboard_name}>
                                                            {specs.motherboard_name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1, display: "flex", gap: 2 }}>
                                        <Grid sx={{ width: "70%" }}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>RAM 8 GB Total</InputLabel>
                                                <Select
                                                    value={formik.values.ram}
                                                    name='ram'
                                                    onChange={formik.handleChange}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white" }}
                                                >
                                                    {
                                                        otherSpecs && otherSpecs[1]?.map((specs) => (
                                                            <MenuItem
                                                                key={specs.ram_id}
                                                                value={specs.ram_name}>
                                                                {specs.ram_name}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </Stack>
                                        </Grid>
                                        <Grid sx={{ width: "30%" }}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Qty : </InputLabel>
                                                <Select
                                                    value={formik.values.ramQuantity}
                                                    name='ramQuantity'
                                                    onChange={formik.handleChange}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white" }}
                                                >
                                                    <MenuItem value="1">1</MenuItem>
                                                    <MenuItem value="2">2</MenuItem>
                                                    <MenuItem value="3">3</MenuItem>
                                                    <MenuItem value="4">4</MenuItem>
                                                    <MenuItem value="5">5</MenuItem>
                                                    <MenuItem value="6">6</MenuItem>
                                                    <MenuItem value="7">7</MenuItem>
                                                    <MenuItem value="8">8</MenuItem>
                                                    <MenuItem value="9">9</MenuItem>
                                                    <MenuItem value="10">10</MenuItem>
                                                </Select>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>GRAPHIC CARD</InputLabel>
                                            <Select
                                                value={formik.values.graphicCard}
                                                name='graphicCard'
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                {
                                                    otherSpecs && otherSpecs[0]?.map((specs) => (
                                                        <MenuItem
                                                            key={specs.gpu_id}
                                                            value={specs.gpu_name}>
                                                            {specs.gpu_name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Primary Storage For OS</InputLabel>
                                            <Select
                                                value={formik.values.primaryStorage}
                                                name='primaryStorage'
                                                displayEmpty
                                                onChange={formik.handleChange}
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                {
                                                    otherSpecs && otherSpecs[3]?.map((specs) => {
                                                        return (
                                                            <MenuItem
                                                                key={specs.storage_id}
                                                                value={specs.storage_name}>
                                                                {specs.storage_name}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1, display: "flex", gap: 2 }}>
                                        <Grid sx={{ width: "70%" }}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Secondary Storage</InputLabel>
                                                <Select
                                                    value={formik.values.hdd}
                                                    onChange={formik.handleChange}
                                                    displayEmpty
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white" }}
                                                >
                                                    {
                                                        otherSpecs && otherSpecs[3]?.map((specs) => (
                                                            <MenuItem
                                                                key={specs.storage_id}
                                                                value={specs.storage_name}>
                                                                {specs.storage_name}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </Stack>
                                        </Grid>
                                        <Grid sx={{ width: "30%" }}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Qty : </InputLabel>
                                                <Select
                                                    value={formik.values.hddQuantity}
                                                    onChange={formik.handleChange}
                                                    name='hddQuantity'
                                                    displayEmpty
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    sx={{ border: 1, color: "white" }}
                                                >
                                                    <MenuItem value="1">1</MenuItem>
                                                    <MenuItem value="2">2</MenuItem>
                                                    <MenuItem value="3">3</MenuItem>
                                                    <MenuItem value="4">4</MenuItem>
                                                    <MenuItem value="5">5</MenuItem>
                                                    <MenuItem value="6">6</MenuItem>
                                                    <MenuItem value="7">7</MenuItem>
                                                    <MenuItem value="8">8</MenuItem>
                                                    <MenuItem value="9">9</MenuItem>
                                                    <MenuItem value="10">10</MenuItem>
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
                                                <MenuItem value={'casse'}>Case 1</MenuItem>
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>CPU COOLER</InputLabel>
                                            <Select
                                                value={formik.values.cpuCooler}
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                {
                                                    otherSpecs && otherSpecs[5]?.map((specs) => (
                                                        <MenuItem
                                                            key={specs.cooler_id}
                                                            value={specs.cooler_name}>
                                                            {specs?.cooler_name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>PSU</InputLabel>
                                            <Select
                                                value={formik.values.psu}
                                                name='psu'
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                {
                                                    otherSpecs && otherSpecs[4]?.map((specs) => (
                                                        <MenuItem
                                                            key={specs.smps_id}
                                                            value={specs.smps_name}>
                                                            {specs.smps_name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%', mt: 1 }}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>SUPPORT</InputLabel>
                                            <Select
                                                value={formik.values.support}
                                                onChange={formik.handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ border: 1, color: "white" }}
                                            >
                                                <MenuItem value={"This is support"}>This is Support</MenuItem>
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
                                                    <Button type='submit' variant="contained" color='error'>Add to Cart <ShoppingCartOutlined style={{ fontSize: '20px', paddingLeft: 5 }} /></Button>
                                                </Stack>
                                            </Grid>
                                            <Grid item>
                                                <Stack spacing={1}>
                                                    <Button variant="contained" color="error" >Download Quote  <DownloadOutlined style={{ fontSize: '20px', paddingLeft: 5 }} /></Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                )
                        }

                        <Grid item sx={{ display: { sm: "flex" }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: "space-between", md: 'space-evenly' }, px: { xs: 2, sm: 0 }, pb: { xs: 1, sm: 0 } }}>
                            <Grid item sx={{ py: { sm: 2 }, pl: { sm: 2 } }}>
                                <Typography>
                                    Expected date of Dispatch : Feb 12, 2024
                                </Typography>
                            </Grid>
                            <Grid item sx={{ py: { sm: 2 }, pr: { sm: 2 } }}>
                                <Typography>
                                    Share this configuration <ShareAltOutlined />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* <CartProductSpecs /> */}
                </Grid>
            </form >

            <ToastContainer />

            {isOpenSignIn && (<LoginPopup location={"gaming-pc" + "/" + params.subcategory + "/" + params.product} handleSignIn={handleSignIn} />)}
        </>
    )
}

export default ConfigureCartGaming;