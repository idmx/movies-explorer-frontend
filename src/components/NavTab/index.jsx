import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => (
    <div className='nav__button-group'>
      <Link to="/sign-up" className='nav__button nav__button-signup'>Регистрация</Link>
      <Link to="/sign-in" className='nav__button nav__button-signin'>Войти</Link>
    </div>
);

export default NavTab;
