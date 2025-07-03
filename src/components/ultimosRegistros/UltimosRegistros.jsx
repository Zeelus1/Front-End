import React from "react";
import styles from "./UltimosRegistros.module.css";
import folhaSorrindo from "../../img/folhaSorrindo.png"; 
import { Link } from "react-router";

function UltimosRegistros() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.tituloContainer}>
          <h3 className={styles.titulo}>Últimos Registros Feitos</h3>
          <img 
            src={folhaSorrindo} 
            alt="Ícone folha sorrindo" 
            className={styles.icone} 
          />
        </div>
        
        <article className={styles.registro}>
          <h4 className={styles.registroTitulo}>Primeiro exame de Márcia</h4>
          <p className={styles.data}>🕒 01/12/2024 às 13:00</p>
          <p className={styles.descricao}>
            Hoje acompanhei a dona Márcia pela primeira vez ao médico. 
            Ela estava um pouco ansiosa no início, mas conseguimos conversar bastante no caminho, o que a deixou mais tranquila. Durante a consulta, o médico foi atencioso e fez várias perguntas sobre a rotina dela.
          </p>
        </article>

        <Link to="/home/registros">
          <button className={styles.botao} aria-label="Ver todos os registros">
            Ver todos os registros
          </button>
        </Link>

        
      </div>
    </section>
  );
}

export default UltimosRegistros;
