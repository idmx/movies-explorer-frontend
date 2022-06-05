import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {


  return (
    <nav className="menu">
      <div className="menu__films-container">
        <Link
          to="/movies"
          className="menu__link"
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="menu__link"
        >
          Сохраненные фильмы
        </Link>
      </div>
      <Link
        to="/profile"
        className="menu__link profile"
      >
        Аккаунт
      </Link>
    </nav>
  )
};

export default Navigation;