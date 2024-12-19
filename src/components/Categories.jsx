import React, { useState, useEffect } from "react";
import {
  FaUserTie,
  FaSearch,
  FaVideo,
  FaEnvelope,
  FaStar,
} from "react-icons/fa"; 
const CategoriesGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Category 1",
        icon: <FaSearch className="text-4xl text-gray-800" />,
      },
      {
        id: 2,
        name: "Category 2 ",
        icon: <FaSearch className="text-4xl text-gray-800" />,
      },
      {
        id: 3,
        name: "Category 3",
        icon: <FaSearch className="text-4xl text-gray-800" />,
      },
    ];
    setCategories(data); // Correctly setting the state here
  }, []); // useEffect ensures this runs once on component mount

  return (
    <main className="container w-full md:w-10/12 my-16 mx-auto">
      <div className="grid grid-cols-12 w-full gap-3">
        <div className="col-span-12">
          <h3 className="font-medium text-2xl"> Serach By Categories</h3>
        </div>
        {categories.map((items) => {
          return (
            <div
              key={items.id}
              className="col-span-6 bg-white p-16 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
            <div className="flex flex-col items-center text-center">
            <div>{items.icon}</div>
                <h3 className="my-2 text-lg font-semibold text-gray-800">
                  {items.name}
                </h3>
              
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default CategoriesGrid;
