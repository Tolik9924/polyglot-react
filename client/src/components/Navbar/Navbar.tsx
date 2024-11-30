import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, ConfigProvider } from "antd";

import { classes } from '../../common_utils/classes/classes.tsx';

import styles from './Navbar.module.css';

export type NavItem = {
    id: string;
    name: string;
};

export type Props = {
    list: NavItem[];
    isSticky?: boolean
};

const Navbar = ({
    list,
    isSticky = false
}: Props) => {

    const navigate = useNavigate();

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
                    {
                        list.map((item) => (
                            <li
                                className={styles.navItem}
                                key={item.id}
                            >
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
                                    <Button ghost>
                                        {item.name}
                                    </Button>
                                </ConfigProvider>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;