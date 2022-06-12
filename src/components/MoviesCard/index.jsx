import React from 'react';
import './MoviesCard.css';

const MoviesCard = ( props ) => {
  const convertTime = ( time ) => {
    const minutes = parseInt(( time / ( 1000 * 60 )) % 60 );
    const hours = parseInt(( time / ( 1000 * 60 * 60 )) % 24 );
    return `${hours}ч ${minutes}м`;
  };

  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <p className="movies-card__title">{ props.title }</p>
          <p className="moovies-card__duration">{ convertTime( props.duration ) }</p>
        </div>
        { props.isSaved
          ? <div className="moovies-card__remove" />
          : <div className={`moovies-card__favourite ${props.favourite && 'favourite'}`} />
        }
      </div>
      <div
        className="moovies-card__image"
        style={{ backgroundImage: `url(${props.image})` }}
      />
    </div>
  );
};

export default MoviesCard;
