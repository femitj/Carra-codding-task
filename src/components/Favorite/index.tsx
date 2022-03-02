import React from 'react';
import favorite from '../../assets/favorite-dark.png';
import unFavorite from '../../assets/unfavorite.png';

type Props = {
  selected: Array<Object>;
  item: any;
  handleAdd: any;
  handleRemove: any;
  like: Boolean;
  setLike: any;
};

const Index: React.FC<Props> = ({
  selected,
  item,
  handleAdd,
  handleRemove,
  like,
  setLike,
}) => {
  return (
    <img
      alt='favorite'
      src={selected.find((o: any) => o.id === item.id) ? favorite : unFavorite}
      className='sub-img add-cursor'
      onClick={() => {
        if (like && selected.find((o: any) => o.id === item.id)) {
          handleRemove(item.id);
        } else {
          handleAdd(item);
        }
        setLike(!like);
      }}
    />
  );
};

export default Index;
