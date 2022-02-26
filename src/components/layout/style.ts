import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
  padding: 15px 30px;
  .head {
    background: #a4a4a4;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;

export const NavBar = styled.div`
  background: RGBA(173, 255, 41, 0.5);
  height: 30px;
  padding: 5px 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .nav-content {
    display: flex;
    align-items: center;
    .favorite-list-icon {
    }
    .favorite-list-number {
    }
  }
`;
