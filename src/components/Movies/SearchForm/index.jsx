import React from 'react';
import './SearchForm.css';

const SearchForm = ( props ) => {
  const handleSearch = () => {
    props.setIsSearch( true );
    setTimeout(() => props.setIsSearch( false ), 2000 );
  };

  return (
    <div className="search-form">
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
        />
        <button
          className="search-form__icon"
          onClick={handleSearch}
        />
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
};

export default SearchForm;
