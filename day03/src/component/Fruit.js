import React from 'react';

const Fruit = ({fruit,onFruit}) => {


  return (
    <div>
      과일명 입력 : <input type='text' value={fruit} onChange={onFruit} />
    </div>
  );
};

export default Fruit;