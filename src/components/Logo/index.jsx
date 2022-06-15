import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../images/logo.svg';
import './Logo.css';

const Logo = () => {
  const history = useHistory();

  return (
    <div className="logo">
      <img
        src={logo}
        alt="logo"
        onClick={() => history.push( '/' )}
      />
    </div>
  );
};

export default Logo;
