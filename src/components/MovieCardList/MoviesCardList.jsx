import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'

const MoviesCardList = () => {
  const mock = Array(3).fill([{
    title: "33 слова о дизайне",
    duration: "1ч 47м",
    favourite: true,
    image: "https://klike.net/uploads/posts/2021-01/1611131113_2.jpg"
  },
  {
    title: "33 слова о дизайне",
    duration: "1ч 47м",
    favourite: false,
    image: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"
  }]).flat(2)

  return (
    <div className="movies-list">
      {mock.map(( item, index ) => (
        <MoviesCard
          title={item.title}
          duration={item.duration}
          favourite={item.favourite}
          image={item.image}
          //Временный key для моковых данных
          key={item.title + index}
        />
      ))
      }
    </div>
  )
};

export default MoviesCardList;