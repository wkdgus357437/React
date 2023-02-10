import React from 'react';

const Output = (props) => {
  return (
    <div>
     {props.name}님이 좋아하는 과일은 {props.fruit}입니다.
     <hr/>
    </div>
  );
};

export default Output;