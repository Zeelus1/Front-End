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
// --------------------------------------------------------------------------------------------------------------------
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3D517C" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,90.7C384,75,480,85,576,117.3C672,149,768,203,864,229.3C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          <Faq data={faqData} title={"Dúvidas Frequentes"} titleColor={"#004777"} plusColor={"#000"} showBorder />

        </section>

      </main>
      <Footer />
    </>
  )
}

export default PlanosPremium