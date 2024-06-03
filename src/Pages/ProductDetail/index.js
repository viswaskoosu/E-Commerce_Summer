import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useStateValue } from '../../Context/StateProvider';
import { Products } from '../../data'; 
import Rating from '@mui/material/Rating';
import Header from '../../Components/Header';
import { Stack } from '@mui/material';

function ProductDetail() {
  const { id } = useParams();
  const [{ user, favouriteItems }, dispatch] = useStateValue();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchedProduct = Products.find(
      (product) => product.id === parseInt(id)
    );
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      const isInBasket = user && user.basket && user.basket.some(item => item.id === parseInt(id));
      setIsInBasket(isInBasket);
      setIsInFavourites(favouriteItems.some(item => item.id === parseInt(id)));
    }
  }, [id, user, favouriteItems]);
  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.images[0], // Use the first image as the product image in the basket
        price: product.price,
        rating: product.rating,
        quantity: quantity,
        mrp: product.mrp,
        reviews: product.reviews,
      },
    });
    setIsInBasket(true);
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
      type: isInFavourites ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES",
      id: product.id,
      item: {
        ...product,
      },
    });
    setIsInFavourites(!isInFavourites);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const sortReviewsByDate = () => {
    const sortedReviews = [...product.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    setProduct({ ...product, reviews: sortedReviews });
  };

  const sortReviewsByHighestRated = () => {
    const sortedReviews = [...product.reviews].sort((a, b) => b.rating - a.rating);
    setProduct({ ...product, reviews: sortedReviews });
  };

  const sortReviewsByLowestRated = () => {
    const sortedReviews = [...product.reviews].sort((a, b) => a.rating - b.rating);
    setProduct({ ...product, reviews: sortedReviews });
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Header />
      <div className="product_description">
        <div className="productDetail">
          <div className="imagePreviews">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index}`}
                className={`imagePreview ${
                  index === currentImageIndex ? "active" : ""
                }`}
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
              <Stack spacing={1}>
                <Rating name={`rating-${id}`} value={product.rating} precision={0.5} readOnly />
              </Stack>
              <p className="rating-text">{product.reviews ? product.reviews.length : 0}</p>
            </div>
            <p className="productDetail_price">
              <small>₹</small>
              <strong>{product.mrp}</strong>{" "}
              <strong
                style={{
                  textDecoration: "line-through",
                  color: "grey",
                  fontWeight: "normal",
                  marginLeft: "10px",
                  fontSize: "18px",
                }}
              >
                {product.price}
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
              <button
                className="productDetail_favouriteButton"
                onClick={addToFavourites}
              >
                {isInFavourites ? "Remove from Favorites" : "Add to Favorites"}
              </button>
              <div className="productDetail_quantityControl">
                <button onClick={decreaseQuantity}>-</button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {quantity}
                </span>
                <button onClick={increaseQuantity}>+</button>
              </div>
                <button
                  className="productDetail_addToBasketButton"
                  onClick={addToBasket}
                >
                  Add to Basket
                </button>
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
          <div className="productDetail_buttons">
          </div>
        </div>
      </div>
      <div>
        <div className="reviews">
          <p className="reviews_title">Reviews:</p>
          <div className="review_sort">
            <button onClick={sortReviewsByDate}>Sort by Date</button>
            <button onClick={sortReviewsByHighestRated}>Sort by Highest Rated</button>
            <button onClick={sortReviewsByLowestRated}>Sort by Lowest Rated</button>
          </div>
          {product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.reviewer}</strong></p>
              <div className="rating">
                <Rating name={`rating-${id}-${index}`} value={review.rating} precision={0.5} readOnly />
                <p>({review.rating})</p>
              </div>
              <p>{review.comment}</p>
              <p>Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
