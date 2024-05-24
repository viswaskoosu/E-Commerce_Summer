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
    if (favouriteItems.some(item => item.id === id)) {
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        id: id,
      });
    } else {
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

  // Find the item in the basket
  const basketItem = basket.find(item => item.id === id);

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt='' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>$</small>
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
          <button onClick={removeFromBasket}>Remove from Cart</button>
          <button onClick={toggleFavourite}>
            {favouriteItems.some(item => item.id === id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
