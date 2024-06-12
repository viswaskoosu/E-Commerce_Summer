// CategoryProduct.js
import React from 'react';
import './CategoryProduct.css'; 

const CategoryProduct = ({ id, title, image, price, rating, mrp, reviews }) => {
  return (
    <div className='category-product'>
      <img className='product-image' src={image} alt={title} />
      <div className='product-info'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
};

export default CategoryProduct;
