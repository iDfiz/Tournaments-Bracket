import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next"
import { faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { CodeBlock } from "../../components/Copy";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationIntegration() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-integration')}</h1>
        <h2>{i18n.t('documentation.documentation-integration-title')}</h2>
        <div className='info-box' style={{marginBottom: "20px"}}>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faReact} />
            </div>
            <h2>{i18n.t('documentation.documentation-integration-title1')}</h2>
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
        {/* <h2>{i18n.t('documentation.documentation-integration-or')}</h2>
        <CodeBlock
            title={"js/ts"}
            code={`import { TournamentBracketCenter } from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { roundsCenter } from "./bracket/roundsCenter";

function App() {
  return (
    <TournamentBracket
      rounds={roundsCenter}
    />
  );
}

export default App;`}/> */}
        <div className='info-box' style={{marginBottom: "20px"}}>
            <div className="info-box-marker1"></div>
            <div className="info-box-marker2">
                <FontAwesomeIcon icon={faJs} />
            </div>
            <h2>{i18n.t('documentation.documentation-integration-title2')}</h2>
        </div>
        <CodeBlock
            title={"js in html"}
            code={i18n.t('documentation.documentation-integration-code')}/>
    </>
  );
}
