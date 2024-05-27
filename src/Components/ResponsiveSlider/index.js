import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Products } from '../../data'; // Assuming Products are imported from data file
import Product from '../Product'; // Import the Product component
import './ResponsiveSlider.css'; // Import CSS file for custom styles

const ResponsiveSlider = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
    {
        breakpoint: 1320,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 843,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 594,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Products.map(product => (
          <div className='slider-item' key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              image={product.images[0]} // Use the first image as the product image
              price={product.price}
              rating={product.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
