import React from 'react';
import { createPortal } from 'react-dom';
import './ErrorModal.css';

const ErrorModal = ( props ) => {
  const closeModal = () => {
    props.setError( false );
  };
  console.log( props.error );
  if ( props.error ) {
    return createPortal(
      <div className="error">
        <div className="error__container">
          <h3 className="error__title">Ошибка</h3>
          <p className="error__description">{props.error}</p>
          <button onClick={closeModal} className="error__button">Закрыть</button>
        </div>
      </div>,
      document.body,
    );
  }
  return null;
};

export default ErrorModal;
