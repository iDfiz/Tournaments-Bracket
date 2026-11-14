import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageSelect from './LanguageSelect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBook, faObjectGroup, faHouse,  } from "@fortawesome/free-solid-svg-icons"

export default function Menu() {
  const BASE = import.meta.env.BASE_URL;

  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const menu = document.getElementById('menu');
    const documentation_menu = document.getElementById('documentation_menu');
    let lastScrollTop = 0;
    let isScrolling = false;

    window.addEventListener('DOMContentLoaded', () => {
      if (menu) menu.classList.add('menu-visible');
      if (documentation_menu) documentation_menu.classList.add('menu-visible');
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (!isScrolling) {
        isScrolling = true;
        return;
      }
      if (scrollTop > lastScrollTop) {
        menu?.classList.add('hide-menu');
        documentation_menu?.classList.add('hide-menu');
      } else {
        menu?.classList.remove('hide-menu');
        documentation_menu?.classList.remove('hide-menu');
      }
      lastScrollTop = Math.max(scrollTop, 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header id='menu'>
      <nav>
        <input typeof='checkbox' id="check"/>
        <button className="checkbtn" onClick={toggleMenu}>
          <img src={`${BASE}/icons/bars-solid.png`} alt="menu" />
        </button>
        <label className="logo">
            <img 
                src={`${BASE}/logo.png`} 
                alt="logo"
            />
            <p>Tournaments-Bracket</p>
        </label>
        <ul className={menuOpen ? 'open' : ''}>
            <li className="menu_list">
                <FontAwesomeIcon icon={faHouse} className='menuIcon'/>
                <Link to="/" onClick={() => setMenuOpen(false)}>{i18n.t('menu.home')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
                <FontAwesomeIcon icon={faBook} className='menuIcon'/>
                <Link to="/documentation" onClick={() => setMenuOpen(false)}>{i18n.t('menu.documentation')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list" id='designer'>
                <FontAwesomeIcon icon={faObjectGroup} className='menuIcon'/>
                <Link to="/designer" onClick={() => setMenuOpen(false)}>{i18n.t('menu.designer')}</Link>
                <div className="bottomLine"></div>
            </li>
            {/* <li className="menu_list">
                <FontAwesomeIcon icon={faNewspaper} className='menuIcon'/>
                <Link to="/news">{i18n.t('menu.news')}</Link>
                <div className="bottomLine"></div>
            </li> */}
            <li className="menu_list">
                <FontAwesomeIcon icon={faAddressBook} className='menuIcon'/>
                <Link to="/about" onClick={() => setMenuOpen(false)}>{i18n.t('menu.about')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
              <LanguageSelect changeLanguage={changeLanguage}/>
            </li>
        </ul>
      </nav>
    </header>
  );
}