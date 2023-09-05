//frontend\src\App.js
import React, { useState, useRef } from 'react';
import './App.scss';

import { UserModalProvider } from "./context/UserModalContext";
import { DataProvider } from './context/dataProviderContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import GoogleMapComponent from './components/GoogleMapComponent';
import GoogleMapComponent2 from './components/GoogleMapComponent2';
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import UserModal from './components/UserModal';
import TestComponent from './components/TestComponent';

library.add(faMapPin);


function App() {
  const [isUserModalOpen, setisUserModalOpen] = useState(false);

  const userDivRef = useRef(null);
  
  return (
    <DataProvider >
      < UserModalProvider >
      <div className="App">
        < UserModal userDivRef={userDivRef} />
        < SearchBar />
        < TopNavBar userDivRef={userDivRef} />
        < GoogleMapComponent2 />
        < TopNavBar />
        < GoogleMapComponent />
        <TestComponent />
          {/* Other components */}
      </div>
      </ UserModalProvider >
    </DataProvider>
  );
}

export default App;
