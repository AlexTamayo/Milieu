import React, { useState, useEffect, useContext } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
 } from '@react-google-maps/api';
import { DataContext } from '../context/MainContext';
import mapStyles from '../styles/mapStyles.js';
import categoryIcons from '../routes/categoryIcons';
import venueMarkers from '../routes/venueMarkers';

const containerStyle = {
  width: '100%',
  height: '800px',
};
/* FOR ALEXT, COMMENT OUT IF YOU HAVE VISIBILITY PROBLEMS */
// const containerStyle = {
//   width: '100%',
//   height: '1260px',
//   margin: 0,
//   // height: '90%',
// };


const ICON_SIZE = { width: 40, height: 40 };

const GoogleMapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [isGoogleMapLoaded, setIsGoogleMapLoaded] = useState(false);
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  const { state, setSelectedVenue } = useContext(DataContext);

  const {
    eventData,
    businessData,
    selectedFilter,
    selectedSearchResult
  } = state;

  const mapRef = React.useRef(null);


  useEffect(() => {
    if (isGoogleMapLoaded && mapRef.current) {
      const newMarkers = [];
      const iconSize = new window.google.maps.Size(ICON_SIZE.width, ICON_SIZE.height);

      if (!selectedFilter || selectedFilter === 'events') {
        eventData.forEach((event) => {
          if (event.eventLocation && event.eventLocation.latitude && event.eventLocation.longitude) {
            newMarkers.push({
              position: { lat: event.eventLocation.latitude, lng: event.eventLocation.longitude },
              metadata: { topic: 'event', id: event.id , category: event.eventCategory.name, name: event.title, link: event.link },
              icon: {
                url: venueMarkers['events'] || categoryIcons[event.categoryName] || "http://maps.google.com/mapfiles/ms/micons/sportvenue.png",
                scaledSize: iconSize,
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
              metadata: { topic: 'business', id: business.id , category: business.businessCategory.name, name: business.name, link: business.website },
              icon: {
                url: venueMarkers['businesses'] ||categoryIcons[business.businessCategory.name] || "http://maps.google.com/mapfiles/kml/pal2/icon10.png",
                scaledSize: iconSize,
              },
            });
          }
        });
      }

      setMarkers(newMarkers);
    }
  }, [selectedFilter, eventData, businessData, isGoogleMapLoaded]);
   // set map center to user's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
          console.error('Geolocation Error:', error);
          // set to default coordinates in case of an error
          setCenter({ lat: -3.745, lng: -38.523 });
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.log("Geolocation not supported");
      setCenter({ lat: -3.745, lng: -38.523 });
    }
  }, []);


  const handleMyLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
          console.error('Geolocation Error:', error);
          setCenter({ lat: -3.745, lng: -38.523 });
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.log("Geolocation not supported");
      setCenter({ lat: -3.745, lng: -38.523 });
    }
  };


  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPSKEY}
      onLoad={() => setIsGoogleMapLoaded(true)}
    >
      <GoogleMap
        ref={mapRef}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
          styles: mapStyles,
        }}
      >
        <MarkerClusterer
          key={selectedFilter}
          options={{
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
            gridSize: 50,
            minimumClusterSize: 5,
          }}
        >
          {(clusterer) =>
            markers
              .filter((marker) => {
                if (selectedSearchResult !== "") {
                  return marker.metadata.category === selectedSearchResult;
                } else if (selectedFilter === 'events') {
                  return marker.metadata.topic === 'event';
                } else if (selectedFilter === 'businesses') {
                  return marker.metadata.topic === 'business';
                } else {
                  return true;
                }
              })
              .map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.position}
                  icon={marker.icon}
                  onClick={() => {
                    console.log(marker.metadata);
                    setSelectedVenue(marker.metadata.topic, marker.metadata.id);
                  }}
                  clusterer={clusterer}
                />
              ))
          }
        </MarkerClusterer>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            background: '#fff',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={handleMyLocationClick}
          title="My Location"
        >
          <div style={{
            width: '18px',
            height: '18px',
            backgroundImage: 'url(//maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)',
            backgroundSize: 'cover'
          }}></div>
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;




