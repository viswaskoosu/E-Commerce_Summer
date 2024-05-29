// FavoritesPage.js
import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import Product from '../../Components/Product';
import './FavouritePage.css';

function FavouritesPage() {
  const [{ favouriteItems }] = useStateValue();

  // Reverse the favouriteItems array to display latest items first
  const reversedFavourites = [...favouriteItems].reverse();

  return (
    <div className='favoritesPage'>
      <h1>Your Favorites</h1>
      {reversedFavourites.length === 0 ? (
        <div className='favoritesPage_empty'>
          <h2>No favorite items yet</h2>
        </div>
      ) : (
        <div className='favoritesPage_products'>
          {reversedFavourites.map(item => (
            <Product
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

export default FavouritesPage;
