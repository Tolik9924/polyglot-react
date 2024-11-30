import React from 'react';
import styles from "./Modal.module.css";
import { Button } from 'antd';

const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <Button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </Button>
          <div className={styles.modalContent}>
           {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;