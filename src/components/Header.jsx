// src/components/Header/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl font-bold text-blue-600 md:text-3xl transition duration-300 transform hover:scale-105">
          10G Class Reunion
        </h1>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-blue-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? "✖️" : "☰"} {/* Hamburger icon */}
          </button>
        </div>

        {/* Navigation links */}
        <nav>
          <ul
            className={`${
              isOpen ? "flex flex-col" : "hidden"
            } md:flex md:flex-row absolute md:static top-full left-0 w-full bg-white md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none h-screen md:h-auto z-40 transition-all duration-300 ease-in-out`}
          >
            <li className="flex-grow text-center md:text-left">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 px-4 rounded-lg md:rounded-none"
                onClick={() => setIsOpen(false)} // Close the menu on link click
              >
                Home
              </Link>
            </li>
            <li className="flex-grow text-center md:text-left">
              <Link
                to="/gallery"
                className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 px-4 rounded-lg md:rounded-none"
                onClick={() => setIsOpen(false)} // Close the menu on link click
              >
                Gallery
              </Link>
            </li>
            <li className="flex-grow text-center md:text-left">
              <Link
                to="/friends"
                className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 px-4 rounded-lg md:rounded-none"
                onClick={() => setIsOpen(false)} // Close the menu on link click
              >
                Friends
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Full-screen overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)} // Close the menu on overlay click
        />
      )}

      {/* Dropdown menu styling */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 transition duration-300 py-4 px-6 w-full text-center border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-blue-500 transition duration-300 py-4 px-6 w-full text-center border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/friends"
            className="text-gray-700 hover:text-blue-500 transition duration-300 py-4 px-6 w-full text-center border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Friends
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
