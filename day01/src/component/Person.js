import React from 'react';

const Person = ({name,age}) => {
  //const{name} = props
  //const{age} = props 
  
  // const{name, age}
  
  return (
    <div>
      나의 이름은 {name}이고,
      나의 나이는 {age} 살 입니다.
    </div>
  );
};

export default Person;