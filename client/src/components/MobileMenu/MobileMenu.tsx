import React from "react";
import Button from "../../ui-components/Button/Button.tsx";
import Input from "../../ui-components/Input/Input.tsx";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ setIsOpen, isOpen, list, handleActiveUser }) => {
  console.log("isOpen: ", isOpen);

  return (
    <nav className={styles.menu}>
      <div className={styles.buttonContainer}>
        <Button onClick={() => setIsOpen(false)} type="link">
          <CloseOutlined />
        </Button>
      </div>
      <div className={styles.inputContainer}>
        <Input placeholder="Search..." prefix={<SearchOutlined />} />
      </div>
      <ul className={styles.items}>
        {list.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            onClick={() => {
              handleActiveUser(item.id);
              setIsOpen(false);
            }}
          >
            <div className={styles.messageContainer}>
              <div>
                <img src={item.image} alt="user" className={styles.userPhoto} />
                <div className={styles.online}></div>
              </div>
              <div className={styles.nameAndMessage}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.lastMessage}>{item.lastMessage}</p>
              </div>
            </div>
            <p className={styles.time}>{item.time}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
