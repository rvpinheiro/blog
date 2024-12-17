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
                    slug="ia-na-medicina"
                />
                <BlogCard
                    image="https://picsum.photos/1920/1080?random=2"
                    title="O Impacto das Novas Tecnologias na Educação"
                    author="Ana Souza"
                    authorImage="https://picsum.photos/70?random=2"
                    date="20 Outubro 2024"
                    category="Educação"
                    slug="impacto-tecnologias-educacao"
                />
            </div>
        </div>
    );
};

export default Page;