import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 focus:ring-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;