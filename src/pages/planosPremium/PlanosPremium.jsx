import React from 'react'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import CardPlanos from "../../components/cardPlanos/CardPlanos.jsx";
import IconPlanoGratuito from "../../icons/coracaoPlanoGratuito.png";
import IconPlanoElo from "../../icons/coracaoPlanoElo.png";
import IconPlanoCarePlus from "../../icons/coracaoPlanoCarePlus.png";
import Style from './Planospremium.module.css'
import { Link } from 'react-router';
import ButtonStart from '../../components/buttonStart/ButtonStart.jsx';
import Faq from "../../components/faq/Faq.jsx";


function PlanosPremium() {
  const faqData = [
    {
      question: "Como funciona o plano gratuito?",
      answer: "O plano gratuito oferece acesso limitado a alguns recursos da plataforma."
    },
    {
      question: "Quais são os benefícios do plano Elo?",
      answer: "O plano Elo inclui recursos adicionais, como exportação de relatórios e IA personalizada."
    },
    {
      question: "Posso mudar de plano depois?",
      answer: "Sim, você pode mudar de plano a qualquer momento nas configurações da sua conta."
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className={Style.secaocard}>
          <h1 className={Style.mainTitle}>
  Na <span className={Style.highlight}>Zeelus</span>, seu bem-estar é a nossa prioridade. Com planos criados especialmente para você, oferecemos o acolhimento necessário para trazer mais leveza ao seu dia!
</h1>

          <div className={Style.containerPlanos}>
            <CardPlanos
              title="Plano Care"
              price="Gratuito!"
              features={[
                "Agenda Interativa",
                "Anamnese do Assistido",
                "Diario de Monitoramento",
                "Fórum Comunitario",
                "Treinamento de Primeiros Socorros",
              ]}
              icon={IconPlanoGratuito}
              link="/auth"
              buttonText="Obter Agora!"
            />

            {/* --------------------------------------------------------------------------------------------------- */}

            <div className={Style.cardPlanos}>
              <div className={Style.otherBox}>
                <h2>Plano Elo</h2>
              </div>
              <div className={Style.boxPlanos}>
                <div className={Style.moldura}>
                  <img src={IconPlanoElo} alt="" />
                </div>
                <h3>R$ 19,90/mês!</h3>
                <ul>
                  <li>Plano Care</li>
                  <li>Exportação de Relatorio em PDF</li>
                  <li>IA Personalizada (Até 10 Interações/mês)</li>
                  <li>Experiência com Anúncios Reduzidos</li>
                </ul>
              </div>
              <div className={Style.box}>
                <Link to={""} style={{ width: "80%", display: "block" }}>
                  <ButtonStart children={"Obter Agora!"} width={"100%"} />
                </Link>
              </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------- */}

            <CardPlanos
              title="Plano CarePlus"
              price={<>R$ 34,90/mês</>}
              icon={IconPlanoCarePlus}
              features={[
                "Plano Care + Plano Elo",
                "Experiência sem Anúncios",
                "Assistente por IA sem Limites",
                "Multiplos Perfis de Anamnese",
              ]}
              link=""
              buttonText="Obter Agora!"
            />



          </div>
        </section>

        <section className={Style.faq}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3D517C" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,96C420,96,480,128,540,149.3C600,171,660,181,720,170.7C780,160,840,128,900,112C960,96,1020,96,1080,117.3C1140,139,1200,181,1260,170.7C1320,160,1380,96,1410,64L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

          <Faq data={faqData} title={"Dúvidas Frequentes"} titleColor={"#004777"} plusColor={"#000"}showBorder />

        </section>

      </main>
      <Footer />
    </>
  )
}

export default PlanosPremium