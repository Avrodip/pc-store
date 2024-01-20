// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Midsection from './components/midsection.jsx'; 
import Navbar from './sections/navbar.jsx';
import MainRoutes from './routes/MainRoutes.jsx';
import Cart from './sections/cart/cart.jsx';
import DetailsComponent from './components/details.jsx';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: 'black', color: 'white' }}>
        <Navbar />
        
        <div>
          <Cart />
          <br/>
        </div>

        <div>
          <Midsection/>
        </div>
        
        <DetailsComponent/>
      </div>
    </Router>
  );
}

export default App;
