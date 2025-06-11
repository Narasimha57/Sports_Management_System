import { Link } from 'react-router-dom';
import React from 'react'

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-black-800">Hello Welcome to Sports Management System...!! </h1>
    <Link
        to="/sports"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Click here to see all Events
      </Link>
    </div>
  );
}

export default Welcome


