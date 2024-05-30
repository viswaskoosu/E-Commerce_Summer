// FavoritesPage.js
import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import Product from '../../Components/Product';
import './FavoritesPage.css';
import { Link } from 'react-router-dom';
import image from './empty.png';

function FavoritesPage() {
  const [{ favouriteItems }] = useStateValue();
  const reversedFavourites = favouriteItems ? [...favouriteItems].reverse() : [];
  
  return (
    <div className='favoritesPage'>
      <div className='lists animate'>
        <p className="wishlist-head">Your Favorites</p>
        {reversedFavourites.length === 0 ? (
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
        ) : (
          <div className='favoritesPage_products'>
            {reversedFavourites.map(item => (
              <Product
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                mrp={item.mrp}
                category={item.category}
                reviews={item.reviews} // Ensure reviews is passed correctly
              />

            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;