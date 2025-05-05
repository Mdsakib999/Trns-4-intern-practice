import About from "../../components/HomePageComponents/About";
import Banner from "../../components/HomePageComponents/Banner";
import Opportunities from "../../components/HomePageComponents/Opportunities";
import Review from "../../components/HomePageComponents/Review";
import Services from "../../components/HomePageComponents/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Review />
      <Opportunities />
    </div>
  );
};

export default Home;
