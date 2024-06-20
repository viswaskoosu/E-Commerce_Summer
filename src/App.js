import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { StateProvider, useStateValue } from './Context/StateProvider';
import reducer, { initialState } from './reducer';
import Checkout from './Pages/Checkout';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import FavoritesPage from './Pages/FavouritePage';
import OrderHistory from './Pages/OrderHistory';
import ProductDetail from './Pages/ProductDetail';
import AccountPage from './Pages/Account';
import ContactInfo from './Pages/ContactInfo';
import PaymentMethods from './Components/PaymentMethods';
import Products from './data';
import LoginSecurity from './Pages/LoginSecurity';
import Addresses from './Pages/Addresses';
import Payment from './Pages/Payment';
import Error from './Pages/Error';
import { ToastContainer } from 'react-toastify';
import CategoryPage from './Pages/CategoryPage';
import LoadingPage from './Components/LoadingPage';
import axios from 'axios';
import NewCardForm from './Components/PaymentMethods/NewCardForm';
import SearchResults from './Pages/SearchResults';

console.log(window.innerWidth);

function App() {
  const [, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/error") {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/product/fetchproducts`)
      .then((response) => {
        dispatch({
          type: "SET_PRODUCTS",
          products: response.data,
        });
      })
      .catch(() => {
        window.location.replace("/error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <div className="main-content">
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/favourites" element={<FavoritesPage />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/categories/:id" element={<CategoryPage />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/contactinfo" element={<ContactInfo />} />
            <Route path="/paymentmethods" element={<Payment />} />
            <Route path="/loginSecurity" element={<LoginSecurity />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/addresses" element={<Addresses />} />
        <Route path="/search-results/:query" element={<SearchResults />} /> {/* New Route for SearchResults */}

            {/* <Route path="/new-card-form" element={<Elements stripe={stripePromise}><NewCardForm /></Elements>} /> */}
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
