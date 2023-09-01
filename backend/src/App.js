import React from 'react';
import './App.css';
import './MapContainer.css'; // Import the CSS file
import GoogleMapComponent from './GoogleMapComponent';
import LeafletMap from './LeafletMap'; // Import the LeafletMap component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maps Test</h1>
      </header>
      <div className="map-container">
        <h2>Google Map</h2>
        <GoogleMapComponent />
      </div>
      <div className="map-container">
        <h2>Leaflet Map</h2>
        {/* <LeafletMap /> */}
      </div>
    </div>
  );
}

export default App;
