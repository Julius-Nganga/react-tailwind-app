import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 dark:bg-gray-900 p-6 text-white text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} ReactApp. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-200 transition duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200 transition duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;