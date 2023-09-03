//frontend\src\App.js
import React from 'react';
import './App.scss';
import GoogleMapComponent from './components/GoogleMapComponent';
import TopNavBar from './components/TopNavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

library.add(faMapPin);

function App() {
  return (
    <div className="App">
      {/* Other components */}
      < TopNavBar />
      <GoogleMapComponent />
      {/* Other components */}
    </div>
  );
}

export default App;
