import React from 'react';

const Display = (props) => { //()안에 ({name})이라고 해도되고, (props)라고 해도된다.
  return (
    <div>
       <h2>Animal 컴포넌트</h2>
       <h1>내가 좋아하는 동물은 {props.name}</h1>
       <hr/>
    </div>
  );
};

export default Display;