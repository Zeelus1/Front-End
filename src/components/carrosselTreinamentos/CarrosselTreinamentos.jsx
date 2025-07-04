import React, { useState, useRef, useEffect } from 'react';
import styles from './CarrosselTreinamentos.module.css';
import imgTreinamento from '../../img/treinamentosComDaniel.png';
import ImgSeta from "../../img/seta.png";
import { Link } from 'react-router';
const cards = [
  {
    titulo: 'Conduta de Desmaio',
    tempo: '5min 43s',
    descricao: 'Aprenda o passo a passo simples e seguro para agir quando alguém desmaia. Saber como agir com calma pode fazer toda a diferença em um momento como esse.',
    imagem: imgTreinamento,
  },
  {
    titulo: 'Conduta de Engasgo',
    tempo: '5min 40s',
    descricao: 'Neste vídeo, você vai entender como identificar e agir rapidamente diante de um engasgo, seja em adultos ou crianças. Cuidar também é estar preparado para o inesperado.',
    imagem: imgTreinamento,
  },
  {
    titulo: 'Conduta de Parada Respiratória',
    tempo: '5min 42s',
    descricao: 'Momentos críticos exigem ação rápida. Aqui você vai aprender os primeiros passos para ajudar alguém em parada respiratória até que o socorro chegue.',
    imagem: imgTreinamento,
  },
  {
    titulo: 'Conduta Eplipsia',
    tempo: '1min 57s',
    descricao: 'Entenda o que fazer quando alguém tem uma crise epilética ou uma convulsão. Conhecimento é poder, e saber como agir pode salvar vidas.',
    imagem: imgTreinamento,
  },
  {
    titulo: 'Conduta de AVC',
    tempo: '2min 07s',
    descricao: 'Aprenda a identificar os sinais de um AVC e como agir rapidamente com a técnica SAMU. Cada segundo conta, e sua ação pode fazer toda a diferença na recuperação da pessoa afetada.',
    imagem: imgTreinamento,
  },
];

// Componente auxiliar para animar o título se necessário
function TituloAnimado({ texto }) {
  const wrapperRef = useRef(null);
  const textoRef = useRef(null);
  const [animar, setAnimar] = useState(false);
  const [distancia, setDistancia] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const textoEl = textoRef.current;
    if (wrapper && textoEl) {
      if (textoEl.scrollWidth > wrapper.offsetWidth) {
        setAnimar(true);
        setDistancia(textoEl.scrollWidth - wrapper.offsetWidth);
      } else {
        setAnimar(false);
        setDistancia(0);
      }
    }
  }, [texto]);

  return (
    <div className={styles.tituloWrapper} ref={wrapperRef}>
      <span
        ref={textoRef}
        className={`${styles.tituloLimitado} ${animar ? styles.animar : ''}`}
        style={animar ? { '--distancia': `-${distancia}px` } : {}}
        title={texto}
      >
        {texto}
      </span>
    </div>
  );
}

export default function CarrosselTreinamentos() {
  const [start, setStart] = useState(0);

  const prev = () => {
    if (start === 0) return;
    setStart((s) => s - 1);
  };

  const next = () => {
    if (start + 3 >= cards.length) return;
    setStart((s) => s + 1);
  };

  const cardWidth = 350; // igual ao seu CSS
  const gap = 32; // 2rem em px

  return (
    <div className={styles.carrossel}>
      <button className={styles.seta} onClick={prev} disabled={start === 0}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="#0070b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={styles.cardsContainer}>
        {cards.slice(start, start + 3).map((card, idx) => (
          <div className={styles.card} key={idx}>
            <img src={card.imagem} alt={card.titulo} className={styles.imagem} />
            <div className={styles.cardInfo}>
              <div className={styles.cardHeader}>
                <TituloAnimado texto={card.titulo} />
                <span className={styles.tempo}>{card.tempo}</span>
              </div>
              <p className={styles.descricao}>{card.descricao}</p>
              <Link to="/home/treinamentos/primeirossocorros/videoDesmaio">
               <button className={styles.botao}>Vamos lá?</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.seta} onClick={next} disabled={start + 3 >= cards.length}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="#0070b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}