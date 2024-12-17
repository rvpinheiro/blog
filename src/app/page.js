import styles from "./page.module.css";
import LatestCard from "../../components/Cards/LastestCard/LastestCard";
import Divider from "../../components/Divider/Divider";
import EmblaCarousel from "../../components/EmblaCarousel/EmblaCarousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.pageCarrousel}>
        <EmblaCarousel />
      </div>
      <div className={styles.latestCardContainer}>
        <Divider text="Últimos posts" />
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
