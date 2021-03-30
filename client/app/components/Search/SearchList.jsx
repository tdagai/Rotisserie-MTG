import React from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';

const SearchList = ({ cardsSearched }) => {
  if (cardsSearched.length === 0) {
    return (<div id="empty-search-list"></div>)
  }
  return (
    <div id="search-list" >
      {cardsSearched.map(({ name, small }) => (
        <SearchListItem key={name} cardName={name} cardImage={small} />
      ))}
    </div>
  )
};

export default SearchList;
