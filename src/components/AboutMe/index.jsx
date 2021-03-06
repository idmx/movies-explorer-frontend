import React from 'react';
import myPhoto from '../../images/face.jpg';
import './AboutMe.css';

const AboutMe = () => (
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
            государственный электротехнический университет. Работа в компании &quot;Nord Clan&quot;
            Фронтенд-разработчиком на стеке: React, Redux, React Router, Typescript, Mui. Перед этим
            успел поработать в СТЦ на Vue, Router, Vuex 3 месяца.
          </p>
          <div className="about-me__social">
            <a
              className="about-me__link"
              href="https://m.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="about-me__link"
              href="https://github.com/idmx"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img
          className="about-me__photo"
          alt="my photo"
          src={myPhoto}
        />
      </div>
    </section>
);

export default AboutMe;
