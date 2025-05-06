import React from "react";
import AboutBanner from "../../components/AboutPageComponent/AboutBanner";
import Logistics from "../../components/AboutPageComponent/Logistics";
import Review from "../../components/HomePageComponents/Review";
import { Contact } from "../../components/ServicePageComponents/Contact";

const About = () => {
	return (
		<div>
			<AboutBanner />
			<Logistics />
			<Review />
			<Contact />
		</div>
	);
};

export default About;
