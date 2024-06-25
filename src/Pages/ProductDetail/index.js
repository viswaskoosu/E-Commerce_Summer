import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import { useStateValue } from "../../Context/StateProvider";
import { putReq, displayError } from "../../getReq.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../../Components/LoadingPage";
import Rating from "@mui/material/Rating";
import Header from "../../Components/Header";
import { Modal, Box } from "@mui/material";
import {getReq, postReq} from '../../getReq'
import axios from 'axios'

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [{ user, favouriteItems, products, basket, userLoggedIn }, dispatch] = useStateValue();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([])
  const [reviewState, setReviewState] = useState({
    userReview: null,
    hasUserReviewed: false,
    reviewRating: 5,
    reviewComment: "",
    isWritingReview: false,
  });
  const { userReview, hasUserReviewed, reviewRating, reviewComment, isWritingReview } = reviewState;

  useEffect(() => {
    const fetchedProduct = products.find(product => product.id === id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      const i = basket.find(obj => obj.id === id);
      setIsInBasket(i ? true : false);
      setIsInFavourites(favouriteItems.some(item => item === id));
      // const userReview = fetchedProduct.reviews.find(review => review.reviewer === user.id);
      // // console.log(fetchedProduct.reviews)
      // if (userReview) {
      //   setReviewState({
      //     ...reviewState,
      //     userReview: userReview,
      //     hasUserReviewed: true,
      //     reviewRating: userReview.rating,
      //     reviewComment: userReview.comment,
      //   });
      // } else {
      //   setReviewState({
      //     ...reviewState,
      //     userReview: null,
      //     hasUserReviewed: false,
      //     reviewRating: 5,
      //     reviewComment: "",
      //   });
      // }
    }
  }, [id, user, favouriteItems, products, basket]);
  useEffect(() => {
    if (userLoggedIn){
      getReq(setIsLoading, `/product/fetchreviews?product=${id}`)
      .then((responseData) => {
        setReviews(responseData.reviews)
        if (responseData.userReview) {
            setReviewState({
              ...reviewState,
              userReview: responseData.userReview,
              hasUserReviewed: true,
              reviewRating: responseData.userReview.rating,
              reviewComment: responseData.userReview.comment,
            });
          } else {
            setReviewState({
              ...reviewState,
              userReview: null,
              hasUserReviewed: false,
              reviewRating: 5,
              reviewComment: "",
            });
          }
      })
      .catch(() => {
        toast.error('Error in server')
      })
    }else{
      setIsLoading(true)
      axios.get(`${process.env.REACT_APP_API_URL}/product/fetchreviews?product=${id}`)
      .then((response) => {
        console.log(response.data)
        setReviews(response.data.reviews)
      })
      .catch(() => {
        toast.error('Error in server')
      })
      .finally(() => {
        setIsLoading(false)
      })
    }
  }, [userLoggedIn, product])
  const addToBasket = () => {
    if (!userLoggedIn) {
      dispatch({
        type: "ADD_TO_BASKET",
        id: id,
        quantity: quantity
      });
      setIsInBasket(true);
      return;
    }
    putReq(setIsLoading, `/user/editbasket?product=${id}&quantity=${quantity}`)
      .then(() => {
        dispatch({
          type: "ADD_TO_BASKET",
          id: id,
          quantity: quantity
        });
        setIsInBasket(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('Error contacting server');
        }
      });
  };

  const goToBasket = () => {
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
    if (!userLoggedIn) {
      dispatch({
        type: isInFavourites ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES",
        id: product.id
      });
      setIsInFavourites(!isInFavourites);
      return;
    }
    putReq(
      setIsLoading,
      `/user/editfavourites?request=${isInFavourites ? "remove" : "add"}&product=${id}`
    )
      .then(() => {
        dispatch({
          type: isInFavourites ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES",
          id: product.id
        });
        setIsInFavourites(!isInFavourites);
      })
      .catch((error) => {
        displayError(error);
      });
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
    const sortedReviews = [...reviews].sort((a, b) => {
      // if (a.reviewer === user.id) return -1; // User's review always comes first
      // if (b.reviewer === user.id) return 1;
      return new Date(b.date) - new Date(a.date);
    });
    // setProduct({ ...product, reviews: sortedReviews });
    setReviews(sortedReviews)

  };

  const sortReviewsByHighestRated = () => {
    const sortedReviews = [...reviews].sort((a, b) => {
      // if (a.reviewer === user.id) return -1; // User's review always comes first
      // if (b.reviewer === user.id) return 1;
      return b.rating - a.rating;
    });

    setReviews(sortedReviews)
    // setProduct({ ...product, reviews: sortedReviews });
  };

  const sortReviewsByLowestRated = () => {
    const sortedReviews = [...reviews].sort((a, b) => {
      // if (a.reviewer === user.id) return -1; // User's review always comes first
      // if (b.reviewer === user.id) return 1;
      return a.rating - b.rating;
    });
    console.log(sortedReviews)
    setReviews(sortedReviews)
    // setProduct({ ...product, reviews: sortedReviews });
  };

  const submitReview = () => {
    const newReview = {
      // id: Math.random().toString(36).substr(2, 9),
      rating: reviewRating,
      comment: reviewComment,
      date: new Date().toISOString(), 
      // reviewer: userId,
      reviewer: user.displayName
    };
    if (hasUserReviewed) {
      // console.log(reviews)
      const updatedReviews = reviews.map((review) =>
        review.id === userReview.id ? newReview : review
      );
      postReq(setIsLoading, '/review/editreview?request=EDIT', {...newReview, id: userReview.id, product:id})
      .then((responseData) => {
        setReviews(updatedReviews)
        setReviewState({
          ...reviewState,
          userReview: {...userReview, ...newReview, date: responseData.date},
          hasUserReviewed: true,
          isWritingReview: false,
        });
      })
      .catch((e) => {
        setReviewState({
          ...reviewState,
          isWritingReview: false,
        });
        displayError(e)
      })
      // setReviews(updatedReviews)
      // setProduct({ ...product, reviews: updatedReviews }); 

    } else {
      postReq(setIsLoading, '/review/editreview?request=ADD', {...newReview, product:id})
      .then(() => {
        setReviews([...reviews, newReview])
        toast.success('Added review')
        setReviewState({
          ...reviewState,
          userReview: newReview,
          hasUserReviewed: true,
          isWritingReview: false,
        });
      })
      .catch((e) => {
        setReviewState({
          ...reviewState,
          isWritingReview: false,
        });
        displayError(e)
      })
      // setReviews([...reviews, newReview])
      // const updatedReviews = [newReview, ...product.reviews];
      // setProduct({ ...product, reviews: updatedReviews }); 
      // setReviewState({
      //   ...reviewState,
      //   hasUserReviewed: true,
      //   userReview: newReview,
      // });
    }
    
  
    // console.log(product.reviews); 
  };
  
console.log(reviews)
  const handleEditReview = (review) => {
    setReviewState({
      ...reviewState,
      reviewRating: review.rating,
      reviewComment: review.comment,
      isWritingReview: true,
    });
  };

  const handleDeleteReview = (reviewToDelete) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      const updatedReviews = reviews.filter(
        (review) => review.id !== reviewToDelete.id
      );
      postReq(setIsLoading, '/review/editreview?request=DELETE', {id: reviewToDelete.id})
      .then(() => {
        setReviews(updatedReviews)
        // setProduct({ ...product, reviews: updatedReviews });
        setReviewState({
          ...reviewState,
          hasUserReviewed: false,
          userReview: null,
        });
      })
      .catch((e) => {
        displayError(e)
      })
        
    }
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (isLoading ? <LoadingPage /> :
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
                className={`imagePreview ${index === currentImageIndex ? "active" : ""}`}
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
            <h2 className="productDetail_title">{product.title}</h2>
            <p className="productDetail_price">Price: ₹{product.price}</p>
            <p className="productDetail_category">Category: {product.category}</p>

            <div className="specifications">
              <p className="specifications_title">Specifications:</p>
              <ul>
                {Object.keys(product.specifications).map((key, index) => (
                  <li key={index}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                    {product.specifications[key]}
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
              {!isInBasket && (
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
              )}

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
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        {userLoggedIn && !hasUserReviewed && (
          <button
            className="productDetail_writeReviewButton"
            onClick={() => setReviewState({ ...reviewState, isWritingReview: true })}
          >
{hasUserReviewed ? "Edit Review" : "Write a Review"}          
</button>
        )}

        {hasUserReviewed && userReview && (
          <div className="review">
            <p>
              <strong>{user.displayName}</strong>
              {/* {console.log(user.displayName)} */}
              <button onClick={() => handleEditReview(userReview)}>
                Edit Review
              </button>
              <button onClick={() => handleDeleteReview(userReview)}>
                Delete Review
              </button>
            </p>
            <div className="rating">
              <Rating
                name={`rating-${id}-${userReview.id}`}
                value={userReview.rating}
                precision={0.5}
                readOnly
              />
              <p>({userReview.rating})</p>
            </div>
            <p>{userReview.comment}</p>
            <p>Date: {userReview.date}</p>
          </div>
        )}

        {/* Render other reviews */}
        <div className="review-sort-options">
          <span>Sort by:</span>
          <button onClick={sortReviewsByDate}>Date</button>
          <button onClick={sortReviewsByHighestRated}>Highest Rated</button>
          <button onClick={sortReviewsByLowestRated}>Lowest Rated</button>
        </div>

        {reviews.map((review, index) => {
          const canEdit = userLoggedIn && userReview && review.id === userReview.id;
          if (canEdit) return <></>
          return (
            <div key={index} className="review">
              <p>
                <strong>{review.reviewer}</strong>{" "}
                {/* {canEdit && (
                  <>
                    <button onClick={() => handleEditReview(review)}>
                      Edit Review
                    </button>{" "}
                  </>
                )}
                {review.reviewer === user.id && (
                  <button onClick={() => handleDeleteReview(review)}>
                    Delete Review
                  </button>
                )} */}
              </p>
              <div className="rating">
                <Rating
                  name={`rating-${id}-${review.id}`}
                  value={review.rating}
                  precision={0.5}
                  readOnly
                />
                <p>({review.rating})</p>
              </div>
              <p>{review.comment}</p>
              <p>Date: {review.date}</p>
            </div>
          );
        })}
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

      {/* Modal for Writing/Editing Review */}
      {isWritingReview && (
        <Modal open={isWritingReview} onClose={() => setReviewState({ ...reviewState, isWritingReview: false })}>
          <Box className="modalBox">
            <div className="modalContent">
              <h2>{hasUserReviewed ? "Edit Review" : "Write a Review"}</h2>
              <Rating
                name="review-rating"
                value={reviewRating}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setReviewState({ ...reviewState, reviewRating: newValue });
                  }
                }}
                precision={0.5}
              />
              <textarea
                className="reviewTextarea"
                placeholder="Write your review here..."
                value={reviewComment}
                onChange={(e) => setReviewState({ ...reviewState, reviewComment: e.target.value })}
              ></textarea>
              <div className="modalButtons">
              <button onClick={() => setReviewState({ ...reviewState, isWritingReview: false })}>Cancel</button>
              <button onClick={submitReview}>
                {hasUserReviewed ? "Update Review" : "Submit Review"}
              </button>
            </div>
            </div>
            
          </Box>
        </Modal>
      )}
    </>
  );
}

export default ProductDetail;
