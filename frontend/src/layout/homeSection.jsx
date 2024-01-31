import React from 'react'
import ImageSlider from '../layout/ImageSlider.jsx';
import Cart from '../sections/cart/cart.jsx';
import MidSection from "../layout/midsection.jsx"
import DetailsComponent from '../layout/details.jsx';
import FocusCart from '../sections/cart/focusCart.jsx';
import Quotes from '../layout/quotes.jsx';

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