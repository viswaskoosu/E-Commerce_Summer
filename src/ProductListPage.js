// ProductListPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListPage.css'; // Assuming you have CSS for product list
import { useStateValue } from './StateProvider'; // Assuming you have state management hook

function ProductListPage() {
  const [{ products }] = useStateValue(); // Assuming products are in global state

  return (
    <div className="productListPage">
      <h2>Products</h2>
      <div className="productList">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="productListItem">
            {/* Link to ProductDetailPage */}
            <div>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              {/* Add more details if needed */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
