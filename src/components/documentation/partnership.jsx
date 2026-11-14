import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next"
import { faBug, faLightbulb, faFileCode, faBook } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { CodeBlock } from "../../components/Copy";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationPartnership() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-partnership')}</h1>
        <h2>{i18n.t('documentation.documentation-partnership-title')}</h2>
        <div className="documentation-partnership-h">
            <h2>{i18n.t('documentation.documentation-partnership-title1')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faBug} />
            </div>
            <h2>{i18n.t('documentation.documentation-partnership-title2')}</h2>
            <ul>
                <li><h3>{i18n.t('documentation.documentation-partnership-title2li1')}</h3></li>
                <li><h3>{i18n.t('documentation.documentation-partnership-title2li2')}</h3></li>
            </ul>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h2>{i18n.t('documentation.documentation-partnership-title3')}</h2>
            <ul>
                <li><h3>{i18n.t('documentation.documentation-partnership-title3li1')}</h3></li>
                <li><h3>{i18n.t('documentation.documentation-partnership-title3li2')}</h3></li>
            </ul>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faFileCode} />
            </div>
            <h2>{i18n.t('documentation.documentation-partnership-title4')}</h2>
            <ul>
                <li><h3>{i18n.t('documentation.documentation-partnership-title4li1')}</h3></li>
                <li><h3>{i18n.t('documentation.documentation-partnership-title4li2')}</h3></li>
            </ul>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faBook} />
            </div>
            <h2>{i18n.t('documentation.documentation-partnership-title5')}</h2>
            <ul>
                <li><h3>{i18n.t('documentation.documentation-partnership-title5li1')}</h3></li>
                <li><h3>{i18n.t('documentation.documentation-partnership-title5li2')}</h3></li>
            </ul>
        </div>
        <div className="documentation-partnership-h">
            <h2>{i18n.t('documentation.documentation-partnership-title6')}</h2>
            <ul>
                <li><h3>{i18n.t('documentation.documentation-partnership-title6li1')}</h3></li>
                <li><h3>{i18n.t('documentation.documentation-partnership-title6li2')}</h3></li>
            </ul>
        </div>
        <div className="documentation-partnership-link">
            <div style={{display: "flex", gap: "20px"}}>
                <a href="https://github.com/iDfiz" target="_blank" className='partnership-link'><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://github.com/iDfiz" target="_blank" className='partnership-link'><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="https://github.com/iDfiz" target="_blank" className='partnership-link'><FontAwesomeIcon icon={faDiscord} /></a>
            </div>
            <a href="https://yoomoney.ru/to/4100119449126215" className="gratitude" style={{fontSize: "25px"}} target="_blank" rel="noopener noreferrer">{i18n.t("footer.donate")}</a>
        </div>
    </>
  );
}
