import styles from "./page.module.css";
import BlogCard from "../../../components/Cards/BlogCard/BlogCard";
import Divider from "../../../components/Divider/Divider";
import { fetchPosts } from "../../../lib/api";

export default async function Page() {
    let posts = [];

    try {
        posts = await fetchPosts(); // Busca todos os posts
    } catch (error) {
        console.error("Falha ao buscar os posts", error);
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // Ordena os posts pela data, do mais recente para o mais antigo
    const sortedPosts = posts
        .slice() // Cria uma cópia para não alterar o array original
        .sort((a, b) => new Date(b.Date) - new Date(a.Date)); // Ordena os posts pela data

    const formattedPosts = sortedPosts.map(({ id, Title, Image, author, Date, category, slug }) => {
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
            slug,
        };
    });

    return (
        <div className={styles.blogPage}>
            <Divider text="Todos os posts" />
            <div className={styles.cardContainer}>
                {formattedPosts.length === 0 ? (
                    <p>Não há posts disponíveis no momento.</p>
                ) : (
                    formattedPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            author={post.authorName}
                            authorImage={post.authorImage}
                            date={post.date}
                            category={post.category}
                            slug={post.slug}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
