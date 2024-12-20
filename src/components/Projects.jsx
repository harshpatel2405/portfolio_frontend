import React, { useState } from "react";
import { Helmet } from "react-helmet"; // Import react-helmet for SEO

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open and close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="projects" className="min-h-screen bg-white flex items-center justify-center py-12">
      {/* SEO with Helmet */}
      <Helmet>
        {/* <title>Harsh Patel - Projects</title> */}
        <meta
          name="description"
          content="Explore the portfolio of Harsh Patel and his cutting-edge web development projects like FireSight, a platform for fire safety management."
        />
        <meta
          name="keywords"
          content="Harsh Patel, Web Developer, Portfolio, FireSight, React, Node.js, MongoDB"
        />
        <meta property="og:title" content="Harsh Patel - Projects" />
        <meta
          property="og:description"
          content="Explore the portfolio of Harsh Patel and his cutting-edge web development projects like FireSight, a platform for fire safety management."
        />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMTa6UaWvVQVRKXzCFn409lSvKslRwaeuUg&s" />
        <meta property="og:url" content="your-website-url" />
      </Helmet>

      <div className="container mx-auto text-center p-8">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Projects</h2>

        {/* General Purpose Sentence */}
        <p className="text-lg text-gray-600 mb-8">
          Discover the cutting-edge projects that are transforming industries and driving innovation across various fields.
        </p>

        {/* FireSight Project Card */}
        <div className="flex justify-center items-center">
          <div
            className="w-96 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-xl cursor-pointer"
            onClick={toggleModal}
          >
            <div className="relative">
              {/* Image Placeholder */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMTa6UaWvVQVRKXzCFn409lSvKslRwaeuUg&s"
                alt="FireSight Project"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">FireSight</h3>
              <p className="text-gray-600 mb-4">Web Portal</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">View</button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
            onClick={toggleModal}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              {/* Modal Header with Close Button */}
              <div className="absolute top-2 right-2">
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={toggleModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">FireSight Project</h3>
              <p className="text-lg text-gray-700 mb-4">
                FireSight is a platform that ensures businesses are compliant with fire safety standards by streamlining extinguisher
                management. It allows users to track renewals, report incidents, and manage equipment in a centralized dashboard.
              </p>
              <p className="text-gray-600 mb-4">
                Built with modern technologies such as React, Node.js, and MongoDB, FireSight is a scalable solution to address the
                challenges of fire extinguisher maintenance in businesses.
              </p>

              {/* Image in Modal with Restricted Size */}
              <div className="mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMTa6UaWvVQVRKXzCFn409lSvKslRwaeuUg&s"
                  alt="FireSight Project"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              </div>

              {/* Button for Live Preview */}
              <a
                href="https://firesight.vercel.app" // Replace with your live app URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
              >
                Live Preview
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
