import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
  width: '100%',
  height: '800px',
};

const GoogleMapComponent = () => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
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

  useEffect(() => {
    markersRef.current.forEach(marker => {
      if (visibleTopic === 'all' || marker.metadata.topic === visibleTopic) {
        marker.setMap(mapRef.current);
      } else {
        marker.setMap(null);
      }
    });
  }, [visibleTopic]);

  const onLoad = map => {
    mapRef.current = map;
    map.setOptions({
      disableDefaultUI: true,
    });
  };

  const addMarker = (location, topic) => {
    if (mapRef.current) {
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapRef.current,
        icon: {
          url: './static/logo.png',
          scaledSize: new window.google.maps.Size(50, 50)
        },
        metadata: { topic }
      });

      marker.addListener('click', () => {
        setSelectedMarker(marker);
        setInfoWindowVisible(true);
      });

      marker.addListener('mouseover', () => {
        setSelectedMarker(marker);
        setInfoWindowVisible(true);
      });

      // marker.addListener('mouseout', () => {
      //   setInfoWindowVisible(false);
      // });

      markersRef.current.push(marker);
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
            onLoad={onLoad}
            options={{ styles: mapStyles }}
            onClick={(event) => {
              const topic = prompt("Enter topic (business, garage, gathering):");
              if (topic) {
                addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() }, topic);
              }
            }}
          >
            {infoWindowVisible && selectedMarker && (
              <InfoWindow
                position={selectedMarker.getPosition()}
                onCloseClick={() => setInfoWindowVisible(false)}
              >
                <div>
                  <h4>{selectedMarker.metadata.topic}</h4>
                  {/* Add more details about the marker here */}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
