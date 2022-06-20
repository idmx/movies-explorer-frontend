import React from 'react';
import { fetchRemoveSavedMovie, fetchSetSavedMovie } from '../../utils/apis';
import './MoviesCard.css';

const MoviesCard = ( props ) => {
  const convertTime = ( time ) => {
    const hours = parseInt( time / 60 );
    const minutes = parseInt( time / hours % 60 );
    return `${hours}ч ${minutes}м`;
  };

  const getBodySavedMovie = () => ({
    country: props.cart.country,
    director: props.cart.director,
    duration: props.cart.duration,
    year: props.cart.year,
    description: props.cart.description,
    image: props.image,
    trailerLink: props.cart.trailerLink,
    thumbnail: props.image,
    movieId: props.cart.movieId,
    nameRU: props.cart.nameRU,
    nameEN: props.cart.nameEN,
    movieId: +props.cart.id,
  });

  const handleFavourite = () => {
    props.cart.favourite
      ? fetchRemoveSavedMovie( props.cart._id ).then(( res ) => console.log( res ))
      : fetchSetSavedMovie( getBodySavedMovie()).then(( res ) => console.log( res ));
  };

  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <p className="movies-card__title">{ props.cart.nameRU }</p>
          <p className="moovies-card__duration">{ convertTime( props.cart.duration ) }</p>
        </div>
        { props.isSaved
          ? <button className="moovies-card__remove" />
          : <button
              className={`moovies-card__favourite ${!props.cart.favourite && 'favourite-off'}`}
              onClick={handleFavourite}
            />
        }
      </div>
      <img
        className="moovies-card__image"
        src={ props.image }
        alt={ props.title }
      />
    </div>
  );
};

export default MoviesCard;
