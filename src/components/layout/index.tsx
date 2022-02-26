import React from 'react';
import NavBar from './navBar';
import Wrapper from './style';

type Props = {};

const Layout = ({ children }: any) => {
  return (
    <Wrapper>
      <NavBar />
      <div className='head'>Product Catalogue 2022</div>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Layout;
