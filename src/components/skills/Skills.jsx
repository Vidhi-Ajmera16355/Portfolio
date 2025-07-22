import React, { useContext } from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import ML from './ML.jsx'
import { ThemeContext } from '../../ThemeContext'

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`skills section ${darkMode ? 'dark-theme' : ''}`} id="skills">
        <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My technical level
            </span>

            <div className="skills__container container grid">
                
                <Frontend />
                <Backend />
                <ML />
            </div>
        </section>
    )
}

export default Skills
