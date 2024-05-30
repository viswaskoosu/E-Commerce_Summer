import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import CheckoutProduct from '../../Components/CheckoutProduct';
import Subtotal from '../../Components/Subtotal';
import './Checkout.css';
import { Link } from 'react-router-dom';
import image from './emptycart.png';

function Checkout() {
  const [{ basket }] = useStateValue();
  const uniqueItems = [...new Map(basket.map(item => [item.id, item])).values()];

  return (
    <div className='checkout'>
      <div className="checkout_left">
        
        {basket?.length === 0 ? (
          <div>
            <div className="empty-list">
            <img src={image} className="empty-img" alt='' />
            <div className="empty-text">
              <p className="empty-head">It's empty here!</p>
              <p className="empty-desc" >
                "Don't let your wishlist collect dust. Add some items that bring
                joy to your life and watch as they become a reality with just a
                few clicks."
              </p>
              <Link to="/">
                <button className="shopping">Go Shopping</button>
              </Link>
            </div>
          </div>
          </div>
        ) : (
          <div>
            <h2 className='checkout_title'>Your Cart</h2>
            {uniqueItems.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
      </div>
    </div>
  );
}

export default Checkout;
  