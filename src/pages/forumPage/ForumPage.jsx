import React from "react";
import Style from "./ForumPage.module.css";
import AccordionItem from '../../components/postcard/PostCard.jsx';
import PostCard from "../../components/postcard/PostCard.jsx";

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
    </div>
  );
}