import React from "react";
import styles from "./AreaPerfil.module.css";

import wave from "../../img/wave.png";
import avatarGabriela from "../../img/avatarGabrielaAugusta.png";

export default function AreaPerfil() {
  return (
    <div className={styles.areaPerfilContainer}>
      <img src={wave} alt="Onda decorativa" className={styles.waveImg} />

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
          <p className={styles.bio}>
            Sou Gabriela Augusta, cuidadora que acredita no poder do carinho e
            da organização no cuidado diário! 🌈
          </p>
        </div>
      </div>
    </div>
  );
}
