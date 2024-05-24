import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import PaymentMethods from './Pages/PaymentMethods'; // Import the new page component
import Products from './data';
function App() {
  console.log('Window width: ' + window.innerWidth + 'px');
  const [, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: 'SET_PRODUCTS',
      products: Products,
    });
  }, [dispatch]);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            {/* Public Routes */}
            <Route path="/checkout" component={Checkout} />
            <Route path="/favourites" component={FavoritesPage} />
            <Route path="/orderhistory" component={OrderHistory} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route exact path="/" component={Home} />

            {/* Restricted Routes */}
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpassword" component={ForgotPassword} />

            {/* Protected Routes */}
            <Route path="/account" component={AccountPage} />
            <Route path="/contactinfo" component={ContactInfo} />
            <Route path="/paymentmethods" component={PaymentMethods} /> {/* Route for PaymentMethodsPage */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
