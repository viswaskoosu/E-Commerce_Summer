import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Context/StateProvider';
import reducer, { initialState } from './reducer'; // Ensure correct import
import { getReq } from './getReq';
// Initialize localStorage for application state
const savedBasket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
const savedFavourites = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).favouriteItems : [];
const savedAddresses = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).addresses : [];
const savedOrders = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).orders : [];
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
console.log(user)
// console.log(savedBasket,savedFavourites, savedAddresses, savedOrders)
if (localStorage.getItem('token') && !localStorage.getItem('user')){
  localStorage.removeItem('token')
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={{ 
      // ...initialState,
      basket: savedBasket,
      favouriteItems: savedFavourites,
      user: {
        ...initialState.user,
        addresses: savedAddresses,
        ...user
      },
      orders: savedOrders,
    }} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// Other code...
