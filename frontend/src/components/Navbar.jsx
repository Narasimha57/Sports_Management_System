import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Sports Management System</Link>
        </div>

        {/* Hamburger icon (mobile) */}

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

     {/* Right: Navigation links (desktop) */ }

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact Us</Link>
          <Link to="/login" className="hover:text-yellow-300 transition">Logout</Link>
        </div>
      </div>

      {/*  Mobile Menu */}

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-500">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Contact Us</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
