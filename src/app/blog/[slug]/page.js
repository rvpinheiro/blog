import React from "react";
import styles from './page.module.css';

const PostDetail = ({ params }) => {
    return (
        <div className={styles.postDetailContainer}>
            <div className={styles.category}>Tecnologia</div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Como a Inteligência Artificial Está Revolucionando a Medicina</h1>
                <h2 className={styles.subtitle}>Explorando os avanços e impactos dessa tecnologia na saúde</h2>
                <div className={styles.date}>12 Novembro 2024</div>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://picsum.photos/800/400?random=1" alt="Imagem do post" className={styles.image} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.postText}>
                    <p>
                        A Inteligência Artificial (IA) está desempenhando um papel cada vez mais importante na medicina moderna. De diagnósticos mais rápidos e precisos a tratamentos personalizados, a IA está reformulando a maneira como médicos e pesquisadores abordam os cuidados com os pacientes. Em um cenário onde as tecnologias estão evoluindo rapidamente, os avanços mais recentes em IA trazem novas possibilidades para salvar vidas e melhorar os resultados dos tratamentos.
                    </p>
                    <blockquote className={styles.blockquote}>
                        A IA está revolucionando a forma como tratamos doenças e melhoramos a saúde.
                    </blockquote>
                    <p>
                        Neste artigo, exploraremos como a IA está transformando a medicina, com exemplos de suas aplicações em áreas como oncologia, neurologia e cuidados intensivos.
                    </p>
                </div>
                <div className={styles.authorContainer}>
                    <div className={styles.authorImage} style={{ backgroundImage: `url(https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg)` }}></div>
                    <div className={styles.authorName}>Lucas Oliveira</div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
