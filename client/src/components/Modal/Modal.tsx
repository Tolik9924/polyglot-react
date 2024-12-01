import React, { useContext } from 'react';

import { Button } from 'antd';

import { ChangeThemeContext } from '../../context/ChangeThemeContext.tsx';

import { CloseOutlined } from '@ant-design/icons';

import styles from "./Modal.module.css";
import { classes } from 'core_ui_design_system';

const Modal = ({ setIsOpen, children }) => {
  const { theme } = useContext(ChangeThemeContext);

  console.log("Theme: ", theme);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={classes(styles.centered, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark'
      })}>
        <div className={styles.modal}>
          <div className={styles.closeBtnContainer}>
            <Button 
              className={styles.closeBtn} 
              onClick={() => setIsOpen(false)}
              type='text'
            >
              <CloseOutlined style={{ color: theme === 'light' ? 'rgb(35 39 47 / 0.95)' : "#fff" }} />
            </Button>
          </div>
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;