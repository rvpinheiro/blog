import React from 'react'
import styles from './page.module.css'
import Divider from '../../../../components/Divider/Divider'
import BlogCard from '../../../../components/Cards/BlogCard/BlogCard'

const page = () => {
    return (
        <div className={styles.categoriesPostPage}>
            <Divider text="Posts em Categoria" />
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
                    image="https://picsum.photos/1920/1080?random=1"
                    title="Como a Inteligência Artificial Está Revolucionando a Medicina"
                    author="Lucas Oliveira"
                    authorImage="https://picsum.photos/70?random=1"
                    date="12 Novembro 2024"
                    category="Tecnologia"
                    slug="ia-na-medicina"
                />
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
                    image="https://picsum.photos/1920/1080?random=1"
                    title="Como a Inteligência Artificial Está Revolucionando a Medicina"
                    author="Lucas Oliveira"
                    authorImage="https://picsum.photos/70?random=1"
                    date="12 Novembro 2024"
                    category="Tecnologia"
                    slug="ia-na-medicina"
                />
            </div>
        </div>
    )
}

export default page