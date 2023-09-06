//frontend\src\App.js
import React from 'react';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import GoogleMapComponent from './components/GoogleMapComponent';
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';


library.add(faMapPin);

function App() {
  return (
    <div className="App">
      {/* Other components */}
      < SearchBar />
      < TopNavBar />
      < UserList />
      < UserForm />
      < GoogleMapComponent />
      {/* Other components */}
    </div>
  );
}

export default App;
