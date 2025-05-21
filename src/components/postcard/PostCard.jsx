import React, { useState } from 'react';
import Style from './PostCard.module.css';
import ImgCurtir from "../../img/like.png";
import ImgMensagem from "../../img/mensagem.png";
import ImgFavoritar from "../../img/favoritar.png";
import ImgAvatar from "../../img/3dAvatar.png";

function ForumPost({ autorImg, autorNome, data, titulo, texto }) {

  return (
    <div className={Style.card}>
      <div className={Style.topo}>
        <img src={ImgAvatar} alt="Foto de perfil do usuário" className={Style.avatar} />
        <div>
          <p className={Style.nome}>{autorNome} • {data}</p>
        </div>
        <div className={Style.menu}>⋮</div>
      </div>

      <h2 className={Style.titulo}>{titulo}</h2>
      <p className={Style.texto}>{texto}</p>

      <div className={Style.aviso}>
        <p>
          Nossa equipe revisa cada postagem para manter um ambiente seguro e respeitoso; contudo, se notar algo inadequado, denuncie! A <span className={Style.gradienteTexto}>Zeelus</span> não tolera conteúdos discriminatórios ou prejudiciais. Consulte nossas <a href="#">políticas de ética e moderação</a>.
        </p>
      </div>

      <div className={Style.icones}>
        <div><img src={ImgCurtir} alt="Icone de curtir" /> <span className={Style.gradienteTextoIcone}>12</span></div>
        <div><img src={ImgMensagem} alt="Icone de comentários" /> <span className={Style.gradienteTextoIcone}>6</span></div>
        <div><img src={ImgFavoritar} alt="Icone de favoritar" /> <span className={Style.gradienteTextoIcone}>8</span></div>
      </div>
    </div>
  );
}

export default ForumPost;
