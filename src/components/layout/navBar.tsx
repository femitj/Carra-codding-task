import React from 'react';
import { NavBar as Wrapper } from './style';

interface Props {}

const NavBar = (props: Props) => {
  return (
    <Wrapper>
      <div className='nav-content'>
        <span className='favorite-list-icon'>favourite</span>
        <span className='favorite-list-number'>2</span>
      </div>
    </Wrapper>
  );
};

export default NavBar;
