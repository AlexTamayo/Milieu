import React, { useState, useContext } from 'react';
import '../styles/SearchBar.scss';
import SearchFilters from './SearchFilters';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { DataContext } from "../context/MainContext";

import MagGlass from './SVGs/MagGlass';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (event) => {
  //   event.preventDefault();
    
  //   console.log(`Searching for: ${searchTerm}`);
  // };

  const { state } = useContext(DataContext);
  const { eventCategoryData, businessCategoryData } = state;
  const categoryItems = [...eventCategoryData, ...businessCategoryData];
  
  const {
    // ... other state and functions
    handleOnSearch,
    handleOnHover,
    handleOnSelect,
    handleOnFocus,
    formatResult,
  } = useContext(DataContext);

  console.log(categoryItems);
  //Search Bar Functions.
  const handleSearch = (string, results) => {
    // Call the handleOnSearch function from the hook
    handleOnSearch(string, results);
    // Your additional logic here
  };

  const handleHover = (result) => {
    // Call the handleOnHover function from the hook
    handleOnHover(result);
    // Your additional logic here
  };

  const handleSelect = (item) => {
    // Call the handleOnSelect function from the hook
    handleOnSelect(item);
    // Your additional logic here
  };

  const handleFocus = () => {
    // Call the handleOnFocus function from the hook
    handleOnFocus();
    // Your additional logic here
  };

  const resultFormatter = (item) => {
    // Call the formatResult function from the hook
    return formatResult(item);
  };


  return (
    <div className="search-complex">
      < SearchFilters />
      {/* <div className="search-box">
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
      </div> */}
              < ReactSearchAutocomplete
            items={categoryItems}
            onSearch={handleSearch}
            onHover={handleHover}
            onSelect={handleSelect}
            onFocus={handleFocus}
            autoFocus
            formatResult={resultFormatter}
          />
    </div>
  );
}

export default SearchBar;