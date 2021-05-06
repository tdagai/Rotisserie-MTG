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
    onReset={(e) => {
      e.preventDefault();
      if (searchTerm) {
        setSearchTerm('');
        const searchBar = document.querySelector('#search-bar');
        searchBar.value = '';
      }
    }}
  >
    <input
      id='search-bar'
      type='text'
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
    { searchTerm && <button aria-label='clear search bar button' id='clear-search-bar-button' type="reset" >X</button> }
  </form>
  )
}

export default SearchBar;