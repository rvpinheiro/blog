import styles from "./page.module.css";
import CarrousselCard from "../../components/Cards/CarrousselCard/CarrousselCard";
import LatestCard from "../../components/Cards/LastestCard/LastestCard";
import BlogCard from "../../components/Cards/BlogCard/BlogCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.pageCarrousel}>
        <CarrousselCard
          image="https://picsum.photos/1920/1080"
          title="Como a Inteligência Artificial está Mudando a Tecnologia"
          author="Carlos Almeida"
          authorImage="https://picsum.photos/1920/1080"
          date="18 Outubro 2024"
          category="Inovação"
        />
      </div>
      <div className={styles.latestCardContainer}>
        <LatestCard
          image="https://picsum.photos/1920/1080"
          title="Avanços no Desenvolvimento de Energia Solar"
          author="Mariana Costa"
          authorImage="https://picsum.photos/70"
          date="10 Dezembro 2024"
          category="Tecnologia"
          content="A energia solar tem se tornado uma das fontes mais eficientes e A energia solar tem se tornado uma das fontes mais eficientes e A energia solar tem se tornado uma das fontes mais eficientes e A energia solar tem se tornado uma das fontes mais A energia solar tem se tornado uma das fontes mais eficientes e A energia solar tem se tornado uma das fontes mais eficientes e A energia solar tem se tornado uma das fontes mais eficientes e eficientes e acessíveis de energia renovável. Neste artigo, exploramos os últimos avanços tecnológicos que estão tornando a energia solar ainda mais viável para uso em larga escala. Com o aumento da eficiência dos painéis solares e a queda nos custos de produção, as expectativas para o futuro dessa tecnologia são extremamente otimistas."
        />


      </div>
    </div>
  );
}
