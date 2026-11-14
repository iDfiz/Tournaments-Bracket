import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faBullseye, faBook, faPersonCircleQuestion, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationHome() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-home')}</h1>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h2>{i18n.t('documentation.documentation-introduction-goal')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faBook} />
            </div>
            <h2>{i18n.t('documentation.documentation-introduction-main-features')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
            </div>
            <h2>{i18n.t('documentation.documentation-introduction-for-whom')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faAnglesRight} />
            </div>
            <h2>{i18n.t('documentation.documentation-introduction-next')}</h2>
        </div>
    </>
  );
}
