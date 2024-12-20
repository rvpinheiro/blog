import React from 'react';
import Link from 'next/link';
import styles from './LastestCard.module.css';

const LatestCard = ({ image, title, author, authorImage, date, category, content, slug }) => {
    return (
        <div className={styles.card}>
            <Link href={`/blog/${slug}`}>
                <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${image})` }}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.cardCategory}>{category}</div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTextContainer}>
                        <div className={styles.cardText}>{content}</div>
                    </div>
                    <div className={styles.authorDateContainer}>
                        <div
                            className={styles.authorImage}
                            style={{ backgroundImage: `url(${authorImage})` }}
                        ></div>
                        <div className={styles.authorNameAndDate}>
                            <span className={styles.authorName}>{author}</span>
                            <span className={styles.date}>{date}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default LatestCard;
