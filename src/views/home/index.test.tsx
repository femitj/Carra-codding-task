import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

test('renders learn react link', () => {
  const items = [];

  render(<Home />);
  let linkElement;
  !items.length &&
    (linkElement = screen.getByText(/No items found in catalogue/i));
  expect(linkElement).toBeInTheDocument();
});
