import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  if ( ROUTES.ROUTE_WITHOUTE_FOOT.includes( location.pathname )) {
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
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link footer__text-decor"
              href="https://github.com/idmx"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="footer__link footer__text-decor"
              href="https://m.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </nav>
        </div>
      </footer>
  );
};

export default Footer;
