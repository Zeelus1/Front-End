import React from "react";
import Style from "./ForumPage.module.css";
import AccordionItem from '../../components/postcard/PostCard.jsx';
import PostCard from "../../components/postcard/PostCard.jsx";
import TituloForum from "../../components/tituloForum/TituloForum.jsx";
import CommentInput from "../../components/commentImput/CommentInput.jsx";
import CommentCard from "../../components/commentcard/CommentCard.jsx";
import CommentsSection from "../../components/commentssection/CommentsSection.jsx";

import Faq from "../../components/faq/Faq.jsx";
import IconInterrogacao from "../../icons/pontoInterrogacaoFAQ.png";

const faqData = [
  {
    question: "Como funcionam as regras de moderação no Fórum Zeelus?",
    answer: "As postagens são monitoradas por moderadores e precisam seguir nossas diretrizes de respeito, segurança e apoio mútuo. Conteúdos ofensivos são removidos."
  },
  {
    question: "Posso compartilhar experiências pessoais no fórum?",
    answer: "Sim, desde que respeite a privacidade de terceiros e as regras da comunidade."
  },
  {
    question: "Como faço para denunciar uma postagem ou um comentário ofensivo?",
    answer: "Clique no botão de denúncia ao lado da postagem ou comentário e escolha o motivo."
  },
  {
    question: "Como posso encontrar postagens sobre um tema específico?",
    answer: "Use a barra de pesquisa no topo do fórum para buscar por palavras-chave relacionadas ao tema de interesse."
  }
];

export default function ForumPage() {
  return (
    <div>
      <PostCard
        autorNome="José Conceição"
        data="23/12/2024"
        titulo="Dicas para ajudar alguém com sobrecarga sensorial?"
        texto="Meu filho tem muita sensibilidade a estímulos sensoriais e sempre fica sobrecarregado em ambientes lotados e barulhentos. Qualquer shopping, parque ou festa vira um grande desafio para ele. Ele pode ficar irritado, ansioso e até querer sair correndo da situação. Já tentei algumas estratégias, mas gostaria de ouvir o que funcionou para vocês!
        Alguém tem dicas práticas que ajudaram crianças (ou até adultos) a gerenciar essa sobrecarga? Vale tudo: desde fones de ouvido com cancelamento de ruído, técnicas de respiração, formas de preparar ele antes de sair de casa...
        Se puderem compartilhar suas experiências, eu ficaria muito grato! 🙏 "
      />

      <TituloForum>Mostre seu Apoio Aqui!</TituloForum>

      <CommentsSection />

      <section id="faq" className={Style.faq}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195"><path fill="#F5F3EF" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,96C672,107,768,181,864,192C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        <Faq
          data={faqData}
          title="FAQ"
          className={Style.faq}
          itemClassName={Style['faq-item']}
          questionClassName={Style['faq-question']}
          answerClassName={Style['faq-answer']}
          toggleClassName={Style['faq-toggle']}
        />

      </section>
    </div>
  );
}