import { React, useRef } from 'react';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import GoogleMapComponent from './components/GoogleMapComponent';

// Temp organisation for AlexT stuff:
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import UserModal from './components/UserModal';
import VenueModal from './components/VenueModal';
import UserAddVenue from './components/UserAddVenue';
import UserLogRegModal from './components/UserLogRegModal';
import UserVenueManager from './components/UserVenueManager';

library.add(faMapPin);

function App() {
  const userDivRef = useRef(null);

  return (

      <div className="App">
        < TopNavBar userDivRef={userDivRef} />
        < UserModal userDivRef={userDivRef} />
        < UserVenueManager />
        < UserLogRegModal />
        < UserAddVenue />
        < VenueModal />
        < SearchBar />
        < GoogleMapComponent />
      </div>
  );
}

export default App;
