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

function PlanosPremium() {
  return (
    <>
      <Header />
      <main>
        <section className={Style.secaocard}>
          <h1>
            Na Zeelus, seu bem-estar é a nossa prioridade. Com planos criados especialmente para você, oferecemos o acolhimento necessário para trazer mais leveza ao seu dia!
          </h1>

          <div className= {Style.containerPlanos}>
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

        <section>

        </section>

      </main>
      <Footer />
    </>
  )
}

export default PlanosPremium