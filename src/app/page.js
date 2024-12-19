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
          image="https://picsum.photos/1920/1080?1"
          title="Revolução na Mobilidade Elétrica"
          author="Ana Beatriz"
          authorImage="https://picsum.photos/70?1"
          date="12 Dezembro 2024"
          category="Inovação"
          content="Carros elétricos têm ganhado espaço no mercado global, oferecendo soluções sustentáveis e tecnológicas. Este artigo explora como novos avanços em baterias de estado sólido prometem aumentar a autonomia e reduzir o tempo de recarga, transformando o futuro da mobilidade elétrica. Carros elétricos têm ganhado espaço no mercado global, oferecendo soluções sustentáveis e tecnológicas. Este artigo explora como novos avanços em baterias de estado sólido prometem aumentar a autonomia e reduzir o tempo de recarga, transformando o futuro da mobilidade elétrica. Carros elétricos têm ganhado espaço no mercado global, oferecendo soluções sustentáveis e tecnológicas. Este artigo explora como novos avanços em baterias de estado sólido prometem aumentar a autonomia e reduzir o tempo de recarga, transformando o futuro da mobilidade elétrica. FIM FIM FIM"
        />
        <LatestCard
          image="https://picsum.photos/1920/1080?2"
          title="Inteligência Artificial e a Saúde do Futuro"
          author="Pedro Santos"
          authorImage="https://picsum.photos/70?2"
          date="8 Dezembro 2024"
          category="Saúde"
          content="A integração de IA no setor médico está revolucionando diagnósticos e tratamentos. Tecnologias como aprendizado de máquina já estão sendo usadas para identificar padrões em imagens médicas e prever surtos de doenças com maior precisão."
        />
      </div>
    </div>
  );
}
