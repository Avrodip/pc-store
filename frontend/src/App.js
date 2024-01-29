import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar.jsx"
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import Footer from './layout/footer.jsx';
import Register from './sections/auth/register.jsx';
import LoginAuth from './sections/auth/loginAuth.jsx';
import { Box } from '@mui/material';
import HomeSection from './layout/homeSection.jsx';

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

                </Routes>
                <Footer />
            </Box>

        </Router>
    );
}

export default App;
