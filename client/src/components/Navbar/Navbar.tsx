import React, { useContext, useEffect } from 'react';

import { OpenModalContext } from '../../context/OpenModalContext.tsx';
import { ChangeThemeContext } from '../../context/ChangeThemeContext.tsx';

import { useNavigate } from 'react-router-dom';

import { Button, ConfigProvider } from "antd";

import { classes } from '../../common_utils/classes/classes.tsx';

import { MoonOutlined, SunOutlined } from '@ant-design/icons';

import styles from './Navbar.module.css';

export type Props = {
    isSticky?: boolean
};

const Navbar = ({
    isSticky = false
}: Props) => {

    const navigate = useNavigate();
    const { setIsOpen } = useContext(OpenModalContext);
    const { theme, setTheme } = useContext(ChangeThemeContext);

    const handleClick = () => {
        navigate('/');
    };

    function getThemeFromLocalStorage() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    };

    function toggleTheme() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        getThemeFromLocalStorage();
    }, [theme]);

    return (
        <nav className={classes(styles.navContainer, {
            [styles.relativeNavContainer]: !isSticky,
            [styles.stickyNavContainer]: isSticky,
            [styles.lightTheme]: theme === 'light',
            [styles.darkTheme]: theme === 'dark'
        })}>
            <div className={styles.navResponsive}>
                <div className={styles.logoContainer}>
                    <Button
                        style={{
                            color: theme === 'dark' ? '#fff' : 'rgb(35 39 47 / 0.95)'
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
                                    colorPrimary: theme === 'dark' ? '#fff' : 'rgb(35 39 47 / 0.95)',
                                    colorPrimaryActive: theme === 'dark' ? 'rgb(35 39 47 / 0.95)' : '#fff',
                                },
                                components: {
                                    Button: {
                                        defaultHoverBorderColor: theme === 'dark' ? 'rgb(35 39 47 / 0.95)' : '#fff',
                                    },
                                },
                            }}
                        >
                            <Button
                                style={{
                                    color: theme === 'light' ? 'rgb(35 39 47 / 0.95)' : '#fff',
                                    borderColor: theme === 'light' ? 'rgb(35 39 47 / 0.95)' : '#fff'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = theme === 'light' ? '#fff' : 'rgb(35 39 47 / 0.95)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = theme === 'light' ? 'rgb(35 39 47 / 0.95)' : '#fff'
                                }}
                                ghost
                                onClick={() => setIsOpen(true)}
                            >
                                Login
                            </Button>
                        </ConfigProvider>
                    </li>
                    <li className={styles.navItem}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: theme === 'dark' ? '#fff' : 'rgb(35 39 47 / 0.95)',
                                    colorPrimaryActive: theme === 'dark' ? 'rgb(35 39 47 / 0.95)' : '#fff',
                                },
                                components: {
                                    Button: {
                                        defaultHoverBorderColor: theme === 'dark' ? 'rgb(35 39 47 / 0.95)' : '#fff',
                                        defaultBorderColor: theme === 'light' ? 'rgb(35 39 47 / 0.95)' : 'red'
                                    },
                                },
                            }}
                        >
                            <Button
                                style={{
                                    color: theme === 'light' ? 'rgb(35 39 47 / 0.95)' : '#fff',
                                    borderColor: theme === 'light' ? 'rgb(35 39 47 / 0.95)' : '#fff'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = theme === 'light' ? '#fff' : 'rgb(35 39 47 / 0.95)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = theme === 'light' ? 'rgb(35 39 47 / 0.95)' : '#fff'
                                }}
                                ghost
                                onClick={toggleTheme}
                            >
                                {theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
                            </Button>
                        </ConfigProvider>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;