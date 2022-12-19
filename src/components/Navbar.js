import React from 'react';

//Logo
import logo from '../assets/images/logo.svg'

//styles
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>                    
        </div>
    );
};

export default Navbar;