import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center py-12"
    >
      <Helmet>
        {/* SEO Title */}
        <title>About Me | Harsh Patel - MERN Stack Web Developer</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="I’m a proficient web developer specializing in the MERN stack—MongoDB, Express, React, Node.js. I focus on creating powerful, scalable, and high-performance web applications."
        />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="About Me | Web Developer Specializing in MERN Stack" />
        <meta
          property="og:description"
          content="I’m a proficient web developer specializing in the MERN stack—MongoDB, Express, React, Node.js. I focus on creating powerful, scalable, and high-performance web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile-image.jpg" /> {/* Change image URL */}

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="About Me | Web Developer Specializing in MERN Stack" />
        <meta
          name="twitter:description"
          content="I’m a proficient web developer specializing in the MERN stack—MongoDB, Express, React, Node.js. I focus on creating powerful, scalable, and high-performance web applications."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container mx-auto px-6 text-center max-w-screen-xl">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl text-gray-600">
            I’m a proficient web developer specializing in the MERN stack—combining MongoDB, Express, React, and Node.js to create powerful, scalable web applications. I focus on building robust back-end systems and seamless front-end experiences, ensuring high performance, security, and an intuitive user interface. My expertise allows me to deliver complete, end-to-end solutions that meet both technical and user experience needs.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills & Technologies</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-1200px mx-auto text-lg">
            {["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Git", "Tailwind CSS", "Figma"].map((skill, index) => (
              <motion.li
                key={index}
                className="bg-gray-200 p-4 rounded-lg text-center text-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Education Section (Optional) */}
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
