import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList.jsx'
import './Search.css';

const Search = ({ addCardToDraft }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsSearched, setCardsSearched] = useState([]);
  const [errored, setErrored] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(true);

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
    <div id='search-area'>
      <form>
        <input
          id='search-bar'
          placeholder="search..."
          onChange={({ target }) => {
            setSearchTerm(target.value);
            setErrored(false);
          }}
          onBlur={(e) => {
            e.preventDefault();
            setDisplaySearch(false);
          }}
          onFocus={() => {
            if (searchTerm) {
              setDisplaySearch(true);
            }
          }}
        >
        </input>
        <button
          id='search-button'
          onClick={(e) => {
            e.preventDefault();
            if (searchTerm) {
              handleSearch();
            } else {
              setDisplaySearch(false);
            }
          }
        }
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