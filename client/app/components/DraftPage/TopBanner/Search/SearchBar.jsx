import React, { useContext } from 'react';
import { SearchContext } from '../../../../Contexts/Contexts';

const SearchBar = ({ searchTerm, handleSearch, setDisplaySearch, setSearchTerm, setErrored }) => {
  const { currentTurn } = useContext(SearchContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      handleSearch();
    } else {
      setDisplaySearch(false);
    }
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    setErrored(false);
    if (searchTerm) {
      setSearchTerm('');
      const searchBar = document.querySelector('#search-bar');
      searchBar.value = '';
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setErrored(false);
  }

  const handleInputBlur = (e) => {
    e.preventDefault();
    setDisplaySearch(false);
  }

  const handleInputFocus = () => {
    if (searchTerm) {
      setDisplaySearch(true);
    }
  }

  return (
    <form
    onSubmit={handleFormSubmit}
    onReset={handleFormReset} >
    <input
      id='search-bar'
      type='text'
      aria-label='Search'
      placeholder={`Add cards to ${currentTurn ? 'draft' : 'stash'}`}
      spellCheck='false'
      autoComplete='false'
      autoCapitalize='none'
      autoCorrect='none'
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      onFocus={handleInputFocus} >
    </input>
    { searchTerm && <button aria-label='clear search bar button' id='clear-search-bar-button' type="reset" >X</button> }
  </form>
  )
}

export default SearchBar;