import React, { useState, useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { Link } from "react-router-dom";
import "./OrderHistory.css";
import Header from "../../Components/Header";
import { displayError, putReq } from "../../getReq";
import { toast } from "react-toastify";

function OrderHistory() {
  const [{ user, favouriteItems, products, basket, orders, userLoggedIn }, dispatch] = useStateValue();
  const [filter, setFilter] = useState("all");
  const [loadingProducts, setLoadingProducts] = useState(true); // State for loading products
  const [isInBasket, setIsInBasket] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching products (replace with actual fetching logic)
    const fetchProducts = async () => {
      // Replace with actual fetch logic
      // Example: const fetchedProducts = await fetchProductsFromServer();
      // dispatch({ type: 'SET_PRODUCTS', products: fetchedProducts });
      setLoadingProducts(false); // Set loading to false after fetching
    };

    fetchProducts();
  }, [dispatch]); // Ensure useEffect runs only once after mount

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const buyItAgain = (item) => {
    const isAlreadyInBasket = basket.some((basketItem) => basketItem.id === item.id);
    if (isAlreadyInBasket) {
      toast.error("Item already in basket");
      return;
    }
    if (!userLoggedIn) {
      dispatch({
        type: "ADD_TO_BASKET",
        id: item.id,
        quantity: 1,
        price: item.price,
      });
      setIsInBasket(true);
      return;
    }
    putReq(setIsLoading, `/user/editbasket?product=<span class="math-inline">\{item\.id\}&quantity\=</span>{1}`)
      .then(() => {
        dispatch({
          type: "ADD_TO_BASKET",
          id: item.id,
          quantity: 1,
          price: item.price,
        });
        setIsInBasket(true);
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const filterOrders = (orders, filter) => {
    const now = new Date();
    let filteredOrders;

    switch (filter) {
      case "3months":
        filteredOrders = orders.filter(
          (order) => now - new Date(order.date) <= 90 * 24 * 60 * 60 * 1000
        );
        break;
      case "6months":
        filteredOrders = orders.filter(
          (order) => now - new Date(order.date) <= 180 * 24 * 60 * 60 * 1000
        );
        break;
      case "1year":
        filteredOrders = orders.filter(
          (order) => now - new Date(order.date) <= 365 * 24 * 60 * 60 * 1000
        );
        break;
      case "2years":
        filteredOrders = orders.filter(
          (order) => now - new Date(order.date) <= 2 * 365 * 24 * 60 * 60 * 1000
        );
        break;
      case "5years":
        filteredOrders = orders.filter(
          (order) => now - new Date(order.date) <= 5 * 365 * 24 * 60 * 60 * 1000
        );
        break;
      default:
        filteredOrders = orders;
    }

    return filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort orders by date in descending order
  };

  const filteredOrders = filterOrders(orders, filter);

  useEffect(() => {
    if (!loadingProducts) {
      // Logging item titles using Products array
      filteredOrders.forEach((order) => {
        order.items.forEach((item) => {
          

          const product = products.find((prod) => prod.id === item.id);
          if (product) {
            console.log(product.title);
          }
        });
      });
    }
  }, [filteredOrders, products, loadingProducts]); // Run effect whenever filteredOrders, products, or loadingProducts changes

  // Render loading state while products are being fetched
  if (loadingProducts) {
    return <div>Loading...</div>;
  }
  const OrderStatus=(order)=> {
    const deliveryStatusText = order.deliveryStatus === 1 ? (
      <p>Delivered: {new Date(order.deliveryDate).toLocaleDateString()}</p>
    ) : (
      order.deliveryStatus === 0 ? (
        <p>Shipped</p>
      ) : (
        <p>Not yet shipped</p>
      )
    );
  
    return (
      <div>
        {deliveryStatusText}
      </div>
    );
  };
    return (
    <>
      <Header />
      <div className="orderHistory">
        <h2>Your Orders</h2>
        <div className="orderHistory_filter">
          <label htmlFor="filter">Filter by:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="3months">Last 3 months</option>
            <option value="6months">Last 6 months</option>
            <option value="1year">Last 1 year</option>
            <option value="2years">Last 2 years</option>
            <option value="5years">Last 5 years</option>
          </select>
        </div>
        {filteredOrders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          filteredOrders.map((order, index) => (
            <div key={order.id} className="orderHistory_order">
              <h3>Order {index + 1}</h3>
              <p>ORDER PLACED: {new Date(order.date).toLocaleDateString()}</p>
              <p>TOTAL: ₹{(order.total || 0).toFixed(2)}</p>
              <p>SHIP TO: {order.recipient}</p>
              <p>ORDER ID: {order.id}</p>
              {OrderStatus(order)}
              <div className="orderHistory_actions">
                {/* <button>Track package</button>
                <button>View order details</button>
                <button>Invoice</button> */}
              </div>
              {order.items.map((item) => {
                const product = products.find((prod) => prod.id === item.id);
                if (!product) {
                  return null; // Add a null check to avoid rendering if product is undefined
                }
                return (
                  <div key={item.id} className="orderHistory_item">
                    <img src={product.images[0]} alt={product.title} />
                    <div className="orderHistory_info">
                      <p>{product.title}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                      <div className="orderHistory_itemActions">
                        <button onClick={() => buyItAgain(item)}>
                          Buy it again
                        </button>
                        <Link
                          to={`/product/${item.id}`}
                          className="product_link"
                        >
                          <button>View your item</button>
                        </Link>
                        {/* <button>Leave seller feedback</button>
                        <button>Leave delivery feedback</button> */}
                        {/* <button>Write a product review</button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default OrderHistory;
