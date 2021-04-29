import React from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';

const SearchList = ({ cardsSearched, addCardToDraft, displaySearch, setDisplaySearch, currentTurn }) => {
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
          setDisplaySearch={setDisplaySearch}
          currentTurn={currentTurn}
        />
      ))}
    </div>
  )
};

export default SearchList;
