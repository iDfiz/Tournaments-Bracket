import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./i18n/ru.json";
import en from "./i18n/en.json";
import zh from "./i18n/zh.json";
import fr from "./i18n/fr.json";
import de from "./i18n/de.json";
import it from "./i18n/it.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
      zh: { translation: zh },
      fr: { translation: fr },
      de: { translation: de },
      it: { translation: it }
    },
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
