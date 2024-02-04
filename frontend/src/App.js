import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar.jsx"
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import GamingPc from './sections/cart/gamePcCart/index.jsx'
import Footer from './layout/footer.jsx';
import Register from './sections/auth/register.jsx';
import LoginAuth from './sections/auth/loginAuth.jsx';
import { Box, Grid } from '@mui/material';
import HomeSection from './layout/homeSection.jsx';
import DorylusPage from './sections/subsection/gaming/dorylusPage.jsx';
import ConfigureCartProduct from './sections/cart/configureCartProduct.jsx';
import CartProductSpecs from './sections/cart/CartProductSpecs.jsx';

function App() {

    return (

        <Router>
            <Box sx={{ background: "black", color: "white" }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomeSection />} />
                    <Route path='/workStationCart' element={<WorkStationCart />} />
                    <Route path='/gaming-pc' element={<GamingPc />} />
                    <Route path='/login' element={<LoginAuth />} />
                    <Route path='/register' element={<Register />} />

                    {/* To do the routing based on the Categories, SubCategories and Products*/}
                    <Route path="/:category/:subCategory" element={<DorylusPage />} />
                    <Route path="/:category/:subcategory/:product" element={<ConfigureCartProduct />} />

                </Routes>
                <Footer />
            </Box>
        </Router>
    );
}

export default App;
