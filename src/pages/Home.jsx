import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFileImport, faGears } from '@fortawesome/free-solid-svg-icons'
import {TournamentBracket} from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { rounds } from "../bracket/rounds";
import { useTranslation } from "react-i18next";
import { CodeBlock } from "../components/Copy";
import RadioGroup from "../components/RadioGroup";
import '../index.css';
import '../App.css';
import '../components/css/home.css';
import logo from "../assets/logo.png";
import react from "../assets/icons/react.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import feature1 from "../assets/Fast-grid-generation.jpg";
import feature2 from "../assets/Customizable-match-design.jpg";
import feature3 from "../assets/Support-for-different-tournament-formats.jpg";
import feature4 from "../assets/Easy-integration-with-ReactJSHTML.jpg";

export default function Home() {
  const { i18n } = useTranslation();
  const BASE = import.meta.env.BASE_URL;
  const english = [
    "Tournaments-Bracket",
    "Generator Library",
    "Build your tournament brackets in seconds",
  ];

  const russian = [
    "Турнирная сетка",
    "Библиотека-генератор",
    "Создайте свою турнирную таблицу за считанные секунды",
  ];

  const [texts, setTexts] = useState(["", "", ""]);
  const [langIndex, setLangIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentLang = langIndex === 0 ? english : russian;

    if (step < currentLang.length) {
      if (charIndex < currentLang[step].length) {
        timeout = setTimeout(() => {
          const newTexts = [...texts];
          newTexts[step] = currentLang[step].slice(0, charIndex + 1);
          setTexts(newTexts);
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setStep(step + 1);
          setCharIndex(0);
        }, 200);
      }
    } else {
      timeout = setTimeout(() => {
        setTexts(["", "", ""]);
        setStep(0);
        setCharIndex(0);
        setLangIndex(langIndex === 0 ? 1 : 0);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, step, texts, langIndex]);

  let cursorIndex = texts.findIndex((t, i) => t !== (langIndex === 0 ? english[i] : russian[i]));
  if (cursorIndex === -1) cursorIndex = texts.length - 1;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [type, setType] = useState(i18n.t('feedback.error'));
  const [open, setOpen] = useState(false);
  const types = [i18n.t("feedback.error"), i18n.t('feedback.wish'), i18n.t('feedback.question'), i18n.t('feedback.other')];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://hook.eu1.make.com/g3jmeothe92x7b7qo690zw6afffnihpx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          type
        })
      });

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setType("Ошибка");
    } catch (err) {
      console.error("Ошибка отправки:", err);
    }
  };

  const questions = [
    {
      id: "source",
      text: i18n.t('survey.question1'),
      options: [
        "TicTok",
        i18n.t('survey.question1Variant2'),
        "YouTube",
        i18n.t('survey.question1Variant4'),
      ]
    },
    {
      id: "role",
      text: i18n.t('survey.question2'),
      options: [
        i18n.t('survey.question2Variant1'),
        i18n.t('survey.question2Variant2'),
        i18n.t('survey.question2Variant3'),
        i18n.t('survey.question2Variant4'),
      ]
    },
    {
      id: "usage",
      text: i18n.t('survey.question3'),
      options: [
        i18n.t('survey.question3Variant1'),
        i18n.t('survey.question3Variant2'),
        i18n.t('survey.question3Variant3'),
        i18n.t('survey.question3Variant4')
      ]
    },
    {
      id: "missing",
      text: i18n.t('survey.question4'),
      options: [
        i18n.t('survey.question4Variant1'),
        i18n.t('survey.question4Variant2'),
        i18n.t('survey.question4Variant3'),
        i18n.t('survey.question4Variant4')
      ]
    },
    {
      id: "rating",
      text: i18n.t('survey.question5'),
      options: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const selectAnswer = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitPoll();
    }
  };

  const submitPoll = async () => {
    await fetch("https://hook.eu1.make.com/5x4duyx9dgwuddla9lxvi0h4adqdohbp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        answers,
        date: new Date().toISOString(),
      })
    });
    localStorage.setItem("poll_completed", "true");
    setCompleted(true);
  };

  return (
    <>
        <section className="hero">
          <h1>{texts[0]}{cursorIndex === 0 && <span className="cursor">|</span>}</h1>
          <h1>{texts[1]}{cursorIndex === 1 && <span className="cursor">|</span>}</h1>
          <h4>{texts[2]}{cursorIndex === 2 && <span className="cursor">|</span>}</h4>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>{i18n.t('features.title')}</h1>
          <div className="right-line"></div>
        </div>
      
        <section className="features">
          <div className="card-shadow">
            <div className="card">
                <div className="featuresImg">
                    <img src={feature1} alt="" />
                </div>
                <div className="text">
                    <h3>{i18n.t('features.titleCard1')}</h3>
                    <p>{i18n.t('features.textCard1')}</p>
                </div>
            </div>
          </div>
            <div className="card">
                <div className="featuresImg">
                    <img src={feature2} alt="" />
                </div>
                <div className="text">
                    <h3>{i18n.t('features.titleCard2')}</h3>
                    <p>{i18n.t('features.textCard2')}</p>
                </div>
            </div>
            <div className="card">
                <div className="featuresImg">
                    <img src={feature3} alt="" />
                </div>
                <div className="text">
                    <h3>{i18n.t('features.titleCard3')}</h3>
                    <p>{i18n.t('features.textCard3')}</p>
                </div>
            </div>
            <div className="card">
                <div className="featuresImg">
                    <img src={feature4} alt="" />
                </div>
                <div className="text">
                    <h3>{i18n.t('features.titleCard4')}</h3>
                    <p>{i18n.t('features.textCard4')}</p>
                </div>
            </div>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>{i18n.t('quick-start.title')}</h1>
          <div className="right-line"></div>
        </div>

        <section className="quick-start">
          <div className="quick-start-card" style={{ background: "var(--color)" }}>
            <div className="icon"><FontAwesomeIcon icon={faDownload} /></div>
            <h2>{i18n.t('quick-start.titleCard1')}</h2>
            <p>
              {i18n.t('quick-start.textCard1')}
            </p>
            <Link to="/documentation#Download" className="btn">{i18n.t('quick-start.btn')}</Link>
          </div>

          <div className="quick-start-card">
            <div className="icon"><FontAwesomeIcon icon={faFileImport} /></div>
            <h2>{i18n.t('quick-start.titleCard2')}</h2>
            <p>
              {i18n.t('quick-start.textCard1')}
            </p>
            <Link to="/documentation#Import" className="btn">{i18n.t('quick-start.btn')}</Link>
          </div>

          <div className="quick-start-card">
            <div className="icon"><FontAwesomeIcon icon={faGears} /></div>
            <h2>{i18n.t('quick-start.titleCard3')}</h2>
            <p>
              {i18n.t('quick-start.textCard1')}
            </p>
            <Link to="/documentation#Generate" className="btn">{i18n.t('quick-start.btn')}</Link>
          </div>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>{i18n.t('examples.title')}</h1>
          <div className="right-line"></div>
        </div>

        <section className="examples">
          <div className="examples-bracket">
            <h1>{i18n.t('examples.card1')}</h1>
            <TournamentBracket
              rounds={rounds}
            />
          </div>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>{i18n.t('about.title')}</h1>
          <div className="right-line"></div>
        </div>

        <section className="about">
          <div className="first-block">
            <div className="back-img">
              <img src={logo} alt="" />
            </div>
            <div className="info">
              <h2>{i18n.t('about.text')}</h2>
              <div className="icons">
                  <div className="steck">
                    <div className="back-img-steck">
                      <img src={react} alt="" />
                    </div>
                    <div className="back-img-steck">
                      <img src={js} alt="" />
                    </div>
                    <div className="back-img-steck">
                      <img src={ts} alt="" />
                    </div>
                  </div>
                  <div className="link">
                    <a href="https://yoomoney.ru/to/4100119449126215" className="gratitude" target="_blank" rel="noopener noreferrer">{i18n.t('about.donate')}</a>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="heading">
          <div className="left-line"></div>
          <h1>{i18n.t('feedback.title')}</h1>
          <div className="right-line"></div>
        </div>

        <section style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px"}}>
          <div style={{minWidth: "700px"}}>
            <h2 style={{fontSize: "40px", color: "var(--white)", textAlign: "left"}}>{i18n.t('feedback.formTitle')}</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input placeholder={i18n.t('feedback.name')} value={name} onChange={e => setName(e.target.value)} required />
              <input type="email" placeholder={i18n.t('feedback.email')} value={email} onChange={e => setEmail(e.target.value)} required />
              <div className="dropdown">
              <div
                className="dropdown__selected"
                onClick={() => setOpen(!open)}
              >
                {type}
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
              <textarea placeholder={i18n.t('feedback.message')} value={message} onChange={e => setMessage(e.target.value)} required />
              <button type="submit" className="btn" style={{fontSize: "25px"}}>{i18n.t('feedback.send')}</button>
              {sent && <p>Сообщение отправлено!</p>}
            </form>
          </div>
          <div>
            <h2 style={{fontSize: "40px", color: "var(--white)", textAlign: "left"}}>{i18n.t('survey.title')}</h2>
            <div className="poll">
              
              {completed ? (
                <h2>Спасибо за участие 🙌</h2>
              ) : (
                <>
                  <div key={questions[currentStep].id} className="poll-question">
                    <p>{questions[currentStep].text}</p>
                    <RadioGroup
                      name={questions[currentStep].id}
                      options={questions[currentStep].options}
                      value={answers[questions[currentStep].id] || ""}
                      onChange={(value) => selectAnswer(questions[currentStep].id, value)}
                    />
                  </div>

                  <button
                    className="btn"
                    style={{fontSize: "20px"}}
                    disabled={!answers[questions[currentStep].id]}
                    onClick={nextQuestion}
                  >
                    {currentStep < questions.length - 1 ? i18n.t('survey.next') : i18n.t('survey.send')}
                  </button>
                </>
              )}
            </div>
          </div>
        </section> */}
    </>
  );
}
