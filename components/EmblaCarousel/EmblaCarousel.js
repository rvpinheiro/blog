"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarrousselCard from "../Cards/CarrousselCard/CarrousselCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./EmblaCarousel.module.css";

const EmblaCarousel = () => {
    const slides = [
        {
            image: "https://picsum.photos/1920/1080?1",
            title: "O Futuro da Energia",
            author: "Carlos Almeida",
            authorImage: "https://picsum.photos/70",
            date: "18 Outubro 2024",
            category: "Inovação",
        },
        {
            image: "https://picsum.photos/1920/1080?2",
            title: "Tecnologias Emergentes",
            author: "João Silva",
            authorImage: "https://picsum.photos/70?random=2",
            date: "15 Dezembro 2024",
            category: "Tecnologia",
        },
        {
            image: "https://picsum.photos/1920/1080?3",
            title: "Mudanças Climáticas e Ações",
            author: "Fernanda Lima",
            authorImage: "https://picsum.photos/70?random=3",
            date: "25 Novembro 2024",
            category: "Sustentabilidade",
        },
        {
            image: "https://picsum.photos/1920/1080?4",
            title: "Revolução Digital no Ensino",
            author: "Ricardo Pereira",
            authorImage: "https://picsum.photos/70?random=4",
            date: "10 Dezembro 2024",
            category: "Educação",
        },
        {
            image: "https://picsum.photos/1920/1080?5",
            title: "Cidades Inteligentes do Futuro",
            author: "Beatriz Souza",
            authorImage: "https://picsum.photos/70?random=5",
            date: "22 Outubro 2024",
            category: "Urbanismo",
        },
        {
            image: "https://picsum.photos/1920/1080?6",
            title: "A Nova Era do Entretenimento",
            author: "Lucas Ribeiro",
            authorImage: "https://picsum.photos/70?random=6",
            date: "30 Novembro 2024",
            category: "Entretenimento",
        },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            speed: 5,
        },
        [Autoplay()]
    );

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((slide, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <CarrousselCard
                                image={slide.image}
                                title={slide.title}
                                author={slide.author}
                                authorImage={slide.authorImage}
                                date={slide.date}
                                category={slide.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.embla__controls}>
                <button onClick={scrollPrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={scrollNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
};

export default EmblaCarousel;
