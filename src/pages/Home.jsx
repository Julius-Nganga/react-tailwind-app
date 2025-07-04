import React from 'react';
import Card from '../components/Card';
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
      <Card className="max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-800 dark:text-blue-300">
          Welcome to ReactApp task Manager!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          This application demonstrates a responsive React project built with
          JSX, state management using hooks, API integration, and styled
          beautifully with the latest Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button variant="primary">Go to Tasks</Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary">Explore API Data</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;