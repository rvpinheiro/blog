import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <p className={styles['blog-text']}>BLOG</p>
            </div>
            <div className={styles.divider}></div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>Blog</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>Sobre</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>Categorias</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
