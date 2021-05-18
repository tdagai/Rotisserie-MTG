import React, { useContext } from 'react';
import SearchListItem from './SearchListItem.jsx';
import './SearchList.css';
import { FloatingCardContext } from '../../../../Contexts/Contexts.js';

const SearchList = ({ cardsSearched }) => {
  const { setHoverState } = useContext(FloatingCardContext);

  return (
    <ul id="search-list"
      onMouseOver={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)} >
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
