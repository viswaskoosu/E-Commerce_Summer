import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { StateProvider, useStateValue } from "./Context/StateProvider";
import reducer, { initialState } from "./reducer";
import Checkout from "./Pages/Checkout";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import FavoritesPage from "./Pages/FavouritePage";
import OrderHistory from "./Pages/OrderHistory";
import ProductDetail from "./Pages/ProductDetail";
import AccountPage from "./Pages/Account";
import ContactInfo from "./Pages/ContactInfo";
import PaymentMethods from "./Pages/PaymentMethods";
import Products from "./data";
import LoginSecurity from "./Pages/LoginSecurity";
import Addresses from "./Pages/Addresses";
import Payment from "./Pages/Payment";
import Error from "./Pages/Error";
import ReactLoading from "react-loading";
import { ToastContainer } from "react-toastify";
function App() {
  // console.log('Window width: ' + window.innerWidth + 'px');
  const [, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Load products initially
    dispatch({
      type: "SET_PRODUCTS",
      products: Products,
    });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <div className="app">
          {/* <Header /> */}
          <div className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route exact path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/favourites" element={<FavoritesPage />} />
              <Route path="/orderhistory" element={<OrderHistory />} />
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Restricted Routes */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />

              {/* Protected Routes */}
              <Route path="/account" element={<AccountPage />} />
              <Route path="/contactinfo" element={<ContactInfo />} />
              <Route path="/paymentmethods" element={<PaymentMethods />} />
              <Route path="/loginSecurity" element={<LoginSecurity />} />
              <Route path="/payments" element={<Payment />} />
              <Route path="/addresses" element={<Addresses />} />

              <Route path="/error" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
  // </StateProvider>
}

export default App;
