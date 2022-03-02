import React, { useContext, useState } from 'react';
import { NavBar as Wrapper } from './style';
import favorite from '../../assets/favorite-dark.png';
import { CatalogueContext } from '../../store/context/CatalogueContext';

type Props = {};

const NavBar: React.FC<Props> = (props) => {
  const { selected, handleSelected } = useContext(CatalogueContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRemove = (id: any) => {
    let arr = [];
    arr = [...selected].filter(function (item) {
      return item.id !== id;
    });
    handleSelected(arr);
  };

  return (
    <Wrapper>
      <div className='nav-content' style={{ position: 'relative' }}>
        <span
          className='favorite-list-icon'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img src={favorite} alt='favourite' />
        </span>
        <span className='favorite-list-number'>{selected.length}</span>
      </div>
      <div
        style={
          showDropdown
            ? {
                minHeight: '50px',
                minWidth: '250px',
                position: 'absolute',
                background: '#fff',
                top: '50px',
                zIndex: 1000,
              }
            : { display: 'none' }
        }
      >
        {selected.length ? (
          selected.map((item) => (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>{item?.name}</p>
              <p onClick={() => handleRemove(item.id)}>X</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No shortlisted item found</p>
        )}
      </div>
    </Wrapper>
  );
};

export default NavBar;
