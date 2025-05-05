import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/logo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed top-0 left-0 right-0 z-10 font-inter bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 mx-2 md:mx-4 my-4 border shadow-md">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<h1 className="flex items-center gap-x-1">
					<img src={logo} alt="" className="h-8 w-auto" />
					<span className="text-lg md:text-xl">LOGO</span>
				</h1>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center justify-between gap-5 text-lg">
					<Link to="/" className="hover:text-[#004F98] transition-colors">
						Home
					</Link>
					<Link to="/about" className="hover:text-[#004F98] transition-colors">
						About
					</Link>
					<Link
						to="/services"
						className="hover:text-[#004F98] transition-colors"
					>
						Services
					</Link>
				</div>

				{/* Desktop Contact Button */}
				<button className="hidden md:block bg-[#004F98] text-white rounded-2xl px-5 py-2 hover:bg-[#003a70] transition-colors">
					CONTACT
				</button>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-2xl"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden py-4 flex flex-col space-y-4 animate-fadeIn">
					<Link
						to="/"
						className="block px-2 py-2 hover:bg-gray-100 rounded-lg transition-colors"
						onClick={() => setIsOpen(false)}
					>
						Home
					</Link>
					<Link
						to="/about"
						className="block px-2 py-2 hover:bg-gray-100 rounded-lg transition-colors"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						to="/services"
						className="block px-2 py-2 hover:bg-gray-100 rounded-lg transition-colors"
						onClick={() => setIsOpen(false)}
					>
						Services
					</Link>
					<button className="bg-[#004F98] text-white rounded-2xl px-5 py-2 hover:bg-[#003a70] transition-colors w-full">
						CONTACT
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
