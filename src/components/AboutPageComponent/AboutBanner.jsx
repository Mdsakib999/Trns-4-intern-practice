import { Link } from "react-router-dom";

const AboutBanner = () => {
	return (
		<div
			data-aos="zoom-in-up"
			className="text-center flex flex-col mt-28 space-y-5 mb-16 px-4"
		>
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
				Über Unser <span className="text-primary">Unternehmen</span>
			</h1>
			<div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto text-sm sm:text-base">
				ECML Logistics ist ein vertrauenswürdiger Anbieter internationaler
				Speditions- und Logistiklösungen und spezialisiert sich auf
				maßgeschneiderte Import- und Exportdienstleistungen mit Schwerpunkt auf
				Osteuropa. Wir bieten ein umfassendes Transportmanagement zu Land, zu
				Wasser und in der Luft und gewährleisten dabei eine zuverlässige,
				effiziente und transparente Lieferung in jeder Phase. Unser erfahrenes
				Team engagiert sich dafür, Unternehmen beim nahtlosen und sicheren
				Warenverkehr über Grenzen hinweg zu unterstützen.
			</div>
			<Link to="/kontaktieren">
				<button className="cursor-pointer bg-primary text-white px-5 py-2 rounded mx-auto text-sm sm:text-base">
					Jetzt kontaktieren
				</button>
			</Link>
		</div>
	);
};

export default AboutBanner;
