import React, { FC } from 'react';
import NavBar from './navBar';
import Wrapper from './style';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <div className='head'>Product Catalogue 2022</div>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Layout;
