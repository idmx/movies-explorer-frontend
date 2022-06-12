import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  if (
    location.pathname === '/profile'
    || location.pathname === '/sign-up'
    || location.pathname === '/sign-in'
    || location.pathname === '/404'
  ) {
    return null;
  }
  return (
      <footer className="footer">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bar">
          <p className="footer__year footer__text-decor">2022</p>
          <nav className="footer__links">
            <a
              className="footer__link footer__text-decor"
              href="https://practicum.yandex.ru"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link footer__text-decor"
              href="https://github.com/idmx"
            >
              Github
            </a>
            <a
              className="footer__link footer__text-decor"
              href="https://m.facebook.com"
            >
              Facebook
            </a>
          </nav>
        </div>
      </footer>
  );
};

export default Footer;
