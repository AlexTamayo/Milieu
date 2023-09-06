import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
  StandaloneSearchBox,
  MarkerClusterer
} from '@react-google-maps/api';
import { FaLinkedin, FaBusinessTime, FaCar, FaUsers } from 'react-icons/fa';
import { lightModeStyles, darkModeStyles } from './MapStyles';

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
  const [searchBox, setSearchBox] = useState(null);
  const mapRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [legendAttached, setLegendAttached] = useState(false);


 // UseEffects
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
}, [mapRef.current, visibleTopic]);



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
        {/* <button onClick={() => setIsDarkMode(prev => !prev)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button> */}

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
                    onClick={handleMapClick}>

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
        </div>
    </LoadScript>
);
};

export default GoogleMapComponent;
