import { useState, useEffect } from "react";
import { Link } from "react-router";

import Style from "./LandingPage.module.css";

import ButtonMenu from "../../icons/icons8-menu.svg";
import ButtonClose from "../../icons/icons8-close.svg";
import Carrossel from "../../components/carrossel/Carrossel.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ButtonStart from "../../components/buttonStart/ButtonStart.jsx";
import CardFuncionalidades from "../../components/cardFuncionalidades/CardFuncionalidades.jsx";
import CardPlanos from "../../components/cardPlanos/CardPlanos.jsx";

import VectorSectionHome from "../../img/vectorHomeSection.svg";
import ColegasTrabalhandoJunto from "../../img/colegasTrabalhandoJunto.png";

import Logo from "../../img/zeelusLogo1.png";
import ProaSlider from "../../img/proalogoSlide.png"
import SenacSlider from "../../img/senacLogoSlider.png"
import BraileSlider from "../../img/braileLogoSlider.png"

import MaeFilha from "../../img/maeFilha.png";
import MaeFilhaBricando from "../../img/maeFilhaBricando.png";
import MaePaiFilhaJuntos from "../../img/maePaiFilhaJuntos.png";
import MaeFilhaAbracadas from "../../img/maeFilhaAbracadas.png";
import PessoaDigitando from "../../img/pessoaDigitando.png";
import PessoasAbracando from "../../img/pessoasAbracando.png";
import RealizandoTreinamento from "../../img/realizandoTreinamento.png";
import AvatarAvaliacao1 from "../../img/avatarAvaliacao1.png"
import AvatarAvaliacao2 from "../../img/avatarAvaliacao2.png"
import AvatarAvaliacao3 from "../../img/avatarAvaliacao3.png"

import IconDocumento from "../../icons/mi_document.png";
import IconVortex from "../../icons/ic_twotone-diversity-2.png";
import IconEscudo from "../../icons/ic_baseline-health-and-safety.png";
import SliderParceiros from "../../components/sliderParceiros/SliderParceiros.jsx";
import IconPlanoGratuito from "../../icons/coracaoPlanoGratuito.png"
import IconPlanoElo from "../../icons/coracaoPlanoElo.png"
import IconPlanoCarePlus from "../../icons/coracaoPlanoCarePlus.png"
import IconAspa from "../../icons/iconAspa.png"
import CardAvaliacao from "../../components/cardAvaliacao/CardAvaliacao.jsx";
import Faq from "../../components/faq/Faq.jsx";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const slidesData = [
    {
      image: MaeFilhaBricando,
      title: "01. Crie seu perfil",
      description:
        "Crie seu perfil na Zeelus e comece a organizar e acompanhar a jornada de cuidado de forma prática e eficiente. Ao cadastrar informações essenciais, você terá acesso a todas as funcionalidades da plataforma para gerenciar melhor o seu dia a dia como cuidador e o de sua pessoa assistida!",
    },
    {
      image: MaePaiFilhaJuntos,
      title: "02. Conheça nossa plataforma",
      description:
        "Explore a Zeelus e descubra como nossa plataforma facilita a rotina de cuidado, com ferramentas intuitivas e recursos para organização, aprendizado e conexão com outros cuidadores!",
    },
    {
      image: MaeFilhaAbracadas,
      title: "03. Faça a diferença",
      description:
        "Faça a diferença no cuidado de quem você ama com a Zeelus. Ao utilizar nossa plataforma, você terá ferramentas para oferecer mais apoio, organização e aprendizado, tornando a jornada de cuidado mais leve e eficiente, tanto para você quanto para a pessoa assistida!",
    },
  ];

  const sliders = [
    ProaSlider,
    SenacSlider,
    BraileSlider
  ]

  const faqData = [
    {
      question: "O que é a Zeelus?",
      answer: "A Zeelus é uma plataforma inovadora que conecta cuidadores e oferece ferramentas para facilitar a rotina de cuidados, promovendo organização, aprendizado e suporte contínuo.",
    },
    {
      question: "Meus dados estão protegidos?",
      answer: "Sim! A Zeelus prioriza a segurança e privacidade dos seus dados. Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de proteção de dados.",
    },
    {
      question: "Para quem é a Zeelus?",
      answer: "A Zeelus é ideal para cuidadores formais e informais que buscam uma solução completa para organizar suas atividades, compartilhar experiências e desenvolver suas habilidades no cuidado.",
    },
    {
      question: "Preciso pagar para usar?",
      answer: "A Zeelus oferece um plano gratuito com diversas funcionalidades essenciais. Também disponibilizamos planos premium com recursos adicionais para quem busca uma experiência ainda mais completa.",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const overlay = document.getElementById("overlay");
      if (isMenuOpen && e.target === overlay) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 910);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 910);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`${Style.header} ${scrolled ? Style.scrolled : ""}`}>
        <img src={Logo} alt="Logo da zeelus" className={Style.logo} />

        <button
          className={Style.btn_abrir}
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <img src={ButtonMenu} alt="Menu Hambúrguer" className={Style.menu} />
        </button>

        <div
          className={`${Style.menu_mobile} ${isMenuOpen ? Style.active : ""}`}
        >
          <div className={Style.btn_fechar} onClick={toggleMenu}>
            <img src={ButtonClose} alt="Fechar menu" />
          </div>

          <nav className={Style.nav_mobile}>
            <ul>
              <li>
                <a href="#home" onClick={toggleMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#funcionalidades" onClick={toggleMenu}>
                  Soluções
                </a>
              </li>
              <li>
                <a href="#planos" onClick={toggleMenu}>
                  Planos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" onClick={toggleMenu}>
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#parceiros" onClick={toggleMenu}>
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <Link to="/login" onClick={toggleMenu}>
                  Entrar
                </Link>
              </li>
              <li>
                <Link to="/cadastro" onClick={toggleMenu}>
                  Começar
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <div
            id="overlay"
            className={`${Style.overlay_menu} ${
              isMenuOpen ? Style.active : ""
            }`}
            onClick={toggleMenu}
          ></div>
        )}

        <nav className={Style.nav_desktop}>
          <ul>
            <li className={Style.liLink}>
              <a href="#home">Inicio</a>
            </li>
            <li className={Style.liLink}>
              <a href="#funcionalidades">Soluções</a>
            </li>
            <li className={Style.liLink}>
              <a href="#planos">Planos</a>
            </li>
            <li className={Style.liLink}>
              <a href="#avaliacoes">Avaliações</a>
            </li>
            <li className={Style.liLink}>
              <a href="#parceiros">Parceiros</a>
            </li>
            <li className={Style.liLink}>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <Link to="/login">
                <button className={Style.buttonLogin}>Entrar</button>
              </Link>
            </li>
            <li>
              <Link to="/cadastro">
                <ButtonStart>Começar</ButtonStart>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={Style.main}>
        <section className={Style.home} id="home">
          <div className={Style.container}>
            <div className={Style.div1}>
              <div>
                <h1>
                  Soluções que <br />{" "}
                  <span className={Style.destaque}>acolhem</span>, <br />{" "}
                  ferramentas que <br />
                  <span className={Style.destaque}>empoderam</span>!
                </h1>
                <Link to="/auth">
                  <ButtonStart>Começar</ButtonStart>
                </Link>
              </div>
            </div>
            {!isMobile && (
              <>
                <div className={Style.div2}>
                  <img src={MaeFilha} alt="" />
                  <button
                    className={Style.buttonStart}
                    onClick={() => {
                      if (window.innerWidth > 910) setShowVideoModal(true);
                    }}
                  >
                    <svg
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      width="26px"
                    >
                      <path
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* -------------------------------- */}

          <div className={Style.div3}>
            <img src={VectorSectionHome} alt="" />
          </div>
        </section>

        <section className={Style.sobre} id="sobre">
          <h1>
            <span className={Style.destaqueSobre}>
              Reinventando o conceito de <br /> cuidado por meio da tecnologia!
            </span>
          </h1>

          <div className={Style.containerSobre}>
            <div className={Style.molduraSobre}>
              <img
                src={ColegasTrabalhandoJunto}
                alt="Colegas trabalhando junto"
              />
            </div>

            <p>
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

        <section id="funcionalidades" className={Style.funcionalidades}>
          <Carrossel slides={slidesData} autoSlideInterval={10000} />

          <h1>
            A <span className={Style.destaqueFuncionalide}>Zeelus</span> fornece
            soluções <br /> integradas de maneira prática!
          </h1>

          <div className={Style.containerFuncionalidade}>
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

            <CardFuncionalidades
              icon={IconVortex}
              title="Comunicação Adaptativa"
              description="Conecte-se a outros acompanhantes e compartilhe experiências em um ambiente acolhedor!"
              image={PessoasAbracando}
              imageAlt="Duas pessoas se abraçando"
              iconAlt="Icone de vortex"
            />

            <CardFuncionalidades
              icon={IconEscudo}
              title="Ambiente de Crescimento"
              description="Promova seu desenvolvimento pessoal e profissional com apoio estruturado e recursos como aulas simples e práticas de primeiros socorros!"
              image={RealizandoTreinamento}
              imageAlt="Pessoas realizando treinamento de primeiros socorros"
              iconAlt="Icone de escudo"
            />
          </div>
        </section>

        <section id="planos" className={Style.planos}>
          <h1>Veja nossos planos!</h1>

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
                  <Link to={""} style={{ width: "80%", display: "block" }}>
                    <ButtonStart children={"Obter Agora!"} width={"100%"} />
                  </Link>
                </div>
            </div>

            {/* ----------------------------------------------------------- */}

            <CardPlanos
              title="Plano CarePlus"
              price={
                <>
                  R$ 34,90/mês
                </>
              }
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

        <section id="avaliacoes" className={Style.avaliacoes}>
          <h1>
            Confira algumas avaliações de <br /> usuários da Zeelus!
          </h1>
          


          <div className={Style.containerAvaliacao}>
            <CardAvaliacao
              avatar={AvatarAvaliacao1}
              title="Facilidade que Transforma!"
              rating={5}
              name="Yuri Ramos"
              quoteIcon={IconAspa}
            >
              Plataforma completa! A Zeelus acompanha rotinas, treinamentos e documentos em um só lugar. Meu dia a dia ficou muito mais leve. Recomendo!
            </CardAvaliacao>
            <CardAvaliacao
              avatar={AvatarAvaliacao2}
              title="Tecnologia que acolhe de verdade!"
              rating={5}
              name="Velma de Souza"
              quoteIcon={IconAspa}
            >
              Sempre quis um suporte humanizado, e a Zeelus entregou! Ferramentas fáceis e um fórum inspirador. Sinto que tenho apoio de verdade agora!
            </CardAvaliacao>
            <CardAvaliacao
              avatar={AvatarAvaliacao3}
              title="Soluções que fazem a diferença!"
              rating={5}
              name="Yuri Ramos"
              quoteIcon={IconAspa}
            >
              Tudo que um cuidador precisa: organização, segurança e apoio. A Zeelus transformou minha rotina!
            </CardAvaliacao>
          </div>

        </section>

        <section id="parceiros" className={Style.parceiros}>
          <h2>
            Parceiros
          </h2>
          
          <SliderParceiros logos={sliders}/>
        </section>

        <section id="faq" className={Style.faq}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195"><path fill="#fff" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,96C672,107,768,181,864,192C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          
          <Faq data={faqData} title={"FAQ"}/>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
