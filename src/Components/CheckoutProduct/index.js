// CheckoutProduct.js
import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../Context/StateProvider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket, favouriteItems }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      id: id,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      id: id,
    });
  };

  const toggleFavourite = () => {
    const isInBasket = basket.some(item => item.id === id);
    
    if (favouriteItems.some(item => item.id === id)) {
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        id: id,
      });
    } else {
      if (isInBasket) {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
        });
      }
      dispatch({
        type: 'ADD_TO_FAVOURITES',
        item: {
          id,
          title,
          image,
          price,
          rating,
        },
      });
    }
  };

  const basketItem = basket.find(item => item.id === id);

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt='' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className="checkoutProduct_quantityControl">
          <button onClick={decreaseQuantity}>-</button>
          <span>{basketItem?.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <div className="checkoutProduct_actions">
          <button className="checkoutProduct_removeButton" onClick={removeFromBasket}>Remove from Cart</button>
          <button className="checkoutProduct_favouriteButton" onClick={toggleFavourite}>
            {favouriteItems.some(item => item.id === id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
