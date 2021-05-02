import React from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';

const SearchList = ({ cardsSearched, displaySearch, }) => {
  if (cardsSearched.length === 0 || !displaySearch) {
    return (<></>);
  }
  return (
    <ul id="search-list" >
      {cardsSearched.map((card) => (
        <SearchListItem
          key={card.name}
          card={card}
        />
      ))}
    </ul>
  )
};

export default SearchList;
