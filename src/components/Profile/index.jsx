import React, { useState } from 'react';
import { fetchSignOut } from '../../utils/apis';
import './Profile.css';

const userName = 'Вячеслав';
const userEmail = '123@mail.ru';

const Profile = ({ handleLogout }) => {
  const [ name, setName ] = useState( userName );
  const [ email, setEmail ] = useState( userEmail );
  const [ disabled, setDisabled ] = useState( true );

  return (
    <div className='profile'>
      <h2 className='profile__say-hi'>Привет, {userName}</h2>
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
      <button className='profile__button profile__edit'>Редактировать</button>
      <button
        className='profile__button profile__signout'
        onClick={handleLogout}
      >Выйти из аккаунта</button>
    </div>
  );
};

export default Profile;
