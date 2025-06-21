import React from "react";  
import styles from "./LembretesHome.module.css";

function LembretesHome({ imagem, textoAlt }) {
  return (
    
    <div className={styles.container}>
      <div className={styles.card}>

     <div className={styles.tituloComImagem}>
  <div>
    Nenhum Lembrete <br /> Programado para Hoje!
  </div>
    <img
    src={imagem}
    alt={textoAlt}
    className={styles.icone}
  />
</div>

        <p className={styles.subtexto}>
          O lembrete mais próximo de sua agenda está há 2 dias de distância —
          <br />
          <strong>03/01/2025, Terça-Feira!</strong>
        </p>
        <div className={styles.bloco}>
          <strong>Remédio da Manhã (Dona Márcia)</strong>
          <br />
          8:00 AM
        </div>
        <button className={styles.botao}>Ir para o meu Calendário/Agenda</button>
      </div>
    </div>
  );
}

export default LembretesHome;