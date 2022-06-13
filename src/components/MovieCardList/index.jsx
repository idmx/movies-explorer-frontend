import React, { useEffect, useState } from 'react';
import Preloader from '../Movies/Preloader';
import MoviesCard from '../MoviesCard';
import './MoviesCardList.css';

const mock = Array( 3 ).fill([{
  title: '33 слова о дизайне',
  duration: 5040000,
  favourite: true,
  image: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg',
},
{
  title: '33 слова о дизайне',
  duration: 1200000,
  favourite: false,
  image: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg',
}]).flat( 2 );

const MoviesCardList = ( props ) => {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    setMovies( props.isShort
      ? mock.filter(( movie ) => movie.duration <= 1800000 )
      : mock );
  }, [ props.isShort ]);

  return (
    <>
      { props.isSearch
        ? <Preloader />
        : <div className="movies-list">
          <div className="movies-list__container">
            {movies.map(( item, index ) => (
              <MoviesCard
                title={item.title}
                duration={item.duration}
                favourite={item.favourite}
                image={item.image}
                // Временный key для моковых данных
                key={item.title + index}
                isSaved={props.isSaved} />
            ))}
          </div>
          <button className='movies-list__yet'>Еще</button>
        </div>
      }
    </>
  );
};

export default MoviesCardList;
