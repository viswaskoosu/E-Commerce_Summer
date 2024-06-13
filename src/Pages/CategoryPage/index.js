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
  
  // Function to calculate max price for the category
  const getMaxPriceForCategory = () => {
    const categoryProducts = ProductsData.filter(product => product.category === Categories[id]);
    const maxPrice = Math.max(...categoryProducts.map(product => product.price));
    const roundedMaxPrice = Math.ceil(maxPrice / 100) * 100;
    return roundedMaxPrice;
  };

  // State hooks
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('rating-high');
  const [filters, setFilters] = useState({
    discount: [],
    price: [0, getMaxPriceForCategory()]
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect hook for handling window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect hook for fetching products and applying filters
  useEffect(() => {
    const fetchProducts = () => {
      let filteredProducts = ProductsData.filter(product => product.category === Categories[id]);

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
  }, [id, ProductsData, sortBy, filters]); // Dependency array for useEffect

  // Function to handle filter changes
  const handleFilterChange = (filterType, value) => {
    let newFilters = { ...filters };
    newFilters[filterType] = value;
    setFilters(newFilters);
  };

  // Function to calculate discount percentage
  const getDiscountPercentage = (price, mrp) => {
    const discount = ((mrp - price) / mrp) * 100;
    return Math.round(discount);
  };

  // JSX structure
  return (
    <div className='category-page'>
      <Header />
      <div className="category-container">
        {isMobile ? (
          <div className="mobile-filters">
          <ul className="sort_by_buttons">
  <li><button onClick={() => setSortBy('rating-high')}>Highest Rating</button></li>
  <li><button onClick={() => setSortBy('price-high')}>Price High to Low</button></li>
  <li><button onClick={() => setSortBy('price-low')}>Price Low to High</button></li>
  <li><button onClick={() => setSortBy('reviews-high')}>Most Reviews</button></li>
  <li><button onClick={() => setSortBy('reviews-low')}>Least Reviews</button></li>
  <li><button onClick={() => setSortBy('discount-high')}>Discount High to Low</button></li>
  <li><button onClick={() => setSortBy('discount-low')}>Discount Low to High</button></li>
</ul>

            <select onChange={(e) => handleFilterChange('Discount', parseInt(e.target.value))}>
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
                <li><button onClick={() => setSortBy('rating-high')}>Highest Rating</button></li>
                <li><button onClick={() => setSortBy('price-high')}>Price High to Low</button></li>
                <li><button onClick={() => setSortBy('price-low')}>Price Low to High</button></li>
                <li><button onClick={() => setSortBy('reviews-high')}>Most Reviews</button></li>
                <li><button onClick={() => setSortBy('reviews-low')}>Least Reviews</button></li>
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
                <li>
                  <label>
                    Price up to {filters.price[1]}
                    <input
                      type="range"
                      min="0"
                      max={getMaxPriceForCategory()}
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
