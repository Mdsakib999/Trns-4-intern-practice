import logo from "/assets/Logo2.png";
import { Link } from "react-router-dom";

export const Footer = () => {
	const menuItems = [
		{ name: "About", path: "/about" },
		{ name: "Contact", path: "/contact" },
		{ name: "Logistics", path: "#" },
		{ name: "Services", path: "/services" },
	];

	return (
		<footer className="flex items-center justify-center text-center bg-primary h-80">
			<div>
				{/* Logo */}
				<div className="flex justify-center items-center gap-4 mb-8">
					<img src={logo} alt="Logo" className="h-6" />{" "}
					<span className="text-2xl font-semibold text-white">LOGO </span>
				</div>

				{/* Navigation Links */}
				<nav className="flex flex-col md:flex-row md:justify-center md:space-x-8 mb-4 gap-5">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							to={item.path}
							className="text-white hover:text-black transition hover:font-semibold"
						>
							{item.name}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	);
};
