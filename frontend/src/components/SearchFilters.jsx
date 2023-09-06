import React, { useState } from 'react';
import '../styles/SearchFilters.scss';

function SearchFilters() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonType) => {
    if (selectedButton === buttonType) {
      setSelectedButton('');
    } else {
      setSelectedButton(buttonType);
    }
  };

  return (
    <div className="search-filters">
      <button 
        className={`filter filter--businesses ${selectedButton && selectedButton !== 'businesses' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('businesses')}
      >
        Businesses
      </button>
      <button 
        className={`filter filter--events ${selectedButton && selectedButton !== 'events' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('events')}
      >
        Events
      </button>
      {/* <button 
        className={`filter filter--test ${selectedButton && selectedButton !== 'test' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('test')}
      >
        Test 1
      </button>
      <button 
        className={`filter filter--test2 ${selectedButton && selectedButton !== 'test2' ? 'not-selected' : ''}`}
        onClick={() => handleButtonClick('test2')}
      >
        Test 2
      </button> */}
    </div>
  );
}

export default SearchFilters;
