import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center py-12"
    >
      <div className="container mx-auto px-6 text-center max-w-screen-xl">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          About Me
        </h2>

        {/* Introduction */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600">
          I’m a proficient web developer specializing in the MERN stack—combining MongoDB, Express, React, and Node.js to create powerful, scalable web applications. I focus on building robust back-end systems and seamless front-end experiences, ensuring high performance, security, and an intuitive user interface. My expertise allows me to deliver complete, end-to-end solutions that meet both technical and user experience needs
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Skills & Technologies
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-1200px mx-auto text-lg">
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              React
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              JavaScript
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              Node.js
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              Express.js
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              MongoDB
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              Git
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              Tailwind CSS
            </li>
            <li className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105">
              Figma
            </li>
          </ul>
        </div>

        {/* Education Section (Optional) */}
        {/* You can add this if you'd like to include your education details */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
          <p className="text-lg text-gray-600">
            B.S. in Computer Science, XYZ University (Graduated 2023)
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
