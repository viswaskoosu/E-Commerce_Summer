import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import { StateProvider, useStateValue } from './Context/StateProvider';
import reducer, { initialState } from './reducer';
import Checkout from './Pages/Checkout';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import Footer from './Components/Footer';
import FavoritesPage from './Pages/FavouritePage';
import OrderHistory from './Pages/OrderHistory';
import ProductDetail from './Pages/ProductDetail';
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
