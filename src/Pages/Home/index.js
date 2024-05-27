import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from '../../Components/Product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Products } from '../../data';
import Carousel from '../../Components/carousel/carousel';
import ResponsiveSlider from '../../Components/ResponsiveSlider';

function Home() {

  return (
    <div className="home">
      <Carousel />
      <ResponsiveSlider/>
    </div>
  );
}

export default Home;
