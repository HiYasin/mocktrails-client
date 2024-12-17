import React, { useState, useEffect } from "react";

// Sample Component
const OfferingsGrid = () => {
  const [offerings, setOfferings] = useState([]);

  // Fetch or Import JSON Data
  useEffect(() => {
    // Simulate fetching data; replace this with a real fetch from an API or data file.
    const data = [
      { id: 1, text: "Users can create detailed profiles highlighting their professional background, skills, and areas of expertise. This information helps facilitate better mentor-mentee matches." },
      { id: 2, text: "Users can search for mentors based on specific criteria such as industry, location, language, and availability. Advanced filters help narrow down search results to find the most suitable mentors." },
      { id: 3, text: "The platform offers video conferencing capabilities, allowing mentees and mentors to schedule and conduct mentoring sessions remotely. This feature provides flexibility and convenience for users regardless of their location." },
      { id: 4, text: "This platform provides a built-in messaging system that allows mentees to communicate with potential mentors before initiating a mentoring relationship. This feature enables mentees to ask questions, discuss goals, and gauge compatibility with mentors." },
      { id: 5, text: "After each mentoring session, both mentees and mentors can provide feedback and ratings based on their experience. This feature helps maintain the quality of mentoring relationships and allows users to continuously improve." },
      { id: 6, text: "After each mentoring session, both mentees and mentors can provide feedback and ratings based on their experience. This feature helps maintain the quality of mentoring relationships and allows users to continuously improve." }
    ];
    setOfferings(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">We ARE OFFERING</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferingsGrid;
