import React from "react";
import styles from "./ShortPostCard.module.css";
import ImgLike from "../../img/like.png";
import ImgComment from "../../img/mensagem.png";
import ImgSave from "../../img/favoritar.png";

export default function ShortPostCard({ titulo, texto, fotoPerfil, likes, comentarios, favoritos }) {
    return (
        <div className={styles.shortPostCard}>
            <h3 className={styles.shortPostTitle}>{titulo}</h3>
            <p className={styles.shortPostText}>{texto}</p>
            <div className={styles.shortPostFooter}>
                <img src={fotoPerfil} alt="Usuário" className={styles.shortPostAvatar} />
                <div className={styles.shortPostIcons}>
                    <span className={styles.likes}>
                        <img src={ImgLike} alt="Curtir" /> <span className={styles.numbers}>{likes}</span>
                    </span>
                    <span className={styles.comentarios}>
                        <img src={ImgComment} alt="Comentar" /> <span className={styles.numbers}>{comentarios}</span>
                    </span>
                    <span className={styles.favoritos}>
                        <img src={ImgSave} alt="Favoritar" /> <span className={styles.numbers}>{favoritos}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}