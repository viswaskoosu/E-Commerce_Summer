import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../../Context/StateProvider";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { putReq, displayError } from "../../getReq";
import LoadingPage from "../LoadingPage";

function Product({ id, title, image, price, rating, category, mrp }) {
  const [{ favouriteItems, userLoggedIn }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const addToFavourites = () => {
    const isInFavourites = favouriteItems.some((item) => item === id);
    if (!userLoggedIn) {
      dispatch({
        type: isInFavourites ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES",
        id: id,
      });
      return;
    }
    putReq(
      setIsLoading,
      `/user/editfavourites?request=${
        isInFavourites ? "remove" : "add"
      }&product=${id}`
    )
      .then(() => {
        dispatch({
          type: isInFavourites ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES",
          id: id,
        });
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const truncateTitle = (title, maxLength) => {
    if (!title) return "";
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

  const discountPercentage = Math.round(((mrp - price) * 100) / mrp);

  return (
    <div className="card">
      <div className="card-img-data">
        {isLoading ? (
          <div className="card-img">
            <LoadingPage />
          </div>
        ) : (
          <div className="img_space"><img src={image} alt={title} className="card-img" /></div>
        )}
        {discountPercentage > 0 && (
          <p className="price-off">({discountPercentage}% OFF)</p>
        )}

        <IconContext.Provider value={{ size: "1.5rem" }}>
          <p className="add-list" onClick={addToFavourites}>
            {favouriteItems.some((item) => item === id) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </p>
        </IconContext.Provider>
      </div>
      <a href={`/product/${id}`} className="product_link">
          <button className="view">View product</button>
        </a>
      <div className="card-data">
        <p className="card-title">{truncateTitle(title, 50)}</p>
        <p className="card-category">{category}</p>
        <div className="rating">
          <Stack spacing={1}>
            <Rating name={`rating-${id}`} value={rating} precision={0.5} readOnly />
          </Stack>
          <p className="rating-text">({rating})</p>
        </div>
        <div className="card-price">
          <p className="discount">₹{price}</p>
          <p className="mrp">₹{mrp}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
