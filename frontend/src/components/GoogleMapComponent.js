import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
  width: '100%',
  height: '800px',
};

/**
 * `GoogleMapComponent` is a React component that renders an interactive Google Map.
 *
 * The map initializes to the user's geolocation (if available) and allows for markers
 * to be added by clicking on any location. These markers can be filtered based on
 * predefined topics. Interactions with the map are handled in a declarative manner
 * using React's state management, ensuring optimal DOM updates.
 *
 * @returns {JSX.Element} A Google Map wrapped within UI controls for topic filtering and marker addition.
 */

const GoogleMapComponent = () => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [visibleTopic, setVisibleTopic] = useState('all');
  const [inputValue, setInputValue] = useState('');
  const [showInputForm, setShowInputForm] = useState(false);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
          // Handle your error appropriately
        }
      );
    } else {
      // Handle the error that geolocation is not available
    }
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);


  const addMarker = (location, topic) => {
    const marker = {
      position: location,
      icon: {
        url: './static/logo.png',
        scaledSize: new window.google.maps.Size(50, 50)
      },
      metadata: { topic }
    };

    setMarkers(prevMarkers => [...prevMarkers, marker]);
  };

  const handleMapClick = event => {
    const pixelX = event.pixel.x;
    const pixelY = event.pixel.y;
    setClickedLocation({ lat: event.latLng.lat(), lng: event.latLng.lng(), pixelX, pixelY });
    setShowInputForm(true);
};

  const handleSubmit = () => {
    if (inputValue) {
      addMarker(clickedLocation, inputValue);
      setInputValue('');
      setShowInputForm(false);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPSKEY}>
      <div>
        <select
          value={visibleTopic}
          onChange={(e) => setVisibleTopic(e.target.value)}
          style={{ marginBottom: '10px' }}
        >
          <option value="all">Show All</option>
          <option value="business">Business</option>
          <option value="garage">Garage</option>
          <option value="gathering">Gathering</option>
        </select>

        {center && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={{ styles: mapStyles }}
            onClick={handleMapClick}
          >
            {markers
              .filter(marker => visibleTopic === 'all' || marker.metadata.topic === visibleTopic)
              .map((marker, idx) => (
                <Marker
                key={idx}
                position={marker.position}
                icon={marker.icon}
                onMouseOver={() => {
                  if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                  }
                  setSelectedMarker(marker);
                  setInfoWindowVisible(true);
                }}
                onMouseOut={() => {
                  const timeout = setTimeout(() => {
                    setInfoWindowVisible(false);
                  }, 1300);  // Delay. Adjust as needed.
                  setHideTimeout(timeout);
                }}
              />
            ))}

            {infoWindowVisible && selectedMarker && (
              <InfoWindow
                position={selectedMarker.position}
                onCloseClick={() => setInfoWindowVisible(false)}
              >
                <div>
                  <h4>{selectedMarker.metadata.topic}</h4>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}

{showInputForm && clickedLocation && (
          <div
            style={{
              position: 'absolute',
              top: `${clickedLocation.pixelY}px`,
              left: `${clickedLocation.pixelX}px`,
              background: 'white',
              padding: '10px'
            }}
          >
            <label>
              Enter topic (business, garage, gathering):
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                list="topics"
              />
            </label>
            <datalist id="topics">
              <option value="business" />
              <option value="garage" />
              <option value="gathering" />
            </datalist>
            <button onClick={handleSubmit}>Add Marker</button>
            <button onClick={() => setShowInputForm(false)}>Cancel</button>
          </div>
        )}
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
