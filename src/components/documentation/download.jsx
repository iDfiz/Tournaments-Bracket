import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faDownload, faFileImport} from "@fortawesome/free-solid-svg-icons"
import { faNpm, faYarn } from '@fortawesome/free-brands-svg-icons';
import { CodeBlock } from "../../components/Copy";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationDownload() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-download')}</h1>
        <div className="documentation-download-info">
            <div className='info-box'>
                <div className="info-box-marker1"></div>
                <div className="info-box-marker2">
                    <FontAwesomeIcon icon={faDownload} />
                </div>
                <h2>{i18n.t('documentation.documentation-installation-title1')}</h2>
            </div>
            <div className="documentation-download-info-block">
                <CodeBlock
                    title={<FontAwesomeIcon icon={faNpm} style={{fontSize: "30px", color: "var(--color)"}}/>}
                    code={"npm install tournaments-bracket"}/>
            </div>
            <div className="documentation-download-info-block">
                <CodeBlock
                    title={<FontAwesomeIcon icon={faYarn} style={{fontSize: "30px", color: "var(--color)"}}/>}
                    code={"yarn add tournaments-bracket"}/>
            </div>
            <div className='info-box'>
                <div className="info-box-marker1"></div>
                <div className="info-box-marker2">
                    <FontAwesomeIcon icon={faFileImport} />
                </div>
                <h2>{i18n.t('documentation.documentation-installation-title2')}</h2>
            </div>
            <div className="documentation-download-info-block">
                <CodeBlock
                    title={"js/ts"}
                    code={`import { TournamentBracket } from "tournaments-bracket";`}/>
                {/* <h2>{i18n.t('documentation.documentation-installation-or')}</h2>
                <CodeBlock
                    title={"js/ts"}
                    code={`import { TournamentBracketCenter } from "tournaments-bracket";`}/> */}
            </div>
            <div className='info-box'>
                <div className="info-box-marker1"></div>
                <div className="info-box-marker2">
                    <FontAwesomeIcon icon={faFileImport} />
                </div>
                <h2>{i18n.t('documentation.documentation-installation-title3')}</h2>
            </div>
            <div className="documentation-download-info-block">
                <CodeBlock
                    title={"js/ts"}
                    code={'import "tournaments-bracket/dist/style.css";'}/>
            </div>
        </div>
    </>
  );
}
