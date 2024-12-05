import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    MoonOutlined, 
    StrikethroughOutlined, 
    CommentOutlined, 
    UserOutlined 
} from '@ant-design/icons';
import Button from '../../ui-components/Button/Button.tsx';
import { OpenModalContext } from '../../context/OpenModalContext.tsx';
import { LoginContext } from '../../context/LoginContext.tsx';
import { classes } from '../../common_utils/classes/classes.tsx';
import styles from './Navbar.module.css';

export type Props = {
    isSticky?: boolean
};

const Navbar = ({
    isSticky = false
}: Props) => {

    const navigate = useNavigate();
    const { setIsOpen } = useContext(OpenModalContext);
    const { isLogin } = useContext(LoginContext);

    const handleClick = (link: string) => {
        navigate(link);
    };

    return (
        <nav className={classes(styles.navContainer, {
            [styles.relativeNavContainer]: !isSticky,
            [styles.stickyNavContainer]: isSticky,
        })}>
            <div className={styles.navResponsive}>
                <div className={styles.logoContainer}>
                    <Button
                        className={styles.logo}
                        type='text'
                        ghost
                        onClick={() => handleClick('/')}
                    >
                        <StrikethroughOutlined />
                    </Button>
                </div>
                <ul className={styles.nav}>
                    {isLogin && <li className={styles.navItem}>
                        <Button
                            className={styles.chat}
                            type='primary'
                            ghost
                            onClick={() => handleClick('/chat')}
                        >
                            <CommentOutlined />
                        </Button>
                    </li>}
                    {!isLogin && <li className={styles.navItem}>
                        <Button
                            type='primary'
                            ghost
                            onClick={() => {
                                setIsOpen(true);
                            }
                            }
                        >
                            Login
                        </Button>
                    </li>}
                    {isLogin && <li className={styles.navItem}>
                        <Button
                            type='primary'
                            ghost
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        >
                            <UserOutlined />
                        </Button>
                    </li>}
                    <li className={styles.navItem}>
                        <Button
                            type='primary'
                            ghost
                        >
                            <MoonOutlined />
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;