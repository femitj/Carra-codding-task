import styled from 'styled-components';

const Wrapper = styled.div`
  background: RGBA(173, 255, 41, 0.5);
  padding: 45px 80px;

  .item-cont {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .item {
      border-radius: 4px;
      width: 220px;
      height: 400px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      .overlay-wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ccc;
        opacity: 0.8;
        z-index: 1;
      }
      .item-img {
        background: #fff;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        position: relative;
        .main-img {
          width: 75%;
          height: 75%;
        }
        .sub-img {
          position: absolute;
          bottom: 5px;
          width: 20px;
          height: 20px;
          right: 5px;
        }
      }

      .item-text {
        text-align: left;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
export default Wrapper;
