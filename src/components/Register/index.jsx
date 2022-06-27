import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';
import { validateEmail } from '../../utils/helpers/validate';
import './Register.css';

const Register = ({ handleClick, isLogin }) => {
  const history = useHistory();
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  const handleRegistrer = ( evt ) => {
    evt.preventDefault();
    handleClick( values.email, values.password, values.name );
  };

  const nameValidation = ( evt ) => {
    !evt.key.match( /[\s\-а-яА-Яa-zA-Z]/g ) && evt.preventDefault();
  };

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
          name="name"
          value={values.name}
          onChange={handleChange}
          onKeyDown={nameValidation}
          required
        />
        <label htmlFor="register__email" className="register__label">E-mail</label>
        <p className='register__error'>{errors.name}</p>
        <input
          type="email"
          id="register__email"
          className="register__input"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        { 'email' in values && !validateEmail( values.email ) && <p className='register__error'>{ !values.email ? 'Заполните это поле' : 'Email некорректный' }</p> }
        <label htmlFor="register__password" className="register__label">Пароль</label>
        <input
          type="password"
          id="register__password"
          className="register__input"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <p className='register__error'>{errors.password}</p>
        <button
          type="submit"
          className={`register__submit ${!isValid && 'disabled'}`}
          onClick={handleRegistrer}
          disabled={!isValid}
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
