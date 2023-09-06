//frontend\src\App.js
import React from 'react';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import GoogleMapComponent2 from './components/GoogleMapComponent2';
import TopNavBar from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';


library.add(faMapPin);

function App() {
  return (
    <div className="App">
      < SearchBar />
      < TopNavBar />
      < GoogleMapComponent2 />
    </div>
  );
}

export default App;
