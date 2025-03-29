import React from "react";
import logo from "../images/logo.png";
import ThemeToggle from "../utlis/themetoggler";

const Navbar = ({ setPage }) => {  // ✅ Receive setPage as a prop
  return (
    <nav className="bg-white border-gray-200 dark:bg-teal-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-11" alt="PagePallete Logo" />
        </a>

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-teal-950 md:dark:bg-teal-950 dark:border-gray-700">
            <li>
              <button onClick={() => setPage("landing")} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-amber-400 md:p-0 dark:text-white md:dark:text-amber-400">Home</button>
            </li>
            <li>
              <button onClick={() => setPage("about")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-white md:dark:hover:text-amber-400">About</button>
            </li>
            <li>
              <button onClick={() => setPage("services")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-white md:dark:hover:text-amber-400">Services</button>
            </li>
            <li>
              <button onClick={() => setPage("pricing")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-white md:dark:hover:text-amber-400">Pricing</button>
            </li>
            <li>
              <button onClick={() => setPage("contact")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-white md:dark:hover:text-amber-400">Contact</button>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
