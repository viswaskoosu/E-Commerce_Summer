import React from 'react';
import { Products } from './data';

function ProductCarousel() {
  // Generate random products from available products
  const getRandomProducts = () => {
    const randomProducts = [];
    while (randomProducts.length < 10) {
      const randomIndex = Math.floor(Math.random() * Products.length);
      const randomProduct = Products[randomIndex];
      if (!randomProducts.some(product => product.id === randomProduct.id)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  const randomProducts = getRandomProducts();

  return (
    <div className="carousel">
      <h2>Some more products you may like</h2>
      <div className="carousel_items">
        {randomProducts.map(product => (
          <div key={product.id} className="carousel_item">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p className="carousel_price">₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
