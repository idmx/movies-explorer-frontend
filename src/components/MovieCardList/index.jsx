import React, { useEffect, useState } from 'react';
import { fetchAllMovies, fetchGetSavedMovies } from '../../utils/apis';
import { API_MOVIES_URL } from '../../utils/constants/api';
import Preloader from '../Movies/Preloader';
import MoviesCard from '../MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ( props ) => {
  const [ movies, setMovies ] = useState([]);
  const [ favouriteMovies, setFavouriteMovies ] = useState([]);
  const [ isFetching, setIsFetching ] = useState( false );
  const [ pages, setPages ] = useState( 1 );
  const [ isEndPages, setIsEndPages ] = useState( false );

  const filteredByFavourite = ( films ) => films.map(( film ) => ({
    ...film,
    favourite: favouriteMovies.some(( movie ) => movie.nameRU === film.nameRU ),
    _id: favouriteMovies.some(( movie ) => movie.nameRU === film.nameRU )
        && favouriteMovies.find(( movie ) => movie.nameRU === film.nameRU )._id,
  }));

  const addFavourite = ( film ) => {
    setFavouriteMovies([ ...favouriteMovies, film ]);
  };

  const removeFavourite = ( film ) => {
    setFavouriteMovies( favouriteMovies.filter(( movie ) => movie.nameRU !== film.nameRU ));
  };

  const filteredByPages = ( allMovies ) => {
    pages >= Math.ceil( allMovies.length / 10 ) ? setIsEndPages( true ) : setIsEndPages( false );
    return allMovies.slice( 0, pages * 10 );
  };

  const filteredBySearch = ( allMovies ) => {
    const films = props.isSearch
      ? allMovies.filter(( movie ) => movie.nameRU.toLowerCase()
        .includes( props.searchText.toLowerCase()))
      : allMovies;
    props.setIsSearch( false );
    return films;
  };

  const filteredByShort = ( allMovies ) => ( props.isShort
    ? allMovies.filter(( movie ) => movie.duration <= 60 )
    : allMovies );

  const setMoviesIsSave = ( allMovies ) => {
    let films = filteredBySearch( allMovies );
    films = filteredByShort( films );
    films = filteredByFavourite( films );
    films = props.isSaved ? films.filter(( movie ) => movie.favourite ) : films;
    setMovies( filteredByPages( films ));
  };

  const getMovies = () => {
    const allMovies = JSON.parse( localStorage.getItem( 'movies' ));
    if ( allMovies ) {
      setMoviesIsSave( allMovies );
    } else {
      setIsFetching( true );
      fetchAllMovies()
        .then(( res ) => {
          localStorage.setItem( 'movies', JSON.stringify( res ));
          setMoviesIsSave( res );
          setIsFetching( false );
        });
    }
  };

  const incPages = () => {
    setPages(( prev ) => prev + 1 );
  };

  useEffect(() => {
    setIsFetching( true );
    fetchGetSavedMovies()
      .then(( res ) => {
        setFavouriteMovies( res );
        setIsFetching( false );
      });
  }, []);

  useEffect(() => {
    getMovies();
  }, [ favouriteMovies, props.isSaved, pages, props.isShort ]);

  useEffect(() => {
    props.isSearch && getMovies();
  }, [ props.isSearch ]);

  useEffect(() => setPages( 1 ), [ props.isSaved ]);

  return (
    <>
      { isFetching
        ? <Preloader />
        : <div className={`${props.isSaved && 'movies-list__saved'} movies-list`}>
          <div className="movies-list__container">
            {
             movies.map(( item ) => (
                <MoviesCard
                  image={`${API_MOVIES_URL}${item.image.url}`}
                  cart={item}
                  key={item.id}
                  isSaved={props.isSaved}
                  addFavourite={addFavourite}
                  removeFavourite={removeFavourite}
                />
             ))}
          </div>
          { !isEndPages
              && <button className='movies-list__yet' onClick={incPages}>Еще</button>
          }
        </div>
      }
    </>
  );
};

export default MoviesCardList;
