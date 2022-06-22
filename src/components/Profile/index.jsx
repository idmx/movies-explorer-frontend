import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Profile.css';

const Profile = ({ handleLogout }) => {
  const user = useContext( UserContext );
  const [ name, setName ] = useState( user.name );
  const [ email, setEmail ] = useState( user.email );
  const [ disabled, setDisabled ] = useState( true );

  useEffect(() => {
    setName( user.name );
    setEmail( user.email );
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
      <button className='profile__button profile__edit'>Редактировать</button>
      <button
        className='profile__button profile__signout'
        onClick={handleLogout}
      >Выйти из аккаунта</button>
    </div>
  );
};

export default Profile;
