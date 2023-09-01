//frontend\src\components\GoogleMapComponent.js
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import domtoimage from 'dom-to-image';
import mapStyles from './mapStyles';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const GoogleMapComponent = () => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [visibleTopic, setVisibleTopic] = useState('all');

  const markerRefs = {
    marker1: useRef(null),
    marker2: useRef(null),
    marker3: useRef(null)
    // ... add refs for other markers if needed
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  const onLoad = map => {
    mapRef.current = map;
    map.setOptions({
      disableDefaultUI: true,
    });
  };

  const addMarker = (location, topic) => {
    setMarkers(prevMarkers => [...prevMarkers, { position: location, topic }]);
  };

  const convertIconToURL = async (markerRef) => {
    if (!markerRef.current) return null;
    const dataURL = await domtoimage.toPng(markerRef.current);
    return dataURL;
  };

  const getMarkerIconByTopic = async (topic) => {
    switch (topic) {
      case 'marker1': return await convertIconToURL(markerRefs.marker1);
      case 'marker2': return await convertIconToURL(markerRefs.marker2);
      case 'marker3': return await convertIconToURL(markerRefs.marker3);
      // ... add more cases
      default: return await convertIconToURL(markerRefs.marker1);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPSKEY}>
      <div data-testid="google-map-component">
        {/* Hidden div containing FontAwesome icons */}
        <div style={{ position: 'absolute', left: '-10000px', top: '-10000px' }}>
          <div ref={markerRefs.marker1}><FontAwesomeIcon icon={faMapPin} style={{ color: "#511f3f" }} /></div>
          <div ref={markerRefs.marker2}><FontAwesomeIcon icon={faMapPin} style={{ color: "#3f5151" }} /></div>
          <div ref={markerRefs.marker3}><FontAwesomeIcon icon={faMapPin} style={{ color: "#4f513f" }} /></div>
          {/* ... add more FontAwesome icons if needed */}
        </div>

        <select
          value={visibleTopic}
          onChange={(e) => setVisibleTopic(e.target.value)}
          style={{ marginBottom: '10px' }}
        >
          <option value="all">Show All</option>
          <option value="marker1">Marker1</option>
          <option value="marker2">Marker2</option>
          <option value="marker3">Marker3</option>
        </select>

        {center && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            options={{ styles: mapStyles }}
            onClick={async (event) => {
              const topic = prompt("Enter marker type (marker1, marker2, marker3):");
              if (topic) {
                const icon = await getMarkerIconByTopic(topic);
                addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng(), icon: icon }, topic);
              }
            }}
          >
            {markers.filter(marker => visibleTopic === 'all' || marker.topic === visibleTopic)
              .map((marker, idx) => (
                <Marker
                  key={idx}
                  position={marker.position}
                  icon={marker.icon}
                />
              ))}
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
