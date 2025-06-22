import React from "react";
import { Link } from "react-router";
import styles from "./CardAnamnese.module.css";

import fotoMarcia from "../../img/fotoMarcia.jpg";
import iconeCoracaoAnamnese from "../../img/iconeCoracaoAnamnese.png";
import iconeLivroAnamnese from "../../img/iconeLivroAnamnese.png";

export default function CardAnamnese() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.fotoContainer}>
        <img
          src={fotoMarcia}
          alt="Foto da pessoa assistida"
          className={styles.foto}
        />
        <Link to="/home/anamnese">
          <button className={styles.btnAnamnese}>
            Ver anamnese
          </button>
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.estiloNome}>
          <img
            className={styles.imgNome}
            src={iconeCoracaoAnamnese}
            alt="Ícone de coração anamnese"
          />
          <h2 className={styles.nome}>Márcia Carvalho Dias</h2>
        </div>
        <p className={styles.linha}>
          <strong>Diagnóstico:</strong> Demência
        </p>
        <p className={styles.linha}>
          <strong>Grau de dependência:</strong> Moderado
        </p>

        <div className={styles.estiloNome} style={{ marginTop: "0.8rem" }}>
          <img
            className={styles.imgNome}
            src={iconeLivroAnamnese}
            alt="Ícone de livro com coração anamnese"
          />
          <h3 className={styles.nome}>Sobre Márcia:</h3>
        </div>
        <p className={styles.descricao}>
          Márcinha enfrenta a Demência há 4 anos, sempre cercada de carinho e
          apoio da família. Gosta de ouvir forró antigo nas manhãs tranquilas e
          sente paz ao tomar sol no quintal.
        </p>
      </div>
    </div>
  );
}
