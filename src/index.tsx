import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from "core_ui_design_system";

const navbar = [
  {
    "id": "1",
    "name": "lesson"
  },
  {
    "id": "2",
    "name": "Create Lesson"
  },
];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar list={navbar} isSticky />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
