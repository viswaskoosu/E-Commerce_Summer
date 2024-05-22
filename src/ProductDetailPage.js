import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const [{ products }] = useStateValue();
  const product = products?.find((product) => product.id === id);

  if (!products) {
    return <h2>Loading...</h2>; // Display a loading message while products are being fetched
  }

  if (!product) {
    return <h2>Product not found</h2>; // Handle the case where the product is not found
  }

  return (
    <div className="productDetail">
      <img src={product.image} alt={product.title} />
      <div className="productDetail_info">
        <h1>{product.title}</h1>
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
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailPage;
