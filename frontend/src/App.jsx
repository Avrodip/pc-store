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
import ConfigureCartGaming from './sections/cart/ConfigureCartGaming.jsx';
import CartProductSpecs from './sections/cart/CartProductSpecs.jsx';
import ConfigureCartWorkstation from './sections/cart/ConfigureCartWorkstation.jsx';
import Cart from "./sections/cart/cart.jsx"
import CartProductDetails from './sections/cart/CartProductDetails.jsx';
import ProtectedRoute from "./routes/ProtectedRoute.js"
import Dashboard from './layout/Dashboard.jsx';
import Checkout from './sections/cart/Checkout.jsx';
import ConfirmCheckout from './sections/cart/ConfirmCheckout.jsx';

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

                    {/* <ProtectedRoute isAuthenticated={isAuthenticated}>
                    </ProtectedRoute> */}

                    <Route path='/cart' element={<CartProductDetails />} />
                    <Route path='/dashboard' element={<Dashboard />} />

                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/confirmCheckout' element={<ConfirmCheckout />} />
                </Routes>

                <Footer />
            </Box>
        </Router>
    );
}

export default App;
