// Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import Carousel from '../../Components/carousel/carousel';
import ResponsiveSlider from '../../Components/ResponsiveSlider';
import './Home.css';
import Categories from '../../categories';
import Footer from '../../Components/Footer';
import LowerHeader from '../../Components/Header/LowerHeader';
import { useStateValue } from "../../Context/StateProvider";
const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [state] = useStateValue();
  const ProductsData = state.products;
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1020);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupProductsByCategory = () => {
    const groupedProducts = {};

    Categories.forEach(category => {
      groupedProducts[category] = [];
    });
    ProductsData.forEach(product => {
      if (groupedProducts[product.category]) {
        groupedProducts[product.category].push(product);
      }
    });

    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();

  const handleCategorySelect = (event) => {
    const selectedCategoryId = event.target.value;
    navigate(`/categories/${selectedCategoryId}`);
  };

  return (
    <>
      <Header />
      <div className="home">
        <Carousel />
        <div className='category-select'>
          <label htmlFor="category-select">Select a category:</label>
          <select id="category-select" onChange={handleCategorySelect}>
            <option value="">--Select Category--</option>
            {Categories.map((category, index) => (
              <option key={index} value={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='products'>
          {Categories.map((category, index) => (
            <div key={index}>
              <h2>{category}</h2>
              <ResponsiveSlider products={groupedProducts[category]} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <div className='LowerHeader'>{isSmallScreen && <LowerHeader />}</div>
    </>
  );
};

export default Home;
