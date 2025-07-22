import React, { useState, useContext } from 'react'
import './services.css'
import { ThemeContext } from '../../ThemeContext'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const { darkMode } = useContext(ThemeContext);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className={`services section ${darkMode ? 'dark-theme' : ''}`} id="services"><h2 className="section__title">Current Knowledge</h2>
            <span className="section__subtitle">Always ready to learn new things!!👍</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right"></i>
                    </span>
                    {/*     ========================THINKKKKKKK================ */}
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times"></i>
                            <h3 className="services__modal-title">Web Developer
                            </h3>
                            <p className="services__modal-description">Services like Full stack web developement projects </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop full stack web application using MERN stack named Jobbler.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop an E-commerce website of a paints store(Ajmera Paints) used Payment integration with Razorpay.                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop a chat application brushing up my MERN stack skills.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">AIML Enthusiast</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More{" "}
                        <i className="uil uil-arrow-right"></i>
                    </span>
                    {/*     ========================THINKKKKKKK================ */}
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times"></i>
                            <h3 className="services__modal-title">AIML Enthusiast
                            </h3>
                            <p className="services__modal-description">Services like Full stack web developement projects </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop full stack web application using MERN stack named Jobbler.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I worked as a Data Science Intern as IISER, Bhopal.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop a chat application brushing up my MERN stack skills.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Programmer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right"></i>
                    </span>
                    {/*     ========================THINKKKKKKK================ */}
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times"></i>
                            <h3 className="services__modal-title">Programmer
                            </h3>
                            <p className="services__modal-description">Object-oriented Programming </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Data Structures and Algorithm.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Solved 700+ problems on coding platforms like LeetCode, HackerRank, CodeForces.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Learned Kafka (messaging queue) during my internship at Goldman Sachs.                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
