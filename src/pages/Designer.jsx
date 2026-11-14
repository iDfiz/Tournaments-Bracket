import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMaximize, faMinimize, faRotate, faCode, faMinus, faPlus, faX} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import { CodeBlock } from "../components/Copy";
import RadioGroup from "../components/RadioGroup";
import '../index.css';
import '../App.css';
import '../components/css/designer.css';

import { TournamentBracket } from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { generateDesignerBracket } from "../bracket/generateDesignerBracket";
// import type { Round } from "tournaments-bracket";

export default function Designer() {
    const { i18n } = useTranslation();
    const [type, setType] = useState(i18n.t('designer.designer-top-menu-format-left'));
    const [open, setOpen] = useState(false);
    const types = [i18n.t('designer.designer-top-menu-format-left')];

    const INITIAL_CONFIG = {
        fontSize: 16,
        fontColor: "#ffffff",
        borderWidth: 1,
        lineWidth: 2,
        borderType: "solid",
        borderColor: "#334155",
        borderWin: "#2ecc71",
        bgWin: "#0f172a",
        opacityWin: "1",
        borderLos: "#e74c3c",
        bgLos: "#0f172a",
        opacityLos: "0.7",
        bgTeam: "#0f172a",
        teamWidth: 260,
        gapRounds: 20,
        padding: 10,
        lineColor: "#38bdf8",
        format: "left",
        participants: 8
    };

    const [config, setConfig] = useState(INITIAL_CONFIG);

    const [participantCount, setParticipantCount] = useState(8);

    const [bracketRounds, setBracketRounds] = useState(
        () => generateDesignerBracket(8)
    );

    // Модальное окно генерации кода
    const [codeModal, setCodeModal] = useState(false);
    const themeWithPx = useMemo(() => ({
        ...config,
        teamWidth: `${config.teamWidth}px`,
        lineWidth: `${config.lineWidth}px`,
        gapRounds: `${config.gapRounds}px`,
        fontSize: `${config.fontSize}px`,
        borderWidth: `${config.borderWidth}px`,
    }), [config]);

    const handleAutoFill = () => {
        const count = Number(participantCount);

        if (!Number.isInteger(count) || count < 2 || count > 99) {
            alert("Введите количество участников от 2 до 99");
            return;
        }

        const newRounds = generateDesignerBracket(count);

        updateBracketRounds(newRounds);
    };

    const handleReset = () => {
        // Возвращаем настройки
        setConfig(INITIAL_CONFIG);

        // Возвращаем количество участников
        setParticipantCount(8);

        // Восстанавливаем исходную сетку
        setBracketRounds(generateDesignerBracket(8));

        // Сбрасываем масштаб и перемещение
        setScale(1);
        setPosition({ x: 0, y: 0 });

        // Закрываем дополнительные окна
        setCodeModal(false);
        setOpen(false);
    };

    const [fullscreen, setFullscreen] = useState(false);

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });

    const onMouseDown = (e) => {
        if (!fullscreen) return;

        if (e.target.closest(".team")) return;

        setIsDragging(true);
        setStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const onMouseMove = (e) => {
        if (!fullscreen || !isDragging) return;

        setPosition({
            x: e.clientX - start.x,
            y: e.clientY - start.y
        });
    };

    const onMouseUp = () => {
        if (!fullscreen) return;
        setIsDragging(false);
    };
    useEffect(() => {
    if (fullscreen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}, [fullscreen]);

const MIN_SCALE = 0.1;
const MAX_SCALE = 2;

const handleZoom = (value) => {
    const zoom = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number(value)));

    if (!Number.isFinite(zoom)) return;

    setScale(zoom);
};

const zoomIn = () => {
    setScale(prev => Math.min(MAX_SCALE, Number((prev + 0.1).toFixed(2))));
};

const zoomOut = () => {
    setScale(prev => Math.max(MIN_SCALE, Number((prev - 0.1).toFixed(2))));
};

const generateCode = () => {
    const theme = {
        bgTeam: config.bgTeam,
        borderColor: config.borderColor,
        lineColor: config.lineColor,
        teamWidth: `${config.teamWidth}px`,
        lineWidth: `${config.lineWidth}px`,
        borderWin: config.borderWin,
        bgWin: config.bgWin,
        opacityWin: String(config.opacityWin),
        borderLos: config.borderLos,
        bgLos: config.bgLos,
        opacityLos: String(config.opacityLos)
    };

    const code = `import { TournamentBracket } from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { useState } from "react";

// Турнирная сетка
const rounds = ${JSON.stringify(bracketRounds, null, 4)};

// Настройки оформления
const theme = ${JSON.stringify(theme, null, 4)};

export default function MyTournament() {
    const [bracket, setBracket] = useState(rounds);

    return (
        <div style={{ overflowX: "auto", padding: "20px" }}>
            <TournamentBracket
                rounds={bracket}
                theme={theme}
            />
        </div>
    );
}
`;

    return code;
};

const handleGenerateCode = () => {
    setCodeModal(true);
};

const [isRecalculating, setIsRecalculating] = useState(false);

useEffect(() => {
    const bracket = document.querySelector(".bracket");
    if (!bracket) return;

    const teams = bracket.querySelectorAll(".team");

    teams.forEach((element, index) => {
        const matchElement = element.closest(".round-column");
        if (!matchElement) return;

        const roundElement = matchElement;
        const roundIndex = Array.from(
            bracket.querySelectorAll(".round-column")
        ).indexOf(roundElement);

        const matchWrapper = element.closest(".round-column > div");
        if (!matchWrapper) return;

        const matches = Array.from(roundElement.children);
        const matchIndex = matches.indexOf(matchWrapper);

        const teamIndex = Array.from(matchWrapper.querySelectorAll(".team"))
            .indexOf(element);

        const teamName = element.querySelector("span")?.textContent?.trim();

        const isEmpty =
            element.classList.contains("empty") ||
            !teamName ||
            teamName === "Нет участника";

        element.draggable = !isEmpty;

        element.ondragstart = (e) => {
            if (isEmpty) {
                e.preventDefault();
                return;
            }

            e.dataTransfer.setData(
                "application/json",
                JSON.stringify({
                    roundIndex,
                    matchIndex,
                    teamIndex
                })
            );

            e.dataTransfer.effectAllowed = "move";
        };

        element.ondragover = (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        };

        element.ondrop = (e) => {
            e.preventDefault();

            try {
                const source = JSON.parse(
                    e.dataTransfer.getData("application/json")
                );

                handleTeamDrop(source, {
                    roundIndex,
                    matchIndex,
                    teamIndex
                });
            } catch (error) {
                console.error("Ошибка Drag & Drop:", error);
            }
        };
    });
}, [bracketRounds]);

const handleTeamDrop = (source, target) => {
    // Разрешаем перенос только в следующий раунд
    if (target.roundIndex !== source.roundIndex + 1) return;

    // Проверяем правильность позиции
    const expectedMatchIndex = Math.floor(source.matchIndex / 2);
    const expectedTeamIndex = source.matchIndex % 2;

    if (
        target.matchIndex !== expectedMatchIndex ||
        target.teamIndex !== expectedTeamIndex
    ) return;

    const sourceMatch = bracketRounds[source.roundIndex]?.[source.matchIndex];

    if (!sourceMatch) return;

    const team = sourceMatch.teams[source.teamIndex];

    if (!team) return;

    const newRounds = bracketRounds.map(round =>
        round.map(match => ({
            ...match,
            teams: [...match.teams]
        }))
    );

    // Устанавливаем победителя исходного матча
    newRounds[source.roundIndex][source.matchIndex].winnerId = team.id;

    // Очищаем результаты последующих матчей по этой ветке
    let currentMatchIndex = target.matchIndex;

    for (
        let roundIndex = target.roundIndex;
        roundIndex < newRounds.length - 1;
        roundIndex++
    ) {
        const nextMatchIndex = Math.floor(currentMatchIndex / 2);
        const nextTeamIndex = currentMatchIndex % 2;

        const nextMatch = newRounds[roundIndex + 1]?.[nextMatchIndex];

        if (!nextMatch) break;

        nextMatch.teams[nextTeamIndex] = null;
        nextMatch.winnerId = null;

        currentMatchIndex = nextMatchIndex;
    }

    // Переносим победителя в следующий раунд
    newRounds[target.roundIndex][target.matchIndex]
        .teams[target.teamIndex] = team;

    updateBracketRounds(newRounds);
};

useEffect(() => {
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("dragend", handleMouseUp);
    window.addEventListener("drop", handleMouseUp);

    return () => {
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("dragend", handleMouseUp);
        window.removeEventListener("drop", handleMouseUp);
    };
}, []);

const updateBracketRounds = (newRounds) => {
    const previousScale = scale;

    setIsRecalculating(true);
    setScale(1);
    setBracketRounds(newRounds);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setScale(previousScale);
            setIsRecalculating(false);
        });
    });
};

  return (
    <>
        <section 
            className="edit-panel"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}>
            <div className="left-panel">
                <ul>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title1')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className='PB-range-slider-div'>
                            <input
                                type="range"
                                className='PB-range-slider'
                                id="myRange"
                                min="10"
                                max="60"
                                value={config.fontSize}
                                onChange={(e) =>
                                    setConfig({ ...config, fontSize: Number(e.target.value) })
                                }
                            />
                            <input
                                type="number"
                                className='PB-range-slidervalue'
                                min="10"
                                max="60"
                                value={config.fontSize}
                                onChange={(e) =>
                                    setConfig({ ...config, fontSize: Number(e.target.value) })
                                }
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title2')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.fontColor}
                                onChange={(e) =>
                                    setConfig({ ...config, fontColor: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.fontColor}
                                onChange={(e) =>
                                    setConfig({ ...config, fontColor: e.target.value })
                                }
                                placeholder={config.fontColor}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title3')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className="radio-buttons-container">
                            {["solid","dotted","dashed","double","groove","ridge","inset","outset"]
                                .map(type => (
                                <div className="radio-button" key={type}>
                                    <input
                                    type="radio"
                                    name="border-type"
                                    value={type}
                                    checked={config.borderType === type}
                                    onChange={(e) =>
                                        setConfig({ ...config, borderType: e.target.value })
                                    }
                                    className="radio-button__input"
                                    id={`radio-${type}`}
                                    />
                                    <label htmlFor={`radio-${type}`} className="radio-button__label">
                                    <span className="radio-button__custom"></span>
                                    {type}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title4')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.borderColor}
                                onChange={(e) =>
                                    setConfig({ ...config, borderColor: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.borderColor}
                                onChange={(e) =>
                                    setConfig({ ...config, borderColor: e.target.value })
                                }
                                placeholder={config.borderColor}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title5')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.borderWin}
                                onChange={(e) =>
                                    setConfig({ ...config, borderWin: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.borderWin}
                                onChange={(e) =>
                                    setConfig({ ...config, borderWin: e.target.value })
                                }
                                placeholder={config.borderWin}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title6')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.bgWin}
                                onChange={(e) =>
                                    setConfig({ ...config, bgWin: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.bgWin}
                                onChange={(e) =>
                                    setConfig({ ...config, bgWin: e.target.value })
                                }
                                placeholder={config.bgWin}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title7')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className='PB-range-slider-div'>
                            <input
                                type="range"
                                className='PB-range-slider'
                                id="myRange"
                                min="0"
                                max="1"
                                step="0.1"
                                value={config.opacityWin}
                                onChange={(e) =>
                                    setConfig({ ...config, opacityWin: Number(e.target.value) })
                                }
                            />
                            <input
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                                value={config.opacityWin}
                                onChange={(e) =>
                                    setConfig({ ...config, opacityWin: Number(e.target.value) })
                                }
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title8')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.borderLos}
                                onChange={(e) =>
                                    setConfig({ ...config, borderLos: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.borderLos}
                                onChange={(e) =>
                                    setConfig({ ...config, borderLos: e.target.value })
                                }
                                placeholder={config.borderLos}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title9')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.bgLos}
                                onChange={(e) =>
                                    setConfig({ ...config, bgLos: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.bgLos}
                                onChange={(e) =>
                                    setConfig({ ...config, bgLos: e.target.value })
                                }
                                placeholder={config.bgLos}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title10')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className='PB-range-slider-div'>
                            <input
                                type="range"
                                className='PB-range-slider'
                                id="myRange"
                                min="0"
                                max="1"
                                step="0.1"
                                value={config.opacityLos}
                                onChange={(e) =>
                                    setConfig({ ...config, opacityLos: Number(e.target.value) })
                                }
                            />
                            <input
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                                value={config.opacityLos}
                                onChange={(e) =>
                                    setConfig({ ...config, opacityLos: Number(e.target.value) })
                                }
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title11')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.bgTeam}
                                onChange={(e) =>
                                    setConfig({ ...config, bgTeam: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.bgTeam}
                                onChange={(e) =>
                                    setConfig({ ...config, bgTeam: e.target.value })
                                }
                                placeholder={config.bgTeam}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title12')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className='PB-range-slider-div'>
                            <input
                                type="range"
                                className='PB-range-slider'
                                id="myRange"
                                min="260"
                                max="650"
                                value={config.teamWidth}
                                onChange={(e) =>
                                    setConfig({ ...config, teamWidth: Number(e.target.value) })
                                }
                            />
                            <input
                                type="number"
                                min="260"
                                max="650"
                                value={config.teamWidth}
                                onChange={(e) =>
                                    setConfig({ ...config, teamWidth: Number(e.target.value) })
                                }
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title13')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className='PB-range-slider-div'>
                            <input
                                type="range"
                                className='PB-range-slider'
                                id="myRange"
                                min="10"
                                max="60"
                                value={config.padding}
                                onChange={(e) =>
                                    setConfig({ ...config, padding: Number(e.target.value) })
                                }
                            />
                            <input
                                type="number"
                                min="10"
                                max="60"
                                value={config.padding}
                                onChange={(e) =>
                                    setConfig({ ...config, padding: Number(e.target.value) })
                                }
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title14')}</h1>
                            <div className="line"></div>
                        </div>
                        <div style={{display: "flex", gap: "20px", alignItems: "flex-end"}}>
                            <input
                                type="color"
                                value={config.lineColor}
                                onChange={(e) =>
                                    setConfig({ ...config, lineColor: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                value={config.lineColor}
                                onChange={(e) =>
                                    setConfig({ ...config, lineColor: e.target.value })
                                }
                                placeholder={config.lineColor}
                            />
                        </div>
                    </li>
                    <li>
                        <div className='header'>
                            <h1>{i18n.t('designer.designer-menu-title15')}</h1>
                            <div className="line"></div>
                        </div>
                        <div className='PB-range-slider-div'>
                            <input
                                type="range"
                                className='PB-range-slider'
                                id="myRange"
                                min="0"
                                max="10"
                                value={config.lineWidth}
                                onChange={(e) =>
                                    setConfig({ ...config, lineWidth: Number(e.target.value) })
                                }
                            />
                            <input
                                type="number"
                                min="0"
                                max="10"
                                value={config.lineWidth}
                                onChange={(e) =>
                                    setConfig({ ...config, lineWidth: Number(e.target.value) })
                                }
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="top-panel">
                <ul>
                    <li>
                        <div className="dropdown">
                        <div
                            className="dropdown__selected"
                            style={{textWrap: "nowrap"}}
                            onClick={() => setOpen(!open)}
                        >
                            <p>{type}</p>
                            <span className={`arrow ${open ? "open" : ""}`}><FontAwesomeIcon icon={faAngleDown} /></span>
                        </div>
            
                        {open && (
                            <div className="dropdown__list">
                            {types.map(item => (
                                <div
                                key={item}
                                className="dropdown__item"
                                onClick={() => {
                                    setType(item);
                                    setOpen(false);
                                }}
                                >
                                {item}
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
                    </li>
                    <li>{i18n.t('designer.designer-top-menu-title')}<input type="number" min="2" max="99" value={participantCount} onChange={(e) => setParticipantCount(e.target.value)} maxLength="2" placeholder='4' style={{marginLeft: "10px"}}/></li>
                    <li style={{padding: "0", backgroundColor: "transparent"}}><button className='btn' style={{fontSize: "17px", padding: "10px"}} onClick={handleAutoFill}>{i18n.t('designer.designer-top-menu-btn1')}</button></li>
                    <button className="btn" style={{fontSize: "17px", padding: "10px"}} onClick={() => setFullscreen(!fullscreen)}><FontAwesomeIcon icon={fullscreen ? faMinimize : faMaximize} /></button>
                    
                    <button className="btn" style={{fontSize: "17px", padding: "10px", marginLeft: "30px"}} onClick={zoomOut} disabled={scale <= MIN_SCALE}><FontAwesomeIcon icon={faMinus} /></button>
                    <li><input type="number" min="10" max="200" maxLength="3" placeholder='50%' step="1" onChange={(e) => { if (e.target.value === "") return; handleZoom(Number(e.target.value) / 100);}} value={Math.round(scale * 100)}/></li>
                    <button className="btn" style={{fontSize: "17px", padding: "10px"}} onClick={zoomIn} disabled={scale >= MAX_SCALE}><FontAwesomeIcon icon={faPlus} /></button>
                </ul>
            </div>
            <div
                className="bracket-canvas"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,  transformOrigin: "top left", transition: isDragging || isRecalculating ? "none" : "transform 0.15s ease"
                }}
            >
                <div className={`tournaments-bracket ${fullscreen ? "bracket-fullscreen" : ""}`}>
                    <TournamentBracket
                        rounds={bracketRounds}
                        theme={themeWithPx}
                    />
                </div>
            </div>
            <div className='bottom-block-btns'>
                <button className='generate' onClick={handleReset}><FontAwesomeIcon icon={faRotate} />{i18n.t('designer.designer-bottom-menu-btn2')}</button>
                <button className='generate' onClick={handleGenerateCode}><FontAwesomeIcon icon={faCode} />{i18n.t('designer.designer-bottom-menu-btn3')}</button>
            </div>
        </section>
        {codeModal && (
            <div className="code-modal-overlay" onClick={() => setCodeModal(false)}>
                <div
                    className="code-modal"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="code-modal-header">
                        <div>
                            <h2>{i18n.t('designer.designer-code-modal-title')}</h2>
                            <p>{i18n.t('designer.designer-code-modal-title2')}</p>
                        </div>

                        <button className='btn-null' onClick={() => setCodeModal(false)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>

                    <div className="code-modal-content">
                        <div className="generated-code-section">
                            <div className="generated-code-header">
                                <h3>{i18n.t('designer.designer-code-modal-title3')}</h3>
                                <CodeBlock
                title={"js/ts"}
                code={generateCode()}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )}
    </>
  );
}
