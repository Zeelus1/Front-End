import React from 'react';
import styles from './UltimosPosts.module.css';
import avatarJose from '../../img/avatarJose.png';
import iconeConversa from '../../img/iconeConversa.png';
import icones from '../../img/icones.png';
import { Link } from 'react-router';

export default function UltimosPosts() {
  return (
    <div className={styles.card}>
      <div className={styles.tituloCard}>
        <h2 className={styles.tituloGradiente}>
          Últimos Posts/Comentários Feitos no Fórum
        </h2>
        <img src={iconeConversa} alt="Ícone de conversa" className={styles.icone} />
      </div>

      <p className={styles.descricao}>
        Nenhum post ou comentário foi feito até o momento! Cheque abaixo alguns destaques <span className={styles.textoGradiente}>recentes</span> e <span className={styles.textoGradiente}>amplie</span> agora mesmo sua rede de cuidados!
      </p>

      <div className={styles.post}>
        <div className={styles.usuario}> 
      <img src={avatarJose} alt="José Conceição" className={styles.avatarJose} />
          <p className={styles.nomeData}>
      <strong className={styles.nomeAzulClaro}>José Conceição</strong> - 23/12/2024
        </p>
      </div>

    <h3 className={styles.tituloPostAzulEscuro}>
      Dicas para ajudar alguém com sobrecarga sensorial?
    </h3>


        <p className={styles.textoPost}>
          Meu filho tem muita sensibilidade a estímulos sensoriais e sempre fica sobrecarregado em ambientes lotados e barulhentos. Sábado, por exemplo, após uma festa viu uma grande devolta de barulho. Ele ficou bem irritado...
          </p>

          <img src={icones} alt="Descrição da imagem" className={styles.imagemPost} />


        <div className={styles.reacoes}>
          
        </div>
      </div>

      <Link to="/home/forum">
        <button className={styles.botao}>Ir para o Fórum</button>
      
      </Link>

    </div>
  );
}
