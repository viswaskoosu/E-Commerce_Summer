import React, { useState, useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import "./OrderHistory.css";
import Header from "../../Components/Header";
import { displayError, putReq, getReq } from "../../getReq";
import { toast } from "react-toastify";
import LoadingPage from "../../Components/LoadingPage";
import "react-toastify/dist/ReactToastify.css";
function OrderHistory() {
  const navigate = useNavigate()
  const [{ user, favouriteItems, products, basket, userLoggedIn }, dispatch] = useStateValue();
  const [filter, setFilter] = useState("all");
  const [loadingProducts, setLoadingProducts] = useState(true); // State for loading products
  const [isInBasket, setIsInBasket] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState([])
  useEffect(() => {
    // Simulate fetching products (replace with actual fetching logic)
    getReq(setIsLoading, '/user/fetchorders')
    .then(responseData =>{
      const newOrders = filterOrders(responseData, "all")
      console.log(newOrders)
      setFilteredOrders(newOrders)
    })
    .catch(() => {
      navigate('/error')
    })
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
    console.log(item)
    const isAlreadyInBasket = basket.some((basketItem) => basketItem.id === item.product);
    if (isAlreadyInBasket) {
      toast.error("Item already in basket");
      return;
    }
    if (!userLoggedIn) {
      dispatch({
        type: "ADD_TO_BASKET",
        id: item.product,
        quantity: 1,
        // price: item.price,
      });
      setIsInBasket(true);
      return;
    }
    putReq(setIsLoading, `/user/editbasket?product=${item.product}&quantity=1`)
      .then(() => {
        dispatch({
          type: "ADD_TO_BASKET",
          id: item.product,
          quantity: 1,
          // price: item.price,
        });
        setIsInBasket(true);
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const filterOrders = (orders, filter) => {
    const now = new Date();
    let newOrders =[];

    switch (filter) {
      case "3months":
        newOrders = orders.filter(
          (order) => now - new Date(order.orderDate) <= 90 * 24 * 60 * 60 * 1000
        );
        break;
      case "6months":
        newOrders = orders.filter(
          (order) => now - new Date(order.orderDate) <= 180 * 24 * 60 * 60 * 1000
        );
        break;
      case "1year":
        newOrders = orders.filter(
          (order) => now - new Date(order.orderDate) <= 365 * 24 * 60 * 60 * 1000
        );
        break;
      case "2years":
        newOrders = orders.filter(
          (order) => now - new Date(order.orderDate) <= 2 * 365 * 24 * 60 * 60 * 1000
        );
        break;
      case "5years":
        newOrders = orders.filter(
          (order) => now - new Date(order.orderDate) <= 5 * 365 * 24 * 60 * 60 * 1000
        );
        break;
      default:
        newOrders = orders;
    }
    
    return newOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate)); // Sort orders by date in descending order
  };

  // console.log(filteredOrders)
  // useEffect(() => {
  //   if (!loadingProducts) {
  //     // Logging item titles using Products array
  //     filteredOrders.forEach((order) => {
  //       order.cartItems.forEach((item) => {
        
  //         const product = products.find((prod) => prod.id === item.product);
  //         if (product) {
  //           console.log(product.title);
  //         }
  //       });
  //     });
  //   }
  // }, [filteredOrders, products, loadingProducts]); // Run effect whenever filteredOrders, products, or loadingProducts changes

  // // Render loading state while products are being fetched
  // if (loadingProducts) {
  //   return <div>Loading...</div>;
  // }
  const OrderStatus=(item)=> {
    const deliveryStatusText = item.orderStatus === 1 ? (
      <>Delivered: {item.deliveryDate? new Date(item.deliveryDate).toLocaleDateString(): ""}</>
    ) : (
      item.orderStatus === 0 ? (
        <>Shipped</>
      ) : (
        <>Not yet shipped</>
      )
    );
  
    return (
      <>
        {deliveryStatusText}
      </>
    );
  };
    return (isLoading? <LoadingPage/>:
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
              <p>ORDER PLACED: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>TOTAL: ₹{(order.orderAmount || 0).toFixed(2)}</p>
              {/* <p>SHIP TO: {order.shippingAddress?.toString()}</p> */}
              <p>SHIPPED TO: {`${order.shippingAddress?.street}, ${order.shippingAddress?.city}, ${order.shippingAddress?.state}, ${order.shippingAddress?.country}, ${order.shippingAddress?.zip}`}</p>

              <p>ORDER ID: {order.id}</p>
              {/* {OrderStatus(order)} */}
              <div className="orderHistory_actions">
                {/* <button>Track package</button>
                <button>View order details</button>
                <button>Invoice</button> */}
              </div>
              {order.cartItems.map((item) => {
                const product = products.find((prod) => prod.id === item.product);
                if (!product) {
                  return null; // Add a null check to avoid rendering if product is undefined
                }
                return (
                  <div key={item.product} className="orderHistory_item" style={{backgroundColor: item.orderStatus===0? '#b3ffb3': '#f4f4f4'}}>
                    <img src={product.images[0]} alt={product.title} />
                    <div className="orderHistory_info">
                      <p>{product.title}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{product.price}</p>
                        <p>Delivery Status: {OrderStatus(item)}</p>
                      <div className="orderHistory_itemActions">
                        <button onClick={() => buyItAgain({...item, price: product.price})}>
                          Buy it again
                        </button>
                        <Link
                          to={`/product/${item.product}`}
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
