import React from 'react';
import styles from './Chat.module.css';
import Input from '../../ui-components/Input/Input.tsx';
import {
  SearchOutlined,
  UserOutlined,
  SendOutlined
} from '@ant-design/icons';
import Button from '../../ui-components/Button/Button.tsx';

const users = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    name: 'Megan Leib',
    lastMessage: '9 pm at the bar if bossible 😳',
    time: '12 sec'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg',
    name: 'Dave Corlew',
    lastMessage: "Let's meet for a coffee or somet",
    time: '3 min'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    name: 'Jerome Seiber',
    lastMessage: "I've sent you the annual report",
    time: '12 sec'
  },
  {
    id: 4,
    image: 'https://card.thomasdaubenton.com/img/photo.jpg',
    name: 'Thomas Dbtn',
    lastMessage: 'See you tomorrow ! 🙂',
    time: '2 hour'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    name: 'Elsie Amador',
    lastMessage: 'What the f**k is going on ?',
    time: '1 day'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
    name: 'Billy Southard',
    lastMessage: 'Ahahah 😂',
    time: '4 days'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    name: 'Paul Walker',
    lastMessage: "You can't see me",
    time: '1 week'
  },
];

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.usersContainer}>
        <div className={styles.inputContainer}>
          <Input placeholder='Search...' prefix={<SearchOutlined />} />
        </div>
        <div className={styles.users}>
          {users.map((user) => (
            <div key={user.id} className={styles.userContainer}>
              <div className={styles.imageNameAndMessage}>
                <img
                  src={user.image}
                  alt="user"
                  className={styles.userPhoto}
                />
                <div className={styles.nameAndMessage}>
                  <p className={styles.name}>{user.name}</p>
                  <p className={styles.lastMessage}>{user.lastMessage}</p>
                </div>
              </div>
              <p className={styles.time}>{user.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.messagesContainer}>
        <div className={styles.headerChat}>
          <UserOutlined />
          <p className={styles.userInChat}>Megan Leib</p>
        </div>
        <div className={styles.messagesContainer}>
          <div>Messages</div>
          <div className={styles.footerChat}>
            <Input className={styles.footerInput} placeholder='Type your message here' />
            <Button className={styles.buttonSend}  type='primary'>
              <SendOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;