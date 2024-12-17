import React from 'react';
import Link from 'next/link';
import styles from './CategoriesCard.module.css';

const CategoriesCard = ({ image, category, slug }) => {
    return (
        <Link href={`/categories/${slug}`}>
            <div className={styles.card}>
                <img src={image} alt={category} className={styles.cardImage} />
                <div className={styles.cardInfo}>
                    <p className={styles.categoryName}>{category}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesCard;
