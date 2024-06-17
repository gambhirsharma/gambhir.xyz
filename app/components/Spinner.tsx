// components/Spinner.js
import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.doubleBounce1}></div>
    <div className={styles.doubleBounce2}></div>
  </div>
);

export default Spinner;
