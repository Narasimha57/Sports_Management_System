import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base font-bold">
          &copy; {new Date().getFullYear()} Sports Management System. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm mt-1 FONT font-bold">
          This platform is designed to simplify and streamline the SPORTS MANAGEMENT SYSTEM</p>
      </div>
    </footer>
  );
};

export default Footer;
