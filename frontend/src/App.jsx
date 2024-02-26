import React, { Suspense, lazy } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import HomeSection from "./layout/homeSection"
import MyOrders from './sections/dashboard/MyOrders.jsx';
const ConfigureCartGaming = lazy(() => import('./sections/cart/add-to-cart/ConfigureCartGaming'));
const ConfigureCartWorkstation = lazy(() => import('./sections/cart/add-to-cart/ConfigureCartWorkstation'));
const CartProductDetails = lazy(() => import('./sections/cart/manage-cart/CartProductDetails'));
const Checkout = lazy(() => import('./sections/cart/manage-cart/Checkout'));
const ConfirmCheckout = lazy(() => import('./sections/cart/manage-cart/ConfirmCheckout'));
const WrongAddress = lazy(() => import('./error/WrongAddress.jsx'));
const ProtectedRoute = lazy(() => import('./sections/auth/ProtectedRoute'));
const Dashboard = lazy(() => import('./layout/Dashboard'));
const WorkStationCart = lazy(() => import('./sections/cart/workStationCart/index'));
const GamingPc = lazy(() => import('./sections/cart/gamePcCart/index'));
const Register = lazy(() => import('./sections/auth/register'));
const LoginAuth = lazy(() => import('./sections/auth/loginAuth'));
const Navbar = lazy(() => import('./layout/Navbar'));
const Footer = lazy(() => import('./layout/footer'));

function App() {

    return (

        <Router>
            <Box sx={{ background: "black", color: "white" }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomeSection />} />
                    <Route path='/workStationCart' element={<Suspense ><WorkStationCart /></Suspense>} />
                    <Route path='/gaming-pc' element={<Suspense ><GamingPc /></Suspense>} />
                    <Route path='/login' element={<Suspense ><LoginAuth /></Suspense>} />
                    <Route path='/register' element={<Suspense ><Register /></Suspense>} />

                    {/* To do the routing based on the Categories, SubCategories and Products*/}
                    <Route path="/gaming-pc/:subcategory/:product" element={<Suspense ><ConfigureCartGaming /></Suspense>} />
                    <Route path="/workstation/:subcategory/:product" element={<Suspense ><ConfigureCartWorkstation /></Suspense>} />

                    <Route element={<Suspense ><ProtectedRoute /></Suspense>} >
                        <Route path='/dashboard' element={<Suspense ><Dashboard /></Suspense>} />
                        <Route path='/cart' element={<Suspense ><CartProductDetails /></Suspense>} />
                        <Route path='checkout' element={<Suspense ><Checkout /></Suspense>} />
                        <Route path="/confirmCheckout/:billing/:shipping" element={<Suspense ><ConfirmCheckout /></Suspense>} />
                        <Route path="/wrongAddress" element={<Suspense ><WrongAddress /></Suspense>} />
                        <Route path="/my-orders/:userID" element={<Suspense ><MyOrders /></Suspense>} />
                    </Route>

                </Routes>

                <Footer />
            </Box>
        </Router>
    );
}

export default App;
