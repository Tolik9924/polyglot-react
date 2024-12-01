import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
/* import { Navbar } from "core_ui_design_system"; */
import Navbar from './components/Navbar/Navbar.tsx';
import { OpenModalProvider } from './context/OpenModalContext.tsx';
import { ChangeThemeProvider } from './context/ChangeThemeContext.tsx';

const navbar = [
  {
    "id": "1",
    "name": "Login"
  },
];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenModalProvider>
        <ChangeThemeProvider>
          <Navbar isSticky />
          <App />
        </ChangeThemeProvider>
      </OpenModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
