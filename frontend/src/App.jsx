import React, { useEffect } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import HomeSection from "./layout/homeSection"
import MyOrders from './sections/dashboard/MyOrders.jsx';
import ConfigureCartGaming from './sections/cart/add-to-cart/ConfigureCartGaming';
import ConfigureCartWorkstation from './sections/cart/add-to-cart/ConfigureCartWorkstation';
import CartProductDetails from './sections/cart/manage-cart/CartProductDetails';
import Checkout from './sections/cart/manage-cart/Checkout';
import ConfirmCheckout from './sections/cart/manage-cart/ConfirmCheckout';
import WrongAddress from './error/WrongAddress.jsx';
import ProtectedRoute from './sections/auth/ProtectedRoute';
import Dashboard from "./sections/dashboard/Dashboard";
import WorkStationCart from './sections/cart/workStationCart/index';
import GamingPc from './sections/cart/gamePcCart/index';
import Register from './sections/auth/register';
import ForgetPassword from './sections/auth/forgetPassword.jsx';
import LoginAuth from './sections/auth/loginAuth';
import Navbar from './layout/Navbar';
import Footer from './layout/footer';
import Not_found from './error/not-found.jsx';


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
                    <Route path='/forgetPassword' element={<ForgetPassword />} />
                    {/* To do the routing based on the Categories, SubCategories and Products*/}
                    <Route path="/gaming-pc/:subcategory/:product" element={<ConfigureCartGaming />} />
                    <Route path="/workstation/:subcategory/:product" element={<ConfigureCartWorkstation />} />

                    <Route element={<ProtectedRoute />} >
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/cart' element={<CartProductDetails />} />
                        <Route path='checkout' element={<Checkout />} />
                        <Route path="/confirmCheckout/:billing/:shipping" element={<ConfirmCheckout />} />
                        <Route path="/wrongAddress" element={<WrongAddress />} />
                        <Route path="/my-orders" element={<MyOrders />} />
                    </Route>

                    <Route path='*' element={<Not_found />} />
                </Routes>
                <Footer />
            </Box>
        </Router>
    );
}

export default App;
