import React from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';

const SearchList = ({ cardsSearched }) => {
  return (
    <ul id="search-list" >
      {cardsSearched.map((card) => (
        <SearchListItem
          key={card.ff.name}
          card={card}
        />
      ))}
    </ul>
  )
};

export default SearchList;
