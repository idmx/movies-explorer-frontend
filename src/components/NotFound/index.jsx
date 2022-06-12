import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <button className="not-found__go-back" onClick={() => history.goBack()}>Назад</button>
    </div>
  );
};

export default NotFound;
