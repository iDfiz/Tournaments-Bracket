import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {TournamentBracket} from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { rounds } from "../../bracket/rounds_start";
import { faAlignLeft, faAlignCenter, faAlignRight, } from "@fortawesome/free-solid-svg-icons"
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationFormats() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-formats')}</h1>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faAlignLeft} />
            </div>
            <h2>{i18n.t('documentation.documentation-formats-title1')}</h2>
        </div>
        <div className="documentation-start-info-block">
            <TournamentBracket rounds={rounds}/>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faAlignCenter} />
            </div>
            <h2>{i18n.t('documentation.documentation-formats-title2')}</h2>
        </div>
        <div className="documentation-start-info-block">
            <h2>{i18n.t('documentation.documentation-formats-dev')}</h2>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faAlignRight} />
            </div>
            <h2>{i18n.t('documentation.documentation-formats-title3')}</h2>
        </div>
        <div className="documentation-start-info-block">
            <h2>{i18n.t('documentation.documentation-formats-dev')}</h2>
        </div>
    </>
  );
}
