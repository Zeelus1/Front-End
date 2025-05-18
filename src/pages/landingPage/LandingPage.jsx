import { useState, useEffect } from 'react';
import Style from "./LandingPage.module.css";
import Logo from "../../img/zeelusLogo1.png";
import ButtonMenu from "../../icons/icons8-menu.svg";
import ButtonClose from "../../icons/icons8-close.svg";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from 'react-router';
import ButtonStart from '../../components/buttonStart/ButtonStart.jsx';

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

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      const overlay = document.getElementById('overlay');
      if (isMenuOpen && e.target === overlay) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`${Style.header} ${scrolled ? Style.scrolled : ''}`}>
        <img src={Logo} alt="Logo da zeelus" className={Style.logo} />
        
        <button
          className={Style.btn_abrir}
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <img
            src={ButtonMenu}
            alt="Menu Hambúrguer"
            className={Style.menu}
          />
        </button>
        
        <div className={`${Style.menu_mobile} ${isMenuOpen ? Style.active : ''}`}>
          <div
            className={Style.btn_fechar}
            onClick={toggleMenu}
          >
            <img
              src={ButtonClose}
              alt="Fechar menu"
            />
          </div>
          
          <nav className={Style.nav_mobile}>
            <ul>
              <li>
                <a href="#home" onClick={toggleMenu}>Home</a>
              </li>
              <li>
                <a href="#funcionalidades" onClick={toggleMenu}>Funcionalidades</a>
              </li>
              <li>
                <a href="#planos" onClick={toggleMenu}>Planos</a>
              </li>
              <li>
                <a href="#avaliacoes" onClick={toggleMenu}>Avaliações</a>
              </li>
              <li>
                <a href="#faq" onClick={toggleMenu}>FAQ</a>
              </li>
              <li>
                <Link to="" onClick={toggleMenu}>Equipe da Zeelus</Link>
              </li>
              <li>
                <Link to="/auth" onClick={toggleMenu}>Começar</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {isMenuOpen && (
          <div
            id="overlay"
            className={`${Style.overlay_menu} ${isMenuOpen ? Style.active : ''}`}
            onClick={toggleMenu}
          ></div>
        )}
        
        <nav className={Style.nav_desktop}>
          <ul>
            <li className={Style.liLink}>
              <a href="#home">Home</a>
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
                <ButtonStart>
                  Começar
                </ButtonStart>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className={Style.main}>
        {/* Seu conteúdo principal aqui */}
      </main>
      
      <Footer />
    </>
  );
}

export default LandingPage;