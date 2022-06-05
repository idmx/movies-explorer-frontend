import React from "react";
import './Portfolio.css'

const links = [
  'Статичный сайт',
  'Адаптивный сайт',
  'Одностраничное приложение'
]

const Portfolio = () => {
  return(
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      { links.map( link => (
          <a
            href='#'
            key={ link }
            className="portfolio__link"
          >
            { link }
          </a>
        ))
      }
    </section>
  )
};

export default Portfolio;