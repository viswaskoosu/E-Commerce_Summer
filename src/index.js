import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Context/StateProvider';
import reducer, { initialState } from './reducer'; // Ensure correct import
import { getReq } from './getReq';
import axios from 'axios'
import Products from './data'
// axios.get('http://localhost:4000/product/fetchproducts')
// axios.post('http://localhost:4000/product/uploaddummyproducts', {products: Products})
// Initialize localStorage for application state
const userLoggedIn = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token? true: false
console.log(userLoggedIn)
const savedBasket = !userLoggedIn && JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).basket? JSON.parse(localStorage.getItem('user')).basket : [];
const savedFavourites = !userLoggedIn && JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).favouriteItems ? JSON.parse(localStorage.getItem('user')).favouriteItems : [];
// const savedAddresses = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).addresses : [];
// const savedOrders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
// const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
console.log(savedBasket, savedFavourites)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={{ 
      // ...initialState,
      payments: [],
      basket: savedBasket,
      favouriteItems: savedFavourites,
      user: {
        // ...initialState.user,
        // addresses: savedAddresses,
        // ...user
        addresses: []
      },
      userLoggedIn: userLoggedIn,
      // orders: savedOrders,
      products: []
    }} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// Other code...