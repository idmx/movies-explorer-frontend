import React from 'react';
import './SearchForm.css';

const SearchForm = ( props ) => (
    <div className="search-form">
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
        />
        <div className="search-form__icon" />
      </div>
      <div className="search-form__short-container">
        <p className="search-form__search-title">Короткометражки</p>
        <div
          className={`search-form__slider ${props.isShort && 'search-form__slider_on'}`}
          onClick={() => props.setIsShort(( prevState ) => !prevState )}
        />
      </div>
    </div>
);

export default SearchForm;
