import React, { useState } from 'react';
import Style from './CommentCard.module.css';
import ImgComment from '../../img/mensagem.png';
import ImgSave from '../../img/favoritar.png';
import ImgDivisor from '../../img/barra.png';

import FavoriteIcon from '../favoritarIcon/FavoritarIcon';
import LikeIcon from '../curtidaicon/CurtidaIcon';

function CommentCard({ fotoPerfil, nome, data, texto, likes = 0, comentarios = 0, favoritos = 0 }) {
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
        <div className={Style.commentCard}>
            <img src={fotoPerfil} alt="Foto de perfil" className={Style.commentAvatar} />

            <div className={Style.commentContent}>
                <p className={Style.commentHeader}>
                    <span className={Style.commentNome}>{nome}</span>
                    <span className={Style.commentData}> • {data}</span>
                </p>

                <p className={Style.commentTexto}>{texto}</p>

                <div className={Style.commentIcons}>
                    <div className={Style.commentIcon} onClick={handleLike}>
                        <LikeIcon width={30} height={30} liked={liked} />
                        <span className={Style.commentCount}>{likeCount}</span>
                    </div>

                    <img src={ImgDivisor} alt="Divisor" className={Style.commentDivisor} />

                    <div className={Style.commentIcon}>
                        <img src={ImgComment} alt="Comentar" className={Style.commentIconImg} /> 
                        <span className={Style.commentCount}>{comentarios}</span>
                    </div>

                    <img src={ImgDivisor} alt="Divisor" className={Style.commentDivisor} />

                    <div className={Style.commentIcon} onClick={handleFavorite}>
                        <FavoriteIcon width={30} height={30} checked={favorited} />
                        <span className={Style.commentCount}>{favoriteCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;