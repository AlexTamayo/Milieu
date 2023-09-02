import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import { MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px',
};

/**
 * Renders a Google Map component with the following features:
 * 1. Displays markers filtered by topics.
 * 2. Adds new markers by clicking on the map.
 * 3. Shows an info window on marker hover.
 * 4. Provides a search box to search and center the map on specific addresses or points of interest.
 *
 * Interacts with the DOM primarily through React's virtual DOM, with effects causing direct DOM mutations.
 *
 * @returns {JSX.Element} The main GoogleMapComponent and associated components.
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
  const [searchBox, setSearchBox] = useState(null);
  const mapRef = useRef(null);

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

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places && places.length === 1) {
      const place = places[0];
      const location = place.geometry.location;
      setCenter({
        lat: location.lat(),
        lng: location.lng(),
      });
      mapRef.current.panTo(location);
    }
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
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPSKEY} libraries={['places']}>
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
                    onLoad={map => {
                        mapRef.current = map;

                        // Create the input element for the search box
                        const input = document.createElement("input");
                        input.type = "text";
                        input.placeholder = "Search for a place...";
                        input.style.boxSizing = 'border-box';
                        input.style.border = '1px solid transparent';
                        input.style.width = '240px';
                        input.style.height = '32px';
                        input.style.padding = '0 12px';
                        input.style.borderRadius = '3px';
                        input.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
                        input.style.fontSize = '14px';
                        input.style.outline = 'none';
                        input.style.textOverflow = 'ellipses';

                       // Bind the StandaloneSearchBox to the input element
const searchBox = new window.google.maps.places.SearchBox(input);
searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces();
    if (places.length === 1) {
        const place = places[0];
        const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        };

        // Set map center and pan to the location
        setCenter(location);
        mapRef.current.panTo(location);

        // Prompt user for a topic
        const topic = prompt("Enter topic (business, garage, gathering):");
        if (topic) {
            // Add a new marker at the location with the provided topic
            addMarker(location, topic);
        }
    }
});

                        // Position the search box at the top center of the map
                        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(input);
                    }}
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
                    <MarkerClusterer
        options={{
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        }}
    >
        {clusterer => markers.map((marker, index) => (
            <Marker
                key={index}
                position={marker.position}
                clusterer={clusterer}
            />
        ))}
    </MarkerClusterer>
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
