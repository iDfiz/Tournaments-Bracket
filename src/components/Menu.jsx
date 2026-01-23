import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBook, faClipboardList, faHouse, faNewspaper } from "@fortawesome/free-solid-svg-icons"

export default function Menu() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const menu = document.getElementById('menu');
    let lastScrollTop = 0;
    let isScrolling = false;

    window.addEventListener('DOMContentLoaded', () => {
      if (menu) menu.classList.add('menu-visible');
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (!isScrolling) {
        isScrolling = true;
        return;
      }
      if (scrollTop > lastScrollTop) {
        menu?.classList.add('hide-menu');
      } else {
        menu?.classList.remove('hide-menu');
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
          <img src="../../public/icons/bars-solid.png" alt="menu" />
        </button>
        <label className="logo">
            <img 
                src="../../public/logo.png" 
                alt="logo"
            />
            <p style={{fontSize: "30px", fontWeight: "bold"}}>Tournaments-Bracket</p>
        </label>
        <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
            <li className="menu_list">
                <FontAwesomeIcon icon={faHouse} className='menuIcon'/>
                <Link to="/">{i18n.t('menu.home')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
                <FontAwesomeIcon icon={faBook} className='menuIcon'/>
                <Link to="/documentation">{i18n.t('menu.documentation')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
                <FontAwesomeIcon icon={faClipboardList} className='menuIcon'/>
                <Link to="/examples">{i18n.t('menu.examples')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
                <FontAwesomeIcon icon={faNewspaper} className='menuIcon'/>
                <Link to="/news">{i18n.t('menu.news')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
                <FontAwesomeIcon icon={faAddressBook} className='menuIcon'/>
                <Link to="/about">{i18n.t('menu.about')}</Link>
                <div className="bottomLine"></div>
            </li>
            <li className="menu_list">
                <Link to="/start" className='btn'>{i18n.t('menu.start')}</Link>
            </li>
            <li className="menu_list" style={{ lineHeight: 0 }}>
                <div className="language">
                    <div className="language_box">
                        <div id="btn-en" className={i18n.language === 'en' ? 'active' : 'show'} onClick={() => changeLanguage('en')}><button><img src="../../public/icons/usa.png" alt=""/></button></div>
                        <div id="btn-ru" className={i18n.language === 'ru' ? 'active' : 'show'} onClick={() => changeLanguage('ru')}><button><img src="../../public/icons/russian.png" alt=""/></button></div>
                    </div>
                </div>
            </li>
        </ul>
      </nav>
    </header>
  );
}