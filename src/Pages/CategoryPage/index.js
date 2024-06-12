import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../categories';
import './CategoryPage.css';
import Header from '../../Components/Header';
import CategoryProduct from '../../Components/CategoryProduct';
import { useStateValue } from '../../Context/StateProvider';
import Filters from '../../filters'
const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [{ products: ProductsData }] = useStateValue(); 

  useEffect(() => {
    const fetchProducts = () => {
      const filteredProducts = ProductsData.filter(product => product.category === Categories[id]);
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [id, ProductsData]);

  const handleFilterChange = (filterName, option) => {
    // Implement filter logic here if needed
    console.log(`Filter Changed: ${filterName} - ${option}`);
  };

  return (
    <div className='category-page'>
      <Header />
      <div className="category-container">
        {/* Left Sidebar for Filters */}
        <div className="filters">
          {Filters.map(filter => (
            <div key={filter.name}>
              <h3>{filter.name}</h3>
              <ul>
                {filter.options.map(option => (
                  <li key={option}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleFilterChange(filter.name, option)}
                      /> {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Right Section for Category Products */}
        <div className="product-list">
          <h2>{Categories[id]}</h2>
          <div className='each_card'>
            {products.map(product => (
              <div className='category-items' key={product.id}>
                <CategoryProduct
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
