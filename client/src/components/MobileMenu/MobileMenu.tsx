import React from 'react';

import styles from './MobileMenu.module.css';
import Button from '../../ui-components/Button/Button.tsx';

const MobileMenu = ({ setIsOpen, list }) => {
  return (
    <nav className={styles.menu}>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
      <ul className={styles.items}>
        {list.map((item) => (
          <li key={item.id} className={styles.item}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;