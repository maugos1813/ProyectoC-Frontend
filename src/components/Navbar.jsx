import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 flex justify-between items-center">
      <div className="text-white text-lg">Logo</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/store" className="text-white">Store</Link>
        <Link to="/news" className="text-white">News</Link>
      </div>
    </nav>
  );
};

