//frontend\src\App.js
import React, { useState, useRef } from 'react';
import './App.scss';

import { DataProvider } from './context/dataProviderContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import GoogleMapComponent from './components/GoogleMapComponent';
import GoogleMapComponent2 from './components/GoogleMapComponent2';

// Temp organisation for AlexT stuff:
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import UserModal from './components/UserModal';
import VenueModal from './components/VenueModal';


library.add(faMapPin);


function App() {
  const userDivRef = useRef(null);
  
  return (
    < DataProvider >
      <div className="App">
        < VenueModal />
        < UserModal userDivRef={userDivRef} />
        < SearchBar />
        < TopNavBar userDivRef={userDivRef} />
        < GoogleMapComponent2 />
        {/* < TopNavBar /> */}
        {/* < GoogleMapComponent /> */}
        {/* < ParseBusinessAndEventData /> */}
      </div>
    </ DataProvider >
  );
}

export default App;