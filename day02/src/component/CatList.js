import React from 'react';
import CatItem from './CatItem';

const CatList = ({data}) => {
  return (
   <ul>
    {
      data.map(item => <CatItem key={item.id} item={item}/>)
    }
   </ul>
  );
};

export default CatList;