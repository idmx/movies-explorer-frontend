import React from "react";
import './AboutProject.css'

const contents = [
  {
    subtitle: "Дипломный проект включал 5 этапов",
    description: `Составление плана, работу над бэкендом,
    вёрстку, добавление функциональности и финальные доработки.`,
    id: 11
  },
  {
    subtitle: "На выполнение диплома ушло 5 недель",
    description: `У каждого этапа был мягкий и жёсткий дедлайн,
    которые нужно было соблюдать, чтобы успешно защититься.`,
    id: 12
  }
]

const AboutProject = React.forwardRef(( props, ref ) => {

  return(
    <section className="about-project" ref={ref}>
      <h2 className="about-project__title" id="#about-project">
        О проекте
      </h2>
      <div className="about-project__container">
        { contents.map( content => (
          <div key={content.id}>
            <h3 className="about-project__subtitle" >
              { content.subtitle }
            </h3>
            <p className="about-project__description" >
              { content.description }
            </p>
          </div>
        ))
        }
      </div>
      <div className="about-project__term-container">
        <p className="about-project__term about-project__term-frontend">
          1 неделя
        </p>
        <p className="about-project__term about-project__term-backend">
          4 недели
        </p>
      </div>
      <div className="about-project__term-container">
        <p className="about-project__term about-project__term-name">
          Back-end
        </p>
        <p className="about-project__term about-project__term-name">
          Front-end
        </p>
      </div>
    </section>
  )
});

export default AboutProject;