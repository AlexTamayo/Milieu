import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
  width: '50vw',
  height: '50vw',
};

const GoogleMapComponent = () => {
  const [center, setCenter] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [visibleTopic, setVisibleTopic] = useState('all');

  // Fetch user's current location
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

  // Load and set markers from local storage when component mounts
  useEffect(() => {
    const savedMarkers = JSON.parse(localStorage.getItem('markers') || '[]');
    savedMarkers.forEach(markerData => {
      addMarker(markerData.location, markerData.topic);
    });
  }, []);

  const onLoad = map => {
    mapRef.current = map;
    map.setOptions({
      disableDefaultUI: true,
    });

    // Clear any existing markers on map load
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
  };

  const addMarker = (location, topic) => {
    if (mapRef.current) {
      const markerColor = getMarkerColorByTopic(topic);
      const marker = new window.google.maps.Marker({
        position: location,
        map: visibleTopic === 'all' || visibleTopic === topic ? mapRef.current : null,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: markerColor,
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 10,
        },
        metadata: { topic }
      });
      markersRef.current.push(marker);

      // Save markers to local storage
      const markersToSave = markersRef.current.map(m => ({
        location: m.position.toJSON(),
        topic: m.metadata.topic
      }));
      localStorage.setItem('markers', JSON.stringify(markersToSave));
    }
  };

  // Adjust visible markers based on the selected topic
  useEffect(() => {
    markersRef.current.forEach(marker => {
      if (visibleTopic === 'all' || marker.metadata.topic === visibleTopic) {
        marker.setMap(mapRef.current);
      } else {
        marker.setMap(null);
      }
    });
  }, [visibleTopic]);

  const getMarkerColorByTopic = (topic) => {
    const topicColors = {
      child: 'blue',
      volunteer: 'green',
      events: 'red',
    };
    return topicColors[topic] || 'black';
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div>
        {/* Filter dropdown */}
        <select
          value={visibleTopic}
          onChange={(e) => setVisibleTopic(e.target.value)}
          style={{ marginBottom: '10px' }}
        >
          <option value="all">Show All</option>
          <option value="child">Child</option>
          <option value="volunteer">Volunteer</option>
          <option value="events">Events</option>
        </select>
      </div>
      {center && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onClick={(event) => {
            const topic = prompt("Enter topic (child, volunteer, events):");
            if (topic) {
              addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() }, topic);
            }
          }}
          options={{
            styles: mapStyles,
          }}
        />
      )}
    </LoadScript>
  );
};

export default GoogleMapComponent;
