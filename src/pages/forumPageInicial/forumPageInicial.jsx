import React from 'react'
import Style from './forumPageInicial.module.css'

import CampoBusca from "../../components/campoBusca/CampoBusca.jsx";
import BotaoAddRegistro from "../../components/botaoAddRegistro/BotaoAddRegistro.jsx";
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import TituloForum from "../../components/tituloForum/TituloForum.jsx";
import PostCard from "../../components/postcard/PostCard.jsx";

import Faq from "../../components/faq/Faq.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";

import ImgBalaoDeFala from "../../img/baloesdefala.png"
import User1 from "../../img/user4.png";
import User2 from "../../img/user5.png";
import User3 from "../../img/3dAvatar.png";

import { Link } from 'react-router';

const faqData = [
  {
    question: "Como funcionam as regras de moderação no Fórum Zeelus?",
    answer:
      "As regras de moderação são projetadas para garantir um ambiente respeitoso e seguro. Isso inclui proibir",
  },
  {
    question: "Posso compartilhar experiências pessoais no fórum?",
    answer:
      "Sim, o fórum é um espaço para compartilhar experiências pessoais, dicas e conselhos relacionados ao cuidado e bem-estar.",
  },
  {
    question: "Como faço para denunciar uma postagem ou um comentário ofensivo?",
    answer:
      "Você pode denunciar postagens ou comentários clicando no ícone de denúncia localizado próximo ao conteúdo.",
  },
  {
    question: "Como posso encontrar postagens sobre um tema específico?",
    answer:
      "Você pode usar a barra de busca para procurar por palavras-chave relacionadas ao tema que deseja explorar.",
  }
];

const forumPageInicial = () => {
  return (
    <div>
      <BlocoInicial
        imagem={ImgBalaoDeFala}
        textoAlt="Imagem de balões de fala coloridos em estilo animado"
      >
        Boas-vindas ao Fórum Zeelus! <br />
        <span className={Style.subtituloBlocoInicial}>
          Pronto para criar novos elos por meio do zelo? Conecte-se com <br /> outros cuidadores, compartilhe experiências e encontre suporte aqui!
        </span>
      </BlocoInicial>

      <div className={Style.blocos}>
        <CampoBusca placeholder='Pesquise por palavras-chave para começar! Ex: Comunicação ' />
        <BotaoAddRegistro />
      </div>

      <TituloForum>Postagens em Destaque!</TituloForum>

      <Link to="/home/post" className={Style.linkSemEstilo}>
        <PostCard
          autorNome="José Conceição"
          data="23/12/2024"
          titulo="Dicas para ajudar alguém com sobrecarga sensorial?"
          texto="Meu filho tem muita sensibilidade a estímulos sensoriais e sempre fica sobrecarregado em ambientes lotados e barulhentos. Qualquer shopping, parque ou festa vira um grande desafio para ele. Ele pode ficar irritado..."
          mostrarAviso={false}
          avatar={User3}
          className="cardSombraLateral"
          likes={12}
          comentarios={6}
          favoritos={8}
        />
      </Link>

      <PostCard
        autorNome="Leonardo Almeida"
        data="05/11/2024"
        titulo="Recomendações de exercícios para o cognitivo?"
        texto="Gostaria de encontrar exercícios para estimular o desenvolvimento cognitivo, seja para crianças, adultos ou idosos! Tenho um familiar que está buscando maneiras de melhorar a memória e concentração, então estou pesquisando..."
        mostrarAviso={false}
        avatar={User1}
        className="cardSombraLateral"
        likes={18}
        comentarios={21}
        favoritos={15}
      />

      <PostCard
        autorNome="Rogério Duarte"
        data="18/12/2024"
        titulo="Nossa jornada de comunicação não verbal"
        texto="Eu queria compartilhar como desenvolvemos um sistema de comunicação que funciona para minha filha, que possui comunicação não verbal! Nós..."
        mostrarAviso={false}
        avatar={User2}
        className="cardSombraLateral"
        likes={15}
        comentarios={5}
        favoritos={10}
      />

      <WaveFaq />
      <Faq
        data={faqData}
        title="Dúvidas frequentes"
        className={Style.faqForumPageInicial}
      />
    </div>
  )
}

export default forumPageInicial