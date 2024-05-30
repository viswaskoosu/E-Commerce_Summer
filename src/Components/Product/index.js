import React from 'react';
import './Product.css';
import { useStateValue } from '../../Context/StateProvider';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { RemoveShoppingCart, ShoppingCart } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Product({ id, title, image, price, rating }) {
  const [{ basket, favouriteItems }, dispatch] = useStateValue();

  const addToBasket = () => {
    const isInBasket = basket.some(item => item.id === id);
    const isInFavourites = favouriteItems.some(item => item.id === id);

    if (isInFavourites) {
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        id: id,
      });
    }

    if (!isInBasket) {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
    }
  };

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  const addToFavourites = () => {
    const isInFavourites = favouriteItems.some(item => item.id === id);
    const isInBasket = basket.some(item => item.id === id);

    if (isInBasket) {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
    }

    if (!isInFavourites) {
      dispatch({
        type: 'ADD_TO_FAVOURITES',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        id: id,
      });
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product_link">
        <img src={image} alt={title} className="item-img"/>
        <div className="product_info">
          <p className="item-title">{truncateTitle(title, 50)}</p>
          <div className="product_rating item-rating">
            <Stack spacing={1}>
              <Rating name={`rating-${id}`} value={rating} precision={0.5} readOnly />
            </Stack>
          </div>
          <p className="product_price product-actual-price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          

        </div>
      </Link>
      <div className="product_actions">
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <p className="favouriteIcon" onClick={addToFavourites}>
            {favouriteItems.some(item => item.id === id) ? <AiFillHeart /> : <AiOutlineHeart />}
          </p>
          {basket.some(item => item.id === id) ? (
            <button onClick={removeFromBasket} className="add-cart-btn">
              <RemoveShoppingCart /> Remove from cart
            </button>
          ) : (
            <button onClick={addToBasket} className="add-cart-btn">
            <div className='btn_flex'>
            <div><ShoppingCart />
            </div>
            <div className='text_add'> Add to Cart</div>
            </div>
            </button>
          )}
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Product;
