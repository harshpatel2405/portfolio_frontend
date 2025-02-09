import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Harsh Patel - Web Developer | Impactful Web Experiences</title>
        <meta
          name="description"
          content="Harsh Patel is a skilled web developer specializing in modern, scalable, and user-friendly websites. Contact Harsh for web development services and projects."
        />
        <meta name="google-site-verification" content="3_5ClwByX9jk1slTGVX0NpHCC79LPFlqdI6adgkc4UI" />
        <meta
          name="keywords"
          content="Harsh Patel, Web Developer, Web Development, Frontend Developer, Scalable Websites, User-Friendly Websites, React, JavaScript, Full Stack Development"
        />
        <meta name="author" content="Harsh Patel" />
        <meta property="og:title" content="Harsh Patel - Web Developer" />
        <meta
          property="og:description"
          content="Harsh Patel is a skilled web developer specializing in creating impactful and scalable web experiences. Let’s bring your ideas to life."
        />
        <meta property="og:image" content="/fotor-20241218162215.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        id="home"
        className="h-screen flex items-center justify-center px-6 py-12 bg-white text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Right Side - Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src="/fotor-20241218162215.png"
              alt="Harsh Patel - Web Developer"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-600 mb-6 md:mb-0"
              loading="lazy" // Lazy loading for performance
            />
          </motion.div>

          {/* Left Side - Name, Job Title, Summary, and Social Links */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 md:mr-12"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-600">
              Harsh Patel
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Web Developer
            </h2>
            <p className="mt-4 text-lg font-light text-gray-600 max-w-md mx-auto md:mx-0">
              I’m a Web Developer creating impactful web experiences. Let’s
              bring your ideas to life with modern, scalable, and user-friendly
              websites.
            </p>

            {/* Contact Info with Social Links */}
            <div className="mt-6 flex flex-col items-center md:items-start space-y-4">
              <motion.div
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Email */}
                <div className="flex items-center space-x-3 px-4 py-2 bg-white rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                  <FaEnvelope className="text-lg text-blue-600" />
                  <span className="text-blue-700">harshpatel42.it@gmail.com</span>
                </div>
                {/* Phone */}
                <div className="flex items-center space-x-3 px-4 py-2 bg-white rounded-full shadow-md hover:bg-purple-100 transition duration-300">
                  <FaPhoneAlt className="text-lg text-blue-600" />
                  <span className="text-blue-700">+91 99999 88888</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center md:justify-start space-x-6 mt-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              >
                <a
                  href="https://github.com/harshpatel2405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-patel-245c685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
