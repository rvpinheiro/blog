import styles from "./NoPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const NoPosts = () => {
    return (
        <div className={styles.noPosts}>
            <h2>Não há posts disponíveis</h2>
            <p>Parece que não há nada aqui ainda. Em breve teremos novidades.</p>
            <div className={styles.actions}>
                <Link href="/" className={styles.button}>
                    Voltar ao Início
                </Link>
                <Link href="/categories" className={styles.buttonOutline}>
                    Explorar Categorias
                </Link>
            </div>

        </div>
    );
};

export default NoPosts;
