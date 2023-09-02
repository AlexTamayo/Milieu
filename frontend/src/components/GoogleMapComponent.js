//frontend\src\components\GoogleMapComponent.js
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
  width: '100%',
  height: '800px',
};

const GoogleMapComponent = () => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [visibleTopic, setVisibleTopic] = useState('all');

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
    if (mapRef.current) {
      const iconURL = '/static/logo.png';
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapRef.current,
        icon: {
          url: iconURL,
          scaledSize: new window.google.maps.Size(40, 40)  // Here, the icon will be scaled to 40x40 pixels on the map
        },
        metadata: { topic }
      });
      markersRef.current.push(marker);
    }
  };
  // const addMarker = (location, topic) => {
  //   if (mapRef.current) {
  //     const markerColor = getMarkerColorByTopic(topic);
  //     const marker = new window.google.maps.Marker({
  //       position: location,
  //       map: mapRef.current,
  //       icon: {
  //         path: window.google.maps.SymbolPath.CIRCLE,
  //         fillColor: markerColor,
  //         fillOpacity: 1,
  //         strokeWeight: 0,
  //         scale: 10,
  //       },
  //       metadata: { topic }
  //     });
  //     markersRef.current.push(marker);
  //   }
  // };

  const getMarkerColorByTopic = (topic) => {
    const topicColors = {
      business: 'blue',
      garage: 'green',
      gathering: 'red',
    };
    return topicColors[topic] || 'black';
  };

  useEffect(() => {
    markersRef.current.forEach(marker => {
      if (visibleTopic === 'all' || marker.metadata.topic === visibleTopic) {
        marker.setMap(mapRef.current);
      } else {
        marker.setMap(null);
      }
    });
  }, [visibleTopic]);

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
         onLoad={onLoad}
         options={{ styles: mapStyles }}
         onClick={(event) => {
           const topic = prompt("Enter topic (business, garage, gathering):");
           if (topic) {
             addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() }, topic);
           }
         }}
       />
        )}
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
