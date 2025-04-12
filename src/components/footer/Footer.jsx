import React, { useContext } from 'react'
import './footer.css'
import { ThemeContext } from '../../ThemeContext'

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? 'dark-theme' : ''}`}>
      <div className="footer__container container">
        <h1 className="footer__title">Vidhi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#project" className="footer__link">Projects</a>
          </li>

        </ul>

        <div className="footer__social">

          <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/vidhi-ajmera-501328257/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="https://github.com/Vidhi-Ajmera16355" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>

        </div>

        <span className="footer__copy">
          &#169; VIDHI AJMERA -- BTech CS(AIML)
        </span>

      </div>
    </footer>
  )
}

export default Footer
