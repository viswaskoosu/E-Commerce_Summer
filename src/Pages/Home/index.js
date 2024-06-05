import React from 'react';
import ProductsData from '../../data'; // Assuming this contains your product data
import Header from '../../Components/Header';
import Carousel from '../../Components/carousel/carousel';
import ResponsiveSlider from '../../Components/ResponsiveSlider';
import './Home.css'; 
import Categories from '../../categories'; 
import Footer from '../../Components/Footer';
const Home = () => {
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

  return (
    <>
      <Header />
      <div className="home">
        <Carousel />
        <div className='products'>
          {Categories.map(category => (
            <div key={category}>
              <h2>{category}</h2>
              <ResponsiveSlider products={groupedProducts[category]} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
