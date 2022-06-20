import React, { useEffect, useState } from 'react';
import { fetchAllMovies, fetchGetSavedMovies } from '../../utils/apis';
import { API_MOVIES_URL } from '../../utils/constants/api';
import Preloader from '../Movies/Preloader';
import MoviesCard from '../MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ( props ) => {
  const [ movies, setMovies ] = useState([]);
  const [ favouriteMovies, setFavouriteMovies ] = useState([]);

  const filteredByFavourite = ( films ) => {
    console.log( favouriteMovies[ 0 ].nameRU, films[ 0 ].nameRU );
    return films.map(( film ) => ({
      ...film,
      favourite: favouriteMovies.some(( movie ) => movie.nameRU === film.nameRU ),
      _id: favouriteMovies.some(( movie ) => movie.nameRU === film.nameRU )
        && favouriteMovies.find(( movie ) => movie.nameRU === film.nameRU )._id,
    }));
  };

  useEffect(() => {
    fetchGetSavedMovies()
      .then(( res ) => {
        console.log( res );
        setFavouriteMovies( res );
      });
  }, []);

  useEffect(() => {
    fetchAllMovies()
      .then(( res ) => {
        console.log( res );
        setMovies( filteredByFavourite( res ));
      });
  }, [ favouriteMovies ]);

  // useEffect(() => {
  //   setMovies( props.isShort
  //     ? mock.filter(( movie ) => movie.duration <= 1800000 )
  //     : mock );
  // }, [ props.isShort ]);

  return (
    <>
      { props.isSearch
        ? <Preloader />
        : <div className={`${props.isSaved && 'movies-list__saved'} movies-list`}>
          <div className="movies-list__container">
            {movies.map(( item, index ) => (
              <MoviesCard
                image={`${API_MOVIES_URL}${item.image.url}`}
                cart={item}
                key={item.id}
                isSaved={props.isSaved} />
            ))}
          </div>
          { !props.isSaved && <button className='movies-list__yet'>Еще</button> }
        </div>
      }
    </>
  );
};

export default MoviesCardList;
