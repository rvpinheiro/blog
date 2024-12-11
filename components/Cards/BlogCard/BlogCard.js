import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ image, title, author, authorImage, date, category }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.cardCategory}>{category}</div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitleAuthor}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.authorContainer}>
                        <img
                            src={authorImage}
                            alt={author}
                            className={styles.authorImage}
                        />
                        <p className={styles.cardAuthor}>{author}</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.cardDate}>{date}</div>
            </div>
        </div>
    );
};

export default BlogCard;
