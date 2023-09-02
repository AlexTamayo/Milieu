//frontend/src/components/__mocks__/@react-google-maps/api.js

import React from 'react';

export const GoogleMap = () => {
  console.log("Mocked GoogleMap rendered!");
  return <div data-testid="google-map-component-mock">Test Google Map</div>;
};

export const LoadScript = ({ children }) => children;  // This will just render the children passed to it
