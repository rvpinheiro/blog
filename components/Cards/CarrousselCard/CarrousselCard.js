import React from 'react'
import Link from 'next/link';
import styles from './CarrousselCard.module.css'

const CarrousselCard = ({ image, title, author, authorImage, date, category, slug }) => {
    return (
        <div className={styles.card}>
            <Link href={`/blog/${slug}`}>
                <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className={styles.favoriteStar}>
                    <i className="fas fa-star"></i>
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardAuthorDate}>
                        <span className={styles.authorImage} style={{ backgroundImage: `url(${authorImage})` }}></span>
                        <span className={styles.author}>{author}</span> | <span className={styles.date}>{date}</span>
                    </p>
                </div>
                <div className={styles.cardCategory}>{category}</div>
            </Link>
        </div>
    )
}

export default CarrousselCard