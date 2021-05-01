import React from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';

const SearchList = ({ cardsSearched, displaySearch, currentTurn }) => {
  if (cardsSearched.length === 0 || !displaySearch) {
    return (<></>);
  }
  return (
    <ul id="search-list" >
      {cardsSearched.map((card) => (
        <SearchListItem
          key={card.name}
          card={card}
          currentTurn={currentTurn}
        />
      ))}
    </ul>
  )
};

export default SearchList;
