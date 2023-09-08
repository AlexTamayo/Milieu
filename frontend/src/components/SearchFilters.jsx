import React from 'react';
import '../styles/SearchFilters.scss';
import { useContext } from 'react';
import { DataContext } from '../context/dataProviderContext';

function SearchFilters() {
  const { selectedFilter, setSelectedFilter } = useContext(DataContext);

  const handleButtonClick = (buttonType) => {
    if (selectedFilter === buttonType) {
      setSelectedFilter('');
    } else {
      setSelectedFilter(buttonType);
    }
  };

  return (
    <div className="search-filters">
      <button
        className={`filter filter--businesses ${selectedFilter && selectedFilter !== 'businesses' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('businesses')}
      >
        Businesses
      </button>
      <button
        className={`filter filter--events ${selectedFilter && selectedFilter !== 'events' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('events')}
      >
        Events
      </button>
      {/* <button
        className={`filter filter--test ${selectedFilter && selectedFilter !== 'test' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('test')}
      >
        Test 1
      </button>
      <button
        className={`filter filter--test2 ${selectedFilter && selectedFilter !== 'test2' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('test2')}
      >
        Test 2
      </button> */}
    </div>
  );
}

export default SearchFilters;
