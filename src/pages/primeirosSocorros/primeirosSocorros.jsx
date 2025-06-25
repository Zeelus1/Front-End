import React from 'react'
import Style from './primeirosSocorros.module.css'

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ChatZee from "../../components/chatZee/ChatZee";

import Faq from "../../components/faq/Faq.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";
import BlocoInicial from '../../components/blocoinicial/BlocoInicial.jsx';
import BlocoInicialTreinamentos from '../../components/blocoInicialTreinamentos/BlocoInicialTreinamentos.jsx';
import TituloForum from "../../components/tituloForum/TituloForum.jsx";
import CarrosselTreinamentos from '../../components/carrosselTreinamentos/CarrosselTreinamentos.jsx';

import ImgMonitor from '../../img/desenhomonitor.png';

const faqData = [
  {
    question: "Preciso ter experiência para entender os vídeos?",
    answer:
      "Não, os vídeos são projetados para serem acessíveis a todos, independentemente do nível de experiência.",
  },
  {
    question: "Os vídeos mostram como agir em emergências reais?",
    answer:
      "Sim, os vídeos são baseados em situações reais e ensinam como agir de forma eficaz em emergências.",
  },
  {
    question: "Preciso assistir os vídeos em alguma ordem específica?",
    answer:
      "Não, você pode assistir aos vídeos na ordem que preferir. Cada vídeo aborda um tópico específico de primeiros socorros.",
  },
  {
    question: "Os vídeos ficam disponíveis por quanto tempo?",
    answer:
      "Por tempo indeterminado, você pode acessá-los sempre que precisar.",
  }
];

const primeirosSocorros = () => {
  return (
    <>
      <Header />
      <ChatZee />
      <BlocoInicial
        imagem={ImgMonitor}
        textoAlt="Imagem de um monitor com um capelo representando uma aba de vídeo representando a trilha de aprendizagem de primeiros socorros"
      >
        Bem-vinde à trilhagem de aprendizado Zeelus! <br />
        <span className={Style.subtituloBlocoInicial}>
          Os vídeos são curtos, mas o que você leva fica pra sempre!
        </span>
      </BlocoInicial>
      
      <BlocoInicialTreinamentos/>

      <TituloForum>Comece com apoio, siga com confiança!</TituloForum>

      <CarrosselTreinamentos />

      <WaveFaq />
      <Faq
        data={faqData}
        title="Dúvidas frequentes"
        className={Style.faqprimeirosSocorros}
      />
      <Footer />
    </>
  )
}

export default primeirosSocorros