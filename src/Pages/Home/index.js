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
    </div>
  );
}

export default Home;
