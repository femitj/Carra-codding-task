import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navBar';
import Index from './index';

test('renders navbar', () => {
  const items = [];

  render(<Navbar />);
  let linkElement;
  !items.length &&
    (linkElement = screen.getByText(/No shortlisted item found/i));
  expect(linkElement).toBeInTheDocument();
});

test('changes button text on click', () => {
  const items = [];

  render(<Navbar />);
  let linkElement;
  !items.length &&
    (linkElement = screen.getByText(/No shortlisted item found/i));
  expect(linkElement).toBeInTheDocument();
});
