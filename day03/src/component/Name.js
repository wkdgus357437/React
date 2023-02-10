import React from 'react';

const Name = ({name, onName}) => { //(props)로 해도됨
  return (
    <div>
      이름 입력 : <input type='text' value={name} onChange={onName} />
    </div>
  );
};

export default Name;