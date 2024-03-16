import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider.jsx';
import Cart from '../sections/cart/cart.jsx';
import MidSection from "./midsection.jsx"
import DetailsComponent from './Details.jsx';
import FocusCart from '../sections/cart/focusCart.jsx';
import Quotes from './quotes.jsx';
import { useLocation } from 'react-router-dom';

const homeSection = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <ImageSlider />
            <Cart />
            <MidSection />
            <DetailsComponent />
            <FocusCart />
            <Quotes />
        </>
    )
}

export default homeSection