import React from 'react'
import ImageSlider from './ImageSlider.jsx';
import Cart from '../sections/cart/cart.jsx';
import MidSection from "./Midsection.jsx"
import DetailsComponent from './Details.jsx';
import FocusCart from '../sections/cart/focusCart.jsx';
import Quotes from './Quotes.jsx';

const homeSection = () => {
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