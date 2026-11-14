import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

import ru from '../assets/icons/russian.png';
import en from '../assets/icons/usa.png';
import zh from '../assets/icons/china.png';
import fr from '../assets/icons/france.png'
import de from '../assets/icons/germany.png';
import it from '../assets/icons/italy.png';

const languages = [
  {
    code: "ru",
    label: "RU",
    icon: `${ru}`,
  },
  {
    code: "en",
    label: "EN",
    icon: `${en}`,
  },
  {
    code: "zh",
    label: "ZH",
    icon: `${zh}`,
  },
  {
    code: "fr",
    label: "FR",
    icon: `${fr}`,
  },
  {
    code: "de",
    label: "DE",
    icon: `${de}`,
  },
  {
    code: "it",
    label: "IT",
    icon: `${it}`,
  },
];

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // закрытие по клику вне блока
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="lang-select" ref={ref}>
      <button className="lang-selected" onClick={() => setOpen(!open)}>
        <img src={current.icon} alt={current.code} />
        <span>{current.label}</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>

      {open && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-item ${lang.code === i18n.language ? "active" : ""}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.icon} alt={lang.code} />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
