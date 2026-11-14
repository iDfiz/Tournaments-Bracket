import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faHandshake, faCircleQuestion, faCodeMerge, faGear, faBorderAll, faBook, faPlay, faDownload, faHouse,  } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next";
import { CodeBlock } from "../components/Copy";
import RadioGroup from "../components/RadioGroup";
import '../index.css';
import '../App.css';
import '../components/css/documentation.css';
import DocumentationHome from "../components/documentation/home";
import DocumentationDownload from "../components/documentation/download";
import DocumentationStart from "../components/documentation/start";
import DocumentationIntegration from "../components/documentation/integration";
import DocumentationFormats from "../components/documentation/formats";
import DocumentationFAQ from "../components/documentation/faq"
import DocumentationPartnership from "../components/documentation/partnership"
import DocumentationLicense from "../components/documentation/license"
import DocumentationOpportunities from "../components/documentation/opportunities";
import DocumentationSetting from "../components/documentation/setting";

export default function Documentation() {
    const { i18n } = useTranslation();

    const [activeSection, setActiveSection] = useState("home");

    const sections = [
        { id: "home", label: i18n.t('documentation.documentation-menu-home') },
        { id: "download", label: i18n.t('documentation.documentation-menu-download') },
        { id: "start", label: i18n.t('documentation.documentation-menu-start') },
        { id: "opportunities", label: i18n.t('documentation.documentation-menu-opportunities') },
        { id: "integration", label: i18n.t('documentation.documentation-menu-integration') },
        { id: "formats", label: i18n.t('documentation.documentation-menu-formats') },
        { id: "settings", label: i18n.t('documentation.documentation-menu-settings') },
        { id: "faq", label: i18n.t('documentation.documentation-menu-faq') },
        { id: "partnership", label: i18n.t('documentation.documentation-menu-partnership') },
        { id: "license", label: i18n.t('documentation.documentation-menu-license') },
    ];

    const icons = {
        home: faHouse,
        download: faDownload,
        start: faPlay,
        opportunities: faBook,
        formats: faBorderAll,
        settings: faGear,
        integration: faCodeMerge,
        faq: faCircleQuestion,
        partnership: faHandshake,
        license: faIdCard
    };

  return (
    <>
    <div className="documentation-section">
      <section className="documentation-menu-block" id="top">
          <nav className='documentation-nav'>
              <menu className='documentation-menu' id="documentation_menu">
                  <ul>
                      {sections.map(section => (
                          <li key={section.id}>
                              <button
                                  onClick={() => setActiveSection(section.id)}
                                  className={activeSection === section.id ? "active" : ""}
                              >
                                  <FontAwesomeIcon icon={icons[section.id]} className='menuIcon'/>
                                  <p>{section.label}</p>
                              </button>
                          </li>
                      ))}
                  </ul>
              </menu>
          </nav>
          {/* <button
              onClick={scrollToTop}
              className={`documentation-btn-top ${showScroll ? "show" : ""}`}
              ref={btnRef}
          >
              <FontAwesomeIcon icon={faArrowUp} />
          </button> */}
      </section>

      <section className='documentation'>
          {activeSection === "home" && <DocumentationHome/>}
          {activeSection === "download" && <DocumentationDownload/>}
          {activeSection === "start" && <DocumentationStart/>}
          {activeSection === "opportunities" && <DocumentationOpportunities/>}
          {activeSection === "formats" && <DocumentationFormats/>}
          {activeSection === "settings" && <DocumentationSetting/>}
          {activeSection === "integration" && <DocumentationIntegration/>}
          {activeSection === "faq" && <DocumentationFAQ/>}
          {activeSection === "partnership" && <DocumentationPartnership/>}
          {activeSection === "license" && <DocumentationLicense/>}
      </section>
    </div>
  </>
  );
}
