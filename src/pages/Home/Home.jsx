import About from "./About";
import Banner from "./Banner";
import Opportunities from "./Opportunities";
import Review from "./Review";
import Services from "./Services";

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
