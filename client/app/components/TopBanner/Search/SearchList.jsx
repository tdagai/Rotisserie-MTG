import React from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';

const SearchList = ({ cardsSearched, addCardToDraft, displaySearch, currentTurn, addCardToStash }) => {
  if (cardsSearched.length === 0 || !displaySearch) {
    return (<div id="empty-search-list"></div>)
  }
  return (
    <div id="search-list" >
      {cardsSearched.map((card) => (
        <SearchListItem
          key={card.name}
          card={card}
          addCardToDraft={addCardToDraft}
          currentTurn={currentTurn}
          addCardToStash={addCardToStash}
        />
      ))}
    </div>
  )
};

export default SearchList;
