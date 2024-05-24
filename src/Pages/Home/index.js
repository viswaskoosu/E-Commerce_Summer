import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from '../../Components/Product';
import Carousel from '../../Components/carousel/carousel';
import { Products } from '../../data';

function Home() {
  const [randomProducts, setRandomProducts] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Function to select random products
  const selectRandomProducts = () => {
    const shuffledProducts = shuffleArray(Products);
    const randomProducts = [];

    // Generate random numbers to determine number of products per row
    const numProductsPerRow = [2, 3, 1];

    // Loop through numProductsPerRow to generate randomProducts array
    numProductsPerRow.forEach((num) => {
      const products = shuffledProducts.splice(0, num);
      randomProducts.push(products);
    });

    return randomProducts;
  };

  useEffect(() => {
    // Select random products when component mounts
    const randomProducts = selectRandomProducts();
    setRandomProducts(randomProducts);
  }, []);

  return (
    <div className="home">
      <Carousel />
      {/* Render random products */}
      {randomProducts.map((row, index) => (
        <div key={index} className="home_row">
          {row.map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.images[0]} // Pass the first image from the images array
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
