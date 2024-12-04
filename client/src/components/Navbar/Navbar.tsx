import React, { useContext } from 'react';

import Button from '../../ui-components/Button/Button.tsx';

import { OpenModalContext } from '../../context/OpenModalContext.tsx';

import { useNavigate } from 'react-router-dom';

import { classes } from '../../common_utils/classes/classes.tsx';

import { MoonOutlined } from '@ant-design/icons';

import styles from './Navbar.module.css';

export type Props = {
    isSticky?: boolean
};

const Navbar = ({
    isSticky = false
}: Props) => {

    const navigate = useNavigate();
    const { setIsOpen } = useContext(OpenModalContext);

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
                        type='text'
                        ghost
                        onClick={() => handleClick('/')}
                    >
                        Logo
                    </Button>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <Button
                            type='primary'
                            ghost
                            onClick={() => handleClick('/chat')}
                        >
                            Chat
                        </Button>
                    </li>
                    <li className={styles.navItem}>
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
                    </li>
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