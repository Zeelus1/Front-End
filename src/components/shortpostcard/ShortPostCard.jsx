import React, { useState } from "react";
import styles from "./ShortPostCard.module.css";
import ImgComment from "../../img/mensagem.png";
import ImgSave from "../../img/favoritar.png";

import FavoriteIcon from "../favoritarIcon/FavoritarIcon";
import LikeIcon from '../curtidaicon/CurtidaIcon';

export default function ShortPostCard({ titulo, texto, fotoPerfil, likes = 0, comentarios = 0, favoritos = 0 }) {
    const [likeCount, setLikeCount] = useState(likes);
    const [liked, setLiked] = useState(false);

    const [favoriteCount, setFavoriteCount] = useState(favoritos);
    const [favorited, setFavorited] = useState(false);

    const handleLike = (e) => {
        e.stopPropagation();
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setLiked(!liked);
    };

    const handleFavorite = (e) => {
        e.stopPropagation();
        if (favorited) {
            setFavoriteCount(favoriteCount - 1);
        } else {
            setFavoriteCount(favoriteCount + 1);
        }
        setFavorited(!favorited);
    };

    return (
        <div className={styles.shortPostCard}>
            <h3 className={styles.shortPostTitle}>{titulo}</h3>
            <p className={styles.shortPostText}>{texto}</p>
            <div className={styles.shortPostFooter}>
                <img src={fotoPerfil} alt="Usuário" className={styles.shortPostAvatar} />
                <div className={styles.shortPostIcons}>
                    <span className={styles.likes} onClick={handleLike}>
                        <LikeIcon width={30} height={30} liked={liked} />
                        <span className={styles.numbers}>{likeCount}</span>
                    </span>
                    <span className={styles.comentarios}>
                        <img src={ImgComment} alt="Comentar" />
                        <span className={styles.numbers}>{comentarios}</span>
                    </span>
                    <span className={styles.favoritos} onClick={handleFavorite}>
                        <FavoriteIcon width={30} height={30} checked={favorited} />
                        <span className={styles.numbers}>{favoriteCount}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}