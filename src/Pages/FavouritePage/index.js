// FavoritesPage.js
import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import FavoriteProduct from '../../Components/FavouriteProduct';
import './FavouritePage.css';

function FavoritesPage() {
  const [{ favouriteItems }] = useStateValue();

  return (
    <div className='favoritesPage'>
      <h1>Your Favourites</h1>
      {favouriteItems.length === 0 ? (
        <div>
          <h2>No favourite items</h2>
        </div>
      ) : (
        <div className='favoritesPage_products'>
          {favouriteItems.map(item => (
            <FavoriteProduct
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
  );
}

export default FavoritesPage;
