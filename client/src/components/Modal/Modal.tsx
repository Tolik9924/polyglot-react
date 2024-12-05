import React from 'react';
import Button from '../../ui-components/Button/Button.tsx';
import { CloseOutlined } from '@ant-design/icons';
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, children }) => (
  <>
    <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div className={styles.closeBtnContainer}>
          <Button
            onClick={() => setIsOpen(false)}
            type="link"
          >
            <CloseOutlined className="closeBtn" />
          </Button>
        </div>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  </>
);

export default Modal;