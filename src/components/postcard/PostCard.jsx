import React, { useState } from 'react';
import Style from './PostCard.module.css';
import ImgMensagem from "../../img/mensagem.png";
import ImgFavoritar from "../../img/favoritar.png";
import ImgAvatar from "../../img/3dAvatar.png";
import ImgMenu from "../../img/3pontos.png";
import ImgBarra from "../../img/barra.png";

import LikeIcon from '../curtidaicon/CurtidaIcon';
import FavoriteIcon from '../favoritarIcon/FavoritarIcon';

function ForumPost({ autorNome, data, titulo, texto, mostrarAviso = true, avatar, className, likes = 0, comentarios = 0, favoritos = 0 }) {
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
    <div className={`${Style.card} ${className ? Style[className] : ''}`}>
      <div className={Style.topo}>
        <div className={Style.perfil}>
          <img src={avatar || ImgAvatar} alt="Foto de perfil do usuário" className={Style.avatar} />
          <p className={Style.nome}>{autorNome} • {data}</p>
        </div>
        <img src={ImgMenu} alt="Menu" className={Style.menuIcon} />
      </div>

      <h2 className={Style.titulo}>{titulo}</h2>
      <p className={Style.texto}>{texto} </p>

      {mostrarAviso && (
        <div className={Style.aviso}>
          <p>
            Nossa equipe revisa cada postagem para manter um ambiente seguro e respeitoso; contudo, se notar algo inadequado, denuncie! A <span className={Style.gradienteTexto}>Zeelus</span> não tolera conteúdos discriminatórios ou prejudiciais. Consulte nossas <a href="#">políticas de ética e moderação</a>.
          </p>
        </div>
      )}

      <div className={Style.icones}>
        <div className={Style.iconeItem} onClick={handleLike}>
          <LikeIcon width={30} height={30} liked={liked} />
          <span className={Style.gradienteTextoIcone}>{likeCount}</span>
        </div>

        <img src={ImgBarra} alt="Separador" className={Style.separador} />

        <div className={Style.iconeItem}>
          <img src={ImgMensagem} alt="Icone de comentários" />
          <span className={Style.gradienteTextoIcone}>{comentarios}</span>
        </div>

        <img src={ImgBarra} alt="Separador" className={Style.separador} />

        <div className={Style.iconeItem} onClick={handleFavorite}>
          <FavoriteIcon width={30} height={30} checked={favorited} />
          <span className={Style.gradienteTextoIcone}>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ForumPost;