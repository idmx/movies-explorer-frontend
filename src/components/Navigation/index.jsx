import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [ isOpen, setIsOpen ] = useState( false );

  const handleOpen = () => {
    setIsOpen(( prev ) => !prev );
  };

  return (
    <>
      { isOpen && <div className='overlay' /> }
      <nav className={`menu ${isOpen && 'open'}`}>
        { isOpen && <button className='menu__close-button' onClick={handleOpen}/> }
        <div className="menu__films-container">
          <Link
            to="/"
            className={
              `menu__link hidden
              ${isOpen && 'open'}
              ${location.pathname === '/' && 'menu__selected'}
            `}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={
              `menu__link
              ${location.pathname === '/movies' && 'menu__selected'}`
            }
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={
              `menu__link
              ${location.pathname === '/saved-movies' && 'menu__selected'}`
            }
          >
            Сохраненные фильмы
          </Link>
        </div>
        <Link
          to="/profile"
          className={
            `menu__link
            account
            ${location.pathname === '/profile' && 'menu__selected'}`
          }
        >
          Аккаунт
        </Link>
      </nav>
      <button className='menu__burger-button' onClick={handleOpen}/>
    </>
  );
};

export default Navigation;
