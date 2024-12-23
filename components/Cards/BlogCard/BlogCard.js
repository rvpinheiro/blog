'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './BlogCard.module.css';

const BlogCard = ({ image, title, author, authorImage, date, category, slug }) => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <Link href={`/blog/${slug}`}>
            <div
                className={styles.card}
                style={{ backgroundImage: `url(${image})` }}
                data-aos="zoom-in-up"
            >
                <div className={styles.category}>{category}</div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.divider}></div>
                    <div className={styles.authorDate}>
                        <div className={styles.author}>
                            <img src={authorImage} alt={author} className={styles.authorImage} />
                            <p className={styles.authorName}>{author}</p>
                        </div>
                        <div className={styles.date}>{date}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
