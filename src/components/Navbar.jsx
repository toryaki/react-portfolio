import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
              Tory Deutsch
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
            <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
