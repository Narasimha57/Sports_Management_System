import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Hello Hii, Welcome to Sports Management System...!! </h1>
      
      <div className="space-x-4">
        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 text-white font-semibold  rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>

        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
