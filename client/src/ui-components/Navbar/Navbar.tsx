import React, { ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MoonOutlined,
    StrikethroughOutlined,
} from '@ant-design/icons';
import Button from '../Button/Button.tsx';
import { ModalContext } from '../../context/ModalContext.tsx';
import { LoginContext } from '../../context/LoginContext.tsx';
import { classes } from '../../common_utils/classes/classes.tsx';
import styles from './Navbar.module.css';

interface NavbarItem {
    href: string,
    children: ReactNode | string,
    isModal: boolean
};

export type Props = {
    isSticky?: boolean
    rightItems?: NavbarItem[],
    leftItems?: NavbarItem[]
};

const Navbar = ({
    isSticky = false,
    rightItems = [],
    leftItems = []
}: Props) => {

    const navigate = useNavigate();
    const { setIsOpen } = useContext(ModalContext);
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
                <div className={styles.rightSide}>
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
                    {
                        leftItems.length > 0 && <div className={styles.nav}>
                            {leftItems.map((item) => (
                                <li className={styles.navItem}>
                                    <Button
                                        type='primary'
                                        ghost
                                        onClick={() => {
                                            if (item.isModal) {
                                                setIsOpen(true);
                                            } else if (!item.isModal) {
                                                handleClick(item.href);
                                            }
                                        }
                                        }
                                    >
                                        {item.children}
                                    </Button>
                                </li>
                            ))}
                        </div>
                    }
                </div>
                <ul className={styles.nav}>
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
                    {isLogin && rightItems.map((rightItem) => (
                        <li className={styles.navItem}>
                            <Button
                                type='primary'
                                ghost
                                onClick={() => {
                                    if (rightItem.isModal) {
                                        setIsOpen(true);
                                    } else if (!rightItem.isModal) {
                                        handleClick(rightItem.href);
                                    }
                                }}
                            >
                                {rightItem.children}
                            </Button>
                        </li>
                    ))}
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