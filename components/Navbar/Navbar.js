'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logoContainer}>
                <p className={styles['blog-text']}>BLOG</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
            </div>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li>
                    <Link href="/" className={styles.link} onClick={handleLinkClick}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={styles.link} onClick={handleLinkClick}>Blog</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link} onClick={handleLinkClick}>Sobre</Link>
                </li>
                <li>
                    <Link href="/categories" className={styles.link} onClick={handleLinkClick}>Categorias</Link>
                </li>
                <li>
                    <Link href="/contact" className={styles.link} onClick={handleLinkClick}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
