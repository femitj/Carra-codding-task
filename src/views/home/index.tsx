import React, { useState, useEffect, useContext } from 'react';
import Wrapper from './style';
import axios from 'axios';
import Favorite from '../../components/Favorite';

import { CatalogueContext } from '../../store/context/CatalogueContext';

type Props = {};

const Home: React.FC<Props> = (props) => {
  const { selected, handleSelected } = useContext(CatalogueContext);
  const [catalogue, setCatalogue] = useState([]);
  const [like, setLike] = useState(false);

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

  const handleRemove = (id: any) => {
    let arr = [];
    arr = [...selected].filter(function (item) {
      return item.id !== id;
    });
    handleSelected(arr);
  };

  const handleAdd = (id: any) => {
    let arr: any = [];
    arr = [...selected];
    arr.push(id);
    handleSelected(arr);
  };

  return (
    <Wrapper>
      <div className='item-cont'>
        {catalogue?.length
          ? catalogue?.map((item: any) => (
              <div className='item' key={item.id}>
                {item?.discontinued ? <div className='overlay-wrap' /> : ''}
                <div className='item-img'>
                  <img src={item?.image} className='main-img' alt='main' />
                  <Favorite
                    selected={selected}
                    item={item}
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}
                    like={like}
                    setLike={setLike}
                  />
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
