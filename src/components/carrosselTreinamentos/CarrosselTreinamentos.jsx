import React, { useState, useRef, useEffect } from 'react';
import styles from './CarrosselTreinamentos.module.css';
import imgTreinamento from '../../img/treinamentosComDaniel.png';

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
];

// Componente auxiliar para animar o título se necessário
function TituloAnimado({ texto }) {
  const ref = useRef();
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    if (ref.current && ref.current.scrollWidth > ref.current.offsetWidth) {
      setAnimar(true);
    } else {
      setAnimar(false);
    }
  }, [texto]);

  return (
    <span
      ref={ref}
      className={`${styles.tituloLimitado} ${animar ? styles.animar : ''}`}
      title={texto}
    >
      {texto}
    </span>
  );
}

export default function CarrosselTreinamentos() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => (s === 0 ? 0 : s - 1));
  const next = () => setStart((s) => (s + 3 >= cards.length ? s : s + 1));

  return (
    <div className={styles.carrossel}>
      <button className={styles.seta} onClick={prev} disabled={start === 0}>&lt;</button>
      <div className={styles.cardsContainer}>
        {cards.slice(start, start + 3).map((card, idx) => (
          <div className={styles.card} key={idx}>
            <img src={card.imagem} alt={card.titulo} className={styles.imagem} />
            <div className={styles.cardInfo}>
              <div className={styles.cardHeader}>
                <div className={styles.tituloWrapper}>
                  <strong>
                    <TituloAnimado texto={card.titulo} />
                  </strong>
                </div>
                <span className={styles.tempo}>{card.tempo}</span>
              </div>
              <p className={styles.descricao}>{card.descricao}</p>
              <button className={styles.botao}>Vamos lá?</button>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.seta} onClick={next} disabled={start + 3 >= cards.length}>&gt;</button>
    </div>
  );
}