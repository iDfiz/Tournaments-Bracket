import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const { t } = useTranslation();
  const BASE = import.meta.env.BASE_URL;
  useEffect(() => {
    const animateOnScroll = (elementSelector, className = "show", offset = 1.2) => {
      const element = document.querySelector(elementSelector);
      if (!element) return;

      const trigger = window.innerHeight / offset;
      const top = element.getBoundingClientRect().top;

      if (top < trigger) {
        element.classList.add(className);
      }
    };

    const handleScroll = () => {
      animateOnScroll("footer.animate-up");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll); // на всякий случай

    // запуск сразу при монтировании
    handleScroll();

    // очистка событий при размонтировании
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);
  return (
    <>
      <footer className="animate-up">
        <div className="footer-box">
          {/* Логотип */}
          <ul className="logo">
            <li>
              <Link to="/"><img src={`${BASE}logo.png`} alt="logo" /></Link>
              <h2>Tournaments-Bracket</h2>
            </li>
          </ul>
          <ul className="menu">
            <li><a href="https://github.com/iDfiz" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.npmjs.com/package/tournaments-bracket?activeTab=versions" target="_blank"><FontAwesomeIcon icon={faNpm} /></a></li>
          </ul>
          <ul className="menu">
            <li><a href="https://yoomoney.ru/to/4100119449126215" className="gratitude" target="_blank" rel="noopener noreferrer">{t("footer.donate")}</a></li>
          </ul>
          {/* Навигационное меню */}
          <ul className="menu">
            <li><Link to="/">{t("footer.home")}</Link></li>
            <li><Link to="/documentation">{t("footer.documentation")}</Link></li>
            <li id='designer'><Link to="/designer">{t("footer.designer")}</Link></li>
            {/* <li><Link to="/news">{t("footer.news")}</Link></li> */}
            <li><Link to="/about">{t("footer.about")}</Link></li>
          </ul>
        </div>
        {/* Авторство и документы */}
        <div className="down">
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                <p style={{color: "var(--lightColor)"}}>Made by iDfiz</p>
                <p>Version v2.0.5</p>
            </div>
            <p>© {new Date().getFullYear()} Tournaments-Bracket. All rights reserved.</p>
        </div>
        
      </footer>
    </>
  );
}