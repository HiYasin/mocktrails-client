import React, { useState, useEffect } from "react";
import { FaUserTie, FaSearch, FaVideo, FaEnvelope, FaStar } from "react-icons/fa"; // Sample icons

const OfferingsGrid = () => {
  const [offerings, setOfferings] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        heading: "Profile Creation",
        icon: <FaUserTie className="text-4xl text-gray-800" />,
        details:
          "Users can create detailed profiles highlighting their professional background, skills, and areas of expertise. This information helps facilitate better mentor-mentee matches.",
      },
      {
        id: 2,
        heading: "Mentor Search",
        icon: <FaSearch className="text-4xl text-gray-800" />,
        details:
          "Users can search for mentors based on specific criteria such as industry, location, language, and availability. Advanced filters help narrow down search results to find the most suitable mentors.",
      },
      {
        id: 3,
        heading: "Video Conferencing",
        icon: <FaVideo className="text-4xl text-gray-800" />,
        details:
          "The platform offers video conferencing capabilities, allowing mentees and mentors to schedule and conduct mentoring sessions remotely. This feature provides flexibility and convenience for users regardless of their location.",
      },
      {
        id: 4,
        heading: "Messaging System",
        icon: <FaEnvelope className="text-4xl text-gray-800" />,
        details:
          "This platform provides a built-in messaging system that allows mentees to communicate with potential mentors before initiating a mentoring relationship. This feature enables mentees to ask questions, discuss goals, and gauge compatibility with mentors.",
      },
      {
        id: 5,
        heading: "Feedback & Ratings",
        icon: <FaStar className="text-4xl text-gray-800" />,
        details:
          "After each mentoring session, both mentees and mentors can provide feedback and ratings based on their experience. This feature helps maintain the quality of mentoring relationships and allows users to continuously improve.",
      },
      {
        id: 6,
        heading: "Feedback & Ratings",
        icon: <FaStar className="text-4xl text-gray-800" />,
        details:
          "After each mentoring session, both mentees and mentors can provide feedback and ratings based on their experience. This feature helps maintain the quality of mentoring relationships and allows users to continuously improve.",
      },
      {
        id: 7,
        heading: "Messaging System",
        icon: <FaEnvelope className="text-4xl text-gray-800" />,
        details:
          "This platform provides a built-in messaging system that allows mentees to communicate with potential mentors before initiating a mentoring relationship. This feature enables mentees to ask questions, discuss goals, and gauge compatibility with mentors.",
      },
      {
        id: 8,
        heading: "Video Conferencing",
        icon: <FaVideo className="text-4xl text-gray-800" />,
        details:
          "The platform offers video conferencing capabilities, allowing mentees and mentors to schedule and conduct mentoring sessions remotely. This feature provides flexibility and convenience for users regardless of their location.",
      },
    ];
    setOfferings(data);
  }, []);

  return (
    <div className="w-full md:w-10/12 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">We ARE OFFERING</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((item) => (
          <div
            key={item.id}
            className="relative group w-full bg-white p-16 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Default Content */}
            <div className="flex flex-col items-center text-center group-hover:opacity-0 group-hover:invisible transition-opacity duration-300">
              {item.icon}
              <h2 className="mt-2 text-lg font-semibold text-gray-800">{item.heading}</h2>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <p className="text-gray-700">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferingsGrid;
