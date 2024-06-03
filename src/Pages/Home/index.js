import './Home.css';
import Carousel from '../../Components/carousel/carousel';
import ResponsiveSlider from '../../Components/ResponsiveSlider';
import {React,useState} from "react";
import Header from '../../Components/Header';

function Home() {
  return (
    <>
      <Header />
    <div className="home">

    
      <Carousel />
      <ResponsiveSlider/>
    </div>
    </>
  );
}

export default Home;