import React from "react";
import './AboutMe.css'

const AboutMe = () => {
  return(
    <section className="about-me">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <p className="about-me__name">
            Вячеслав
          </p>
          <p className="about-me__job">
            Фронтенд-разработчик, 23 года
          </p>
          <p className="about-me__description">
            На данный момент я проживаю в Санкт-Петербурге. Закончил Санкт-Петербургский
            государственный электротехнический университет. Работа в компании "Nord Clan"
            Фронтенд-разработчиком на стеке: React, Redux, React Router, Typescript, Mui.
          </p>
          <div className="about-me__social">
            <a
              className="about-me__link"
              href="#"
            >
              Facebook
            </a>
            <a
              className="about-me__link"
              href="#"
            >
              Github
            </a>
          </div>
        </div>
        <img
          className="about-me__photo"
          src="#"
          alt="Профиль"
        />
      </div>
    </section>
  )
};

export default AboutMe;