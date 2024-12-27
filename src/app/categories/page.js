import styles from './page.module.css'
import CategoriesCard from '../../../components/Cards/CategoriesCard/CategoriesCard'
import Divider from '../../../components/Divider/Divider'
import { fetchCategories } from '../../../lib/api'

export default async function Page() {
    let categories = []

    try {
        const response = await fetchCategories()
        categories = response || []
    } catch (error) {
        console.error("Erro ao carregar as categorias:", error)
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const sortedCategories = categories
        .slice()
        .sort((a, b) => a.Title.localeCompare(b.Title))

    const formattedCategories = sortedCategories.map(({ id, Title, Image }) => {
        const slug = id.toString();
        const categoryImageUrl = `${apiUrl}${Image.formats.thumbnail.url}`;

        return {
            id,
            title: Title,
            image: categoryImageUrl,
            slug,
        }
    });

    return (
        <div className={styles.page}>
            <Divider text="Todas as categorias" />
            <div className={styles.categoriesContainer}>
                {
                    formattedCategories.length === 0
                        ? <p>Não há categorias disponíveis no momento.</p>
                        : formattedCategories.map((category) => (
                            <CategoriesCard
                                key={category.id}
                                image={category.image}
                                category={category.title}
                                slug={category.slug}
                            />
                        ))
                }
            </div>
        </div>
    )
}
