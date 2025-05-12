import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { locations } from "../ContactPageComponents/Location";
import logo from "/assets/footerLogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
	const menuItems = [
		{ name: "Über", path: "/Über" },
		{ name: "kontaktieren", path: "/kontaktieren" },
		{ name: "Dienstleistungen", path: "/Dienstleistungen" },
		{ name: "Impressum & Datenschutz", path: "ImpressumDatenschutz" },
	];

	return (
		<footer className="bg-primary text-white py-10 px-5">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
				{/* Logo and Description */}
				<div className="flex flex-col gap-4 w-full md:w-1/3 text-center md:text-left items-center md:items-start">
					<img src={logo} className="w-32" alt="Logo" />
					<p>
						Von der Abholung bis zur Zustellung
						<br />
						Präzision in jedem Paket
					</p>
				</div>

				{/* Navigation Links */}
				<nav className="flex flex-col w-full md:w-1/3 items-center md:items-center space-y-3 font-semibold text-center">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							to={item.path}
							className="hover:text-blue-400 transition-colors duration-200"
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Locations */}
				<div className="w-full md:w-1/3 flex flex-col gap-6 ">
					{locations.map((location) => (
						<div key={location.id} className="text-center md:text-left">
							<h2 className="text-lg lg:text-2xl font-bold">{location.name}</h2>
							<div className="mt-2 space-y-2">
								<div className="flex items-center justify-center md:justify-start gap-2">
									<FaMapMarkerAlt size={18} />
									<p>{location.address}</p>
								</div>
								<div className="flex items-center justify-center md:justify-start gap-2">
									<FaPhone size={18} />
									<p>{location.phone}</p>
								</div>
								<div className="flex items-center justify-center md:justify-start gap-2">
									<FaEnvelope size={18} />
									<p>{location.email}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};
