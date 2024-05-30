import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useStateValue } from '../../Context/StateProvider';
import { Products } from '../../data'; // Import your products data
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductDetail() {
  const { id } = useParams();
  const [{ basket, favouriteItems }, dispatch] = useStateValue();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for managing current image index

  // Fetch the product based on the id from the URL
  useEffect(() => {
    const fetchedProduct = Products.find(product => product.id === parseInt(id));
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setIsInBasket(basket.some(item => item.id === parseInt(id)));
      setIsInFavourites(favouriteItems.some(item => item.id === parseInt(id)));
    }
  }, [id, basket, favouriteItems]);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        image: product.images[0], // Use the first image as the product image in the basket
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
      id: product.id,
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
      id: product.id,
      item: {
        ...product,
      },
    });
    setIsInFavourites(!isInFavourites);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length);
  };

  const handleImageClick = index => {
    setCurrentImageIndex(index);
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
      <div className='product_description'>
      <div className="productDetail">
      <div className="imagePreviews">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Preview ${index}`}
            className={`imagePreview ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="productDetail_imageContainer">
        <button className="imageNavButton" onClick={handlePrevImage}>
          {"<"}
        </button>
        <img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="productDetail_image"
        />
        <button className="imageNavButton" onClick={handleNextImage}>
          {">"}
        </button>
      </div>

      <div className="productDetail_info">
  <p className="productDetail_title">{product.title}</p>
  <div className="rating">
    <div className="product_rating item-rating">
      <Stack spacing={1}>
        <Rating name={`rating-${id}`} value={product.rating} precision={0.5} readOnly />
      </Stack>
    </div>
    <p>({product.rating})</p>
  </div>
  <p className="productDetail_price">
  Price: 
  <small>₹</small>
  <strong>{product.price}</strong>{" "}
  <strong className="productDetail_mrp">
    <span style={{ textDecoration: "line-through", color: "grey" }}>₹{product.mrp}</span>
  </strong>
</p>

        
        <div className="specifications">
          <p className="specifications_title">Specifications:</p>
          <ul>
            {Object.keys(product.specifications).map((key, index) => (
              <li key={index}>
                <strong>{key}:</strong> {product.specifications[key]}
              </li>
            ))}
          </ul>
        </div>
        <div className="productDetail_buttons">
          <button className="productDetail_favouriteButton" onClick={addToFavourites}>
            {isInFavourites ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <div className="productDetail_quantityControl">
            <button onClick={decreaseQuantity}>-</button>
            <span style={{ marginLeft: "15px", marginRight: "15px", fontWeight: "bold" }}>
              {quantity}
            </span>
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
      <div>
      <p className="productDetail_description">{product.description}</p>
        <div className="keyFeatures">
          <p className="keyFeatures_title">Key Features:</p>
          <ul>
            {product.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
