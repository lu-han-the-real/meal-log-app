import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.Home}>
      <h1>Welcome to MealLog</h1>
      <div className={styles.buttonContainer}>
        <Link to="/login" className={styles.button}>
          Login
        </Link>
        <Link to="/signup" className={styles.button}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home; 
