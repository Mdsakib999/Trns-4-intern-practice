import { Link } from "react-router-dom";

const AboutBanner = () => {
	return (
		<div className="text-center flex flex-col mt-28 space-y-5 mb-16 px-4">
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
				ABOUT OUR <span className="text-primary">COMPANY</span>
			</h1>
			<div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base">
				<p>has been offering comprehensive import and export services since</p>
				<p>2006, specializing in Eastern Europe. Trust in our tailor-made</p>
				<p>solutions for your transport needs.</p>
			</div>
			<Link to="/contact">
				<button className="cursor-pointer bg-primary text-white px-5 py-2 rounded w-40 mx-auto text-sm sm:text-base">
					Contact now
				</button>
			</Link>
		</div>
	);
};

export default AboutBanner;
