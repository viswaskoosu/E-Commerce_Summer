<<<<<<< HEAD
import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import Product from '../../Components/Product';
import './FavoritesPage.css';
import { Link } from 'react-router-dom';
import image from './empty.png';
=======
// FavoritesPage.js
import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import Product from "../../Components/Product";
import "./FavouritePage.css";
import Header from "../../Components/Header";
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2

function FavouritesPage() {
  const [{ favouriteItems }] = useStateValue();
  const reversedFavourites = favouriteItems ? [...favouriteItems].reverse() : [];
  const truncateTitle = (title, maxLength) => {
    if (!title) return ''; // Handle case where title is undefined or null
  
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };
  return (
<<<<<<< HEAD
    <div className='favoritesPage'>
      <p className="wishlist-head">Your Favorites</p>
      {reversedFavourites.length === 0 ? (
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
        <div className='favoritesPage_products'>
          {reversedFavourites.map(item => (
            <div key={item.id} className="each_card">
              <Product
                id={item.id}
                title={truncateTitle(item.title,25)}
                image={item.image}
                price={item.price}
                rating={item.rating}
                mrp={item.mrp}
                category={item.category}
                reviews={item.reviews}
                className="favorites"
              />
            </div>
          ))}
        </div>
      )}
    </div>
=======
    <>
      <Header />
      <div className="favoritesPage">
        <h1>Your Favorites</h1>
        {reversedFavourites.length === 0 ? (
          <div className="favoritesPage_empty">
            <h2>No favorite items yet</h2>
          </div>
        ) : (
          <div className="favoritesPage_products">
            {reversedFavourites.map((item) => (
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
    </>
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2
  );
}

export default FavouritesPage;
