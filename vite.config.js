// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Replace 'react-tailwind-app' with the actual name of your GitHub repository.
// For example, if your repo is 'my-personal-website', then REPO_NAME = 'my-personal-website';
const REPO_NAME = 'react-tailwind-app'; // Assuming your repository is named 'react-tailwind-app'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`, // Set the base path for GitHub Pages
  
  
});