import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';
import NavTab from '../Main/NavTab';
import Navigation from '../Navigation';
import { ROUTES } from '../../utils/constants/routes';
import './Header.css';

const Children = ({ location }) => {
  if ( ROUTES.ROUTE_WITH_NAV.includes( location.pathname )) {
    return <Navigation />;
  } if ( location.pathname === ROUTES.ROOT_ROUTE ) {
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
        ${location.pathname === ROUTES.ROOT_ROUTE && 'header__landing'} 
        ${ROUTES.ROUTE_WITHOUTE_NAV.includes( location.pathname ) && 'header__sign'}`
        }>
        <Logo />
        <Children location={ location }/>
      </header>
  );
};

export default Header;
