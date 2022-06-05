import React from "react";
import './NavTab.css'

const NavTab = () => {
  return(
    <div className='nav__button-group'>
      <button className='nav__button nav__button-signup'>Регистрация</button>
      <button className='nav__button nav__button-signin'>Войти</button>
    </div>
  )
};

export default NavTab;