import React from "react";
import './Footer.css'

const Footer = () => {
  return(
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bar">
        <p className="footer__year footer__text-decor">2022</p>
        <nav className="footer__links">
          <a
            className="footer__link footer__text-decor"
            href="#"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link footer__text-decor"
            href="#"
          >
            Github
          </a>
          <a
            className="footer__link footer__text-decor"
            href="#"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;