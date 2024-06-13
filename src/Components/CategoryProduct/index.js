import React, { useEffect, useState } from 'react';
import './CategoryProduct.css'; 
import { Rating, Stack } from '@mui/material';
import { useStateValue } from '../../Context/StateProvider';
import { useNavigate } from 'react-router-dom';

const CategoryProduct = ({ id, title, image, price, rating, mrp, reviews }) => {
  const discount = Math.round(((mrp - price) / mrp) * 100);
  const [{ user, favouriteItems, products, basket }, dispatch] = useStateValue();
  const [isInBasket, setIsInBasket] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isInFavourites, setIsInFavourites] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedProduct = products.find((product) => product.id === id);
    if (fetchedProduct) {
      const basketItem = basket.find(obj => obj.id === id);
      setQuantity(basketItem ? basketItem.quantity : 1);
      setIsInBasket(!!basketItem);
      setIsInFavourites(favouriteItems.some(item => item === id));
    }
  }, [id, user, favouriteItems, basket, products]);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      id: id,
      quantity: 1
    });
    setIsInBasket(true);
  };

  const goToBasket = () => {
    navigate('/checkout');
  };

  const addToFavourites = () => {
    if (!isInFavourites) {
      dispatch({
        type: 'ADD_TO_FAVOURITES',
        id: id
      });
    } else {
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        id: id,
      });
    }
    setIsInFavourites(!isInFavourites);
  };

  return (
    <div className='category-product'>
      <a href={`/product/${id}`}><img className='product-image' src={image} alt={title} /></a>
      <div className='product-info'>
        <a href={`/product/${id}`}><p className='product-title'>{title}</p></a>
        <p className='product-price'>
          <span className='price-symbol'>₹</span>
          <span className='price'>{price}</span>
          <br />
          <span className='mrp1'>M.R.P: </span>
          <span className='mrp2'>₹{mrp}</span>
          <span className='discount'>({discount}% off)</span>
        </p>
        <div className="rating">
          <Stack spacing={1}>
            <Rating name={`rating-${id}`} value={rating} precision={0.5} readOnly />
          </Stack>
          <p className="rating-text">({rating}) Rated by {reviews.length}</p>
        </div>
        <div>
          <button className="category-button" onClick={addToFavourites}>
            {isInFavourites ? 'Remove From Favourites' : 'Add to Favourites'}
          </button>
          <button className="category-button" onClick={!isInBasket ? addToBasket : goToBasket}>
            {!isInBasket ? "Add to Basket" : "Go to Basket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
