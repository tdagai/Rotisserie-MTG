import React, { useContext } from 'react';
import { SearchContext } from '../../../Contexts/Contexts';

const SearchBar = ({ searchTerm, handleSearch, setDisplaySearch, setSearchTerm, setErrored }) => {
  const { currentTurn } = useContext(SearchContext);

  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      if (searchTerm) {
        handleSearch();
      } else {
        setDisplaySearch(false);
      }
    }}
  >
    <input
      id='search-bar'
      type='search'
      aria-label='Search'
      placeholder={`Add cards to ${currentTurn ? 'draft' : 'stash'}`}
      spellCheck='false'
      autoComplete='false'
      autoCapitalize='none'
      autoCorrect='none'
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
  </form>
  )
}

export default SearchBar;