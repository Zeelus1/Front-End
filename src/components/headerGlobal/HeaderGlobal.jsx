import { useState, useEffect } from "react";
import { Link } from "react-router";
import ButtonStart from "../buttonStart/ButtonStart";

import Style from "./HeaderGlobal.module.css";

import ButtonMenu from "../../icons/icons8-menu.svg";
import ButtonClose from "../../icons/icons8-close.svg";
import Logo from "../../img/zeelusLogo1.png";

function HeaderGlobal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
              <a href="/#home" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/#funcionalidades" onClick={toggleMenu}>
                Soluções
              </a>
            </li>
            <li>
              <a href="/#planos" onClick={toggleMenu}>
                Planos
              </a>
            </li>
            <li>
              <a href="/#avaliacoes" onClick={toggleMenu}>
                Avaliações
              </a>
            </li>
            <li>
              <a href="/#parceiros" onClick={toggleMenu}>
                Parceiros
              </a>
            </li>
            <li>
              <a href="/#faq" onClick={toggleMenu}>FAQ</a>
            </li>
            <li>
              <Link to="/sobrenos" onClick={toggleMenu}>Quem é a Zeelus?</Link>
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
            <a href="/#home">Inicio</a>
          </li>
          <li className={Style.liLink}>
            <a href="/#funcionalidades">Soluções</a>
          </li>
          <li className={Style.liLink}>
            <a href="/#planos">Planos</a>
          </li>
          <li className={Style.liLink}>
            <a href="/#avaliacoes">Avaliações</a>
          </li>
          <li className={Style.liLink}>
            <a href="/#parceiros">Parceiros</a>
          </li>
          <li className={Style.liLink}>
            <a href="/#faq">FAQ</a>
          </li>
          <li className={Style.liLink}>
            <Link to="/sobrenos">
              Quem é a Zeelus?
            </Link>
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
  );
}

export default HeaderGlobal; 