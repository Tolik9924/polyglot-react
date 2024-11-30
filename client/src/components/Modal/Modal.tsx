import React from 'react';
import styles from "./Modal.module.css";
import { Button } from 'antd';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <Button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </Button>
          <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </Button>
              <Button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;