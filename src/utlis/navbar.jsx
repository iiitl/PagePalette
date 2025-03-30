import React, { useState } from 'react';
import logo from '../images/logo.png'
import ThemeToggle from '../utlis/themetoggler'
import { useTheme } from "../contexts/ThemeContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    
    <div>

<nav
      className={`border-gray-200 transition-colors duration-300 ${
        theme === "dark" ? "bg-blue-800 text-white" : "bg-yellow-300 text-gray-900"
      }`}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-11 " alt="PagePallete Logo" />
            
        </a>
        <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 transition-colors ${
              theme === "dark"
                ? "bg-blue-800 text-white" // Dark mode background
                : "bg-yellow-300 text-gray-900" // Light mode background
            }`}
          >
             {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-md md:border-0 transition ${
                    theme === "dark"
                      ? "hover:text-yellow-300" // Dark mode hover effect
                      : "hover:text-blue-800" // Light mode hover effect
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle/>
            </li>
            <li className="md:hidden mt-2">
              <a
                href="#"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar