import React from "react";
import promo from '../../../images/promo.svg'
import './Promo.css'

const Promo = ( props ) => {

  return(
    <section className="promo">
      <div className="promo__container">
        <div className="promo__description">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img src={ promo } alt="promo" />
      </div>
      <button className="promo__button-more" onClick={() => props.scroll()}>Узнать больше</button>
    </section>
  )
};

export default Promo;