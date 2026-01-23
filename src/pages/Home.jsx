import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {TournamentBracket} from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { rounds } from "../bracket/rounds";
import { CodeBlock } from "../components/Copy";
import '../index.css';
import '../App.css';
import '../components/css/home.css';
import feature1 from "../assets/Fast-grid-generation.jpg";
import feature2 from "../assets/Customizable-match-design.jpg";
import feature3 from "../assets/Support-for-different-tournament-formats.jpg";
import feature4 from "../assets/Easy-integration-with-ReactJSHTML.jpg";
import code from "../assets/code.png";

export default function Home() {
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
  const [type, setType] = useState("Ошибка");
  const [open, setOpen] = useState(false);

  const types = ["Ошибка", "Пожелание", "Вопрос", "Другое"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://hook.eu1.make.com/xcxx8fvmr1x5ocj1mb7wv35f018lythq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, type, message }),
    });

    setSent(true);
    setName(""); setEmail(""); setMessage("");
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
          <h1>Преимущества</h1>
          <div className="right-line"></div>
        </div>
      
        <section className="features">
          <div className="card-shadow">
            <div className="card">
                <div className="featuresImg">
                    <img src={feature1} alt="" />
                </div>
                <div className="text">
                    <h3>Быстрая генерация сеток</h3>
                    <p>Создавайте турнирные сетки за считанные секунды с помощью оптимизированных алгоритмов.</p>
                </div>
            </div>
          </div>
            <div className="card">
                <div className="featuresImg">
                    <img src={feature2} alt="" />
                </div>
                <div className="text">
                    <h3>Настраиваемый дизайн матчей</h3>
                    <p>Полный контроль над внешним видом матчей: стили, цвета и структура под ваш проект.</p>
                </div>
            </div>
            <div className="card">
                <div className="featuresImg">
                    <img src={feature3} alt="" />
                </div>
                <div className="text">
                    <h3>Поддержка разных форматов</h3>
                    <p>Работа с популярными форматами турниров и гибкая адаптация под любые правила.</p>
                </div>
            </div>
            <div className="card">
                <div className="featuresImg">
                    <img src={feature4} alt="" />
                </div>
                <div className="text">
                    <h3>Лёгкая интеграция</h3>
                    <p>Простое подключение и использование в современных фронтенд-проектах.</p>
                </div>
            </div>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>Как использовать</h1>
          <div className="right-line"></div>
        </div>

        <section className="quick-start">
          <div className="text">
            <h2>Шаги использования:</h2>
            <ul>
              <li>
                <h3>Установка</h3>
                <CodeBlock
                  title={`bash`}
                  code={`npm i tournaments-bracket@latest`}
                />
              </li>
              <li>
                <h3>Импорт</h3>
                <CodeBlock 
                  title={`bash`}
                code={`import {TournamentBracket} from "tournaments-bracket";
import "tournaments-bracket/dist/tournaments-bracket.css";
import { rounds } from "./bracket/rounds";`}
                />
              </li>
              <li>
                <h3>Генерация сетки</h3>
                <CodeBlock
                  title={`bash`}
                  code={`npx tournaments-bracket-generate`}
                />
                </li>
            </ul>
            <Link to="/documentation" className="btn" style={{marginTop: "20px"}}>Смотреть полную документацию</Link>
          </div>
          <img src={code} alt="" />
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>Примеры</h1>
          <div className="right-line"></div>
        </div>

        <section className="examples">
          <div className="examples-bracket">
            <h1>Стандартная</h1>
            <TournamentBracket
              rounds={rounds}
            />
          </div>
          <div className="examples-bracket">
            <h1>Отцентрированная</h1>
            <TournamentBracket
              rounds={rounds}
            />
          </div>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>О проекте</h1>
          <div className="right-line"></div>
        </div>

        <section className="about">
          <div className="first-block">
            <div className="back-img">
              <img src="../../public/logo.png" alt="" />
            </div>
            <div className="info">
              <h2>Я создал эту библиотеку, потому что искал готовые решения для генерации турнирных сеток и не смог найти ничего удобного для разработчиков. Тогда я подумал: «Почему бы не сделать самому?» Сейчас это проект, который я развиваю, исправляю ошибки и улучшаю по мере того, как пользователи дают обратную связь. Цель — сделать библиотеку простой, удобной и полезной для всех, кто хочет быстро создавать турниры.</h2>
              <div className="icons">
                  <div className="steck">
                    <div className="back-img-steck">
                      <img src="../../public/icons/react.png" alt="" />
                    </div>
                    <div className="back-img-steck">
                      <img src="../../public/icons/js.png" alt="" />
                    </div>
                    <div className="back-img-steck">
                      <img src="../../public/icons/ts.png" alt="" />
                    </div>
                  </div>
                  <div className="link">
                    <a href="https://yoomoney.ru/to/4100119449126215" className="gratitude" target="_blank" rel="noopener noreferrer">Поблагодарить автора</a>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <div className="heading">
          <div className="left-line"></div>
          <h1>Обратная связь</h1>
          <div className="right-line"></div>
        </div>

        <section style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px"}}>
          <div style={{minWidth: "700px"}}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
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
              <textarea placeholder="Сообщение" value={message} onChange={e => setMessage(e.target.value)} required />
              <button type="submit" className="btn" style={{fontSize: "25px"}}>Отправить</button>
              {sent && <p>Сообщение отправлено!</p>}
            </form>
          </div>
          <div>
            <div className="feedback-info">
              <h1>Сообщение отправляется через Telegram-бота.<br/>
                  Вам нужно всего лишь заполнить форму и отправить её.<br/>
                  Ответ придёт на электронную почту, которую вы укажете.<br/>
                  Я постараюсь ответить как можно быстрее.
              </h1>
            </div>
          </div>
        </section>
    </>
  );
}
