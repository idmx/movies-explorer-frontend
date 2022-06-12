import React from 'react';
import './Portfolio.css';

const links = [
  {
    name: 'Статичный сайт',
    link: 'https://idmx.github.io/how-to-learn',
  },
  {
    name: 'Адаптивный сайт',
    link: 'https://idmx.github.io/russian-travel',
  },
  {
    name: 'Одностраничное приложение',
    link: 'http://my-mesto.nomoredomains.xyz/sign-in',
  },
];

const Portfolio = () => (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      { links.map(( item ) => (
          <a
            href={ item.link }
            key={ item.link }
            className="portfolio__link"
          >
            { item.name }
          </a>
      ))
      }
    </section>
);

export default Portfolio;
