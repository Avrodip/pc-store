// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Midsection from './sections/midsection.jsx';
import Navbar from './sections/navbar.jsx';
import MainRoutes from './routes/MainRoutes.jsx';
import Cart from './sections/cart/cart.jsx';
import DetailsComponent from './sections/details.jsx';
import Quotes from './sections/quotes.jsx';
import FocusCart from './sections/cart/focusCart.jsx';
import ImageSlider from './sections/ImageSlider.jsx';
import WorkStationCart from './sections/cart/workStationCart/index.jsx';
import Footer from './sections/footer.js';
import Register from './sections/auth/register.jsx';

function App() {
    return (
        <Router>
            <div className="App" style={{ backgroundColor: 'black', color: 'white' }}>
                <Navbar />
                {/* <ImageSlider /> */}
                {/* <Cart />
        <Midsection />
        <DetailsComponent />
        <FocusCart />
        <Quotes /> */}
                <WorkStationCart />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
