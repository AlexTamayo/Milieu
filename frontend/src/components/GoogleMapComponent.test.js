//frontend/src/components/GoogleMapComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import GoogleMapComponent from './GoogleMapComponent';

// Mock the Google Maps API
jest.mock('@react-google-maps/api');


test('GoogleMapComponent renders without crashing', async () => {
  const { findByTestId } = render(<GoogleMapComponent />);
  const googleMap = await findByTestId('google-map-component-mock');
  expect(googleMap).toBeDefined();

});
