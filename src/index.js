import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Context/StateProvider';
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
      <App />
    </StateProvider>
  </React.StrictMode>
);

// Other code...
