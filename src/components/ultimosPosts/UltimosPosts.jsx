import React from "react";
import styles from "./UltimosPosts.module.css";

export default function BlocoForum() {
  return (
    <div className={styles.card}>
      <h2 className={styles.tituloCard}>Últimos Posts/Comentários Feitos no Fórum</h2>
      <p className={styles.descricao}>
        Nenhum post ou comentário foi feito até o momento! Cheque abaixo alguns destaques <strong>recentes</strong> e <strong>amplie</strong> agora mesmo sua rede de cuidados!
      </p>

      <div className={styles.post}>
        <div className={styles.usuario}>
          
          <p className={styles.nomeData}><strong>José Conceição</strong> • 23/12/2024</p>
        </div>
        <h3 className={styles.tituloPost}>Dicas para ajudar alguém com sobrecarga sensorial?</h3>
        <p className={styles.textoPost}>
          Meu filho tem muita sensibilidade a estímulos sensoriais e sempre fica sobrecarregado em ambientes lotados e barulhentos. Sábado, por exemplo, após uma festa viu uma grande devolta e... <span className={styles.truncado}>ele ficou bem irritado...</span>
        </p>
        <div className={styles.reacoes}>
          <span>👍 18</span>
          <span>💬 21</span>
          <span>❤️ 15</span>
        </div>
      </div>

      <button className={styles.botao}>Ir para o Fórum</button>
    </div>
  );
}