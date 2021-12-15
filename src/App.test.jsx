import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

it('should render Hello World', () => {
  render(<App />);

  const helloWorld = screen.getByText('Hello World');

  expect(helloWorld).toBeInTheDocument();
});
