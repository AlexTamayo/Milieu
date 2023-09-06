//frontend\src\App.js
import React, { useState, useRef } from 'react';
import './App.scss';

import { UserModalProvider } from "./context/UserModalContext";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import GoogleMapComponent from './components/GoogleMapComponent';
import GoogleMapComponent2 from './components/GoogleMapComponent2';
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import ParseBusinessAndEventData from './hooks/parseBusinessAndEventData';




import UserModal from './components/UserModal';

library.add(faMapPin);


function App() {
  const [isUserModalOpen, setisUserModalOpen] = useState(false);

  const userDivRef = useRef(null);
  
  return (
    < UserModalProvider >
    <div className="App">
      < UserModal userDivRef={userDivRef} />
      < SearchBar />
      < TopNavBar userDivRef={userDivRef} />
      < GoogleMapComponent2 />
      < TopNavBar />
      < GoogleMapComponent />
      < ParseBusinessAndEventData />
      {/* Other components */}
    </div>
    </ UserModalProvider >
  );
}

export default App;
