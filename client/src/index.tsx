import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { OpenModalProvider } from './context/OpenModalContext.tsx';
import { ChangeThemeProvider } from './context/ChangeThemeContext.tsx';
import { LoginProvider } from './context/LoginContext.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenModalProvider>
        <ChangeThemeProvider>
          <LoginProvider>
            <Navbar isSticky />
            <App />
          </LoginProvider>
        </ChangeThemeProvider>
      </OpenModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
