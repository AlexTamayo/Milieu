//frontend/src/components/GoogleMapComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import GoogleMapComponent from '../GoogleMapComponent';

// Mock the Google Maps API
jest.mock('@react-google-maps/api');


test('GoogleMapComponent renders without crashing', async () => {
  const { findByTestId } = render(<GoogleMapComponent />);
  const googleMap = await findByTestId('google-map-component-mock');
  expect(googleMap).toBeDefined();

});


describe('GoogleMapComponent', () => {
    // Test that a marker is added to the map when the user clicks on it and provides a topic
    it('should add a marker to the map when the user clicks on it and provides a topic', () => {
      // Mock the necessary functions and objects
      const mockSetCenter = jest.fn();
      const mockGetCurrentPosition = jest.fn();
      const mockAddListener = jest.fn();
      const mockSetMap = jest.fn();
      const mockMarker = {
        setMap: mockSetMap,
        addListener: mockAddListener,
        metadata: { topic: 'test' }
      };
      const mockGoogleMaps = {
        maps: {
          Marker: jest.fn(() => mockMarker),
          Size: jest.fn(),
          InfoWindow: jest.fn(),
        },
      };
      window.google = mockGoogleMaps;

      // Render the component
      const wrapper = shallow(<GoogleMapComponent />);

      // Simulate clicking on the map
      wrapper.find(GoogleMap).simulate('click', { latLng: { lat: 1, lng: 1 } });

      // Prompt should be called
      expect(window.prompt).toHaveBeenCalled();

      // Add marker should be called with the correct parameters
      expect(mockGoogleMaps.maps.Marker).toHaveBeenCalledWith({
        position: { lat: 1, lng: 1 },
        map: wrapper.instance().mapRef.current,
        icon: {
          url: './static/logo.png',
          scaledSize: new mockGoogleMaps.maps.Size(50, 50)
        },
        metadata: { topic: 'test' }
      });

      // Marker listeners should be added
      expect(mockAddListener).toHaveBeenCalledWith('click', expect.any(Function));
      expect(mockAddListener).toHaveBeenCalledWith('mouseover', expect.any(Function));

      // Markers ref should be updated
      expect(wrapper.instance().markersRef.current).toContain(mockMarker);
    });


});

    // Test that the error message is logged when geolocation is not available in the browser
    it('should log an error message when geolocation is not available', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error');
      const originalGeolocation = global.navigator.geolocation;
      global.navigator.geolocation = undefined;

      render(<GoogleMapComponent />);

      expect(consoleErrorSpy).toHaveBeenCalledWith('Geolocation is not available in this browser.');

      global.navigator.geolocation = originalGeolocation;
      consoleErrorSpy.mockRestore();
    });

