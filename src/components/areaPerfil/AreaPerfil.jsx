import React from "react";
import styles from "./AreaPerfil.module.css";

import wave from "../../img/wave.png";
import avatarGabriela from "../../img/avatarGabrielaAugusta.png";
import iconeVoltar from "../../img/iconeVoltar.png";
import iconeOpcoes from "../../img/iconeOpcoes.png";

export default function AreaPerfil() {
  return (
    <div className={styles.areaPerfilContainer}>
      <img src={wave} alt="Onda decorativa" className={styles.waveImg} />

      <div className={styles.topBar}>
        <button
          className={styles.btnVoltar}
          onClick={() => (window.location.href = "/home")}
        >
          <img src={iconeVoltar} alt="Ícone de voltar" />
        </button>

        <button className={styles.btnOpcoes}>
          <img src={iconeOpcoes} alt="Ícone de opções" />
        </button>
      </div>

      <div className={styles.campoPerfil}>
        <div className={styles.avatarPerfil}>
          <img
            src={avatarGabriela}
            alt="Avatar da cuidadora"
            className={styles.avatar}
          />
        </div>

        <div className={styles.perfilInfo}>
          <h2 className={styles.nome}>Gabriela Augusta</h2>
          <p className={styles.arroba}>@Gab.Aug</p>
          <p className={styles.bio}>
            Sou Gabriela Augusta, cuidadora que acredita no poder do carinho e
            da organização no cuidado diário! 🌈
          </p>
        </div>
      </div>
    </div>
  );
}
