import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner-img.jpg"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <img src={banner} alt="banner-img" className="absolute -z-10 h-[1550px]" />
    <nav className="text-white shadow-lg pt-[26px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between h-16 items-center">
          <div className="font-semibold">
            <Link to="/" className="flex item-center text-[16px]"><img src={logo} alt="logo" className="w-[27px] h-[27px] mr-2" /> INTERCOM</Link>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-gray-400">Trade</Link>
            <Link to="/about" className="hover:text-gray-400">Analytics</Link>
            <Link to="/services" className="hover:text-gray-400">Currencies</Link>
            <Link to="/contact" className="hover:text-gray-400">Business</Link>
            <button className="bg-[#373B65] px-6 py-3 rounded-lg">Log In</button>
            <button className="bg-gradient-to-b from-[#4F1AD6] to-[#8059E3] px-6 py-3 rounded-lg">Get an Account</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-700">
          <Link to="/" className="block px-3 py-2 rounded-md text-white hover:bg-gray-600">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-white hover:bg-gray-600">About</Link>
          <Link to="/services" className="block px-3 py-2 rounded-md text-white hover:bg-gray-600">Services</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-white hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
