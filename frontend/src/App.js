import React, { useState, useRef,useContext } from 'react';
import './App.scss';



import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';


import GoogleMapComponent from './components/GoogleMapComponent';
import GoogleMapComponent2 from './components/GoogleMapComponent2';

// Temp organisation for AlexT stuff:
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import UserModal from './components/UserModal';
import VenueModal from './components/VenueModal';
import UserAddVenue from './components/UserAddVenue';
import UserLogRegModal from './components/UserLogRegModal';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { DataContext } from './context/MainContext';



library.add(faMapPin);

function App() {
  const userDivRef = useRef(null);
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

      <div className="App">
        < UserLogRegModal />
        < UserAddVenue />
        < VenueModal />
        < UserModal userDivRef={userDivRef} />
        {/* < SearchBar /> */}
        
        < TopNavBar userDivRef={userDivRef} />
        
        < GoogleMapComponent2 />
        <ReactSearchAutocomplete
            items={categoryItems}
            onSearch={handleSearch}
            onHover={handleHover}
            onSelect={handleSelect}
            onFocus={handleFocus}
            autoFocus
            formatResult={resultFormatter}
          />
        {/* < GoogleMapComponent /> */}
      </div>
  );
}

export default App;