import React from 'react';
import ImageCard from '../../../components/Cards/ImageCard/ImageCard';
import styles from './page.module.css';
import TeamCard from '../../../components/Cards/TeamCard/TeamCard';
import Divider from '../../../components/Divider/Divider';

const Page = () => {
    return (
        <div className={styles.cardsWrapper}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum odor amet, consectetuer adipiscing elit.</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
            </div>

            <div className={styles.cardContainer}>
                <ImageCard
                    image="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
                    altText="Imagem 1"
                />
                <ImageCard
                    image="https://images.pexels.com/photos/29480470/pexels-photo-29480470.jpeg"
                    altText="Imagem 2"
                />
                <ImageCard
                    image="https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg"
                    altText="Imagem 3"
                />
                <ImageCard
                    image="https://images.pexels.com/photos/1015562/pexels-photo-1015562.jpeg"
                    altText="Imagem 4"
                />
                <ImageCard
                    image="https://images.pexels.com/photos/224647/pexels-photo-224647.jpeg"
                    altText="Imagem 5"
                />

            </div>
            <div>
                <Divider text="A equipa" />
                <div className={styles.teamCardContainer}>
                    <TeamCard
                        image="https://images.pexels.com/photos/2173382/pexels-photo-2173382.jpeg"
                        name="Alice Souza"
                        role="Designer Gráfico"
                        bio="Alice é uma designer gráfica apaixonada por criar experiências."
                    />
                    <TeamCard
                        image="https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg"
                        name="Felipe Oliveira"
                        role="Desenvolvedor Frontend"
                        bio="Felipe é um desenvolvedor frontend que adora trabalhar com JavaScript."
                    />
                    <TeamCard
                        image="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg"
                        name="Laura Pereira"
                        role="Gerente de Projetos"
                        bio="Laura é uma gerente de projetos focada em organização e entrega de resultados."
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
