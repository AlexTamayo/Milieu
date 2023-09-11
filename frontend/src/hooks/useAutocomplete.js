//frontend/src/hooks/useAutocomplete.js
import { useEffect, useState } from 'react';



function useAutocomplete(refs) {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState({ longitude: null, latitude: null });


  useEffect(() => {
    function initializeAutocomplete() {
      if (!window.google) {
        console.error('Google Maps JavaScript API is not loaded');
        return;
      }

      const streetAutocomplete = new window.google.maps.places.Autocomplete(
        refs.streetAddressRef.current,
        { types: ['address'] }
      );

      const cityAutocomplete = new window.google.maps.places.Autocomplete(
        refs.cityRef.current,
        { types: ['(cities)'] }
      );

      const regionAutocomplete = new window.google.maps.places.Autocomplete(
        refs.regionRef.current
      );

      const postalCodeAutocomplete = new window.google.maps.places.Autocomplete(
        refs.postalCodeRef.current
      );

      const countryAutocomplete = new window.google.maps.places.Autocomplete(
        refs.countryRef.current
      );

      streetAutocomplete.addListener('place_changed', () => {
        const place = streetAutocomplete.getPlace();
        setStreetAddress(getAddressComponent(place.address_components, 'street_number') + ' ' + getAddressComponent(place.address_components, 'route'));
        setLocation({
          longitude: place.geometry?.location.lng(),
          latitude: place.geometry?.location.lat(),
        });
      });

      cityAutocomplete.addListener('place_changed', () => {
        const place = cityAutocomplete.getPlace();
        setCity(getAddressComponent(place.address_components, 'locality'));
      });

      regionAutocomplete.addListener('place_changed', () => {
        const place = regionAutocomplete.getPlace();
        setRegion(getAddressComponent(place.address_components, 'administrative_area_level_1'));
      });

      postalCodeAutocomplete.addListener('place_changed', () => {
        const place = postalCodeAutocomplete.getPlace();
        setPostalCode(getAddressComponent(place.address_components, 'postal_code'));

      });

      countryAutocomplete.addListener('place_changed', () => {
        const place = countryAutocomplete.getPlace();
        setCountry(getAddressComponent(place.address_components, 'country'));
      });

    }


    function getAddressComponent(components, type) {
      for (let i = 0; i < components.length; i++) {
        const component = components[i];
        if (component.types.indexOf(type) !== -1) {
          return component.long_name;
        }
      }
      return '';
    }

    initializeAutocomplete();
  }, [refs]);

  return {
    streetAddress,
    city,
    region,
    postalCode,
    country,
    businessLocation: location,
    eventLocation: location,
  };
}

export default useAutocomplete;
