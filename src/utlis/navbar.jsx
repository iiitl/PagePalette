import React, { useState } from "react";
import ThemeToggle from "./themetoggler";

const Navbar = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-teal-950 px-4 lg:px-6 py-4">
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <span
            onClick={() => navigateTo("landing")}
            className="self-center text-xl font-semibold whitespace-nowrap cursor-pointer dark:text-white"
          >
            Page Palette
          </span>
        </div>

        <div className="flex items-center lg:order-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white dark:bg-teal-950 shadow-lg lg:relative lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:shadow-none`}
          id="mobile-menu"
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 px-4 py-4 lg:py-0">
            {["home", "about", "services", "pricing", "contact"].map((page) => (
              <li key={page}>
                <a
                  onClick={() => navigateTo(page)}
                  className={`cursor-pointer block py-2 pr-4 pl-3 text-gray-700 dark:text-white rounded lg:p-0 lg:hover:bg-transparent ${
                    currentPage === page ? "text-yellow-600 dark:text-yellow-500" : ""
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              </li>
            ))}
            
            {/* Added "Get Started" button for mobile view */}
            <li className="mt-4 lg:mt-0 lg:ml-4">
              <button
                onClick={() => navigateTo("get-started")}
                className="w-full lg:w-auto px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Get Started
              </button>
            </li>
            {/* End of "Get Started" button addition */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
