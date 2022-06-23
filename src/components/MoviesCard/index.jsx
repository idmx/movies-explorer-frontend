import React from 'react';
import { fetchRemoveSavedMovie, fetchSetSavedMovie } from '../../utils/apis';
import './MoviesCard.css';

const MoviesCard = ( props ) => {
  const convertTime = ( time ) => {
    const hours = parseInt( time / 60 );
    const minutes = parseInt(( time / ( hours || 1 )) % 60 );
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
    thumbnail: props.cart.thumbnail || props.image,
    nameRU: props.cart.nameRU,
    nameEN: props.cart.nameEN,
    movieId: +props.cart.id,
  });

  const removeFavourite = () => {
    fetchRemoveSavedMovie( props.cart._id )
      .then(( res ) => props.removeFavourite( res ))
      .catch(( err ) => props.errorHandler( err ));
  };

  const handleFavourite = () => {
    props.cart.favourite
      ? removeFavourite()
      : fetchSetSavedMovie( getBodySavedMovie())
        .then(( res ) => props.addFavourite( res ))
        .catch(( err ) => props.errorHandler( err ));
  };

  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <a
            className="movies-card__title"
            target="_blank"
            rel="noreferrer"
            href={props.cart.trailerLink}
          >
            { props.cart.nameRU }
          </a>
          <p className="moovies-card__duration">{ convertTime( props.cart.duration ) }</p>
        </div>
        { props.isSaved
          ? <button className="moovies-card__remove" onClick={removeFavourite}/>
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
