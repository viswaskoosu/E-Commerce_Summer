import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import { useStateValue } from "../../Context/StateProvider";
import { Products } from "../../data";
import Rating from "@mui/material/Rating";
import Header from "../../Components/Header";
import { Stack, Modal, Box } from "@mui/material";
import { postReq } from "../../getReq.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../../Components/LoadingPage";

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [{ user, favouriteItems, products, basket }, dispatch] =
    useStateValue();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedProduct = products.find(
      // (product) => product.id === parseInt(id)
      (product) => product.id === id
    );
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      const i = basket.find((obj) => obj.id === id);
      setQuantity(i ? i.quantity : 1);
      setIsInBasket(i ? true : false);
      setIsInFavourites(favouriteItems.some((item) => item === id));
    }
  }, [id, user, favouriteItems]);

  const addToBasket = () => {
    postReq(setIsLoading, `/user/addtobasket?product=${id}&quantity=${quantity}`)
    .then(() => {
      dispatch({
        type: "ADD_TO_BASKET",
        id: id,
        quantity: quantity
      });
      setIsInBasket(true)
    })
    .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) toast.error(error.response.data.error)
        else toast.error('Error contacting server')
    })
  };
  const goToBasket = () => {
    // dispatch({
    //   type: "REMOVE_FROM_BASKET",
    //   id: id
    // })
    // setIsInBasket(false)
    navigate("/checkout");
  };
  const increaseQuantity = () => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      id: id,
    });
      setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      id: id,
    });
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToFavourites = () => {
    // console.log(isInFavourites)
    dispatch({
      type: isInFavourites ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES",
      // id: product.id,
      // item: {
      //   ...product,
      // },
      item: product.id,
    });
    // console.log(isInFavourites, "hi")
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
    setOpen(true);
  };

  const sortReviewsByDate = () => {
    const sortedReviews = [...product.reviews].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setProduct({ ...product, reviews: sortedReviews });
  };

  const sortReviewsByHighestRated = () => {
    const sortedReviews = [...product.reviews].sort(
      (a, b) => b.rating - a.rating
    );
    setProduct({ ...product, reviews: sortedReviews });
  };

  const sortReviewsByLowestRated = () => {
    const sortedReviews = [...product.reviews].sort(
      (a, b) => a.rating - b.rating
    );
    setProduct({ ...product, reviews: sortedReviews });
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      {/* {isInFavourites.toString()} */}
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
              onClick={() => setOpen(true)}
            />
            <button className="imageNavButton" onClick={handleNextImage}>
              {">"}
            </button>
          </div>

          <div className="productDetail_info">
            <p className="productDetail_title">{product.title}</p>
            <p className="product_category">Category: {product.category}</p>
            <div className="rating">
              <Stack spacing={1}>
                <Rating
                  name={`rating-${id}`}
                  value={product.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <p className="rating-text">
                ({product.reviews ? product.reviews.length : 0})
              </p>
            </div>
            <p className="productDetail_price">
              <strong>Price: </strong>
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
                onClick={!isInBasket ? addToBasket : goToBasket}
              >
                {!isInBasket ? "Add to Basket" : "Go to Basket"}
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
          <div className="productDetail_buttons"></div>
        </div>
      </div>
      <div>
        <div className="reviews">
          <p className="reviews_title">Reviews:</p>
          <div className="review_sort">
            <button onClick={sortReviewsByDate}>Sort by Date</button>
            <button onClick={sortReviewsByHighestRated}>
              Sort by Highest Rated
            </button>
            <button onClick={sortReviewsByLowestRated}>
              Sort by Lowest Rated
            </button>
          </div>
          {product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong>{review.reviewer}</strong>
              </p>
              <div className="rating">
                <Rating
                  name={`rating-${id}-${index}`}
                  value={review.rating}
                  precision={0.5}
                  readOnly
                />
                <p>({review.rating})</p>
              </div>
              <p>{review.comment}</p>
              <p>Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Slider */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className="modalBox">
          <button className="imageNavButton" onClick={handlePrevImage}>
            {"<"}
          </button>
          <img
            src={product.images[currentImageIndex]}
            alt={product.title}
            className="modalImage"
          />
          <button className="imageNavButton" onClick={handleNextImage}>
            {">"}
          </button>
        </Box>
      </Modal>
    </>
  );
}

export default ProductDetail;
