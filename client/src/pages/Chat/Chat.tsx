import React, { useState } from "react";
import { SearchOutlined, SendOutlined, MenuOutlined } from "@ant-design/icons";
import Input from "../../ui-components/Input/Input.tsx";
import Button from "../../ui-components/Button/Button.tsx";
import MobileMenu from "../../components/MobileMenu/MobileMenu.tsx";
import { classes } from "../../common_utils/classes/classes.tsx";
import useScreenSize from "../../hooks/useScreenSize.ts";
import styles from "./Chat.module.css";

interface User {
  id: number;
  image: string;
  name: string;
  lastMessage: string;
  time: string;
  isActive: boolean;
}

interface ActiveUser {
  name: string;
  img: string;
}

const users = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Megan Leib",
    lastMessage: "9 pm at the bar if bossible 😳",
    time: "12 sec",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg",
    name: "Dave Corlew",
    lastMessage: "Let's meet for a coffee or somet",
    time: "3 min",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    name: "Jerome Seiber",
    lastMessage: "I've sent you the annual report",
    time: "12 sec",
  },
  {
    id: 4,
    image: "https://card.thomasdaubenton.com/img/photo.jpg",
    name: "Thomas Dbtn",
    lastMessage: "See you tomorrow ! 🙂",
    time: "2 hour",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    name: "Elsie Amador",
    lastMessage: "What the f**k is going on ?",
    time: "1 day",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    name: "Billy Southard",
    lastMessage: "Ahahah 😂",
    time: "4 days",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    name: "Paul Walker",
    lastMessage: "You can't see me",
    time: "1 week",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Megan Leib",
    lastMessage: "9 pm at the bar if bossible 😳",
    time: "12 sec",
  },
  {
    id: 9,
    image:
      "https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg",
    name: "Dave Corlew",
    lastMessage: "Let's meet for a coffee or somet",
    time: "3 min",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    name: "Jerome Seiber",
    lastMessage: "I've sent you the annual report",
    time: "12 sec",
  },
  {
    id: 11,
    image: "https://card.thomasdaubenton.com/img/photo.jpg",
    name: "Thomas Dbtn",
    lastMessage: "See you tomorrow ! 🙂",
    time: "2 hour",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    name: "Elsie Amador",
    lastMessage: "What the f**k is going on ?",
    time: "1 day",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    name: "Billy Southard",
    lastMessage: "Ahahah 😂",
    time: "4 days",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    name: "Paul Walker",
    lastMessage: "You can't see me",
    time: "1 week",
  },
];

const Chat = () => {
  const screenSize = useScreenSize();

  console.log("screenSize: ", screenSize);

  const [listsOfUser, setListsOfUser] = useState<User[]>([
    ...users.map((user) => ({ ...user, isActive: false })),
  ]);

  const [activeUser, setActiveUser] = useState<ActiveUser>({
    name: "",
    img: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveUser = (id: number) => {
    const newUser = listsOfUser.map((user: User) => {
      if (user.id === id) {
        setActiveUser({
          name: user.name,
          img: user.image,
        });
        return { ...user, isActive: true };
      } else {
        return { ...user, isActive: false };
      }
    });
    setListsOfUser([...newUser]);
  };

  return (
    <div className={styles.chatContainer}>
      {screenSize.width < 1201 && isOpen && (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          list={users}
          handleActiveUser={handleActiveUser}
        />
      )}
      {screenSize.width >= 1201 && (
        <div className={styles.usersContainer}>
          <div className={styles.inputContainer}>
            <Input placeholder="Search..." prefix={<SearchOutlined />} />
          </div>
          <div className={styles.users}>
            {listsOfUser.map((user) => (
              <div
                key={user.id}
                onClick={() => handleActiveUser(user.id)}
                className={classes(styles.userContainer, {
                  [styles.userActive]: user.isActive,
                })}
              >
                <div className={styles.imageNameAndMessage}>
                  <div>
                    <img
                      src={user.image}
                      alt="user"
                      className={styles.userPhoto}
                    />
                    <div className={styles.online}></div>
                  </div>
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
      )}
      <div className={styles.messagesContainer}>
        <div className={styles.headerChat}>
          {activeUser.name !== "" && (
            <div className={styles.actualUser}>
              <div className={styles.imageContainer}>
                <img
                  src={activeUser.img}
                  alt="user"
                  className={styles.actualUserPhoto}
                />
                <div className={styles.onlineActualUser}></div>
              </div>
              <p className={styles.userInChat}>{activeUser.name}</p>
            </div>
          )}
          {screenSize.width < 1201 && (
            <div className={styles.showUsers}>
              <Button type="link" onClick={() => setIsOpen(true)}>
                <MenuOutlined className={styles.burgerIcon} />
              </Button>
            </div>
          )}
        </div>
        <div>
          {activeUser.name !== "" && (
            <div className={classes(styles.allMessages, styles.showScrollbar)}>
              <div className={styles.friendMessages}>
                <div className={styles.message}>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="user"
                      className={styles.userPhoto}
                    />
                    <div className={styles.online}></div>
                  </div>
                  <div className={styles.textContainer}>
                    <p className={styles.text}>Hi, how are you?</p>
                  </div>
                </div>
                <div className={styles.onlyText}>
                  <p className={styles.text}>
                    What are you doing tonight ? Want to go take a drink ?
                  </p>
                </div>
              </div>
              <div className={styles.onlyText}>
                <p className={styles.lastMessageTime}> 14h58</p>
              </div>
              <div className={styles.userMessages}>
                <p className={styles.text}> Hey Megan ! It's been a while 😃</p>
              </div>
              <div className={styles.userMessages}>
                <p className={styles.text}> When can we meet ?</p>
                <p
                  className={classes(
                    styles.lastMessageTime,
                    styles.showUserLastMessageTime
                  )}
                >
                  {" "}
                  15h04
                </p>
              </div>
              <div className={styles.friendMessages}>
                <div className={styles.message}>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="user"
                      className={styles.userPhoto}
                    />
                    <div className={styles.online}></div>
                  </div>
                  <div className={styles.textContainer}>
                    <p className={styles.text}>Hi, how are you?</p>
                  </div>
                </div>
                <div className={styles.onlyText}>
                  <p className={styles.text}>
                    What are you doing tonight ? Want to go take a drink ?
                  </p>
                </div>
              </div>
              <div className={styles.onlyText}>
                <p className={styles.lastMessageTime}> 14h58</p>
              </div>
              <div className={styles.userMessages}>
                <p className={styles.text}> Hey Megan ! It's been a while 😃</p>
              </div>
              <div className={styles.userMessages}>
                <p className={styles.text}> When can we meet ?</p>
                <p
                  className={classes(
                    styles.lastMessageTime,
                    styles.showUserLastMessageTime
                  )}
                >
                  {" "}
                  15h04
                </p>
              </div>
            </div>
          )}
          <div className={styles.footerChat}>
            <Input
              className={styles.footerInput}
              placeholder="Type your message here"
            />
            <Button className={styles.buttonSend} type="primary">
              <SendOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
