import React, { useState } from 'react';
import axios from 'axios';
import SearchList from './SearchList.jsx'
import './Search.css';

const Search = ({ addCardToDraft }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsSearched, setCardsSearched] = useState([]);
  const [errored, setErrored] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(true);

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
    <div id='search-area'>
      <form>
        <input
          id='search-bar'
          placeholder="search..."
          onChange={({ target }) => {
            setSearchTerm(target.value);
            setErrored(false);
          }} >
        </input>
        <button
          id='search-button'
          onClick={(e) => { e.preventDefault(); handleSearch(); }}
        >
          <i className="fas fa-search" />
        </button>
      </form>
      {errored
        ? <div id='search-error' >{`No cards found for the term ${searchTerm}`}</div>
        : <SearchList
          cardsSearched={cardsSearched}
          addCardToDraft={addCardToDraft}
          displaySearch={displaySearch}
          setDisplaySearch={setDisplaySearch}
        />
      }
    </div>
  );
};

export default Search;