<<<<<<< HEAD
import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import CheckoutProduct from '../../Components/CheckoutProduct';
import Subtotal from '../../Components/Subtotal';
import './Checkout.css'; // Ensure your CSS file is imported for styling
import { Link } from 'react-router-dom';
import image from './emptycart.png'; // Assuming this is your empty cart image

function Checkout() {
  const [{ user }] = useStateValue();
  const { basket } = user;
  
  // Filter unique items based on item.id to avoid duplicates
  const uniqueItems = [...new Map(user.basket.map(item => [item.id, item])).values()];

  return (
    <div className='checkout'>
      <div className="checkout_left">
        {/* Conditionally render based on user.basket length */}
        {user.basket?.length === 0 ? (
          <div className="empty-list">
            <img src={image} className="empty-img" alt='' />
            <div className="empty-text">
              <p className="empty-head">It's empty here!</p>
              <p className="empty-desc">
                "Don't let your wishlist collect dust. Add some items that bring
                joy to your life and watch as they become a reality with just a
                few clicks."
              </p>
              <Link to="/">
                <button className="shopping">Go Shopping</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 className='checkout_title'>Your Cart</h2>
            {/* Map through uniqueItems array and render CheckoutProduct component */}
            {uniqueItems.map((item) => (
              <CheckoutProduct
=======
import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProduct";
import Subtotal from "../../Components/Subtotal";
import "./Checkout.css";
import Header from "../../Components/Header";
function Checkout() {
  const [{ basket }] = useStateValue();
  const uniqueItems = [
    ...new Map(basket.map((item) => [item.id, item])).values(),
  ];

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://cdn-media.buildersmart.in/media/bannerslider/bannerslider/Buy_Online_Save_Money_..jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Cart is empty</h2>
              <p>
                You have no items in your cart. Try adding some products from
                our collection.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Your Cart</h2>
              {uniqueItems.map((item) => (
                <CheckoutProduct
                  key={item.id}
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
<<<<<<< HEAD
                  mrp={item.mrp} // Pass each additional property individually
                  category={item.category}
                  reviews={item.reviews}
              />
            ))}
          </div>
        )}
      </div>
      {/* Render Subtotal component only if user.basket is not empty */}
      {user.basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
=======
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2
  );
}

export default Checkout;
