import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar.jsx"
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import Footer from './layout/footer.jsx';
import Register from './sections/auth/register.jsx';
import LoginAuth from './sections/auth/loginAuth.jsx';
import { Box } from '@mui/material';
import HomeSection from './layout/homeSection.jsx';
import DorylusPage from './sections/subsection/gaming/dorylusPage.jsx';

function App() {

    return (
        <Router>
            {/* <div className="App" style={{ backgroundColor: 'black', color: 'white' }}> */}
            {/* <Register /> */}
            {/* <Navbar />
                <ImageSlider /> */}
            {/* <Cart />
                <Midsection />
                <DetailsComponent />
                <FocusCart />
                <Quotes /> */}
            {/* <WorkStationCart /> */}
            {/* <Footer /> */}
            {/* </div> */}

            <Box sx={{ background: "black", color: "white" }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<WorkStationCart />}>

                    </Route>

                    <Route path='/login' element={<LoginAuth />} />
                    <Route path='/register' element={<Register />} />

                </Routes>

                <Footer />
            </Box>

        </Router>

        // <RouterProvider router={router} />
    );
}

export default App;
