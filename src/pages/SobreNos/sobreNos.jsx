import React from 'react';
import styles from './sobreNos.module.css';
import VectorSection from "../../img/vectorHomeSection.svg";
import equipeZeelus from '../../img/equipeZeelus.jpg';
import ZeelusLogo from '../../img/zeelusLogo512.png';
const SobreNos = () => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <img 
      src={equipeZeelus} 
      alt="Equipe Zeelus" 
      className={styles.bannerImage} 
      />
      <div className={styles.heroText}>
        <h1>
          Equipe <span>Zeelus</span>
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
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
    d="M0,140 Q720,150 1440,140 L1440,200 L0,200 Z"
    fill="#ffff"
  />
      </svg>
    </section>

    <section className={styles.content}>
      <div className={styles.card}>
        <img
          src={ZeelusLogo}
          alt="Ícone coração"
          className={styles.heartIcon}
        />
      </div>
      <div className={styles.cardText}>
        <h2>
          Por que <span>nascemos?</span>
        </h2>
        <p>
          A <a href="#">Zeelus</a> nasceu da escuta atenta de familiares, amigos e vizinhos que dedicam parte da vida ao cuidado de pessoas com condições atípicas.
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