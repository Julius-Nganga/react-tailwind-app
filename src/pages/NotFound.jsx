import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Card from '../components/Card';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
      <Card className="max-w-md">
        <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">404</h1>
        <p className="text-2xl text-gray-800 dark:text-gray-200 mb-6">Page Not Found</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist or an error occurred.
        </p>
        <Link to="/">
          <Button variant="primary">Go to Home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;