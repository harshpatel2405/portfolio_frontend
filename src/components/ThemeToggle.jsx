import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check the saved theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark"); // Apply dark mode
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark"); // Remove dark mode
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-gray-800 rounded-full shadow-md transition-all duration-500 hover:bg-gray-600"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
