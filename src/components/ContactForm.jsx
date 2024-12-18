import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("All fields are required.");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setStatus("There was an error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto text-center p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h2>
        <form className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-gray-900"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-gray-900"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-gray-900"
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 rounded-md transition duration-300 ${
              isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            } text-white focus:outline-none`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>

        {status && (
          <div
            className={`mt-4 text-lg font-semibold ${
              status === "Message sent successfully!" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
