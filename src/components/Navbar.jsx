import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-white text-gray-800 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo (Image instead of Text) */}
        <div className="flex items-center space-x-3">
          <img
            src="/fotor-20241218162215.png" // Replace with your image URL or path
            alt="Profile Image"
            className="w-12 h-12 rounded-full object-cover shadow-md"
          />
          <h1 className="text-2xl font-semibold">
            <span className="text-purple-600">Harsh</span> Patel
          </h1>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleMenu}
            className="p-2 bg-gray-800 text-white rounded-full shadow-md transition-all duration-300 hover:bg-gray-600 relative w-10 h-10 flex items-center justify-center"
          >
            {/* Hamburger Icon */}
            <span
              className={`w-6 h-0.5 block bg-white transition-all duration-300 transform ${
                isMenuOpen ? "rotate-45" : ""
              }`}
              style={{
                position: "absolute",
                top: "37%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "absolute top-0 rotate-0 transform" : "relative"
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen
                    ? "absolute top-0 -rotate-90 transform"
                    : "relative"
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        <ul className="space-y-4 text-lg bg-white text-gray-800 py-4 px-6">
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => {
              scrollToSection("home");
              setIsMenuOpen(false); // Close the menu after clicking
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false); // Close the menu after clicking
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => {
              scrollToSection("projects");
              setIsMenuOpen(false); // Close the menu after clicking
            }}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false); // Close the menu after clicking
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
