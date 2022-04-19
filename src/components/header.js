/* eslint import/no-anonymous-default-export: 0 */
import React from "react";
import AppContext from "../context";

import styles from './header.module.css';

const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>To do App</h1>
        <span>Total Items {0}</span>
        <button onClick={() => {}}>
                Clear All
        </button>
    </header>
);

export default Header;
