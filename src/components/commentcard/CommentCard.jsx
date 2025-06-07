import React from 'react';
import Style from './CommentCard.module.css';
import ImgLike from '../../img/like.png';
import ImgComment from '../../img/mensagem.png';
import ImgSave from '../../img/favoritar.png';
import ImgDivisor from '../../img/barra.png';

function CommentCard({ fotoPerfil, nome, data, texto, likes, comentarios, favoritos }) {
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
                    <div className={Style.commentIcon}>
                        <img src={ImgLike} alt="Curtir" className={Style.commentIconImg} /> 
                        <span className={Style.commentCount}>{likes}</span>
                    </div>

                    <img src={ImgDivisor} alt="Divisor" className={Style.commentDivisor} />

                    <div className={Style.commentIcon}>
                        <img src={ImgComment} alt="Comentar" className={Style.commentIconImg} /> 
                        <span className={Style.commentCount}>{comentarios}</span>
                    </div>

                    <img src={ImgDivisor} alt="Divisor" className={Style.commentDivisor} />

                    <div className={Style.commentIcon}>
                        <img src={ImgSave} alt="Salvar" className={Style.commentIconImg} />
                        <span className={Style.commentCount}>{favoritos}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;
