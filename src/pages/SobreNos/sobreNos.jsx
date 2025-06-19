import React from 'react';
import styles from './sobreNos.module.css';
import VectorSection from "../../img/vectorHomeSection.svg";
const SobreNos = () => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <img
        src="/src/assets/equipe.jpg"
        alt="Equipe Zelus"
        className={styles.bannerImage}
      />
      <div className={styles.heroText}>
        <h1>
          Equipe <span>Zelus</span>
        </h1>
        <p>Uma rede de cuidado para quem cuida!</p>
      </div>
      <div className={styles.div3}>
        <img src={VectorSection} alt="" />
      </div>
      
    
    </section>

    <section className={styles.waveSection}>
      <svg
        className={styles.wave}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z"
          fill="#fff"
        />
      </svg>
    </section>

    <section className={styles.content}>
      <div className={styles.card}>
        <img
          src="/src/assets/heart-icon.png"
          alt="Ícone coração"
          className={styles.heartIcon}
        />
      </div>
      <div className={styles.cardText}>
        <h2>
          Por que <span>nascemos?</span>
        </h2>
        <p>
          A <a href="#">Zelus</a> nasceu da escuta atenta de familiares, amigos e vizinhos que dedicam parte da vida ao cuidado de pessoas com condições atípicas.
        </p>
        <p>
          Entendemos que quem cuida também precisa de cuidado. Por isso, criamos um espaço prático e acolhedor, que oferece apoio emocional, ferramentas úteis e uma comunidade de confiança.
        </p>
        <p>
          Confira nosso comercial ao lado!
        </p>
      </div>
    </section>
  </div>
);

export default SobreNos;