import React from 'react';
import ImageCard from '../../../components/Cards/ImageCard/ImageCard';
import styles from './page.module.css';
import TeamCard from '../../../components/Cards/TeamCard/TeamCard';

const Page = () => {
    return (
        <div className={styles.cardsWrapper}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Explorando o Mundo em Imagens</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
            </div>

            <div className={styles.cardContainer}>
                <ImageCard
                    image="https://picsum.photos/300/500?random=1"
                    altText="Imagem 1"
                />
                <ImageCard
                    image="https://picsum.photos/300/500?random=2"
                    altText="Imagem 2"
                />
                <ImageCard
                    image="https://picsum.photos/300/500?random=3"
                    altText="Imagem 3"
                />
                <ImageCard
                    image="https://picsum.photos/300/500?random=4"
                    altText="Imagem 4"
                />
                <ImageCard
                    image="https://picsum.photos/300/500?random=5"
                    altText="Imagem 5"
                />
            </div>
            <div className={styles.teamCardContainer}>
                <TeamCard
                    image="https://picsum.photos/120?random=1"
                    name="Alice Souza"
                    role="Designer Gráfico"
                    description="Alice é uma designer gráfica apaixonada por criar experiências."
                />
                <TeamCard
                    image="https://picsum.photos/120?random=2"
                    name="Felipe Oliveira"
                    role="Desenvolvedor Frontend"
                    description="Felipe é um desenvolvedor frontend que adora trabalhar com JavaScript."
                />
                <TeamCard
                    image="https://picsum.photos/120?random=3"
                    name="Laura Pereira"
                    role="Gerente de Projetos"
                    description="Laura é uma gerente de projetos focada em organização e entrega de resultados."
                />
            </div>
        </div>
    );
};

export default Page;
