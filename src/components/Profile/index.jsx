import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Profile.css';

const Profile = ({ handleLogout, handleUpdateUser }) => {
  const user = useContext( UserContext );
  const [ name, setName ] = useState( user.name );
  const [ email, setEmail ] = useState( user.email );
  const [ initData, setInitData ] = useState({ name: user.name, email: user.email });
  const [ disabled, setDisabled ] = useState( true );

  const handleEdit = () => {
    setDisabled( false );
  };

  const handleSave = () => {
    setDisabled( true );
    ( initData.name !== name || initData.email !== email ) && handleUpdateUser( name, email );
  };

  const disabledSave = () => !( name && email );

  useEffect(() => {
    setName( user.name );
    setEmail( user.email );
    setInitData({ name: user.name, email: user.email });
  }, [ user ]);

  return (
    <div className='profile'>
      <h2 className='profile__say-hi'>Привет, {user.name}</h2>
      <div className='profile__container'>
        <label htmlFor="profile__name" className='profile__text'>Имя</label>
        <input
          id="profile__name"
          type="text"
          className='profile__text profile__input'
          value={name}
          onChange={( event ) => setName( event.target.value )}
          disabled={disabled}
        />
      </div>
      <div className='profile__container'>
        <label htmlFor="profile__email" className='profile__text'>E-mail</label>
        <input
          id="profile__email"
          type="email"
          className='profile__text profile__input'
          value={email}
          onChange={( event ) => setEmail( event.target.value )}
          disabled={disabled}
        />
      </div>
      { disabled
        ? <>
        <button
          className='profile__button profile__edit'
          onClick={handleEdit}
        >
          Редактировать
        </button>
        <button
          className='profile__button profile__signout'
          onClick={handleLogout}
        >Выйти из аккаунта</button>
        </>
        : <>
            {disabledSave() && <p className='profile__error'>Поле имя и email обязательные</p>}
            <button
                className={`profile__edit-button ${disabledSave() && 'disabled'}`}
                onClick={handleSave}
                disabled={disabledSave()}
              >
                Сохранить
              </button>
          </>
      }
    </div>
  );
};

export default Profile;
