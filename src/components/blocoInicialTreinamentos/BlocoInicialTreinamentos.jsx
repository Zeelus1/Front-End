import React from 'react';
import styles from './BlocoInicialTreinamentos.module.css';
import IconLivroAberto from '../../icons/livroaberto.png';

const BlocoInicialTreinamentos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.icon}>
          <img src={IconLivroAberto} alt="Ícone livro aberto" className={styles.iconImg} />
        </span>
        <strong>Ensino ágil e focado no essencial</strong>
      </div>
      <div className={styles.item}>
        <span className={styles.icon}>
          <img src={IconLivroAberto} alt="Ícone livro aberto" className={styles.iconImg} />
        </span>
        <strong>Instrutor com mais de 10 anos de experiência</strong>
      </div>
      <div className={styles.item}>
        <span className={styles.icon}>
          <img src={IconLivroAberto} alt="Ícone livro aberto" className={styles.iconImg} />
        </span>
        <strong>Conteúdo de alta qualidade</strong>
      </div>
    </div>
  );
};

export default BlocoInicialTreinamentos;