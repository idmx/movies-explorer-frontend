import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => (
    <>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label htmlFor="login__email" className="login__label">E-mail</label>
        <input type="email" id="login__email" className="login__input"/>
        <label htmlFor="login__password" className="login__label">Пароль</label>
        <input type="password" id="login__password" className="login__input"/>
        <button type="submit" className="login__submit">Войти</button>
      </form>
      <p className="login__not-yet">
        Еще не зарегистрированы? <Link to="sign-up" className="login__signup">Регистрация</Link>
      </p>
    </>
);

export default Login;
