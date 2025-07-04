import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <main className="flex-grow container mx-auto p-4 dark:bg-gray-800 dark:text-white transition-colors duration-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;