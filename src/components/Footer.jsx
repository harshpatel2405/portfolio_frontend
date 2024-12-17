import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 text-center py-6">
      <p className="text-sm md:text-base">
        &copy; {currentYear} <span className="font-semibold">Harsh Patel</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
