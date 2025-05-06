import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ].map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "bg-primary text-white font-semibold py-2 px-4 rounded-3xl"
          : "hover:bg-secondary hover:text-black py-2 px-4 rounded-3xl"
      }
      end={item.path === "."}
    >
      <span className="ml-2">{item.name}</span>
    </NavLink>
  ));
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
          {menuItems}
        </div>

        {/* Desktop Contact Button */}
        <Link to="/contact">
          {" "}
          <button className="hidden md:block bg-[#004F98] text-white rounded-2xl px-5 py-2 hover:bg-[#003a70] transition-colors">
            CONTACT
          </button>
        </Link>

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
          {menuItems}
          <Link to="/contact">
            {" "}
            <button className="bg-[#004F98] text-white rounded-2xl px-5 py-2 hover:bg-[#003a70] transition-colors w-full">
              CONTACT
            </button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
