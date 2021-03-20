import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar () {
    return (
        <nav className={styles.navBar}>
            <ul className="navBar_list">
                <li className={styles.item}>
                    <NavLink exact to= "/" activeClassName = {styles.active} className={styles.item__link}>Profile</NavLink>
                </li>
                <li className= {`${styles.item} ${styles.active}`}>
                    <NavLink to= "/dialogs" activeClassName = {styles.active} className={styles.item__link}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to= "/news" activeClassName = {styles.active} className={styles.item__link}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to= "/music" activeClassName = {styles.active} className={styles.item__link}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to= "/settings" activeClassName = {styles.active} className={styles.item__link}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;