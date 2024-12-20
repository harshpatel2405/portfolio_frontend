import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <meta name="copyright" content="Harsh Patel" />
        <meta name="author" content="Harsh Patel" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <footer className="bg-white text-gray-900 text-center py-6">
        <p className="text-sm md:text-base">
          &copy; {currentYear} <span className="font-semibold">Harsh Patel</span>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
