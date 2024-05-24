import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from '../../Components/Product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Products } from '../../data';
import Carousel from '../../Components/carousel/carousel';

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

    // Determine number of products per row based on window size
    const windowWidth = window.innerWidth;
    let numProductsPerRow;
    if (windowWidth >= 1024) {
      numProductsPerRow = 3;
    } else if (windowWidth >= 600) {
      numProductsPerRow = 2;
    } else {
      numProductsPerRow = 1;
    }

    // Loop to generate randomProducts array
    let index = 0;
    while (index < shuffledProducts.length) {
      randomProducts.push(shuffledProducts.slice(index, index + numProductsPerRow));
      index += numProductsPerRow;
    }

    return randomProducts;
  };

  useEffect(() => {
    // Select random products when component mounts
    const randomProducts = selectRandomProducts();
    setRandomProducts(randomProducts);
  }, []);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Initial value, will be adjusted based on window width
    slidesToScroll: 3, // Initial value, will be adjusted based on window width
    autoplay: false, // Disable automatic scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Custom arrow component for next navigation
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} arrow-next`} style={{ ...style }} onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  // Custom arrow component for previous navigation
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} arrow-prev`} style={{ ...style }} onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  // Custom function to render products in a row
  const renderProductRow = (products) => (
    <div className="product-row">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.images[0]} // Use the first image as the product image
        />
      ))}
    </div>
  );

  return (
    <div className="home">
      <Carousel />
      <Slider {...settings}>
        {/* Render each row of products */}
        {randomProducts.map((row, index) => (
          <div key={index}>
            {renderProductRow(row)}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
