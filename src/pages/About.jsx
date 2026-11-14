import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeFork, faGraduationCap, faRocket, faBug } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";
import { CodeBlock } from "../components/Copy";
import RadioGroup from "../components/RadioGroup";
import '../index.css';
import '../App.css';
import '../components/css/about.css';

export default function About() {
    const { i18n } = useTranslation();

  return (
    <>
        <section className="about-page">
            <h1>{i18n.t('about-page.title')}</h1>
            <h3>{i18n.t('about-page.text')}</h3>
        </section>
        
        <section className='chapter'>
            <div className="block">
                <h1>{i18n.t('about-page.chapter1')}</h1>
                <div className="separation">
                    <ul className='left'>
                        <li>{i18n.t('about-page.chapter1li1')}</li>
                        <li>{i18n.t('about-page.chapter1li2')}</li>
                        <li>{i18n.t('about-page.chapter1li3')}</li>
                        <li>{i18n.t('about-page.chapter1li4')}</li>
                    </ul>
                    <a href='https://www.npmjs.com/package/tournaments-bracket?activeTab=versions' target='_blank' className="right">
                        <FontAwesomeIcon icon={faNpm} style={{fontSize: "80px"}}/>
                        <h2>Tournaments-Bracket</h2>
                    </a>
                </div>
            </div>
        </section>

        <section className='chapter'>
            <div className="block">
                <h1>{i18n.t('about-page.chapter2')}</h1>
                <div className="cards">
                    <div className="card"><div className="icon"><FontAwesomeIcon icon={faCode} /></div><h1>{i18n.t('about-page.chapter2card1')}</h1><p>{i18n.t('about-page.chapter2card2text1')}</p></div>
                    <div className="card"><div className="icon"><FontAwesomeIcon icon={faCodeFork} /></div><h1>{i18n.t('about-page.chapter2card2')}</h1><p>{i18n.t('about-page.chapter2card2text2')}</p></div>
                    <div className="card"><div className="icon"><FontAwesomeIcon icon={faGraduationCap} /></div><h1>{i18n.t('about-page.chapter2card3')}</h1><p>{i18n.t('about-page.chapter2card2text3')}</p></div>
                    <div className="card"><div className="icon"><FontAwesomeIcon icon={faRocket} /></div><h1>{i18n.t('about-page.chapter2card4')}</h1><p>{i18n.t('about-page.chapter2card2text4')}</p></div>
                </div>
            </div>
        </section>

        <section className='chapter'>
            <div className="block" style={{flexDirection: "row"}}>
                <div>
                    <h1>{i18n.t('about-page.chapter3')}</h1>
                    <div className="info">
                        <h3>{i18n.t('about-page.chapter3text')}</h3>
                        <div className="link">
                            <a href="" className='btn'><FontAwesomeIcon icon={faGithub} style={{marginRight: "10px"}}/>{i18n.t('about-page.chapter3btn1')}</a>
                            <a href="" className='btn'><FontAwesomeIcon icon={faBug} style={{marginRight: "10px"}}/>{i18n.t('about-page.chapter3btn2')}</a>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <img src="../../public/logo.png" alt="" style={{width: "300px"}}/>
                </div>
            </div>
        </section>

        <section className='about-me'>
            <div className="block">
                <h1>{i18n.t('about-page.about-me-title')}</h1>
                <h3>{i18n.t('about-page.about-me-text1')}</h3>
                <h3>{i18n.t('about-page.about-me-text2')}</h3>
                <h3>{i18n.t('about-page.about-me-text3')}</h3>
            </div>
        </section>
    </>
  );
}
