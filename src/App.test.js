import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Google Maps Test header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Google Maps Test/i);
  expect(headerElement).toBeInTheDocument();
});
