'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CategoriesCard.module.css';

const CategoriesCard = ({ image, category, slug }) => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (
        <Link href={`/categories/${slug}`}>
            <div className={styles.card}
                data-aos="zoom-in-up">
                <img src={image} alt={category} className={styles.cardImage} />
                <div className={styles.cardInfo}>
                    <p className={styles.categoryName}>{category}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesCard;
