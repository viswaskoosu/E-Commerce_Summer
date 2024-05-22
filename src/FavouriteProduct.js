// FavoriteProduct.js
import React from 'react';
import './FavouriteProduct.css';
import { useStateValue } from './StateProvider';

function FavoriteProduct({ id, title, image, price, rating }) {
  const [{ favouriteItems }, dispatch] = useStateValue();

  const removeFromFavourites = () => {
    dispatch({
      type: 'REMOVE_FROM_FAVOURITES',
      id: id,
    });
  };

  return (
    <div className='favoriteProduct'>
      <img className='favoriteProduct_image' src={image} alt='' />
      <div className='favoriteProduct_info'>
        <p className='favoriteProduct_title'>{title}</p>
        <p className='favoriteProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='favoriteProduct_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromFavourites}>Remove from Favourites</button>
      </div>
    </div>
  );
}

export default FavoriteProduct;
