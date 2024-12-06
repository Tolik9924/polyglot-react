import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'antd';
import Modal from './components/Modal/Modal.tsx';
import Login from './components/Login/Login.tsx';
import Registration from './components/Registration/Registration.tsx';
import RouterWrapper from './routes/AppRouter.tsx';
import { ModalContext } from './context/ModalContext.tsx';
import { ChangeThemeContext } from './context/ChangeThemeContext.tsx';
import { LoginContext } from './context/LoginContext.tsx';
import setBodyColor from './common_utils/setBodyColor/setBodyColor.tsx';
import './App.css';

function App() {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const [openLogin, setOpenLogin] = useState(true);

  const { theme } = useContext(ChangeThemeContext);

  useEffect(() => {
    if (theme === 'light') {
      setBodyColor({ color: "#ffffff" });
    }
    if (theme === 'dark') {
      setBodyColor({ color: "rgb(35 39 47 / 0.95)" });
    }
  }, [theme]);

  return (
    <div className='body' data-theme={theme}>
      <div className={"App"}>
        {!isLogin && isOpen && <Modal setIsOpen={setIsOpen}>
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
        {isLogin && isOpen && <Modal setIsOpen={setIsOpen}>
          <div className='profile-container'>
            <h3 className='profile-header'>Profile</h3>
            <Button
              type='primary'
              ghost
              onClick={() => {
                setIsLogin(false);
                setIsOpen(false);
              }}
            >
              Logout
            </Button>
          </div>
        </Modal>}
        <RouterWrapper />
      </div>
    </div>
  );
}

export default App;
