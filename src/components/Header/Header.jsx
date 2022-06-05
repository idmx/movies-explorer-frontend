import React from "react";
import { useRouteMatch } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Header.css'

const Header = ( props ) => {
  const match = useRouteMatch();
  
  return (
    <header className={`header ${ match.path === '/' && 'header__landing'}`}>
      <Logo />
      { props.children }
    </header>
  )
};

export default Header;
