import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo.svg";
import BlueButton from "./button/BlueButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between py-5 z-50 relative max-w-custom mx-auto">
      {/* Brand */}
      <div className="flex justify-start w-1/4">
        <Link to="/">
          <img className="h-12" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <motion.div
        className="hidden lg:flex lg:items-center justify-center lg:space-x-8 w-2/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <NavLink
          to="/features"
          className="text-accent font-medium leading-primary"
        >
          Features
        </NavLink>
        <NavLink
          to="/pricing-plans"
          className="text-accent font-medium leading-primary"
        >
          Pricing
        </NavLink>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white z-50 shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300 ease-in-out`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="flex flex-col p-6 space-y-8">
          <NavLink
            to="/features"
            className="text-accent font-medium leading-primary"
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing-plans"
            className="text-accent font-medium leading-primary"
          >
            Pricing
          </NavLink>
        </div>
      </motion.div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden relative">
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="p-2 rounded-lg text-black border border-semi-transparent-white focus:outline-none transition-transform duration-300 ease-in-out"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </motion.svg>
        </button>
      </div>

      {/* Action Button */}
      <div className="hidden w-1/4 lg:flex justify-end gap-4">
        <BlueButton pathName={"/free-trial"} text={"Get 14 Days Free Trial"} />
      </div>
    </div>
  );
};

export default Navbar;
