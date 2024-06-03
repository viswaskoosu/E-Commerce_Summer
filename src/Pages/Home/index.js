<<<<<<< HEAD
import './Home.css';
import Carousel from '../../Components/carousel/carousel';
import Delivery from "./delivery.png";
import ResponsiveSlider from '../../Components/ResponsiveSlider';
import {React,useState} from "react";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  document.title = "Amazon"

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
    <div className="home">
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
          <img src={Delivery} className="delivery" alt=''/>
        </div>
      <Carousel />
      <ResponsiveSlider/>
=======
import "./Home.css";
import Carousel from "../../Components/carousel/carousel";
import ResponsiveSlider from "../../Components/ResponsiveSlider";
import Header from "../../Components/Header";
function Home() {
  return (
    <div>
      {/* {(localStorage.getItem('user'))} */}
      <Header />
      <div className="home">
        <Carousel />
        <ResponsiveSlider />
      </div>
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2
    </div>
  );
}

export default Home;