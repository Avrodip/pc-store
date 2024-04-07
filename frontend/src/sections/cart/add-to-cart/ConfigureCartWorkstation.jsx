import { Stack, Button, InputLabel, OutlinedInput, Select, FormHelperText, Grid, Typography, MenuItem, CardMedia } from "@mui/material"
import { useFormik } from "formik";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { ArrowRightOutlined, DownloadOutlined, ShoppingCartOutlined, ShareAltOutlined } from "@ant-design/icons"
import { useParams } from "react-router-dom";


const ConfigureCartWorkstation = () => {
    const [isChangeForm, setIsChangeForm] = useState(true);
    const [processorList, setProcessorList] = useState(null)
    const [tempData, setTempData] = useState([])
    const [cpuID, setCpuID] = useState(1);
    const { pathname } = useLocation();
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const manageWorkStationProducts = (values) => {
        console.log("Values : ", values)
    }

    const getSubCategoryID = (subcategory) => {
        switch (subcategory) {
            case 'AI&DeepLearning':
                return 1;
            case 'Home':
                return 2;
            case 'Editing':
                return 3;
            case 'Trading':
                return 4;
            case 'CAD':
                return 5;
            default:
                return 1;
        }
    };
    const subCategoryID = getSubCategoryID(params.subcategory);

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
        onSubmit: (values) => { manageWorkStationProducts(values) }
    })


    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const requestedData = { "type_id": 1 }
        const response = await axios.post("http://localhost:5050/api/processor/getWorkstationCpuList", requestedData);
        setProcessorList(response.data.data[0])
    }

    // GET Workstation Other List
    useEffect(() => {
        if (processorList) {
            const fetchData = async () => {
                const requestedData2 = { "cpu_id": cpuID == '' ? 1 : cpuID }
                let getOtherDetails;
                debugger;
                switch (subCategoryID) {
                    case 1:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcAIDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    case 2:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcAIDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    case 3:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcEditingDetails", requestedData2);
                        setTempData(getOtherDetails.data.data)
                        break;
                    case 4:
                        getOtherDetails = await axios.post("http://localhost:5050/api/processor/getPcTradingFourDetails", requestedData2);
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
        setCpuID(formik.values.processor)
    }, [formik.values.processor])


    return (
        <Grid container sx={{ pt: 14, px: { xs: 0, sm: 1 } }}>

            {/* 1st Grid  */}
            <Grid item xs={12} md={6} lg={6} >
                <Grid item sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>ANT PC Pharaoh RL500</Typography>
                </Grid>

                <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={8} >
                        <CardMedia component="img" sx={{
                            width: "100%",
                            ":hover": {
                                cursor: "pointer"
                            }
                        }}
                            src="https://www.ant-pc.com/Case/Corsair_3000D_RGB_Airflow1.png" />
                    </Grid>
                </Grid>

                <Grid item sx={{ textAlign: "center", pb: { xs: 4, sm: 4, md: 0 } }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>₹ 33,339.10</Typography>
                    <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>(Inclusive Of All Taxes)</Typography>
                </Grid>
            </Grid>

            {/* 2nd Grid  */}
            <Grid item xs={12} md={6} lg={6} sx={{ background: "#171717" }}>
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
                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1 }}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="processor" sx={{ color: 'white' }}>PROCESSOR</InputLabel>
                                    <Select
                                        value={formik.values.processor || Array.isArray(processorList) ? processorList[0].cpu_id : ''}
                                        name='processor'
                                        onChange={formik.handleChange}
                                        size="small"
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        sx={{ border: 1, color: 'white', width: '100%' }}
                                    >
                                        {
                                            processorList && processorList.map(processor => (
                                                <MenuItem
                                                    key={processor.cpu_id}
                                                    value={processor.cpu_id}>
                                                    {processor.cpu_name}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1, display: "flex", gap: 2 }}>
                                <Grid xs={9}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>RAM</InputLabel>
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
                                <Grid xs={3}>
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

                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1, display: "flex", gap: 2 }}>
                                <Grid xs={9}>
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

                                <Grid xs={3}>
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

                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1, display: "flex", gap: 2 }}>
                                <Grid xs={9}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>SSD :</InputLabel>
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

                                <Grid xs={3}>
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

                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1, display: "flex", gap: 2 }}>
                                <Grid xs={9}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>HDD :</InputLabel>
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

                                <Grid xs={3}>
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

                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1, display: "flex", gap: 2 }}>
                                    <Grid xs={9}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="password-signup" sx={{ color: "white" }}>Monitor :</InputLabel>
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
                                    <Grid xs={3}>
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

                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="processor" sx={{ color: 'white' }}>OS :</InputLabel>
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

                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1 }}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="processor" sx={{ color: 'white' }}>SUPPORT</InputLabel>
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
                                            <Button variant="contained" color='error'>Add to Cart <ShoppingCartOutlined style={{ fontSize: '20px', paddingLeft: 5 }} /></Button>
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

                <Grid container sx={{ display: { sm: "flex" }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sm: "space-between", md: 'space-evenly' }, px: { xs: 2, sm: 0 }, pb: { xs: 1, sm: 0 } }}>
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

        </Grid >
    )
}

export default ConfigureCartWorkstation;