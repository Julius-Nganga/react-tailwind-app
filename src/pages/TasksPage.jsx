import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import Button from '../components/button';
import useLocalStorage from '../hooks/useLocalStorage';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => (
  <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <span
      className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
      onClick={() => onToggleComplete(task.id)}
    >
      {task.text}
    </span>
    <div className="flex space-x-2">
      <Button
        onClick={() => onToggleComplete(task.id)}
        variant={task.completed ? 'secondary' : 'primary'}
        className="!px-3 !py-1 text-sm"
      >
        {task.completed ? 'Undo' : 'Complete'}
      </Button>
      <Button
        onClick={() => onDeleteTask(task.id)}
        variant="danger"
        className="!px-3 !py-1 text-sm"
      >
        Delete
      </Button>
    </div>
  </div>
);

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

const TasksPage = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTask = useCallback(() => {
    if (newTask.trim() === '') return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: newTask, completed: false },
    ]);
    setNewTask('');
  }, [newTask, setTasks]);

  const toggleTaskCompletion = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Example of useEffect for a side effect (not strictly necessary with useLocalStorage)
  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Task Manager</h2>

        <div className="flex mb-4 space-x-2">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask} variant="primary">
            Add Task
          </Button>
        </div>

        <div className="flex justify-center space-x-2 mb-6">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'primary' : 'secondary'}
            className="!px-4 !py-2 text-sm"
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('active')}
            variant={filter === 'active' ? 'primary' : 'secondary'}
            className="!px-4 !py-2 text-sm"
          >
            Active
          </Button>
          <Button
            onClick={() => setFilter('completed')}
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            className="!px-4 !py-2 text-sm"
          >
            Completed
          </Button>
        </div>

        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No tasks found for this filter.</p>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={toggleTaskCompletion}
                onDeleteTask={deleteTask}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default TasksPage;