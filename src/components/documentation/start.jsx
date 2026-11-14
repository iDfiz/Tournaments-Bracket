import { Link } from 'react-router-dom';
import {TournamentBracket} from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { rounds } from "../../bracket/rounds_start";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faFileCirclePlus, faGears, faFile, faBorderAll, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { CodeBlock } from "../../components/Copy";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationStart() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-start')}</h1>
        <h2>{i18n.t('documentation.documentation-start-title')}</h2>
        <div className="documentation-start-info">
            <div className='info-box'>
                <div className="info-box-marker1"></div>
                <div className="info-box-marker2">
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                </div>
                <h2>{i18n.t('documentation.documentation-start-title1')}</h2>
            </div>
            <h2>{i18n.t('documentation.documentation-start-title1text')}</h2>
            <CodeBlock
                title={"js/ts"}
                code={`import type { Team } from "tournaments-bracket";

export const teams: Team[] = [
    { id: 1, name: "Team A", logo: "../public/logo.png" },
    { id: 2, name: "Team B", logo: "../public/logo.png" },
    { id: 3, name: "Team C", logo: "../public/logo.png" },
    { id: 4, name: "Team D", logo: "../public/logo.png" },
];`}
            />
            <div className='info-box'>
                <div className="info-box-marker1"></div>
                <div className="info-box-marker2">
                    <FontAwesomeIcon icon={faGears} />
                </div>
                <h2>{i18n.t('documentation.documentation-start-title2')}</h2>
            </div>
            <CodeBlock
                title={"bash"}
                code={"npx tournaments-bracket-generate"}/>
            <h2>{i18n.t('documentation.documentation-start-title2text')}</h2>
            <div className='info-box'>
                <div className="info-box-marker1"></div>
                <div className="info-box-marker2">
                    <FontAwesomeIcon icon={faFile} />
                </div>
                <h2>{i18n.t('documentation.documentation-start-title3')}</h2>
            </div>
            <CodeBlock
                title={"js/ts"}
                code={`import { TournamentBracket } from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { rounds } from "./bracket/rounds";

function App() {
  return (
    <TournamentBracket
      rounds={rounds}
    />
  );
}

export default App;`}/>
        </div>
        <h2>{i18n.t('documentation.documentation-start-title3text')}</h2>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faBorderAll} />
            </div>
            <h2>{i18n.t('documentation.documentation-start-title4')}</h2>
        </div>
        <div className="documentation-start-info-block">
            <TournamentBracket rounds={rounds}/>
        </div>
        <div className='info-box'>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faAnglesRight} />
            </div>
            <h2>{i18n.t('documentation.documentation-start-title5')}</h2>
        </div>
        <h3 style={{marginTop: "20px"}}>{i18n.t('documentation.documentation-start-title5text1')} "{i18n.t('documentation.documentation-menu-formats')}"</h3>
        <h3 style={{marginTop: "20px"}}>{i18n.t('documentation.documentation-start-title5text2')} "{i18n.t('documentation.documentation-menu-settings')}"</h3>
        <h3 style={{marginTop: "20px"}}>{i18n.t('documentation.documentation-start-title5text3')} "{i18n.t('documentation.documentation-menu-api')}"</h3>
    </>
  );
}
