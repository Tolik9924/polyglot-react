import React from 'react';

import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.closeBtnContainer}>
            <Button 
              className={styles.closeBtn} 
              onClick={() => setIsOpen(false)}
              type='text'
            >
              <CloseOutlined />
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