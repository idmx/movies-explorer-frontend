import React, { useEffect, useState, useContext } from 'react';
import { fetchAllMovies, fetchGetSavedMovies } from '../../utils/apis';
import { API_MOVIES_URL } from '../../utils/constants/api';
import Preloader from '../Movies/Preloader';
import MoviesCard from '../MoviesCard';
import { ModalContext } from '../../contexts/ModalContext';
import './MoviesCardList.css';

const MoviesCardList = ( props ) => {
  const [ movies, setMovies ] = useState([]);
  const [ isFetching, setIsFetching ] = useState( false );
  const [ isEndPages, setIsEndPages ] = useState( false );
  const [ allMovies, setAllMovies ] = useState([]);
  const [ favouriteMovies, setFavouriteMovies ] = useState([]);
  const [ pages, setPages ] = useState( 0 );
  const [ moviesInPage, setMoviesInPage ] = useState([]);
  const [ hasMovies, setHasMovies ] = useState( false );
  const [ isFirstSearch, setIsFirstSearch ] = useState( true );

  const { errorHandler } = useContext( ModalContext );

  const addFavourite = ( film ) => {
    setFavouriteMovies([ ...favouriteMovies, film ]);
  };

  const removeFavourite = ( film ) => {
    setFavouriteMovies( favouriteMovies.filter(( movie ) => movie.nameRU !== film.nameRU ));
  };

  const getMovies = () => {
    const allLocalMovies = JSON.parse( localStorage.getItem( 'movies' ));
    if ( allLocalMovies ) {
      setAllMovies( allLocalMovies );
    } else {
      setIsFetching( true );
      fetchAllMovies()
        .then(( res ) => {
          localStorage.setItem( 'movies', JSON.stringify( res ));
          setAllMovies( res );
          setIsFetching( false );
        })
        .catch(( err ) => errorHandler( err ));
    }
  };

  const incPages = () => {
    setPages(( prev ) => prev + 1 );
  };

  function filteredByPages( page, cartInRow ) {
    ( page * cartInRow ) >= Math.ceil( movies.length )
      ? setIsEndPages( true )
      : setIsEndPages( false );
    return movies.slice( 0, page * cartInRow );
  }

  function resizeWindow() {
    if ( !props.isSaved ) {
      const width = window.innerWidth;
      let newMovies = [];
      if ( width >= 768 ) {
        newMovies = filteredByPages( pages + 4, 3 );
        ( moviesInPage.length !== newMovies ) && setMoviesInPage( newMovies );
      } else if ( width >= 480 ) {
        newMovies = filteredByPages( pages + 4, 2 );
        ( moviesInPage.length !== newMovies ) && setMoviesInPage( newMovies );
      } else {
        newMovies = filteredByPages( pages + 5, 1 );
        ( moviesInPage.length !== newMovies ) && setMoviesInPage( newMovies );
      }
    }
  }

  const filteredByShort = ( allFilms ) => {
    const films = allFilms.filter(( movie ) => movie.duration <= 60 );
    setMovies( films );
    return films;
  };

  const filteredBySearch = ( allFilms ) => {
    setIsFirstSearch( false );
    const films = allFilms.filter(( movie ) => movie.nameRU.toLowerCase()
      .includes( props.searchText.toLowerCase()));
    setHasMovies( !!films.length );
    props.setIsSearch( false );
    setMovies( films );
    return films;
  };

  const filteredByFavourite = ( films ) => films.map(( film ) => {
    const filteredMovie = favouriteMovies.some(( movie ) => movie.nameRU === film.nameRU );
    return ({
      ...film,
      favourite: filteredMovie,
      _id: filteredMovie
          && favouriteMovies.find(( movie ) => movie.nameRU === film.nameRU )._id,
    });
  });

  const filteredBySaved = ( allFilms ) => {
    const films = props.isSaved ? allFilms.filter(( movie ) => movie.favourite ) : allFilms;
    setMovies( films );
    return films;
  };

  const getFilteredMovies = async () => {
    !allMovies.length && getMovies();
    let allFilms = [];
    if ( props.searchText || props.isSaved ) {
      allFilms = filteredBySearch( allMovies );
    }
    if ( props.isShort ) {
      allFilms = filteredByShort( allFilms );
    }
    allFilms = filteredBySaved( filteredByFavourite( allFilms ));
    setMovies( allFilms );
    props.isSaved && setMoviesInPage( allFilms );
    resizeWindow();
  };

  useEffect(() => {
    setIsFetching( true );
    fetchGetSavedMovies()
      .then(( res ) => {
        const id = localStorage.getItem( 'id' );
        setFavouriteMovies( res.filter(( movie ) => movie.owner === id ));
        setIsFetching( false );
      })
      .catch(( err ) => errorHandler( err ));
  }, []);

  useEffect(() => {
    getFilteredMovies();
  }, [ allMovies, favouriteMovies, props.isShort, props.isSaved, props.searchText ]);

  useEffect(() => {
    props.isSearch && getFilteredMovies();
  }, [ props.isSearch ]);

  useEffect(() => {
    window.addEventListener( 'resize', resizeWindow );
    return () => window.removeEventListener( 'resize', resizeWindow );
  }, [ movies, pages ]);

  useEffect(() => resizeWindow(), [ movies, pages ]);

  return (
    <>
      { isFetching
        ? <Preloader />
        : <div className={`${props.isSaved && 'movies-list__saved'} movies-list`}>
          <div className="movies-list__container">
            {
             hasMovies
               ? moviesInPage.map(( item ) => (
                <MoviesCard
                  image={`${API_MOVIES_URL}${item.image.url}`}
                  cart={item}
                  key={item.id}
                  isSaved={props.isSaved}
                  addFavourite={addFavourite}
                  removeFavourite={removeFavourite}
                  errorHandler={errorHandler}
                />
               ))
               : !isFirstSearch && <p className="movies-list__not-found">Результаты не найдены</p>
            }
          </div>
          { !isEndPages && !props.isSaved
              && <button className='movies-list__yet' onClick={incPages}>Еще</button>
          }
        </div>
      }
    </>
  );
};

export default MoviesCardList;
