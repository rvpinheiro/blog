import React from "react";
import styles from './page.module.css';
import { fetchPosts } from "../../../../lib/api";

export default async function PostDetail({ params }) {
    const { slug } = await params;

    let post = null;
    try {
        const posts = await fetchPosts();
        post = posts.find(p => p.id.toString() === slug);
    } catch (error) {
        console.error("Erro ao carregar o post:", error);
    }

    if (!post) {
        return <p>Post não encontrado.</p>;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const postImageUrl = `${apiUrl}${post.Image.formats.large.url}`;
    const authorImageUrl = post.author.Image ? `${apiUrl}${post.author.Image.formats.thumbnail.url}` : '';
    const content = post.Content.map(contentBlock =>
        contentBlock.children.map(child => child.text).join(' ')
    ).join('\n');

    return (
        <div className={styles.postDetailContainer}>
            <div className={styles.category}>{post.category.Title}</div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{post.Title}</h1>
                <h2 className={styles.subtitle}>{post.Subtitle}</h2>
                <div className={styles.date}>{post.Date}</div>
            </div>
            <div className={styles.imageContainer}>
                <img src={postImageUrl} alt="Imagem" className={styles.image} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.postText}>
                    <p>{content}</p>
                </div>
                <div className={styles.authorContainer}>
                    <div
                        className={styles.authorImage}
                        style={{ backgroundImage: `url(${authorImageUrl})` }}
                    ></div>
                    <div className={styles.authorName}>{post.author.Name}</div>
                </div>
            </div>
        </div>
    );
}
