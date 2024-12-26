import React from 'react';
import ImageCard from '../../../components/Cards/ImageCard/ImageCard';
import styles from './page.module.css';
import TeamCard from '../../../components/Cards/TeamCard/TeamCard';
import Divider from '../../../components/Divider/Divider';
import { fetchAboutPageContent, fetchTeam } from '../../../lib/api';

export default async function Page() {
    let aboutContent = {};
    let teamMembers = [];

    try {
        const response = await fetchAboutPageContent();
        aboutContent = response[0];

        const teamResponse = await fetchTeam(); // Buscar dados da equipa
        teamMembers = teamResponse; // Armazenar os dados dos membros da equipa
        console.log('Membros da equipa:', teamMembers);

    } catch (error) {
        console.error("Failed to fetch posts", error);
    }

    const { AboutTextTitle, AboutTextSubtitle, AboutImage1, AboutImage2, AboutImage3, AboutImage4, AboutImage5 } = aboutContent;

    const getImageUrl = (image) => {
        return `${process.env.NEXT_PUBLIC_API_URL}${image.url}`;
    };

    const images = [
        { src: AboutImage1, alt: 'Imagem 1' },
        { src: AboutImage2, alt: 'Imagem 2' },
        { src: AboutImage3, alt: 'Imagem 3' },
        { src: AboutImage4, alt: 'Imagem 4' },
        { src: AboutImage5, alt: 'Imagem 5' },
    ];

    return (
        <div className={styles.cardsWrapper}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{AboutTextTitle}</h1>
                <p className={styles.description}>
                    {AboutTextSubtitle}
                </p>
            </div>

            <div className={styles.cardContainer}>
                {images.map((image, index) => (
                    <ImageCard
                        key={index}
                        image={getImageUrl(image.src)}
                        altText={image.alt}
                    />
                ))}
            </div>

            <div>
                <Divider text="A equipa" />
                <div className={styles.teamCardContainer}>
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={getImageUrl(member.Image.formats.large)}
                            name={member.Name}
                            role={member.Role}
                            bio={member.Bio}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
