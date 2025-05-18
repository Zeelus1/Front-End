import Style from "./Header.module.css"
import Logo from "../../img/zeelusLogo1.png"
import ButtonMenu from "../../icons/icons8-menu.svg"
import ButtonClose from "../../icons/icons8-close.svg"
import SinoIcon from "../../icons/icons8-notification.svg"
import AjudaIcon from "../../icons/material-symbols_help-outline-rounded.svg"
import { Link } from 'react-router'
import { useState, useEffect } from 'react';


function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <header className={Style.header}>
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
              <Link to="/home" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/home/calendario" onClick={toggleMenu}>Calendario</Link>
            </li>
            <li>
              <Link to="/home/registros" onClick={toggleMenu}>Registros</Link>
            </li>
            <li>
              <Link to="/home/forum" onClick={toggleMenu}>Fórum</Link>
            </li>
            <li>
              <Link to="/home/treinamento" onClick={toggleMenu}>Treinamento</Link>
            </li>
            <li>
              <Link to="/ajuda" onClick={toggleMenu}>Ajuda</Link>
            </li>
            <li>
              <Link to="/notificacao" onClick={toggleMenu}>Notificação</Link>
            </li>
            <li>
              <Link to="/perfil" onClick={toggleMenu}>Perfil</Link>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div 
          id="overlay"
          className={Style.overlay_menu}
          onClick={toggleMenu}
        ></div>
      )}

      <nav className={Style.nav_desktop}>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/calendario">Calendario</Link>
          </li>
          <li>
            <Link to="/home/registros">Registros</Link>
          </li>
          <li>
            <Link to="/home/forum">Fórum</Link>
          </li>
          <li>
            <Link to="/home/treinamento">Treinamento</Link>
          </li>
          <li>
            <Link to="">
              <div>
                <img src={AjudaIcon} alt="Icone de Ajuda" />
                </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <div>
                <img src={SinoIcon} alt="Icone de Sino para representar botão de notificação" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={Style.avatar} style={{backgroundImage: 'url("https://i.pravatar.cc/40")'}}>
              </div>
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header