import React, { useState } from 'react';

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

    const [activeItem, setActiveItem] = useState<string>("");

    const handleActiveItem = (item: string) => {
        setActiveItem(item);
    }

    return (
        <nav className={classes(styles.navContainer, {
            [styles.relativeNavContainer]: !isSticky,
            [styles.stickyNavContainer]: isSticky,
        })}>
            <div className={styles.navResponsive}>
                <ul className={styles.nav}>
                    {
                        list.map((item) => (
                            <li 
                                className={styles.navItem} 
                                key={item.id}
                                onClick={() => handleActiveItem(item.id)}
                            >
                                <a 
                                    className={classes(styles.navLink, {
                                        [styles.navLinkActive]: activeItem === item.id,
                                        [styles.navLinkNotActive]: activeItem !== item.id
                                    })}
                                    href={`/${item.name}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;