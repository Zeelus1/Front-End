import styles from "./PerfilAnamnese.module.css";
import React from "react";
import sejaPremium from "../../img/sejaPremium.png";
import { Link } from "react-router";

function PerfilAnamnese() {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>
        Seus Perfis de <span className={styles.azul}>Anamnese</span>
      </h2>

      <p className={styles.quantidadePerfis}>
        Quantidade Atual de Perfis: <strong>1</strong>
      </p>

      <p className={styles.subTextoNegrito}>
        Para <span className={styles.azulNegrito}>obter acesso</span> a{" "}
        <span className={styles.azulNegrito}>mais perfis</span>,{" "}
        <span className={styles.azulNegrito}>cheque</span> nossos planos
      </p>

      <p className={styles.subTextoNegrito}>Clicando no Botão Abaixo!</p>

      <Link to="/planospremium" className={styles.linkPlanos}>
        <button className={styles.botaoPremium}>
          <img
            src={sejaPremium}
            alt="Ícone Premium"
            className={styles.iconePremium}
          />
        </button>
      </Link>

      <div className={styles.card}>
        <h3 className={styles.tituloCard}>Identificação</h3>
        <p>
          <span className={styles.azulProfundo}>Nome:</span>{" "}
          <strong>Márcia Carvalho Dias</strong>
        </p>
        <p>
          <span className={styles.azulProfundo}>Idade:</span>{" "}
          <strong>67 anos</strong>
        </p>
        <p>
          <span className={styles.azulProfundo}>Data de Nascimento:</span>{" "}
          <strong>13/06/1957</strong>
        </p>
        <p>
          <span className={styles.azulProfundo}>Condição:</span>{" "}
          <strong>Demência</strong>
        </p>
        <p>
          <span className={styles.azulProfundo}>Naturalidade:</span>{" "}
          <strong>Belo Horizonte/MG</strong>
        </p>
        <p>
          <span className={styles.azulProfundo}>Endereço:</span>{" "}
          <strong>Rua das Acácias, nº 123, Belo Horizonte/MG</strong>
        </p>
      </div>

      <Link to="/home/anamnese">
    
        <button className={styles.botaoVerMais}>Ver Mais</button>
      </Link>

    </section>
  );
}

export default PerfilAnamnese;
