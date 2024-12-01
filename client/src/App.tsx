import React, { useContext, useEffect, useState } from 'react';

import RouterWrapper from './routes/AppRouter.tsx';
import Modal from './components/Modal/Modal.tsx';
import { OpenModalContext } from './context/OpenModalContext.tsx';

import './App.css';
import { Button } from 'antd';
import Login from './components/Login/Login.tsx';
import Registration from './components/Registration/Registration.tsx';
import { classes } from 'core_ui_design_system';
import { ChangeThemeContext } from './context/ChangeThemeContext.tsx';

function App() {
  const { isOpen, setIsOpen } = useContext(OpenModalContext);

  const [openLogin, setOpenLogin] = useState(true);

  const { theme } = useContext(ChangeThemeContext);

  return (
    <div className="App">
      {isOpen && <Modal setIsOpen={setIsOpen}>
        <div className="modal-container">
          <div className='switch-form-container'>
            <Button
              style={{
                width: '200px',
                fontSize: '22px',
                fontWeight: 500,
                lineHeight: '32px',
                color: theme === 'light' ? 
                  openLogin ? '#7f7f7f' : 'rgb(35 39 47 / 0.95)' : 
                  openLogin ? '#b2b2b2' : '#fff' 
              }}
              type='text'
              onClick={() => setOpenLogin(true)}
              disabled={openLogin}
            >
              Login
            </Button>
            <Button
              style={{
                width: '200px',
                fontSize: '22px',
                fontWeight: 500,
                lineHeight: '32px',
                color: theme === 'light' ? 
                !openLogin ? '#7f7f7f' : 'rgb(35 39 47 / 0.95)' : 
                !openLogin ? '#b2b2b2' : '#fff'
              }}
              type='text'
              onClick={() => setOpenLogin(false)}
              disabled={!openLogin}
            >
              Registration
            </Button>
          </div>
          <div className='form'>
            {openLogin ? <Login /> : <Registration />}
          </div>
        </div>
      </Modal>}
      <RouterWrapper />
    </div>
  );
}

export default App;
