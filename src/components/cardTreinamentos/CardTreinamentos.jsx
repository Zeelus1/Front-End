import React from 'react';
import styles from './CardTreinamentos.module.css';
import iconeTreina from '../../img/iconeTreina.png';
import engasgo from '../../img/engasgo.png';
import sombra from '../../img/sombra.png';
import { Link } from 'react-router';

export default function CardTreinamento() {
  return (
    <div className={styles.card}>
      <div className={styles.tituloCard}>
        <h2 className={styles.tituloGradiente}>
          Treinamento em Curso: Primeiros Socorros
        </h2>
        <img
          src={iconeTreina}
          alt="Ícone de treinamento"
          className={styles.icone}
        />
      </div>

      <p className={styles.mensagemExtra}>Continue de onde parou!</p>

      <p className={styles.descricao}>
        Cada minuto assistido te aproxima da conclusão deste curso e fortalece sua jornada!{' '}
        <span className={styles.textoGradiente}>Vamos lá?</span>
      </p>

      <div className={styles.videoContainer}>
        {/* Imagem principal */}
        <img
          src={engasgo}
          alt="Imagem demonstrativa de primeiros socorros para engasgo"
          className={styles.imagemTreinamento}
        />

        {/* Sombra sobreposta + texto */}
        <div className={styles.sombraComTexto}>
          <img
            src={sombra}
            alt="Sombra decorativa"
            className={styles.sombraSobreposta}
          />
          <span className={styles.tituloSombra}>Conduta de Engasgo</span>
        </div>
      </div>

      {/* ✅ Botão dentro do container principal */}
      <Link to="/home/treinamentos">
        <button className={styles.botao}>Ir para Treinamentos</button>
      </Link>
    </div>
  );
}
