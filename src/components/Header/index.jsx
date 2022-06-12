import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';
import NavTab from '../Main/NavTab';
import Navigation from '../Navigation';
import './Header.css';

const Children = ({ location }) => {
  if (
    location.pathname === '/movies'
    || location.pathname === '/saved-movies'
    || location.pathname === '/profile'
  ) {
    return <Navigation />;
  } if ( location.pathname === '/' ) {
    return <NavTab />;
  }
  return null;
};

const Header = () => {
  const location = useLocation();

  if ( location.pathname === '/404' ) {
    return null;
  }
  return (
      <header className={
        `header 
        ${location.pathname === '/' && 'header__landing'} 
        ${( location.pathname === '/sign-in' || location.pathname === '/sign-up' ) && 'header__sign'}`
        }>
        <Logo />
        <Children location={ location }/>
      </header>
  );
};

export default Header;
