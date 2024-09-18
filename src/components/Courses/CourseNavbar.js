import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseNavbar.module.css';

const CourseNavbar = () => {
  return (
    <nav className={styles.courseNavbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/courses" className={styles.navLink}>Courses</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/profile" className={styles.navLink}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CourseNavbar;
