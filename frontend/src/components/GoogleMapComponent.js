import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
  MarkerClusterer
} from '@react-google-maps/api';
import { FaLinkedin, FaBusinessTime, FaCar, FaUsers } from 'react-icons/fa';
import { lightModeStyles, darkModeStyles } from './MapStyles';
import useBusinessData from '../hooks/useBusinessMapData';

const containerStyle = {
  width: '100%',
  height: '800px',
};

/**
 * The Legend component displays clickable categories that can affect which markers are shown.
 */
function Legend({ onCategoryClick, activeCategory }) {
  const activeStyle = {
    backgroundColor: '#e6f7ff',
    border: '2px solid blue',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
  };

  const defaultStyle = {
    cursor: 'pointer',
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
  };

  const renderCategory = (name, label, icon) => {
    const style = activeCategory === name ? activeStyle : defaultStyle;
    return (
      <div style={{ ...style, ...categoryStyles[name] }} onClick={() => onCategoryClick(name)}>
        {React.createElement(icon, { size: 24, style: { marginRight: '5px' } })}
        {label}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: 'white', padding: '10px', borderRadius: '5px' }}>
      {renderCategory('all', 'All', FaUsers)}
      {renderCategory('business', 'Business', FaBusinessTime)}
      {renderCategory('garage', 'Garage', FaCar)}
      {renderCategory('gathering', 'Gathering', FaUsers)}
    </div>
  );
}

const categoryStyles = {
  'business': { backgroundColor: 'orange' },
  'garage': { backgroundColor: 'blue' },
  'gathering': { backgroundColor: 'red' },
};


const GoogleMapComponent = () => {
  // State declarations
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [visibleTopic, setVisibleTopic] = useState('all');
  const [inputValue, setInputValue] = useState('');
  const [showInputForm, setShowInputForm] = useState(false);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const mapRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [legendAttached, setLegendAttached] = useState(false);

  const { businessData } = useBusinessData();

  useEffect(() => {
    if (businessData.length > 0) {
      setMarkers(prevMarkers => [...prevMarkers, ...businessData]);
    }
  }, [businessData]);



  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
        }
      );
    } else {
    }
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  useEffect(() => {
    if (mapRef.current && !legendAttached) {
        const legend = document.createElement('div');
        ReactDOM.render(<Legend onCategoryClick={(category) => {
          setVisibleTopic(category);
          console.log("Active Category:", category);  // <-- Add this
      }} activeCategory={visibleTopic} />, legend);
        mapRef.current.controls[window.google.maps.ControlPosition.TOP_LEFT].push(legend);
        setLegendAttached(true);
    }
  }, [visibleTopic, legendAttached]);



  const addMarker = (location, topic, link = '') => {
    const marker = {
      id: Date.now(),  // temporary unique ID
      position: location,
      icon: {
        url: './static/logo.png',
        scaledSize: new window.google.maps.Size(50, 50)
      },
      metadata: { topic, link }  // link can be a social media page or website
    };

    setMarkers(prevMarkers => [...prevMarkers, marker]);
  };

  const mapStyle = isDarkMode ? darkModeStyles : lightModeStyles;



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
  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Link copied to clipboard!");  // Notify the user
  };



  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPSKEY} libraries={['places']}>
        <div>
        <button onClick={() => setIsDarkMode(prev => !prev)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {center && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={{
                      styles: mapStyle,
                      mapTypeControl: false, // Disables satellite view
                      streetViewControl: false // Disables Street View
                    }}
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

{infoWindowVisible && selectedMarker && (
  <InfoWindow
    position={selectedMarker.position}
    onCloseClick={() => setInfoWindowVisible(false)}
  >
    <div>
      <h4>{selectedMarker.metadata.topic}</h4>
      <p><a href={selectedMarker.metadata.link || "https://www.linkedin.com/in/fmoscovo/"} target="_blank" rel="noopener noreferrer">
  <FaLinkedin size={24} />

</a></p>
      <button onClick={() => copyToClipboard(`https://yourwebsite.com/map?marker=${selectedMarker.id}`)}>Share</button>
    </div>
  </InfoWindow>
)}
                    <MarkerClusterer
    options={{
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    }}
>
    {clusterer => markers
        .filter(marker => visibleTopic === 'all' || marker.metadata.topic === visibleTopic)
        .map((marker, index) => (
            <Marker
                key={index}
                position={marker.position}
                icon={marker.icon}
                clusterer={clusterer}
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
        ))
    }
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
