import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 dark:bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          ReactApp
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/" className="text-white hover:text-blue-200 transition duration-200">
            Home
          </Link>
          <Link to="/tasks" className="text-white hover:text-blue-200 transition duration-200">
            Tasks
          </Link>
          <Link to="/api-data" className="text-white hover:text-blue-200 transition duration-200">
            API Data
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;