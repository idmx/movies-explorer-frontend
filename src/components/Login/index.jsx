import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login = ({ handleClick, isLogin }) => {
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const history = useHistory();

  useEffect(() => isLogin && history.push( '/movies' ), [ isLogin ]);

  return (
    <>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label htmlFor="login__email" className="login__label">E-mail</label>
        <input
          type="email"
          id="login__email"
          className="login__input"
          value={email}
          onChange={( evt ) => setEmail( evt.target.value )}
        />
        <label htmlFor="login__password" className="login__label">Пароль</label>
        <input
          type="password"
          id="login__password"
          className="login__input"
          value={password}
          onChange={( evt ) => setPassword( evt.target.value )}
        />
        <button
          type="submit"
          className="login__submit"
          onClick={( evt ) => handleClick( evt, email, password )}>Войти</button>
      </form>
      <p className="login__not-yet">
        Еще не зарегистрированы? <Link to="sign-up" className="login__signup">Регистрация</Link>
      </p>
    </>
  );
};

export default Login;
