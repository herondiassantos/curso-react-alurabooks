import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo da AluraBooks', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/Logo da AluraBooks/i);
  expect(logoElement).toBeInTheDocument();
});
