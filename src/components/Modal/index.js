import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ( props ) => {
  const closeModal = () => {
    props.setTextModal( false );
  };
  if ( props.textModal ) {
    return createPortal(
      <div className="modal">
        <div className="modal__container">
          <h3 className="modal__title">{ props.success ? 'Успешно' : 'Ошибка' }</h3>
          <p className="modal__description">{props.textModal}</p>
          <button onClick={closeModal} className="modal__button">Закрыть</button>
        </div>
      </div>,
      document.body,
    );
  }
  return null;
};

export default Modal;
