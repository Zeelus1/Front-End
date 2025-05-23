import { useState, useEffect } from "react";
import Style from "./LandingPage.module.css";
import Logo from "../../img/zeelusLogo1.png";
import ButtonMenu from "../../icons/icons8-menu.svg";
import ButtonClose from "../../icons/icons8-close.svg";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router";
import ButtonStart from "../../components/buttonStart/ButtonStart.jsx";
import VectorSectionHome from "../../img/vectorHomeSection.svg";
import MaeFilha from "../../img/maeFilha.png";
import ColegasTrabalhandoJunto from "../../img/colegasTrabalhandoJunto.png";
import Carrossel from "../../components/carrossel/Carrossel.jsx";

import MaeFilhaBricando from "../../img/maeFilhaBricando.png";
import MaePaiFilhaJuntos from "../../img/maePaiFilhaJuntos.png";
import MaeFilhaAbracadas from "../../img/maeFilhaAbracadas.png";

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
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={toggleMenu}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#funcionalidades" onClick={toggleMenu}>
                  Funcionalidades
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
                <a href="#faq" onClick={toggleMenu}>
                  FAQ
                </a>
              </li>
              <li>
                <Link to="" onClick={toggleMenu}>
                  Equipe da Zeelus
                </Link>
              </li>
              <li>
                <Link to="/auth" onClick={toggleMenu}>
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
              <a href="#home">Home</a>
            </li>
            <li className={Style.liLink}>
              <a href="#sobre">Sobre</a>
            </li>
            <li className={Style.liLink}>
              <a href="#funcionalidades">Funcionalidades</a>
            </li>
            <li className={Style.liLink}>
              <a href="#planos">Planos</a>
            </li>
            <li className={Style.liLink}>
              <a href="#avaliacoes">Avaliações</a>
            </li>
            <li className={Style.liLink}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={Style.liLink}>
              <Link to="">Equipe da Zeelus</Link>
            </li>
            <li>
              <Link to="/auth">
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

        <section id="funcionalidades">
          <Carrossel slides={slidesData} autoSlideInterval={10000} />
        </section>

        <section id="planos"></section>

        <section id="avaliacoes"></section>

        <section id="faq"></section>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
