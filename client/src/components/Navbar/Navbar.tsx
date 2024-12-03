import React, { useContext } from 'react';

import ButtonAnt from '../../ui-components/ButtonAnt/ButtonAnt.tsx';

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
                    <ButtonAnt
                        type='text'
                        ghost
                        onClick={handleClick}
                    >
                        Logo
                    </ButtonAnt>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <ButtonAnt
                            type='primary'
                            ghost
                            onClick={() => {
                                setIsOpen(true);
                                }
                            }
                        >
                            Login
                        </ButtonAnt>
                    </li>
                    <li className={styles.navItem}>
                        <ButtonAnt
                            type='primary'
                            ghost
                        >
                            <MoonOutlined />
                        </ButtonAnt>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;