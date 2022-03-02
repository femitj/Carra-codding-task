import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navBar';

test('renders learn react link', () => {
  const items = [];

  render(<Navbar />);
  let linkElement;
  !items.length &&
    (linkElement = screen.getByText(/No shortlisted item found/i));
  expect(linkElement).toBeInTheDocument();
});
