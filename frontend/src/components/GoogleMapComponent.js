import React, { useState, useEffect, useContext, useMemo } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { DataContext } from '../context/dataProviderContext';

const containerStyle = {
  width: '100%',
  height: '800px',
};

const GoogleMapComponent = () => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const { eventData, businessData, selectedFilter } = useContext(DataContext);

  const markers = useMemo(() => {
    const newMarkers = [];

    if (!selectedFilter || selectedFilter === 'events') {
      eventData.forEach((event) => {
        if (event.eventLocation && event.eventLocation.latitude && event.eventLocation.longitude) {
          newMarkers.push({
            position: { lat: event.eventLocation.latitude, lng: event.eventLocation.longitude },
            metadata: { topic: 'event', name: event.title, link: event.link },
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png", // green marker for events
            },
          });
        }
      });
    }

    if (!selectedFilter || selectedFilter === 'businesses') {
      businessData.forEach((business) => {
        if (business.businessLocation && business.businessLocation.latitude && business.businessLocation.longitude) {
          newMarkers.push({
            position: { lat: business.businessLocation.latitude, lng: business.businessLocation.longitude },
            metadata: { topic: 'business', name: business.name, link: business.link },
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // blue marker for businesses
            },
          });
        }
      });
    }

    return newMarkers;
  }, [eventData, businessData, selectedFilter]);


  useEffect(() => {
    // Initial setup for user geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
          console.error('Geolocation Error:', error);
          setCenter({ lat: -3.745, lng: -38.523 });
        }
      );
    } else {
      console.log("Geolocation not supported");
      setCenter({ lat: -3.745, lng: -38.523 });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPSKEY}>
      <GoogleMap
        // Remove the key prop or set it to a constant value to prevent unnecessary remounts
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={marker.icon}
            onClick={() => {
              console.log(marker.metadata);
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
