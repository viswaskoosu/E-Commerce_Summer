import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import Carousel from '../../Components/carousel/carousel';
import './Home.css';
import Categories from '../../Categories'; // Ensure this imports correctly
import Footer from '../../Components/Footer';
import LowerHeader from '../../Components/Header/LowerHeader';
import { useStateValue } from "../../Context/StateProvider";
import ResponsiveSlider from '../../Components/ResponsiveSlider';

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1020);
  const [state] = useStateValue();
  const ProductsData = state.products;
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1020);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupProductsByCategory = () => {
    const groupedProducts = {};

    Categories.forEach(category => {
      groupedProducts[category.name] = [];
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

  const handleViewAllClick = (categoryIndex) => {
    navigate(`/categories/${categoryIndex}`);
  };

  const handleCategoryImageClick = (categoryIndex) => {
    navigate(`/categories/${categoryIndex}`);
  };
  const no_of_images = (window.innerWidth > 1536 ? 10 : 7)

  return (
    <>
      <Header />
      <div className="home">
        <Carousel />
        <div className='category_images'>
        <div className='view_all_category'>
          {!isSmallScreen ? (
            <h2>Browse by Category</h2>
          ) : (
            <></>
          )}
          <select id="category-select" onChange={handleCategorySelect}>
            <option value="">--View All Categories--</option>
            {Categories.map((category, index) => (
              <option key={index} value={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        
          {!isSmallScreen ? (
            <>
            <div className='categories'>
            {Categories.map((category, index) => (
                index > no_of_images ? (
                  <></> 
                ) : (
                  <div key={index}>
                    <img
                      src={category.image}
                      alt={category.name}
                      onClick={() => handleCategoryImageClick(index)}
                      className='category_image'
                    />
                    <p className='browse_category_name' onClick={() => handleCategoryImageClick(index)}>{category.name}</p>
                  </div>
                )
          ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        
        <div className='products'>
          {Categories.map((category, index) => (
            <div key={index}>
              <div className='category_header'>
                <h2 className='category_name'>{category.name}</h2>
                <h3 className='view-all' onClick={() => handleViewAllClick(index)}>View All Items</h3>
              </div>
              <ResponsiveSlider products={groupedProducts[category.name]} />
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
