import styled from 'styled-components';

const Wrapper = styled.div`
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
      margin-top: auto;
      margin-bottom: auto;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .favorite-list-number {
      background: #a4a4a4;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      text-align: center;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
