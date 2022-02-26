import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import axios from 'axios';
import favorite from '../../assets/favorite-dark.png';
import unFavorite from '../../assets/unfavorite.png';

interface Props {}

const Home = (props: Props) => {
  const [catalogue, setCatalogue] = useState([]);

  const handleGetCatelogue = async () => {
    const res = await axios(
      'https://62153783cdb9d09717b21f66.mockapi.io/api/v1/catalogue'
    );
    if (res) {
      setCatalogue(res.data);
    }
  };

  useEffect(() => {
    handleGetCatelogue();
  }, []);

  return (
    <Wrapper>
      <div className='item-cont'>
        {catalogue?.length
          ? catalogue?.map((item: any) => (
              <div className='item'>
                {item?.discontinued ? <div className='overlay-wrap' /> : ''}
                <div className='item-img'>
                  <img src={item?.image} className='main-img' />
                  <img src={unFavorite} className='sub-img' />
                </div>
                <div className='item-text'>
                  <div>{item?.name}</div>
                  <div>{item?.price}</div>
                </div>
              </div>
            ))
          : 'No items found in catalogue'}
      </div>
    </Wrapper>
  );
};

export default Home;
