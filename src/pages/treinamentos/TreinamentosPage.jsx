import React from 'react'
import Style from './TreinamentosPage.module.css'

import ImgCoracaoComUmaMao from "../../img/coracaoComUmaMao.png"
import ImgHospitalSimbolo from "../../img/hospitalSimbolo.png"
import ImgMaeAlimentandoIcone from "../../img/maeAlimentandoIcone.png"
import ImgCerebroIcone from "../../img/cerebroIcone.png"

import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import AccordionItem from '../../components/accordionitem/AccordionItem.jsx';
import Faq from "../../components/faq/Faq.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";

import { Link } from 'react-router';

const faqData = [
  {
    question: "Os vídeos são voltados só para cuidadores de idosos?",
    answer:
      "Não, as dicas são para qualquer pessoa seja ela cuidadora de crianças, adultos ou idosos. O objetivo é ensinar como agir em situações de emergência.",
  },
  {
    question: "Quem grava os vídeos? Posso confiar nas informações?",
    answer:
      "Os vídeos são gravados por um bombeiro especializado em situações de emergência. Todo o conteúdo é baseado em procedimentos reconhecidos e na experiência prática do profissional, garantindo orientações claras e seguras para agir em momentos críticos.",
  },
  {
    question: "E se eu não encontrar um vídeo sobre o que estou procurando?",
    answer:
      "Se você não encontrar um vídeo específico, pode sugerir temas através do nosso canal de contato. Estamos sempre abertos a novas ideias e conteúdos que possam ajudar nossos usuários.",
  },
  {
    question: "Vocês vão adicionar outras categorias além de Primeiros Socorros?",
    answer:
      "Sim, estamos planejando expandir nosso conteúdo para incluir outras áreas de cuidado, como nutrição, saúde mental e desenvolvimento infantil. Fique atento às atualizações!",
  }
];

function TreinamentosPage() {
  return (
    <>
      <BlocoInicial imagem={ImgCoracaoComUmaMao} textoAlt="Imagem de uma mão segurando um coração">
        <div className={Style.tituloBloco}>
          O que você faz nos primeiros minutos pós acidente <br />
          pode salvar uma vida!
        </div>
      </BlocoInicial>

      <AccordionItem icon={ImgHospitalSimbolo} textoAlt="Símbolo de uma cruz hospitlar" title="Primeiros Socorros">
        <div className={Style.cardInterno}>
          <p>
            Nem sempre dá tempo de esperar ajuda. Aqui, você aprende os primeiros passos para agir com calma e eficiência. Tudo explicado por um bombeiro de forma acessível, para quem cuida todos os dias.
          </p>
          <hr />
          <ul className={Style.lista}>
            <li>Desmaios</li>
            <li>Engasgos</li>
            <li>Paradas Cardíacas</li>
            <li>Quedas</li>
            <li>Ferimentos</li>
            <li>Convulsão</li>
            <li>Parada respiratória</li>
            <li>Pré Desmaio</li>
            <li>AVC</li>
          </ul>
        </div>

        <Link to="/home/primeiros-socorros">
          <button className={Style.botaoGradient}>Começar</button>
        </Link>
      </AccordionItem>

      <AccordionItem icon={ImgMaeAlimentandoIcone} textoAlt="Símbolo de uma mãe alimentando um bebê" title="Cuidados com Crianças com Necessidades Especiais">
        <div className={Style.cardInterno}>
          <p>
            Aprenda a cuidar de crianças com necessidades especiais, desde alimentação até cuidados diários. Conteúdo prático e acessível para quem cuida.
          </p>
          <hr />
          <ul className={Style.lista}>
            <li>Cuidados com a alimentação</li>
            <li>Cuidados com a higiene</li>
            <li>Cuidados com a saúde</li>
            <li>Cuidados com o sono</li>
            <li>Cuidados com o desenvolvimento</li>
          </ul>
        </div>
        <button className={Style.botaoGradient} disabled>Em breve</button>
      </AccordionItem>

      <AccordionItem icon={ImgCerebroIcone} textoAlt="Símbolo de um cérebro" title="Estimulação Cognitiva">
        <div className={Style.cardInterno}>
          <p>
            Aprenda a estimular o desenvolvimento cognitivo de crianças com necessidades especiais. Conteúdo prático e acessível para quem cuida.
          </p>
          <hr />
          <ul className={Style.lista}>
            <li>Estimulação da memória</li>
            <li>Estimulação da atenção</li>
            <li>Estimulação da linguagem</li>
            <li>Estimulação da percepção</li>
            <li>Estimulação da coordenação motora</li>
          </ul>
        </div>
        <button className={Style.botaoGradient} disabled>Em breve</button>
      </AccordionItem>

      <WaveFaq />
      <Faq
        data={faqData}
        title="Dúvidas frequentes"
        className={Style.faqtreinamentosPage}
      />
    </>
  )
}

export default TreinamentosPage