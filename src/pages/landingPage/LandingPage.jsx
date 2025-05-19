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
import ColegasTrabalhandoJunto from "../../img/colegasTrabalhandoJunto.png"

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                  Soluções que <br /> <span className={Style.destaque}>acolhem</span>, <br /> ferramentas que <br />
                  <span className={Style.destaque}>empoderam</span>!
                </h1>
                <Link to="/auth">
                  <ButtonStart>Começar</ButtonStart>
                </Link>
              </div>
            </div>
            {!isMobile && (
              <div className={Style.div2}>
                <img src={MaeFilha} alt="" />
              </div>
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
              <img src={ColegasTrabalhandoJunto} alt="Colegas trabalhando junto" />
            </div>

            <p>
              Na <span className={Style.destaqueSobre}>Zeelus</span>, acreditamos que o cuidado vai além de simples tarefas diárias. Nosso objetivo é transformar a jornada dos cuidadores informais, oferecendo uma plataforma que utiliza a tecnologia para proporcionar mais organização, apoio e aprendizado contínuo.
            </p>

          </div>

        </section>

        <section id="funcionalidades"></section>

        <section id="planos"></section>

        <section id="avaliacoes"></section>

        <section id="faq"></section>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
