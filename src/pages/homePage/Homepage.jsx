import styles from "./Homepage.module.css";
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import LembretesHome from "../../components/lembretesHome/LembretesHome.jsx";
import coracaoHome from "../../img/coracaoHome.png";
import calendarioCoracao from "../../img/calendarioCoracao.png";
import UltimosRegistros from "../../components/ultimosRegistros/UltimosRegistros.jsx";
import fotoHome from "../../img/fotoHome.png";
import ondaHome from "../../img/ondaHome.png";
import PerfilAnamnese from "../../components/perfilAnamnese/PerfilAnamnese.jsx";
import UltimosPosts from "../../components/ultimosPosts/UltimosPosts.jsx";
import CardTreinamentos from "../../components/cardTreinamentos/CardTreinamentos.jsx";
import onda2 from "../../img/onda2.png";
import Faq from "../../components/faq/Faq.jsx";

function HomePage() {
  const faqData = [
    {
      question: "O que é a Zeelus?",
      answer:
        "A Zeelus é uma plataforma inovadora que conecta cuidadores e oferece ferramentas para facilitar a rotina de cuidados, promovendo organização, aprendizado e suporte contínuo.",
    },
    {
      question: "Meus dados estão protegidos?",
      answer:
        "Sim! A Zeelus prioriza a segurança e privacidade dos seus dados. Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de proteção de dados.",
    },
    {
      question: "Para quem é a Zeelus?",
      answer:
        "A Zeelus é ideal para cuidadores formais e informais que buscam uma solução completa para organizar suas atividades, compartilhar experiências e desenvolver suas habilidades no cuidado.",
    },
    {
      question: "Preciso pagar para usar?",
      answer:
        "A Zeelus oferece um plano gratuito com diversas funcionalidades essenciais. Também disponibilizamos planos premium com recursos adicionais para quem busca uma experiência ainda mais completa.",
    },
  ];

  return (
    <div className={styles.fundoTextura}>
      <section>
        <BlocoInicial
          imagem={coracaoHome}
          textoAlt="Imagem de um coração sorridente com os olhos fechados em estilo animado"
        >
          Você está fazendo o melhor que pode, Gabriela.
          <br />
          <span className={styles.subtituloBlocoInicial}>
            E isso é mais que suficiente hoje. — Equipe Zeelus
          </span>
        </BlocoInicial>
      </section>

      <div className={styles.tituloHome}>
        <h1>Sua Jornada de Cuidado</h1>
      </div>

      <div className={styles.cardsContainer}>
        <LembretesHome
          imagem={calendarioCoracao}
          textoAlt="Imagem de um calendário com coração sorridente"
        />
        <UltimosRegistros />
      </div>

      <section className={styles.bannerSection}>
        <div className={styles.bannerBackground}>
          <img
            src={fotoHome}
            alt="Fundo com frase motivacional"
            className={styles.bannerImagem}
          />
        </div>
        
        <div className={styles.bannerContent}>
          <p className={styles.bannerTexto}>
            Na <span className={styles.azulDestaque}>Zeelus</span>, celebramos sua
            coragem, honramos sua dedicação e oferecemos o suporte que você merece
            por ajudar a construir um mundo mais empático!
          </p>
        </div>

        <div className={styles.ondaContainer}>
          <img
            src={ondaHome}
            alt="Curva decorativa branca"
            className={styles.ondaHome}
          />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />  {/* tambem não me orgulho de fazer mas não quero mexer em algo pior */}
      <br /> {/* critique meu metodos e aplauda meus resultados */}
      <br />  {/* considera o esforço ai vai, da um ponto */}
      <br />
      <br />
      <br />

      <PerfilAnamnese />

      <div className={styles.cardDuploContainer}>
        <UltimosPosts />
        <CardTreinamentos />
      </div>

      

      <div className={styles.fundoVerdeSection}>
        <div className={styles.ondaTopoContainer}>
          <img
            src={onda2}
            alt="Onda decorativa no topo"
            className={styles.ondaTopoImagem}
          />
        </div>

        <Faq data={faqData} plusColor={"black"} questionColor={"black"} title={"Duvidas frequentes"} titleColor={"#004777"} answerColor={"black"}/>
      </div>
    </div>
  );
}

export default HomePage;
