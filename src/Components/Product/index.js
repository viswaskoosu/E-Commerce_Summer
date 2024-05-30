import React from 'react';
import './Product.css';
import { useStateValue } from '../../Context/StateProvider';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Product({ id, title, image, price, rating, category, mrp,reviews }) {
  const [{ favouriteItems }, dispatch] = useStateValue();

  const addToFavourites = () => {
    const isInFavourites = favouriteItems.some(item => item.id === id);

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
    if (!title) return ''; // Handle case where title is undefined or null
  
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };
  
  const discountPercentage = Math.round(((mrp - price) * 100) / mrp);

  return (
    <div className="product card">
      <div className="card-img-data">
          <img src={image} alt={title} className="card-img" />
          <p className="price-off">({discountPercentage}% OFF)</p>
        <Link to={`/product/${id}`} className="product_link">
          <button className="view">View product</button>
        </Link>
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <p className="add-list" onClick={addToFavourites}>
            {favouriteItems.some(item => item.id === id) ? <AiFillHeart /> : <AiOutlineHeart />}
          </p>
        </IconContext.Provider>
      </div>
      <div className="card-data">
        <p className="card-title">{truncateTitle(title, 50)}</p>
        <p className="card-category">{category}</p>
        <div className="rating">
          <Stack spacing={1}>
            <Rating name={`rating-${id}`} value={rating} precision={0.5} readOnly />
          </Stack>
          <p className="rating-text">{reviews.length}</p>
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
