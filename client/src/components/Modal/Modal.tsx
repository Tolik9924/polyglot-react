import React from 'react';

import ButtonAnt from '../../ui-components/ButtonAnt/ButtonAnt.tsx';
import { CloseOutlined } from '@ant-design/icons';

import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, children }) => (
  <>
    <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div className={styles.closeBtnContainer}>
          <ButtonAnt
            onClick={() => setIsOpen(false)}
            variant='link'
          >
            <CloseOutlined className="closeBtn" />
          </ButtonAnt>
        </div>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  </>
);

export default Modal;