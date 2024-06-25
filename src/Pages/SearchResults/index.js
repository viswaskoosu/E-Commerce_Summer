import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../Categories';
import './SearchResults.css';
import Header from '../../Components/Header';
import CategoryProduct from '../../Components/CategoryProduct';
import { useStateValue } from '../../Context/StateProvider';

const SearchResults = () => {
  const { query } = useParams();
  const [{ products: ProductsData }] = useStateValue();
  const [sortBy, setSortBy] = useState('rating-high');
  const [products, setProducts] = useState([]);
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
    const filtered = ProductsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    const maxPriceValue = Math.ceil(Math.max(...filtered.map(product => product.price)) / 100) * 100;
    setMaxPrice(maxPriceValue);
    setFilters(prevFilters => ({ ...prevFilters, price: [0, maxPriceValue] }));
  }, [query, ProductsData]);

  useEffect(() => {
    const fetchProducts = () => {
      let filteredProducts = ProductsData.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

      if (filters.discount.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          const discountPercentage = getDiscountPercentage(product.price, product.mrp);
          return filters.discount.some(option => discountPercentage >= option);
        });
      }

      filteredProducts = filteredProducts.filter(product => {
        return product.price >= filters.price[0] && product.price <= filters.price[1];
      });

      filteredProducts.sort((a, b) => {
        switch (sortBy) {
          case 'rating-high':
            return b.rating - a.rating;
          case 'price-high':
            return b.price - a.price;
          case 'price-low':
            return a.price - b.price;
          case 'reviews-high':
            return b.reviews.length - a.reviews.length;
          case 'reviews-low':
            return a.reviews.length - b.reviews.length;
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
  }, [query, ProductsData, sortBy, filters]);

  const handleFilterChange = (filterType, value) => {
    let newFilters = { ...filters };
    if (filterType === 'discount') {
      const updatedDiscounts = newFilters.discount.includes(value)
        ? newFilters.discount.filter(discount => discount !== value)
        : [...newFilters.discount, value];
      newFilters.discount = updatedDiscounts;
    } else if (filterType === 'price') {
      newFilters.price = [filters.price[0], value]; // Correctly update the price range
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
                    <br></br>
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={filters.price[1]}
                      onChange={(e) => handleFilterChange('price', parseInt(e.target.value))}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="product-list">
          <h2>Search Results</h2>
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

export default SearchResults;
