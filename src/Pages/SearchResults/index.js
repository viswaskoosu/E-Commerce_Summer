import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SearchResults.css';
import Header from '../../Components/Header';
import CategoryProduct from '../../Components/CategoryProduct';
import { useStateValue } from '../../Context/StateProvider';
import Categories from '../../Categories';

const SearchResults = () => {
  const { query } = useParams();
  const [{ products: ProductsData }] = useStateValue();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('rating-high');
  const [maxPrice, setMaxPrice] = useState(0);
  const [filters, setFilters] = useState({
    discount: [],
    price: [0, 0]
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const searchProducts = () => {
      const filteredProducts = ProductsData.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
      setFilteredProducts(filteredProducts); // Initialize filtered products with all products
    };

    searchProducts();
  }, [query, ProductsData]);

  useEffect(() => {
    const maxPriceValue = Math.ceil(Math.max(...products.map(product => product.price)) / 100) * 100;
    setMaxPrice(maxPriceValue);
    setFilters(prevFilters => ({ ...prevFilters, price: [0, maxPriceValue] }));
  }, [products]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products.filter(product => {
        // Apply discount filter if set
        if (filters.discount.length > 0) {
          const discountPercentage = getDiscountPercentage(product.price, product.mrp);
          if (!filters.discount.some(option => discountPercentage >= option)) {
            return false;
          }
        }
        // Apply price range filter
        return product.price >= filters.price[0] && product.price <= filters.price[1];
      });
      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  useEffect(() => {
    const sortProducts = () => {
      let sortedProducts = [...filteredProducts];
      switch (sortBy) {
        case 'rating-high':
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'price-high':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'price-low':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'reviews-high':
          sortedProducts.sort((a, b) => b.reviews.length - a.reviews.length);
          break;
        case 'reviews-low':
          sortedProducts.sort((a, b) => a.reviews.length - b.reviews.length);
          break;
        case 'discount-high':
          sortedProducts.sort((a, b) => getDiscountPercentage(b.price, b.mrp) - getDiscountPercentage(a.price, a.mrp));
          break;
        case 'discount-low':
          sortedProducts.sort((a, b) => getDiscountPercentage(a.price, a.mrp) - getDiscountPercentage(b.price, b.mrp));
          break;
        default:
          break;
      }
      setFilteredProducts(sortedProducts);
    };

    sortProducts();
  }, [sortBy, filteredProducts]);

  const handleFilterChange = (filterType, value) => {
    let newFilters = { ...filters };
    if (filterType === 'discount') {
      const updatedDiscounts = newFilters.discount.includes(value)
        ? newFilters.discount.filter(discount => discount !== value)
        : [...newFilters.discount, value];
      newFilters.discount = updatedDiscounts;
    } else if (filterType === 'price') {
      newFilters.price = value;
    }
    setFilters(newFilters);
  };

  const getDiscountPercentage = (price, mrp) => {
    const discount = ((mrp - price) / mrp) * 100;
    return Math.round(discount);
  };

  return (
    <div className='category-page'>
      <Header />
      <div className="category-container">
        {isMobile ? (
          <div className="mobile-filters">
            <select className="sort_by_buttons" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="rating-high" className={`${sortBy === 'rating-high' ? 'active' : ''}`}>Highest Rating</option>
              <option value="price-high" className={`${sortBy === 'price-high' ? 'active' : ''}`}>Price High to Low</option>
              <option value="price-low" className={`${sortBy === 'price-low' ? 'active' : ''}`}>Price Low to High</option>
              <option value="reviews-high" className={`${sortBy === 'reviews-high' ? 'active' : ''}`}>Most Reviews</option>
              <option value="reviews-low" className={`${sortBy === 'reviews-low' ? 'active' : ''}`}>Least Reviews</option>
              <option value="discount-high" className={`${sortBy === 'discount-high' ? 'active' : ''}`}>Discount High to Low</option>
              <option value="discount-low" className={`${sortBy === 'discount-low' ? 'active' : ''}`}>Discount Low to High</option>
            </select>
            <select onChange={(e) => handleFilterChange('discount', parseInt(e.target.value))}>
              <option value="">Filter by Discount</option>
              <option value="10">10% or more</option>
              <option value="20">20% or more</option>
              <option value="30">30% or more</option>
              <option value="40">40% or more</option>
            </select>
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={filters.price[1]}
              onChange={(e) => handleFilterChange('price', [0, parseInt(e.target.value)])}
            />
            <span>Price up to {filters.price[1]}</span>
          </div>
        ) : (
          <div className="filters">
            <div>
              <h3>Sort By</h3>
              <ul className="sort_by_buttons">
                <li><button className={`${sortBy === 'rating-high' ? 'active' : ''}`} onClick={() => setSortBy('rating-high')}>Highest Rating</button></li>
                <li><button className={`${sortBy === 'price-high' ? 'active' : ''}`} onClick={() => setSortBy('price-high')}>Price High to Low</button></li>
                <li><button className={`${sortBy === 'price-low' ? 'active' : ''}`} onClick={() => setSortBy('price-low')}>Price Low to High</button></li>
                <li><button className={`${sortBy === 'reviews-high' ? 'active' : ''}`} onClick={() => setSortBy('reviews-high')}>Most Reviews</button></li>
                <li><button className={`${sortBy === 'reviews-low' ? 'active' : ''}`} onClick={() => setSortBy('reviews-low')}>Least Reviews</button></li>
                <li><button className={`${sortBy === 'discount-high' ? 'active' : ''}`} onClick={() => setSortBy('discount-high')}>Discount High to Low</button></li>
                <li><button className={`${sortBy === 'discount-low' ? 'active' : ''}`} onClick={() => setSortBy('discount-low')}>Discount Low to High</button></li>
              </ul>
            </div>
            <div>
              <h3>Filters</h3>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" onChange={() => handleFilterChange('discount', 10)} checked={filters.discount.includes(10)} /> 10% or more
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={() => handleFilterChange('discount', 20)} checked={filters.discount.includes(20)} /> 20% or more
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={() => handleFilterChange('discount', 30)} checked={filters.discount.includes(30)} /> 30% or more
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={() => handleFilterChange('discount', 40)} checked={filters.discount.includes(40)} /> 40% or more
                  </label>
                </li>
                <li>
                  <label>
                    Price up to {filters.price[1]}
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={filters.price[1]}
                      onChange={(e) => handleFilterChange('price', [0, parseInt(e.target.value)])}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="product-list">
          <h2>Search Results for "{query}"</h2>
          {filteredProducts.map(product => (
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
  );
};

export default SearchResults;
