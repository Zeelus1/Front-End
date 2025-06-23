import React from "react";
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
import fundoVerde from "../../img/fundoVerde.png";
import iconeDuvida from "../../img/iconeDuvida.png";
import textura from "../../img/textura.png"; // só para confirmar importação, não precisa usar no JSX diretamente

function HomePage() {
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

      <div className={styles.fraseImagemContainer}>
        <img
          src={fotoHome}
          alt="Fundo com frase motivacional"
          className={styles.bannerImagem}
        />
        <p className={styles.bannerTexto}>
          Na <span className={styles.azulDestaque}>Zeelus</span>, celebramos sua
          coragem, honramos sua dedicação e oferecemos o suporte que você merece
          por ajudar a construir um mundo mais empático!
        </p>
      </div>

      <div className={styles.ondaHomeContainer}>
        <img
          src={ondaHome}
          alt="Curva decorativa branca"
          className={styles.ondaHome}
        />
      </div>

      <PerfilAnamnese />

      <div className={styles.cardDuploContainer}>
        <UltimosPosts />
        <CardTreinamentos />
      </div>

      <div className={styles.ondaAbaixoCards}>
        <img
          src={onda2}
          alt="Onda decorativa abaixo dos cards"
          className={styles.ondaImagem}
        />
      </div>

      <div className={styles.fundoVerdeSection}>
        <img
          src={fundoVerde}
          alt="Fundo verde decorativo"
          className={styles.fundoVerdeImagem}
        />

        <div className={styles.textoSobreFundo}>
          <h2 className={styles.tituloDuvidas}>Dúvidas frequentes</h2>

          <div className={styles.duvidasLista}>
            <div className={styles.duvidaItem}>
              <img
                src={iconeDuvida}
                alt="Ícone dúvida"
                className={styles.iconeDuvida}
              />
              <p>Preciso pagar para usar os serviços?</p>
            </div>
            <hr className={styles.linhaDivisoria} />

            <div className={styles.duvidaItem}>
              <img
                src={iconeDuvida}
                alt="Ícone dúvida"
                className={styles.iconeDuvida}
              />
              <p>Posso acessar os conteúdos sem internet?</p>
            </div>
            <hr className={styles.linhaDivisoria} />

            <div className={styles.duvidaItem}>
              <img
                src={iconeDuvida}
                alt="Ícone dúvida"
                className={styles.iconeDuvida}
              />
              <p>Não sou muito familiar com tecnologia. Vou conseguir usar?</p>
            </div>
            <hr className={styles.linhaDivisoria} />

            <div className={styles.duvidaItem}>
              <img
                src={iconeDuvida}
                alt="Ícone dúvida"
                className={styles.iconeDuvida}
              />
              <p>O que posso fazer com o assistente virtual?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
