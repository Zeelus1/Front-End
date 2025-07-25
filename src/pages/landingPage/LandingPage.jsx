import { useState, useEffect } from "react";
import { Link } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

import Style from "./LandingPage.module.css";

import Carrossel from "../../components/carrossel/Carrossel.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ButtonStart from "../../components/buttonStart/ButtonStart.jsx";
import CardFuncionalidades from "../../components/cardFuncionalidades/CardFuncionalidades.jsx";
import CardPlanos from "../../components/cardPlanos/CardPlanos.jsx";
import HeaderGlobal from "../../components/headerGlobal/HeaderGlobal.jsx";

import VectorSectionHome from "../../img/vectorHomeSection.svg";
import ColegasTrabalhandoJunto from "../../img/colegasTrabalhandoJunto.png";

import ProaSlider from "../../img/proalogoSlide.png";
import SenacSlider from "../../img/senacLogoSlider.png";
import BraileSlider from "../../img/braileLogoSlider.png";

import MaeFilha from "../../img/maeFilha.png";
import MaeFilhaBricando from "../../img/maeFilhaBricando.png";
import MaePaiFilhaJuntos from "../../img/maePaiFilhaJuntos.png";
import MaeFilhaAbracadas from "../../img/maeFilhaAbracadas.png";
import PessoaDigitando from "../../img/pessoaDigitando.png";
import PessoasAbracando from "../../img/pessoasAbracando.png";
import RealizandoTreinamento from "../../img/realizandoTreinamento.png";
import AvatarAvaliacao1 from "../../img/avatarAvaliacao1.png";
import AvatarAvaliacao2 from "../../img/avatarAvaliacao2.png";
import AvatarAvaliacao3 from "../../img/avatarAvaliacao3.png";
import Video from "../../video/1LandingPage.mp4";

import IconDocumento from "../../icons/mi_document.png";
import IconVortex from "../../icons/ic_twotone-diversity-2.png";
import IconEscudo from "../../icons/ic_baseline-health-and-safety.png";
import SliderParceiros from "../../components/sliderParceiros/SliderParceiros.jsx";
import IconPlanoGratuito from "../../icons/coracaoPlanoGratuito.png";
import IconPlanoElo from "../../icons/coracaoPlanoElo.png";
import IconPlanoCarePlus from "../../icons/coracaoPlanoCarePlus.png";
import IconAspa from "../../icons/iconAspa.png";
import CardAvaliacao from "../../components/cardAvaliacao/CardAvaliacao.jsx";
import Faq from "../../components/faq/Faq.jsx";

function LandingPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const slidesData = [
    {
      image: MaeFilhaBricando,
      title: "01. Crie seu perfil",
      description:
        "Com a Zeelus, seu elo de cuidado ganha maior organização e praticidade. Comece a gerenciar a rotina de seu assistido ainda hoje!",
    },
    {
      image: MaePaiFilhaJuntos,
      title: "02. Conheça nossa plataforma",
      description:
        "Centralize informações importantes e acompanhe a evolução do cuidado de forma intuitiva. Com a Zeelus, tenha tudo o que você precisa em um só lugar!",
    },
    {
      image: MaeFilhaAbracadas,
      title: "03. Faça a diferença",
      description:
        "Faça a diferença no zelo de quem você ama e o transforme em gestão inteligente. A Zeelus te ajuda a fazer mais por quem ama, com menos estresse!",
    },
  ];

  const sliders = [ProaSlider, SenacSlider, BraileSlider];

  const faqData = [
    {
      question: "O que é a Zeelus?",
      answer:
        "A Zeelus é uma plataforma inovadora que conecta cuidadores e oferece ferramentas para facilitar a rotina de cuidados, promovendo organização, aprendizado e suporte contínuo.",
    },
    {
      question: "Meus dados estão protegidos?",
      answer:
        "Sim! A Zeelus prioriza a segurança e privacidade dos seus dados. Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de proteção de dados.",
    },
    {
      question: "Para quem é a Zeelus?",
      answer:
        "A Zeelus é ideal para cuidadores formais e informais que buscam uma solução completa para organizar suas atividades, compartilhar experiências e desenvolver suas habilidades no cuidado.",
    },
    {
      question: "Preciso pagar para usar?",
      answer:
        "A Zeelus oferece um plano gratuito com diversas funcionalidades essenciais. Também disponibilizamos planos premium com recursos adicionais para quem busca uma experiência ainda mais completa.",
    },
  ];

  return (
    <>
      <HeaderGlobal />
      <main className={Style.main}>
        {/* Seção Home */}
        <section className={Style.home} id="home" data-aos="fade-up">
          <div className={Style.container} data-aos="fade-right" data-aos-delay="200">
            <div className={Style.div1}>
              <div>
                <h1 data-aos="fade-up" data-aos-delay="400">
                  Soluções que <br />{" "}
                  <span className={Style.destaque}>acolhem</span>, <br />{" "}
                  ferramentas que <br />
                  <span className={Style.destaque}>empoderam</span>!
                </h1>
                <Link to="/auth" data-aos="fade-up" data-aos-delay="600">
                  <ButtonStart>Começar</ButtonStart>
                </Link>
              </div>
            </div>
          </div>

          <div className={Style.videoBgWrapper}>
            <video
              className={Style.videoBg}
              src={Video}
              autoPlay
              loop
              muted
              playsInline
              poster={MaeFilha}
            />

            <div className={Style.overlayGradiente}></div>
          </div>

          <div className={Style.div3}>
            <img src={VectorSectionHome} alt="" />
          </div>
        </section>

        {/* Seção Sobre */}
        <section className={Style.sobre} id="sobre" data-aos="fade-up">
          <h1 data-aos="fade-up" data-aos-delay="200">
            <span className={Style.destaqueSobre}>
              Reinventando o conceito de <br /> cuidado por meio da tecnologia!
            </span>
          </h1>

          <div className={Style.containerSobre}>
            <div className={Style.molduraSobre} data-aos="fade-right" data-aos-delay="400">
              <img
                src={ColegasTrabalhandoJunto}
                alt="Colegas trabalhando junto"
              />
            </div>

            <p data-aos="fade-left" data-aos-delay="600">
              Na <span className={Style.destaqueSobre}>Zeelus</span>,
              acreditamos que o cuidado vai além de simples tarefas diárias.
              Nosso objetivo é transformar a jornada dos cuidadores informais,
              oferecendo uma plataforma que utiliza a tecnologia para
              proporcionar mais organização, apoio e aprendizado contínuo.
            </p>
          </div>

          <div className={Style.boxVideoSobre}>
            <iframe
              width="709"
              height="399"
              src="https://www.youtube.com/embed/tOyGmNnyRKY"
              title="Comercial Zeelus"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          {showVideoModal && (
            <div
              className={Style.videoModalOverlay}
              onClick={() => setShowVideoModal(false)}
            >
              <div
                className={Style.videoModalCard}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={Style.closeModal}
                  onClick={() => setShowVideoModal(false)}
                >
                  X
                </button>
                <iframe
                  width="709"
                  height="399"
                  src="https://www.youtube.com/embed/tOyGmNnyRKY"
                  title="Comercial Zeelus"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>

        {/* Seção Funcionalidades */}
        <section
          id="funcionalidades"
          className={Style.funcionalidades}
          data-aos="fade-up"
        >
          <div data-aos="fade-up" data-aos-delay="200">
            <Carrossel slides={slidesData} autoSlideInterval={10000} />
          </div>

          <h1 data-aos="fade-up" data-aos-delay="300">
            A <span className={Style.destaqueFuncionalide}>Zeelus</span> fornece
            soluções <br /> integradas de maneira prática!
          </h1>

          <div className={Style.containerFuncionalidade}>
            <div data-aos="fade-up" data-aos-delay="200">
              <CardFuncionalidades
                icon={IconDocumento}
                title="Documentação Segura"
                description="Registre observações, cronogramas e 
                a anamnese de seu assistido com privacidade e 
                segurança!"
                image={PessoaDigitando}
                imageAlt="Pessoa digitando"
                iconAlt="Icone de documentação"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <CardFuncionalidades
                icon={IconVortex}
                title="Comunicação Adaptativa"
                description="Conecte-se a outros acompanhantes e compartilhe experiências em um ambiente acolhedor!"
                image={PessoasAbracando}
                imageAlt="Duas pessoas se abraçando"
                iconAlt="Icone de vortex"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <CardFuncionalidades
                icon={IconEscudo}
                title="Ambiente de Crescimento"
                description="Promova seu desenvolvimento pessoal e profissional com apoio estruturado e recursos como aulas simples e práticas de primeiros socorros!"
                image={RealizandoTreinamento}
                imageAlt="Pessoas realizando treinamento de primeiros socorros"
                iconAlt="Icone de escudo"
              />
            </div>
          </div>
        </section>

        {/* Seção Planos */}
        <section id="planos" className={Style.planos} data-aos="fade-up">
          <h1 data-aos="fade-up" data-aos-delay="200">
            Veja nossos planos!
          </h1>
          <div className={Style.containerPlanos}>
            <div data-aos="fade-up" data-aos-delay="200">
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
                link="/planospremium"
                buttonText="Obter Agora!"
              />
            </div>

            {/* ----------------------------------------------------------- */}

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
                <Link to={"/planospremium"} style={{ width: "80%", display: "block" }}>
                  <ButtonStart children={"Obter Agora!"} width={"100%"} />
                </Link>
              </div>
            </div>

            {/* ----------------------------------------------------------- */}

            <div data-aos="fade-up" data-aos-delay="600">
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
                link="/planospremium"
                buttonText="Obter Agora!"
              />
            </div>
          </div>
        </section>

        {/* Seção Avaliações */}
        <section id="avaliacoes" className={Style.avaliacoes} data-aos="fade-up">
          <h1 data-aos="fade-up" data-aos-delay="200">
            Confira algumas avaliações de <br /> usuários da Zeelus!
          </h1>
          <div className={Style.containerAvaliacao}>
            <div data-aos="fade-up" data-aos-delay="200">
              <CardAvaliacao
                avatar={AvatarAvaliacao1}
                title="Facilidade que Transforma!"
                rating={5}
                name="Yuri Ramos"
                quoteIcon={IconAspa}
              >
                Plataforma completa! A Zeelus acompanha rotinas, treinamentos e
                documentos em um só lugar. Meu dia a dia ficou muito mais leve.
                Recomendo!
              </CardAvaliacao>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <CardAvaliacao
                avatar={AvatarAvaliacao2}
                title="Tecnologia que acolhe de verdade!"
                rating={5}
                name="Velma de Souza"
                quoteIcon={IconAspa}
              >
                Sempre quis um suporte humanizado, e a Zeelus entregou!
                Ferramentas fáceis e um fórum inspirador. Sinto que tenho apoio de
                verdade agora!
              </CardAvaliacao>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <CardAvaliacao
                avatar={AvatarAvaliacao3}
                title="Soluções que fazem a diferença!"
                rating={5}
                name="Yuri Ramos"
                quoteIcon={IconAspa}
              >
                Tudo que um cuidador precisa: organização, segurança e apoio. A
                Zeelus transformou minha rotina!
              </CardAvaliacao>
            </div>
          </div>
        </section>

        {/* Seção Parceiros */}
        <section id="parceiros" className={Style.parceiros} data-aos="fade-up">
          <h2 data-aos="fade-up" data-aos-delay="200">Parceiros</h2>
          <div data-aos="fade-up" data-aos-delay="400">
            <SliderParceiros logos={sliders} />
          </div>
        </section>

        {/* Seção FAQ */}
        <section id="faq" className={Style.faq} data-aos="fade-up">
          <svg data-aos="fade-down" data-aos-delay="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,96C672,107,768,181,864,192C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div data-aos="fade-up" data-aos-delay="400">
            <Faq data={faqData} title={"FAQ"} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
