import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../Context/StateProvider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating, Stack } from '@mui/material';

function CheckoutProduct({ id, title, image, price, rating, reviews }) {
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
    const isFavourite = favouriteItems.some(item => item.id === id);

    if (isFavourite) {
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
        <div className="rating">
          <Stack spacing={1}>
            <Rating name={`rating-${id}`} value={rating} precision={0.5} readOnly />
          </Stack>
          <p className="rating-text">{reviews ? reviews.length : 0}</p>
        </div>
        <div className="checkoutProduct_quantityControl">
          <button onClick={decreaseQuantity}>-</button>
          <span>{basketItem?.quantity}</span> {/* Safely access quantity */}
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
