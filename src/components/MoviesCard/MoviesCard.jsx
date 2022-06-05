import React from "react";
import './MoviesCard.css';

const MoviesCard = ( props ) => {
  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <p className="movies-card__title">{ props.title }</p>
          <p className="moovies-card__duration">{ props.duration }</p>
        </div>
        <div className={`moovies-card__favourite ${ props.favourite && "favourite" }`} />
      </div>
      <div
        className="moovies-card__image"
        style={{ backgroundImage: `url(${ props.image })`}}
      />
    </div>
  )
};

export default MoviesCard;