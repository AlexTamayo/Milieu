import { React, useRef } from 'react';
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

library.add(faMapPin);

function App() {
  const userDivRef = useRef(null);

  return (

      <div className="App">
        < UserLogRegModal />
        < UserAddVenue />
        < VenueModal />
        < UserModal userDivRef={userDivRef} />
        < SearchBar />
        
        < TopNavBar userDivRef={userDivRef} />
        
        < GoogleMapComponent />
        {/* < GoogleMapComponent2 /> */}
      </div>
  );
}

export default App;