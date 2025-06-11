import React from "react";
import { Link } from "react-router-dom";

const sportsData = [
  {
    name: "KHO-KHO",
    image: "https://tinyurl.com/47nsyye6",
  },
  {
    name: "Cricket",
    image: "https://shorturl.at/AHF9n",
  },
  {
    name: "Kabaddi",
    image: "https://shorturl.at/XutlK",
  },
  {
    name: "Table Tennis",
    image: "https://tinyurl.com/2pbuvn24",
  },
  {
    name: "Treasure Hunt",
    image: "https://tinyurl.com/yduhdzde",
  },
  {
    name: "Volley Ball",
    image: "https://tinyurl.com/y8wnr8h6",
  },
  {
    name: "Basket Ball",
    image: "https://tinyurl.com/4x3arsmr",
  },
  {
    name: "Foot Ball",
    image: "https://tinyurl.com/397sh5sn",
  },
  {
    name: "Badminton",
    image: "https://tinyurl.com/4z5dhrrp",
  },
  {
    name: "Hand Ball",
    image: "https://tinyurl.com/3zmtbn25",
  },
  {
    name: "Cycling",
    image: "https://tinyurl.com/5duasavz",
  },
  {
    name: "Thug of War",
    image: "https://tinyurl.com/3wntssyt",
  },
];

const Sports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-black-700 mb-8 text-center py-8">
        Sports We Organize
      </h1>

      {/* Sports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sportsData.map((sport, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {sport.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Register Button - outside the grid */}
      <div className="text-center mt-12">
        {/* <Link
          to="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition duration-300 font-semibold"
        >
          Click here to Register
        </Link> */}
        <a
          href="https://forms.gle/cP1xUCyfhCsBvGqa7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition duration-300 font-semibold"
        >
          Click here to Register
        </a>
      </div>
    </div>
  );
};

export default Sports;
