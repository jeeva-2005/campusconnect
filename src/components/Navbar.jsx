import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md fixed top-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-700">CampusConnect</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-700 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-700 font-medium">About</Link>
        <Link to="/vision" className="text-gray-700 hover:text-indigo-700 font-medium">Vision</Link>
        <Link to="/features" className="text-gray-700 hover:text-indigo-700 font-medium">Features</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-700 font-medium">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

