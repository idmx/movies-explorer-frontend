import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => (
    <>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label htmlFor="register__name" className="register__label">Имя</label>
        <input type="text" id="register__name" className="register__input"/>
        <label htmlFor="register__email" className="register__label">E-mail</label>
        <input type="email" id="register__email" className="register__input"/>
        <label htmlFor="register__password" className="register__label">Пароль</label>
        <input type="password" id="register__password" className="register__input"/>
        <button type="submit" className="register__submit">Зарегистрироваться</button>
      </form>
      <p className="register__yet">
        Уже зарегистрированы? <Link to="sign-in" className="register__signup">Войти</Link>
      </p>
    </>
);

export default Register;
