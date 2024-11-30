import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, ConfigProvider } from "antd";

import { classes } from '../../common_utils/classes/classes.tsx';

import styles from './Navbar.module.css';
import { OpenModalContext } from '../../context/OpenModalContext.tsx';

export type Props = {
    isSticky?: boolean
};

const Navbar = ({
    isSticky = false
}: Props) => {

    const navigate = useNavigate();
    const { setIsOpen } = useContext(OpenModalContext);

    const handleClick = () => {
        navigate('/');
    };

    return (
        <nav className={classes(styles.navContainer, {
            [styles.relativeNavContainer]: !isSticky,
            [styles.stickyNavContainer]: isSticky,
        })}>
            <div className={styles.navResponsive}>
                <div className={styles.logoContainer}>
                    <Button
                        style={{
                            color: '#fff'
                        }}
                        type='text' ghost
                        onClick={handleClick}
                    >
                        Logo
                    </Button>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#fff',
                                    colorPrimaryActive: 'rgb(35 39 47 / 0.95)'
                                },
                                components: {
                                    Button: {
                                        defaultHoverBorderColor: 'rgb(35 39 47 / 0.95)',
                                    },
                                },
                            }}
                        >
                            <Button 
                                ghost
                                onClick={() => setIsOpen(true)}
                            >
                                Login
                            </Button>
                        </ConfigProvider>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;