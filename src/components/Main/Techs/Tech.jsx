import React from "react";
import './Tech.css'

const technology = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB'
]

const Tech = () => {
  return(
    <section className="tech">
      <h2 className="tech__title">
        Технологии
      </h2>
      <div className="tech__container">
        <h3 className="tech__subtitle">
          7 технологий
        </h3>
        <p className="tech__description">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
      </div>
      <div className="tech__technologies">
      { technology.map( item => (
          <p
            className="tech__technology"
            key={ item }
          >
            { item }
          </p>
      ))
      }
      </div>
    </section>
  )
};

export default Tech;