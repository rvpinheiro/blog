'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './LatestCard.module.css';

const LatestCard = ({ image, title, author, authorImage, date, category, content, slug }) => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div
            className={styles.card}
            data-aos="zoom-in-up"
        >
            <Link href={`/blog/${slug}`}>
                <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.cardCategory}>{category}</div>
                </div>
                <div className={styles.cardContent} >
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
        </div>
    );
};

export default LatestCard;
