import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';

const Register = ({ handleClick, isLogin }) => {
  const [ email, setEmail ] = useState( '' );
  const [ name, setName ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const history = useHistory();

  useEffect(() => isLogin && history.push( '/movies' ), [ isLogin ]);

  return (
    <>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label htmlFor="register__name" className="register__label">Имя</label>
        <input
          type="text"
          id="register__name"
          className="register__input"
          value={name}
          onChange={( evt ) => setName( evt.target.value )}
        />
        <label htmlFor="register__email" className="register__label">E-mail</label>
        <input
          type="email"
          id="register__email"
          className="register__input"
          value={email}
          onChange={( evt ) => setEmail( evt.target.value )}
        />
        <label htmlFor="register__password" className="register__label">Пароль</label>
        <input
          type="password"
          id="register__password"
          className="register__input"
          value={password}
          onChange={( evt ) => setPassword( evt.target.value )}
        />
        <button
          type="submit"
          className="register__submit"
          onClick={( evt ) => handleClick( evt, email, password, name )}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__yet">
        Уже зарегистрированы? <Link to="sign-in" className="register__signup">Войти</Link>
      </p>
    </>
  );
};
export default Register;
