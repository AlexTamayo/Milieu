import React, { useState, useContext } from 'react';
import '../styles/SearchBar.scss';
import SearchFilters from './SearchFilters';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { DataContext } from "../context/MainContext";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    state,
    handleOnSearch,
    handleOnHover,
    handleOnSelect,
    handleOnFocus,
    formatResult
  } = useContext(DataContext);

  const { eventCategoryData, businessCategoryData } = state;
  
  const categoryItems = [...eventCategoryData, ...businessCategoryData];

  return (
    <div className="search-complex">
      <SearchFilters />
      <ReactSearchAutocomplete
        items={categoryItems}
        onSearch={(string, results) => handleOnSearch(string, results)}
        onHover={(result) => handleOnHover(result)}
        onSelect={(item) => handleOnSelect(item)}
        onFocus={() => handleOnFocus()}
        autoFocus
        formatResult={(item) => formatResult(item)}
      />
    </div>
  );
}

export default SearchBar;