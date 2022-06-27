import React, { useEffect, useState } from 'react';
import './SearchForm.css';

const SearchForm = ( props ) => {
  const [ text, setText ] = useState( '' );

  const handleClickSearch = () => {
    props.setSearchText( text );
    !props.isSaved && localStorage.setItem( 'search', text );
    props.handleSearch();
  };

  const handleClickShort = () => {
    props.isSaved
      ? localStorage.setItem( 'saved-short', !props.isShort )
      : localStorage.setItem( 'short', !props.isShort );
    props.setIsShort( !props.isShort );
  };

  useEffect(() => {
    const searchText = props.isSaved ? '' : localStorage.getItem( 'search' );
    const short = props.isSaved ? localStorage.getItem( 'saved-short' ) : localStorage.getItem( 'short' );
    setText( searchText );
    props.setSearchText( searchText );
    props.setIsShort( short === 'true' );
  }, [ props.isSaved ]);

  return (
    <div className="search-form">
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={text}
          onChange={( evt ) => setText( evt.target.value )}
        />
        <button
          className={`search-form__icon ${!props.searchText && 'search-form__disabled'}`}
          onClick={handleClickSearch}
          disabled={ !text }
        />
      </div>
      <div className="search-form__short-container">
        <p className="search-form__search-title">Короткометражки</p>
        <div
          className={`search-form__slider ${props.isShort && 'search-form__slider_on'}`}
          onClick={handleClickShort}
        />
      </div>
    </div>
  );
};

export default SearchForm;
