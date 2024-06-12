import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../categories';
import './CategoryPage.css';
import Header from '../../Components/Header';
import CategoryProduct from '../../Components/CategoryProduct';
import { useStateValue } from '../../Context/StateProvider';

const CategoryPage = () => {
  const { id } = useParams();
  const [{ products: ProductsData }] = useStateValue();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('rating-high'); // Default sort criteria
  const [filters, setFilters] = useState({
    discount: []
  });
  useEffect(() => {
    const fetchProducts = () => {
      let filteredProducts = ProductsData.filter(product => product.category === Categories[id]);

      if (filters.discount.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          const discountPercentage = getDiscountPercentage(product.price, product.mrp);
          return filters.discount.some(option => discountPercentage >= option);
        });
      }

      filteredProducts.sort((a, b) => {
        switch (sortBy) {
          case 'rating-high':
            return b.rating - a.rating;
          case 'price-high':
            return b.price - a.price;
          case 'price-low':
            return a.price - b.price;
          case 'reviews-high':
            return b.reviews - a.reviews;
          case 'discount-high':
            return getDiscountPercentage(b.price, b.mrp) - getDiscountPercentage(a.price, a.mrp);
          case 'discount-low':
            return getDiscountPercentage(a.price, a.mrp) - getDiscountPercentage(b.price, b.mrp);
          default:
            return 0;
        }
      });

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [id, ProductsData, sortBy, filters]);

  const handleFilterChange = (filterType, option) => {
    if (filterType === 'Discount') {
      let newFilters = { ...filters };
      if (newFilters.discount.includes(option)) {
        newFilters.discount = newFilters.discount.filter(item => item !== option);
      } else {
        newFilters.discount.push(option);
      }
      setFilters(newFilters);
    }
  };

  const getDiscountPercentage = (price, mrp) => {
    const discount = ((mrp - price) / mrp) * 100;
    return Math.round(discount);
  };

  return (
    <div className='category-page'>
      <Header />
      <div className="category-container">
        <div className="filters">
          <div>
            <h3>Sort By</h3>
            <ul>
              <li><button onClick={() => setSortBy('rating-high')}>Highest Rating</button></li>
              <li><button onClick={() => setSortBy('price-high')}>Price High to Low</button></li>
              <li><button onClick={() => setSortBy('price-low')}>Price Low to High</button></li>
              <li><button onClick={() => setSortBy('reviews-high')}>Most Reviews</button></li>
              <li><button onClick={() => setSortBy('discount-high')}>Discount High to Low</button></li>
              <li><button onClick={() => setSortBy('discount-low')}>Discount Low to High</button></li>
            </ul>
          </div>
          <div>
            <h3>Filters</h3>
            <ul>
            <li>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('Discount', 10)} /> 10% or more
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('Discount', 20)} /> 20% or more
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('Discount', 30)} /> 30% or more
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('Discount', 40)} /> 40% or more
                </label>
              </li>
            </ul>
          </div>
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
