import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';
import { validateEmail } from '../../utils/helpers/validate';
import './Login.css';

const Login = ({ handleClick, isLogin }) => {
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();
  const history = useHistory();

  useEffect(() => isLogin && history.push( '/movies' ), [ isLogin ]);

  const handleLogin = ( evt ) => {
    evt.preventDefault();
    handleClick( values.email, values.password );
  };

  return (
    <>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label htmlFor="login__email" className="login__label">E-mail</label>
        <input
          type="email"
          id="login__email"
          className={`login__input ${errors.email && 'login__input-error'}`}
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        { 'email' in values && !validateEmail( values.email ) && <p className='login__error'>{ !values.email ? 'Заполните это поле' : 'Email некорректный' }</p> }
        <label htmlFor="login__password" className="login__label">Пароль</label>
        <input
          type="password"
          id="login__password"
          className={`login__input ${errors.password && 'login__input-error'}`}
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <p className='login__error'>{errors.password}</p>
        <button
          type="submit"
          className={`login__submit ${!isValid && 'disabled'}`}
          onClick={handleLogin}
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <p className="login__not-yet">
        Еще не зарегистрированы? <Link to="sign-up" className="login__signup">Регистрация</Link>
      </p>
    </>
  );
};

export default Login;
