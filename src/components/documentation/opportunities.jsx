import { Link } from 'react-router-dom';
import {TournamentBracket} from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faCode, faCodeMerge, faCubes, faDisplay, faListOl, faPaintBrush} from "@fortawesome/free-solid-svg-icons"
import { CodeBlock } from "../../components/Copy";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationOpportunities() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-opportunities')}</h1>
        <h2>{i18n.t('documentation.documentation-opportunities-title')}</h2>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faDisplay} />
            </div>
            <h2>{i18n.t('documentation.documentation-opportunities-title1')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faCode} />
            </div>
            <h2>{i18n.t('documentation.documentation-opportunities-title2')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faListOl} />
            </div>
            <h2>{i18n.t('documentation.documentation-opportunities-title3')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faCubes} />
            </div>
            <h2>{i18n.t('documentation.documentation-opportunities-title4')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faPaintBrush} />
            </div>
            <h2>{i18n.t('documentation.documentation-opportunities-title5')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faCodeMerge} />
            </div>
            <h2>{i18n.t('documentation.documentation-opportunities-title6')}</h2>
        </div>
    </>
  );
}
