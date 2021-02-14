/* eslint-disable max-len */
import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
 
  return (
    <div className={styles.header}>
      <h1>DISAMBIGUOUS TUNES</h1>
      <Link to="/"><span className={styles.home}>Back to Home</span></Link>
      <Search />
    </div>
  );
};

export default Header;
