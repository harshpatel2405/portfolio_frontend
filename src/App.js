import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // Import Navbar component
import HeroSection from "./components/HeroSection"; // Import HeroSection component
import AboutMe from "./components/AboutMe"; // Import AboutMe component
import Projects from "./components/Projects"; // Import Projects component
import ContactForm from "./components/ContactForm"; // Import ContactForm component
import Footer from "./components/Footer"; // Import Footer component

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 200) { // If the page is scrolled more than 200px
      setIsScrolled(true); // Show the "Go Up" button
    } else {
      setIsScrolled(false); // Hide the "Go Up" button
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on unmount
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutMe className="mb-12" />

      {/* Projects Section */}
      <Projects className="mb-12" />

      {/* Contact Form Section */}
      <ContactForm className="mb-12" />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 text-red-400 text-4xl p-4 w-160 h-160 hover:text-red-500 transition duration-300"
        aria-label="Go to top"
      >
        <i className="bi bi-arrow-up-circle-fill"></i> {/* Larger red icon */}
      </button>
      
      )}
    </div>
  );
};

export default App;
