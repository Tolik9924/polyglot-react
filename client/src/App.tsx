import React, { useContext, useState } from 'react';

import RouterWrapper from './routes/AppRouter.tsx';
import Modal from './components/Modal/Modal.tsx';
import { OpenModalContext } from './context/OpenModalContext.tsx';

import './App.css';
import { Button } from 'antd';
import Login from './components/Login/Login.tsx';
import Registration from './components/Registration/Registration.tsx';

function App() {
  const { isOpen, setIsOpen } = useContext(OpenModalContext);

  const [openLogin, setOpenLogin] = useState(true);

  return (
    <div className="App">
      {isOpen && <Modal setIsOpen={setIsOpen}>
        <div className="modal-container">
          <div className='switch-form-container'>
            <Button
              className='switch-button'
              type='text'
              onClick={() => setOpenLogin(true)}
              disabled={openLogin}
            >
              Login
            </Button>
            <Button
              className='switch-button'
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
