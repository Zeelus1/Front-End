import React, { useState } from 'react';
import Style from './PostCard.module.css';
import ImgCurtir from "../../img/like.png";
import ImgMensagem from "../../img/mensagem.png";
import ImgFavoritar from "../../img/favoritar.png";
import ImgAvatar from "../../img/3dAvatar.png";
import ImgMenu from "../../img/3pontos.png";
import ImgBarra from "../../img/barra.png";

function ForumPost({ autorNome, data, titulo, texto, mostrarAviso = true, avatar, className }) {

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
        <div className={Style.iconeItem}>
          <img src={ImgCurtir} alt="Icone de curtir" />
          <span className={Style.gradienteTextoIcone}>12</span>
        </div>

        <img src={ImgBarra} alt="Separador" className={Style.separador} />

        <div className={Style.iconeItem}>
          <img src={ImgMensagem} alt="Icone de comentários" />
          <span className={Style.gradienteTextoIcone}>6</span>
        </div>

        <img src={ImgBarra} alt="Separador" className={Style.separador} />

        <div className={Style.iconeItem}>
          <img src={ImgFavoritar} alt="Icone de favoritar" />
          <span className={Style.gradienteTextoIcone}>8</span>
        </div>
      </div>
    </div>
  );
}

export default ForumPost;