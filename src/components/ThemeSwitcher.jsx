import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './button';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="secondary" className="!px-3 !py-1 text-sm">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
};

export default ThemeSwitcher;