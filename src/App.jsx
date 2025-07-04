import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TasksPage from './pages/TasksPage';
import ApiPage from './pages/ApiPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="api-data" element={<ApiPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
