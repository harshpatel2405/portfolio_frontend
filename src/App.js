import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Preloader from "./Preloader"; // Import Preloader

// LazyLoadWrapper Component for Animations
const LazyLoadWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {isVisible && children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <LazyLoadWrapper>
            <HeroSection />
          </LazyLoadWrapper>

          {/* About Me Section */}
          <LazyLoadWrapper>
            <AboutMe className="mb-12 md:mb-16 lg:mb-20" />
          </LazyLoadWrapper>

          {/* Projects Section */}
          <LazyLoadWrapper>
            <Projects className="mb-12 md:mb-16 lg:mb-20" />
          </LazyLoadWrapper>

          {/* Contact Form Section */}
          <LazyLoadWrapper>
            <ContactForm className="mb-12 md:mb-16 lg:mb-20" />
          </LazyLoadWrapper>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Button */}
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 text-red-400 p-3 sm:p-4 md:p-5 lg:p-6 hover:text-red-500 transition duration-300 rounded-full shadow-md bg-white dark:bg-gray-800"
              aria-label="Go to top"
            >
              <i className="bi bi-arrow-up-circle-fill text-3xl sm:text-4xl md:text-5xl"></i>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default App;
