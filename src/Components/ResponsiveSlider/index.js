import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from '../Product';
import './ResponsiveSlider.css';

const ResponsiveSlider = ({ products }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(4);

  const calculateSlides = (width) => {
    const minSlides = 1;
    const maxSlides = 7;
    const minWidth = 564;
    const maxWidth = 1620;

    if (width < minWidth) {
      return { slidesToShow: minSlides, slidesToScroll: minSlides };
    }

    if (width > maxWidth) {
      return { slidesToShow: maxSlides, slidesToScroll: maxSlides - 1 };
    }

    const slidesToShow = Math.round(minSlides + ((maxSlides - minSlides) * (width - minWidth)) / (maxWidth - minWidth) -1);
    const slidesToScroll = Math.max(slidesToShow - 1, 1);

    return { slidesToShow, slidesToScroll };
  };

  const updateSlides = () => {
    const width = window.innerWidth;
    const { slidesToShow, slidesToScroll } = calculateSlides(width);
    setSlidesToShow(slidesToShow);
    setSlidesToScroll(slidesToScroll);
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay: false,
  };

  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map(product => (
          <div className="slider-item" key={product.id}>
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
