import React from 'react';
import styles from './Divider.module.css';

const Divider = ({ text }) => {
    return (
        <div className={styles.dividerContainer}>
            <div className={styles.line}></div>
            <span className={styles.text}>{text}</span>
            <div className={styles.line}></div>
        </div>
    );
}

export default Divider;
