import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationFAQ() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-faq')}</h1>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
            <h2>{i18n.t('documentation.documentation-faq-title')}</h2>
        </div>
    </>
  );
}
