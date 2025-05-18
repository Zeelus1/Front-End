import Style from "./Header.module.css";
import Logo from "../../img/zeelusLogo1.png";
import ButtonMenu from "../../icons/icons8-menu.svg";
import ButtonClose from "../../icons/icons8-close.svg";
import SinoIcon from "../../icons/icons8-notification.svg";
import AjudaIcon from "../../icons/material-symbols_help-outline-rounded.svg";
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Detecta a página atual baseado na URL
  useEffect(() => {
    const pathname = window.location.pathname;
    const path = pathname.split('/').filter(p => p)[1] || 'home';
    setActiveLink(path);
  }, []);

  // Fechar o menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      const overlay = document.getElementById('overlay');
      if (isMenuOpen && e.target === overlay) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    // Bloquear scroll quando o menu estiver aberto
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
      <Link to="/home">
        <img src={Logo} alt="Logo da zeelus" className={Style.logo} />
      </Link>

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
              <Link to="/home/calendario" onClick={toggleMenu}>Calendário</Link>
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
              <Link to="" onClick={toggleMenu}>Ajuda</Link>
            </li>
            <li>
              <Link to="" onClick={toggleMenu}>Notificação</Link>
            </li>
            <li>
              <Link to="" onClick={toggleMenu}>Perfil</Link>
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
          <li className={Style.liLink}>
            <Link to="/home" className={activeLink === 'home' ? Style.active : ''}>Home</Link>
          </li>
          <li className={Style.liLink}>
            <Link to="/home/calendario" className={activeLink === 'calendario' ? Style.active : ''}>Calendário</Link>
          </li>
          <li className={Style.liLink}>
            <Link to="/home/registros" className={activeLink === 'registros' ? Style.active : ''}>Registros</Link>
          </li>
          <li className={Style.liLink}>
            <Link to="/home/forum" className={activeLink === 'forum' ? Style.active : ''}>Fórum</Link>
          </li>
          <li className={Style.liLink}>
            <Link to="/home/treinamento" className={activeLink === 'treinamento' ? Style.active : ''}>Treinamento</Link>
          </li>
          <li>
            <Link to="" title="Ajuda">
              <div>
                <img src={AjudaIcon} alt="Ícone de Ajuda" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="" title="Notificações">
              <div>
                <img src={SinoIcon} alt="Ícone de Sino para representar botão de notificação" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="" title="Perfil">
              <div className={Style.avatar} style={{backgroundImage: 'url("https://i.pravatar.cc/40")'}}>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;