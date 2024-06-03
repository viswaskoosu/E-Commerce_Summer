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
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
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
  );
}

export default Checkout;
