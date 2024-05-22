import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useStateValue } from './StateProvider';

function ProductDetail() {
  const { id } = useParams();
  const [{ basket, favouriteItems }, dispatch] = useStateValue();

  // Find the product from the basket if it exists
  const basketItem = basket.find(item => item.id === id);

  // Find the product from the favourites if it exists
  const isInFavourites = favouriteItems.some(item => item.id === id);

  // State for quantity
  const [quantity, setQuantity] = useState(basketItem ? basketItem.quantity : 1);

  // Function to add item to basket
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
        quantity: quantity,
      },
    });
  };

  // Function to remove item from basket
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Placeholder product object (replace with actual product from data or context)
  const product = {
    id: "12345",
    title: "Cement",
    price: 2344,
    rating: 5,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377873071/ZU/IQ/TK/118436259/ultratech-cement-500x500.jpg",
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="productDetail">
      <img src={product.image} alt={product.title} />
      <div className="productDetail_info">
        <p className="productDetail_title">{product.title}</p>
        <p className="productDetail_price">
          <small>₹</small>
          <strong>{product.price}</strong>
        </p>
        <div className="productDetail_rating">
          {Array(product.rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        {isInFavourites ? (
          <button className="productDetail_favouriteButton" disabled>
            Added to Favorites
          </button>
        ) : (
          <button
            className="productDetail_favouriteButton"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_FAVOURITES',
                item: {
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  rating: product.rating,
                },
              })
            }
          >
            Add to Favorites
          </button>
        )}
        <div className="productDetail_quantityControl">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        {basketItem ? (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        ) : (
          <button onClick={addToBasket}>Add to Basket</button>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
