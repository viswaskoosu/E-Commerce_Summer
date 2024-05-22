import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import { StateProvider, useStateValue } from './StateProvider';
import reducer, { initialState } from './reducer';
import Checkout from './Checkout';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Footer from './Footer';
import FavoritesPage from './FavouritePage';
import OrderHistory from './OrderHistory';
import ProductDetail from './ProductDetail';
import { Products } from './data';

function App() {
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
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route path="/favourites">
              <Header />
              <FavoritesPage />
              <Footer />
            </Route>
            <Route path="/orderhistory">
              <Header />
              <OrderHistory />
              <Footer />
            </Route>
            <Route path="/product/:id">
              <Header />
              <ProductDetail />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
