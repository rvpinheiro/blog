import React from 'react'
import styles from './page.module.css'
import CategoriesCard from '../../../components/Cards/CategoriesCard/CategoriesCard'

const Page = () => {
    return (
        <div className={styles.page}>
            <div className={styles.categoriesContainer}>
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=1"
                    category="Inovação"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=2"
                    category="Tecnologia"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=3"
                    category="Saúde"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=4"
                    category="Educação"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=5"
                    category="Ciência"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=6"
                    category="Astronomia"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=7"
                    category="Futuro"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=8"
                    category="Sustentabilidade"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=9"
                    category="Economia"
                />
                <CategoriesCard
                    image="https://picsum.photos/1920/1080?random=10"
                    category="Arte"
                />
            </div>
        </div>
    )
}

export default Page
