import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Context/StateProvider';
<<<<<<< HEAD
import reducer, { initialState } from './reducer';
// console.log(process.env.REACT_APP_API_URL)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
=======
import reducer, { initialState } from './reducer'; // Ensure correct import

// Initialize localStorage for application state
const savedBasket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
const savedFavourites = localStorage.getItem('favouriteItems') ? JSON.parse(localStorage.getItem('favouriteItems')) : [];
const savedAddresses = localStorage.getItem('addresses') ? JSON.parse(localStorage.getItem('addresses')) : [];
const savedOrders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={{ 
      ...initialState,
      basket: savedBasket,
      favouriteItems: savedFavourites,
      user: {
        ...initialState.user,
        addresses: savedAddresses,
      },
      orders: savedOrders,
    }} reducer={reducer}>
>>>>>>> 7421957f8ff9f85dda530c1b6a0671f667f1bf3b
      <App />
    </StateProvider>
  </>
  /* <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode> */
);

// Other code...
