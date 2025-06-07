import React from 'react'
import Style from './ForumPageInicial.module.css'

import CampoBusca from "../../components/campoBusca/CampoBusca.jsx";
import BotaoAddRegistro from "../../components/botaoAddRegistro/BotaoAddRegistro.jsx";
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import TituloForum from "../../components/tituloForum/TituloForum.jsx";
import PostCard from "../../components/postcard/PostCard.jsx";

import ImgBalaoDeFala from "../../img/baloesdefala.png"
import User1 from "../../img/user4.png";
import User2 from "../../img/user5.png";
import User3 from "../../img/3dAvatar.png";

const forumPageInicial = () => {
  return (
    <div>
      <BlocoInicial
        imagem={ImgBalaoDeFala}
        textoAlt="Imagem de balões de fala coloridos em estilo animado"
      >
        Seja muito bem-vinde ao Fórum Zeelus! <br />
        <span className={Style.subtituloBlocoInicial}>
          Pronto para criar novos elos por meio do zelo? Conecte-se com <br /> outros cuidadores, compartilhe experiências e encontre suporte aqui!
        </span>
      </BlocoInicial>

      <div className={Style.blocos}>
        <CampoBusca placeholder='Pesquise por palavras-chave para começar! Ex: Comunicação ' />
        <BotaoAddRegistro />
      </div>

      <TituloForum>Postagens em Destaque!</TituloForum>

      <PostCard
        autorNome="José Conceição"
        data="23/12/2024"
        titulo="Dicas para ajudar alguém com sobrecarga sensorial?"
        texto="Meu filho tem muita sensibilidade a estímulos sensoriais e sempre fica sobrecarregado em ambientes lotados e barulhentos. Qualquer shopping, parque ou festa vira um grande desafio para ele. Ele pode ficar irritado..."
        mostrarAviso={false}
        avatar={User3}
        className="cardSombraLateral"
      />

      <PostCard
        autorNome="Leonardo Almeida"
        data="05/11/2024"
        titulo="Recomendações de exercícios para o cognitivo?"
        texto="Gostaria de encontrar exercícios para estimular o desenvolvimento cognitivo, seja para crianças, adultos ou idosos! Tenho um familiar que está buscando maneiras de melhorar a memória e concentração, então estou pesquisando..."
        mostrarAviso={false}
        avatar={User1}
        className="cardSombraLateral"
      />

      <PostCard
        autorNome="Rogério Duarte"
        data="18/12/2024"
        titulo="Nossa jornada de comunicação não verbal"
        texto="Eu queria compartilhar como desenvolvemos um sistema de comunicação que funciona para minha filha, que possui comunicação não verbal! Nós..."
        mostrarAviso={false}
        avatar={User2}
        className="cardSombraLateral"
      />

    </div>
  )
}

export default forumPageInicial