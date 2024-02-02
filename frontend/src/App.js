import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar.jsx"
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import Footer from './layout/Footer.jsx';
import Register from './sections/auth/Register.jsx';
import LoginAuth from './sections/auth/LoginAuth.jsx';
import { Box } from '@mui/material';
import HomeSection from './layout/HomeSection.jsx';
import DorylusPage from './sections/subsection/Gaming/DorylusPage.jsx';
import ConfigureCartProduct from './sections/cart/configureCartProduct.jsx';

function App() {

    return (

        <Router>
            <Box sx={{ background: "black", color: "white" }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomeSection />} />
                    <Route path='/workStationCart' element={<WorkStationCart />} />

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
