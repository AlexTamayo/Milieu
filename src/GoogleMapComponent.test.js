// GoogleMapComponent.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import GoogleMapComponent from './GoogleMapComponent';

test('renders without crashing', () => {
  render(<GoogleMapComponent />);
  const placeholderText = screen.getByText(/Google Map Placeholder/i);
  expect(placeholderText).toBeInTheDocument();
});
