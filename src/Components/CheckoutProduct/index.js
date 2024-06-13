import React, { useEffect, useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../Context/StateProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating, Stack } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for client-side routing
import { putReq, displayError } from "../../getReq";
import { ErrorRounded } from "@mui/icons-material";
import LoadingPage from "../LoadingPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CheckoutProduct({ id, title, image, price, rating, reviews }) {
  const [{ basket, favouriteItems }, dispatch] = useStateValue();
  // console.log(id)
  const [isLoading, setIsLoading] = useState(false);
  const index = basket.findIndex((obj) => obj.id === id);

  useEffect(() => {
    if (basket[index].id !== id) return;
    putReq(
      setIsLoading,
      `/user/editbasket?product=${id}&quantity=${basket[index].quantity}`
    ).catch((error) => {
      displayError(error);
    });
  }, []);

  const removeFromBasket = () => {
    putReq(setIsLoading, `/user/editbasket?product=${id}&quantity=${0}`)
      .then(() => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const increaseQuantity = () => {
    putReq(
      setIsLoading,
      `/user/editbasket?product=${id}&quantity=${basket[index].quantity + 1}`
    )
      .then(() => {
        dispatch({
          type: "INCREASE_QUANTITY",
          id: id,
        });
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const decreaseQuantity = () => {
    putReq(
      setIsLoading,
      `/user/editbasket?product=${id}&quantity=${basket[index].quantity - 1}`
    )
      .then(() => {
        dispatch({
          type: "DECREASE_QUANTITY",
          id: id,
        });
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const toggleFavourite = () => {
    const isInBasket = basket.some((item) => item.id === id);
    const isFavourite = favouriteItems.some((item) => item === id);

    if (isFavourite) {
      putReq(setIsLoading, `/user/editfavourites?request=remove&product=${id}`)
        .then(() => {
          dispatch({
            type: "REMOVE_FROM_FAVOURITES",
            id: id,
          });
        })
        .catch((error) => {
          displayError(error);
        });
    } else {
      // let removedFromBasket = isInBasket ? false : true;
      if (isInBasket) {
        putReq(setIsLoading, `/user/editbasket?product=${id}&quantity=${0}`)
          .then(() => {
            dispatch({
              type: "REMOVE_FROM_BASKET",
              id: id,
            });
            putReq(
              setIsLoading,
              `/user/editfavourites?request=add&product=${id}`
            )
              .then(() => {
                dispatch({
                  type: "ADD_TO_FAVOURITES",
                  id: id,
                });
              })
              .catch((error) => {
                displayError(error);
              });
          })
          .catch((error) => {
            displayError(error);
          });
      }
    }
  };

  const basketItem = basket.find((item) => item.id === id);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className="checkoutProduct">
      <Link to={`/product/${id}`} className="checkoutProduct_link">
        <img className="checkoutProduct_image" src={image} alt="" />
      </Link>
      <div className="checkoutProduct_info">
        <Link to={`/product/${id}`} className="checkoutProduct_link">
          <p className="checkoutProduct_title">{title}</p>
        </Link>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          <Stack spacing={1}>
            <Rating
              name={`rating-${id}`}
              value={rating}
              precision={0.5}
              readOnly
            />
          </Stack>
          <p className="rating-text">({rating})</p>
        </div>
        <div className="checkoutProduct_quantityControl">
          <button onClick={decreaseQuantity}>-</button>
          <span>{basketItem?.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <div className="checkoutProduct_actions">
          <button
            className="checkoutProduct_removeButton"
            onClick={removeFromBasket}
          >
            Remove from Cart
          </button>
          <button
            className="checkoutProduct_favouriteButton"
            onClick={toggleFavourite}
          >
            {favouriteItems.some((item) => item === id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
