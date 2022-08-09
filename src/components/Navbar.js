import React from 'react';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to='/'>Current</Link>
                <Link to='/forcast'>5 Day Forecast</Link>
            </div>
        </div>
    );
};

export default Navbar;