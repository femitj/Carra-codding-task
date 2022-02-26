import React from 'react';
import { NavBar as Wrapper } from './style';
import favorite from '../../assets/favorite-dark.png';

interface Props {}

const NavBar = (props: Props) => {
  return (
    <Wrapper>
      <div className='nav-content'>
        <span className='favorite-list-icon'>
          <img src={favorite} alt='favourite' />
        </span>
        <span className='favorite-list-number'>2</span>
      </div>
    </Wrapper>
  );
};

export default NavBar;
