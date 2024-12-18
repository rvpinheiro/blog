'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolling ? styles.scrolled : ''}`}>
            <div>
                <p className={styles['blog-text']}>BLOG</p>
            </div>
            <div className={styles.divider}></div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={styles.link}>Blog</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>Sobre</Link>
                </li>
                <li>
                    <Link href="/categories" className={styles.link}>Categorias</Link>
                </li>
                <li>
                    <Link href="/contact" className={styles.link}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
