import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import Product from "../../Components/Product";
import "./FavoritesPage.css";
import { Link } from "react-router-dom";
import image from "./empty.png";
import Header from "../../Components/Header";

const FavouritesPage = () => {
  const [{ favouriteItems, products }] = useStateValue();
  const reversedFavourites = favouriteItems
    ? [...favouriteItems].reverse()
    : [];
  // console.log(products);
  const truncateTitle = (title, maxLength) => {
    if (!title) return "";
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <>
      <Header />
      <div className="favoritesPage">
        <p className="wishlist-head">Your Favorites</p>
        {reversedFavourites.length === 0 ? (
          <div className="empty-list">
            <img src={image} className="empty-img" alt="" />
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
          <div className="favoritesPage_products">
            {reversedFavourites.map((item) => {
               const product = products.find((obj) => obj.id === item);
              {/* console.log(product); */}
              if (!product) {return null;}
               return (
                <div key={product.id} className="each_card">
                  <Product
                    id={product.id}
                    title={truncateTitle(product.title, 25)}
                    image={product.images[0]}
                    price={product.price}
                    rating={product.rating}
                    mrp={product.mrp}
                    category={product.category}
                    reviews={product.reviews}
                    className="favorites"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FavouritesPage;
