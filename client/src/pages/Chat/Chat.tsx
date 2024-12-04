import React from 'react';

import styles from './Chat.module.css';

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        Messages
      </div>
    </div>
  );
};

export default Chat;