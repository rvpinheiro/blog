"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarrousselCard from "../Cards/CarrousselCard/CarrousselCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./EmblaCarousel.module.css";
import { fetchPosts } from "../../lib/api";

// Função para formatar os posts
const formatPosts = (posts, apiUrl) => {
    return posts
        .filter(post => post.Favorite === true) // Filtra os posts favoritos
        .sort((a, b) => new Date(b.Date) - new Date(a.Date)) // Ordena os posts pela data (mais recente primeiro)
        .map(({ id, Title, Image, author, Date, category }) => {
            const authorImageUrl = author.Image ? `${apiUrl}${author.Image.formats.thumbnail.url}` : '';
            const postImageUrl = Image ? `${apiUrl}${Image.formats.large.url}` : '';
            return {
                id,
                title: Title,
                image: postImageUrl,
                authorName: author.Name,
                authorImage: authorImageUrl,
                date: Date,
                category: category.Title,
            };
        });
};

const EmblaCarousel = () => {
    const [posts, setPosts] = useState([]);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsData = await fetchPosts();
                const formattedPosts = formatPosts(postsData, apiUrl);
                setPosts(formattedPosts);
            } catch (error) {
                console.error("Erro ao carregar os posts:", error);
            }
        };

        getPosts();
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            speed: 5,
            skipSnaps: false,
        },
        [Autoplay()]
    );

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {posts.map((post, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <CarrousselCard
                                image={post.image}
                                title={post.title}
                                author={post.authorName}
                                authorImage={post.authorImage}
                                date={post.date}
                                category={post.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {posts.length > 1 ? (
                <div className={styles.embla__controls}>
                    <button onClick={scrollPrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={scrollNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            ) : null}
        </section>
    );
};

export default EmblaCarousel;
