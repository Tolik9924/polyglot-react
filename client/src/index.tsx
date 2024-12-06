import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { 
  MoonOutlined, 
  StrikethroughOutlined, 
  CommentOutlined, 
  UserOutlined 
} from '@ant-design/icons';
import App from './App.tsx';
import Navbar from './ui-components/Navbar/Navbar.tsx';
import { ModalProvider } from './context/ModalContext.tsx';
import { ChangeThemeProvider } from './context/ChangeThemeContext.tsx';
import { LoginProvider } from './context/LoginContext.tsx';
import './index.css';

const rightItems = [
  {
    href: '/chat',
    children: <CommentOutlined />,
    isModal: false
  },
  {
    href: '',
    children: <UserOutlined />,
    isModal: true
  }
];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ChangeThemeProvider>
          <LoginProvider>
            <Navbar 
              isSticky 
              rightItems={[...rightItems]}
            />
            <App />
          </LoginProvider>
        </ChangeThemeProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
