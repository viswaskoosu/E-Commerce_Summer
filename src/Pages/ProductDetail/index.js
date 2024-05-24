import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useStateValue } from '../../Context/StateProvider';
import { Products } from '../../data'; // Import your products data

function ProductDetail() {
  const { id } = useParams();
  const [{ basket, favouriteItems }, dispatch] = useStateValue();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(false);

  // Fetch the product based on the id from the URL
  useEffect(() => {
    const fetchedProduct = Products.find(product => product.id === id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setIsInBasket(basket.some(item => item.id === id));
      setIsInFavourites(favouriteItems.some(item => item.id === id));
    }
  }, [id, basket, favouriteItems]);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
        quantity: quantity,
      },
    });
    setIsInBasket(true);
  };

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
    setIsInBasket(false);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToFavourites = () => {
    dispatch({
      type: isInFavourites ? 'REMOVE_FROM_FAVOURITES' : 'ADD_TO_FAVOURITES',
      id: id,
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
    setIsInFavourites(!isInFavourites);
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="productDetail">
      <img src={product.image} alt={product.title} className="productDetail_image" />
      <div className='productDetailExceptImage'> 
      <div className="productDetail_info">
        <p className="productDetail_title">{product.title}</p>
        <div className="productDetail_rating">
          {Array(product.rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <p className="productDetail_price">
          <small>₹</small>
          <strong>{product.price}</strong>
        </p>
        <div className="productDetail_buttons">
          <button className="productDetail_favouriteButton" onClick={addToFavourites}>
            {isInFavourites ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <div className="productDetail_quantityControl">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          {isInBasket ? (
            <button className="productDetail_removeFromBasketButton" onClick={removeFromBasket}>
              Remove from Basket
            </button>
          ) : (
            <button className="productDetail_addToBasketButton" onClick={addToBasket}>
              Add to Basket
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductDetail;
