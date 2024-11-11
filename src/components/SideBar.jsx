// components/Sidebar.js
import React from 'react';
import styles from '../Styles/Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Power Analytics</h2>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Dashboard</li>
          <li className={styles.navItem}>Layouts</li>
          <li className={styles.navItem}>Mailbox</li>
          <li className={styles.navItem}>Calendar</li>
          <li className={styles.navItem}>UI Elements</li>
          <li className={styles.navItem}>Forms</li>
          <li className={styles.navItem}>Pages</li>
          <li className={styles.navItem}>Tables</li>
          <li className={styles.navItem}>Charts</li>
          <li className={styles.navItem}>Maps</li>
          <li className={styles.navItem}>Profile</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
