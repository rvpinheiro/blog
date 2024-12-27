import styles from "./page.module.css";
import LatestCard from "../../components/Cards/LatestCard/LatestCard";
import Divider from "../../components/Divider/Divider";
import EmblaCarousel from "../../components/EmblaCarousel/EmblaCarousel";
import { fetchPosts } from "../../lib/api";

export default async function Home() {
  let posts = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error("Failed to fetch posts", error);
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const sortedPosts = posts
    .slice() // Cria uma cópia para não alterar o array original
    .sort((a, b) => new Date(b.Date) - new Date(a.Date)) // Ordena os posts pela data
    .slice(0, 6); // Limita os posts a 6

  const formattedPosts = sortedPosts.map(({ id, Title, Image, author, Date, category, Content }) => {

    const slug = id.toString();
    const authorImageUrl = author.Image ? `${apiUrl}${author.Image.formats.thumbnail.url}` : '';
    const postImageUrl = `${apiUrl}${Image.formats.large.url}`;
    const content = Content.map(contentBlock =>
      contentBlock.children.map(child => child.text).join(' ')
    ).join('\n');

    return {
      id,
      slug,
      title: Title,
      image: postImageUrl,
      authorName: author.Name,
      authorImage: authorImageUrl,
      date: Date,
      category: category.Title,
      content,
    };
  });

  return (
    <div className={styles.page}>
      <div className={styles.pageCarrousel}>
        <EmblaCarousel />
      </div>
      <div className={styles.latestCardContainer}>
        <Divider text="Últimos posts" />
        {
          formattedPosts.length === 0
            ? <p>Não há posts disponíveis no momento.</p>
            : formattedPosts.map((post) => (
              <LatestCard
                key={post.id}
                image={post.image}
                title={post.title}
                author={post.authorName}
                authorImage={post.authorImage}
                date={post.date}
                category={post.category}
                content={post.content}
                slug={post.slug}
              />
            ))
        }
      </div>
    </div>
  );
}
