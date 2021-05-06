import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList.jsx'
import SearchBar from './SearchBar.jsx';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsSearched, setCardsSearched] = useState([]);
  const [errored, setErrored] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(true);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setDisplaySearch(false);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    axios.get(`/search?term=${searchTerm}`)
      .then(({ data }) => {
        setCardsSearched(data);
        setErrored(false);
        setDisplaySearch(true);
      })
      .catch(() => {
        setErrored(true);
        setCardsSearched([]);
      });
  };

  return (
    <div
      id={`search-area${focused ? '-focused' : ''}`}
      className={`${displaySearch ? 'show-results' : 'hide-results'}`}
      onFocus={() => setFocused(true)}
      onBlur={(e) => { e.preventDefault(); setFocused(false) }} >
      <span id='input-prepend' ><i className="fas fa-search"></i></span>
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setDisplaySearch={setDisplaySearch}
        setSearchTerm={setSearchTerm}
        setErrored={setErrored} />
      {
    errored
      ? <div id='search-error' >{`No cards found for the term ${searchTerm}`}</div>
      : displaySearch && <SearchList cardsSearched={cardsSearched} />
  }
    </div >
  );
};

export default Search;