import React from 'react';
import styles from './page.module.css';
import BlogCard from '../../../components/Cards/BlogCard/BlogCard';
import Divider from '../../../components/Divider/Divider';

const Page = () => {
    return (
        <div className={styles.blogPage}>
            <Divider text="Todos os posts" />
            <div className={styles.cardContainer}>
                <BlogCard
                    image="https://picsum.photos/1920/1080?random=1"
                    title="Como a Inteligência Artificial Está Revolucionando a Medicina"
                    author="Lucas Oliveira"
                    authorImage="https://picsum.photos/70?random=1"
                    date="12 Novembro 2024"
                    category="Tecnologia"
                />

                <BlogCard
                    image="https://picsum.photos/1920/1080?random=2"
                    title="O Impacto das Novas Tecnologias na Educação"
                    author="Ana Souza"
                    authorImage="https://picsum.photos/70?random=2"
                    date="20 Outubro 2024"
                    category="Educação"
                />
            </div>

            <div className={styles.cardContainer}>
                <BlogCard
                    image="https://picsum.photos/1920/1080?random=3"
                    title="5 Estratégias de Marketing Digital que Estão Dominando o Mercado"
                    author="Carlos Almeida"
                    authorImage="https://picsum.photos/70?random=3"
                    date="15 Outubro 2024"
                    category="Marketing"
                />

                <BlogCard
                    image="https://picsum.photos/1920/1080?random=4"
                    title="A Revolução do Trabalho Remoto: Desafios e Oportunidades"
                    author="Mariana Costa"
                    authorImage="https://picsum.photos/70?random=4"
                    date="10 Setembro 2024"
                    category="Negócios"
                />
            </div>

            <div className={styles.cardContainer}>
                <BlogCard
                    image="https://picsum.photos/1920/1080?random=5"
                    title="Sustentabilidade no Setor de Moda: Desafios e Inovações"
                    author="Isabela Mendes"
                    authorImage="https://picsum.photos/70?random=5"
                    date="05 Dezembro 2024"
                    category="Sustentabilidade"
                />

                <BlogCard
                    image="https://picsum.photos/1920/1080?random=6"
                    title="Como a Economia Digital Está Mudando os Negócios Locais"
                    author="Felipe Rocha"
                    authorImage="https://picsum.photos/70?random=6"
                    date="25 Novembro 2024"
                    category="Economia"
                />
            </div>
        </div>
    );
};

export default Page;