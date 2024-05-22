import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }] = useStateValue();
  const uniqueItems = [...new Map(basket.map(item => [item.id, item])).values()];

  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img
          className='checkout_ad'
          src="https://cdn-media.buildersmart.in/media/bannerslider/bannerslider/Buy_Online_Save_Money_..jpg"
          alt=''
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Cart is empty</h2>
            <p>You have no items in your cart. Try adding some products from our collection.</p>
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
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
