import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from '../Product'; // Import the Product component
import './ResponsiveSlider.css'; // Import CSS file for custom styles

const ResponsiveSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 594,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map(product => (
          <div className='slider-item' key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              rating={product.rating}
              mrp={product.mrp}
              reviews={product.reviews}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
