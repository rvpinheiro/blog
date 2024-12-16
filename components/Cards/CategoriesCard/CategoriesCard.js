import React from 'react';
import styles from './CategoriesCard.module.css';

const CategoriesCard = ({ image, category }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={category} className={styles.cardImage} />
            <div className={styles.cardInfo}>
                <p className={styles.categoryName}>{category}</p>
            </div>
        </div>
    );
};

export default CategoriesCard;
