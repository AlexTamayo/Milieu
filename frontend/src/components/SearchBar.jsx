import React, { useState } from 'react';
import '../styles/SearchBar.scss';
import SearchFilters from './SearchFilters';

import MagGlass from './SVGs/MagGlass';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    
    
    console.log(`Searching for: ${searchTerm}`);
  };


  return (
    <div className="search-complex">
      < SearchFilters />
      <div className="search-box">
        <form  className="search-box__form" onSubmit={handleSearch}>
          <input className="search-box__input"
                type="search"
                name="query"
                placeholder="Search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
          />
        <button className="search-box__button" type="submit"> < MagGlass /> </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;