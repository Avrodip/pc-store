import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar.jsx"
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import GamingPc from './sections/cart/gamePcCart/index.jsx'
import Footer from './layout/footer.jsx';
import Register from './sections/auth/register.jsx';
import LoginAuth from './sections/auth/loginAuth.jsx';
import { Box } from '@mui/material';
import HomeSection from './layout/homeSection.jsx';
import ConfigureCartGaming from "./sections/cart/add-to-cart/ConfigureCartGaming"
import ConfigureCartWorkstation from './sections/cart/add-to-cart/ConfigureCartWorkstation';
import CartProductDetails from './sections/cart/manage-cart/CartProductDetails';
import Dashboard from './layout/Dashboard.jsx';
import Checkout from './sections/cart/manage-cart/Checkout.jsx';
import ConfirmCheckout from './sections/cart/manage-cart/ConfirmCheckout.jsx';
import WrongAddress from './error/WrongAddress.jsx';
import ProtectedRoute from './sections/auth/ProtectedRoute.jsx';

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
                    <Route path="/gaming-pc/:subcategory/:product" element={<ConfigureCartGaming />} />
                    <Route path="/workstation/:subcategory/:product" element={<ConfigureCartWorkstation />} />

                    <Route element={<ProtectedRoute />} >
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/cart' element={<CartProductDetails />} />
                        <Route path='checkout' element={<Checkout />} />
                        <Route path="/confirmCheckout/:billing/:shipping" element={<ConfirmCheckout />} />
                        <Route path="/wrongAddress" element={<WrongAddress />} />
                    </Route>

                </Routes>

                <Footer />
            </Box>
        </Router>
    );
}

export default App;
