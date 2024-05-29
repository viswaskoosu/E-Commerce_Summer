import './Home.css';
import Carousel from '../../Components/carousel/carousel';
import ResponsiveSlider from '../../Components/ResponsiveSlider';

function Home() {

  return (
    <div className="home">
      <Carousel />
      <ResponsiveSlider/>
    </div>
  );
}

export default Home;
