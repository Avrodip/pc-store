// App.jsx
import React from 'react';
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import MidSection from "./layout/midsection.jsx"
import Navbar from "./layout/Navbar.jsx"
import MainRoutes from './routes/MainRoutes.jsx';
import Cart from './sections/cart/cart.jsx';
import DetailsComponent from './layout/details.jsx';
import Quotes from './layout/quotes.jsx';
import FocusCart from './sections/cart/focusCart.jsx';
import ImageSlider from './layout/ImageSlider.jsx';
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import Footer from './layout/footer.jsx';
import Register from './sections/auth/register.jsx';
import LoginAuth from './sections/auth/loginAuth.jsx';
import { Box } from '@mui/material';
import DorylusPage from './sections/subsection/gaming/dorylusPage.jsx';

function App() {

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: (
    //             <>
    //                 <Navbar />
    //                 {/* <ImageSlider /> */}
    //                 {/* <Cart /> */}
    //                 <DetailsComponent />
    //                 <FocusCart />
    //             </>
    //         ),
    //         children: [
    //             {
    //                 path: "/register",
    //                 element: <Register />,
    //             },
    //             {
    //                 path: "login",
    //                 element: <LoginAuth />,
    //             },
    //         ],



    //     },
    // ]);

    return (
        <>
        
        {/* <Navbar/> */}
        <DorylusPage/>
        </>
        // <RouterProvider router={router} />
    );
}

export default App;
