import "tournaments-bracket/dist/tournaments-bracket.css";
import { useTranslation } from "react-i18next";
import { CodeBlock } from "../../components/Copy";
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationSetting() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-settings')}</h1>

        <h2>{i18n.t('documentation.documentation-setting-title')}</h2>
        <div className="documentation-setting-info">
            <h2>{i18n.t('documentation.documentation-setting-title1')}</h2>
            <div className="documentation-setting-table">
                <div className='documentation-setting-table-items'>
                    <h3>{i18n.t('documentation.documentation-setting-table-title1')}</h3>
                    <h3>{i18n.t('documentation.documentation-setting-table-title2')}</h3>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>bgTeam</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l1')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>borderColor</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l2')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>lineColor</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l3')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>teamWidth</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l4')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>lineWidth</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l5')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>borderWin</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l6')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>bgWin</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l7')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>opacityWin</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l8')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>borderLos</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l9')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>bgLos</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l10')}</p>
                    </div>
                </div>
                <div className="copy-line"></div>
                <div className='documentation-setting-table-items'>
                    <div className='documentation-setting-table-item'>
                        <p>opacityLos</p>
                    </div>
                    <div className='documentation-setting-table-item'>
                        <p>{i18n.t('documentation.documentation-setting-table-l11')}</p>
                    </div>
                </div>
            </div>
            <h2>{i18n.t('documentation.documentation-setting-title2')}</h2>
            <CodeBlock
                title={"js/ts"}
                code={`const theme = {
    bgTeam: '#16223f',
    borderColor: '#3557a7',
    lineColor: '#22c55e',

    teamWidth: 180,
    lineWidth: 2,

    borderWin: '#22c55e',
    bgWin: '#146030',
    opacityWin: 1,

    borderLos: '#ef4444',
    bgLos: '#451a1a',
    opacityLos: 0.7
};`}
            />
            <h2>{i18n.t('documentation.documentation-setting-title3')}</h2>
            <CodeBlock
                title={"js/ts"}
                code={`<TournamentBracket
    rounds={bracketRounds}
    theme={theme}
/>`}
            />
            <h3>{i18n.t('documentation.documentation-setting-title4')}</h3>
        </div>
    </>
  );
}
