// CategoryPage.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductsData from '../../data'; // Example data import

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products for the category id (replace with actual logic)
    const fetchProducts = () => {
      // Example: Filter products based on category id
      const filteredProducts = ProductsData.filter(product => product.categoryId === id);
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <h2>Category Page for ID: {id}</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
                <p className="product-rating">Rating: {product.rating}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
