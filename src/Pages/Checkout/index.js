import React, { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProduct";
import Subtotal from "../../Components/Subtotal";
import "./Checkout.css";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import image from './emptycart.png';
import Delivery from "./delivery.png";

function Checkout() {
  const [{ basket, products }] = useStateValue();
  // const uniqueItems = [
  //   ...new Map(basket.map((item) => [item.id, item])).values(),
  // ];
  const uniqueItems = basket.map((item) => {return {id:item.id, quantity: item.quantity}})
  for (let i = 0; i<uniqueItems.length; ++i){
    uniqueItems[i] = {...uniqueItems[i], ...products.find((obj) => obj.id===uniqueItems[i].id)}
  }
  console.log(uniqueItems)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    window.scrollTo({
      top: scrollPosition + 750, 
      behavior: "smooth"
    });
    setScrollPosition(scrollPosition + 750);
    setTimeout(() => {
      setScrollPosition(0);
    }, 100);
  };

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          {basket?.length === 0 ? (
            <div className="empty-list">
              <img src={image} className="empty-img" alt="" />
              <div className="empty-text">
                <p className="empty-head">It's empty here!</p>
                <p className="empty-desc">
                  "Don't let your wishlist collect dust. Add some items that bring
                  joy to your life and watch as they become a reality with just a
                  few clicks."
                </p>
                <Link to="/"><button className="shopping">Go Shopping</button></Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="content">
                <div className="poster-area">
                  <div className="poster-data">
                    <p className="poster-head">Free Delivery!</p>
                    <p className="poster-desc">
                      Don't miss it out! Only today, get free{" "}
                      <b style={{ fontSize: "22px" }}>Next Day</b> delivery on all
                      your orders.
                    </p>
                  </div>
                  <button onClick={handleScroll} className="browse-btn">Browse products</button>
                </div>
                <img src={Delivery} className="delivery" alt="" />
              </div>
              <h2 className="checkout_title">Your Cart</h2>
              <div  className="lower">
              <div className="checkout-product">
              {uniqueItems.map((item) =>(
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.images[0]}
                    price={item.price}
                    rating={item.rating}
                  />
              
                ))}
                </div>
                <div className="subtotal">
                  {basket.length > 0 && (
                    <div className="checkout_right">
                      <Subtotal />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;

