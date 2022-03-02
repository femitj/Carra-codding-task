import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';
import Favorite from '../../components/Favorite';

test('renders categories', () => {
  const items = [];

  render(<Home />);
  let linkElement;
  !items.length &&
    (linkElement = screen.getByText(/No items found in catalogue/i));

  expect(linkElement).toBeInTheDocument();
});

describe('clickable image alt is favorite ', () => {
  it('displays favorite', () => {
    const { getByAltText } = render(
      <Favorite
        selected={[{ id: 2 }]}
        item={{ item: 2 }}
        handleAdd={() => []}
        handleRemove={() => []}
        like={true}
        setLike={() => false}
      />
    );
    getByAltText('favorite'); // throws an expception if the element cannot be found
  });
});
