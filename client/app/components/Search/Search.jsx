import React, { useState } from 'react';
import axios from 'axios';
import SearchList from './SearchList.jsx'
import './Search.css';

const Search = ({ addCardToDraft }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsSearched, setCardsSearched] = useState('');

  const handleSearch = () => {
    axios.get(`/search?term=${searchTerm}`)
      .then(({ data }) => {
        setCardsSearched(data);
      })
  };

  return (
    <div >
      <input id='search-bar' placeholder="search..." onChange={({ target }) => setSearchTerm(target.value)} ></input>
      <button onClick={() => handleSearch()} >search</button>
      <SearchList
        cardsSearched={cardsSearched}
        addCardToDraft={addCardToDraft}
      />
    </div>
  );
};

export default Search;