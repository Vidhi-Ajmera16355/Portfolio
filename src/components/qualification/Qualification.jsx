import React, { useState, useContext } from 'react'
import './qualification.css'
import { ThemeContext } from '../../ThemeContext'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const { darkMode } = useContext(ThemeContext);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className={`qualification section ${darkMode ? 'dark-theme' : ''}`} id="qualification"><h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ?
                            "qualification__button qualification__active button--flex" :
                            "qualification__button button--flex"
                    }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon">
                        </i>
                        Education
                    </div>


                    <div className={
                        toggleState === 2 ?
                            "qualification__button qualification__active button--flex" :
                            "qualification__button button--flex"

                    }
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon">
                        </i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        toggleState === 1 ? "qualification__content qualification__content-active" :
                            "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Class 10</h3>

                                <span className="qualification__subtitle">
                                    JP Public Academy
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>




                        <div className="qualification__data">

                            <div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Class 12</h3>

                                <span className="qualification__subtitle">
                                    JP Public Academy
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>



                        </div>



                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor Of Technology</h3>

                                <span className="qualification__subtitle">
                                    GLA University
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2026
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>



                    <div className={
                        toggleState === 2 ? "qualification__content qualification__content-active" :
                            "qualification__content"
                    }>

                             <div className="qualification__data">

                            <div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Goldman Sachs Summer Intern</h3>

                                <span className="qualification__subtitle">
                                    Bangalore
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2025 (May - July)
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Web Development</h3>

                                <span className="qualification__subtitle">
                                    Udemy
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">JOVAC - 300 Competitve Programming Series</h3>

                                <span className="qualification__subtitle">
                                    W3grads
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 (June - July)
                                </div>
                            </div>

                        </div>



                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Science Intern</h3>

                                <span className="qualification__subtitle">
                                    IISER, Bhopal
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 (May-July)
                                </div>
                                
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                                                    <div className="qualification__data">

                            <div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Business Analyst Course</h3>

                                <span className="qualification__subtitle">
                                    Udemy
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2025 
                                </div>
                            </div>

                        </div>
  <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Developer Intern</h3>

                                <span className="qualification__subtitle">
                                    Meridian Solutions
                                </span>


                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2025 (Jan - May)
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    )
}

export default Qualification
