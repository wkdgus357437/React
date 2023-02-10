import React, { useState } from "react";

const Test02 = () => {
  const [chk, isCheck] = useState(false); //true, false 할떄 is 많이 쓴다고함, 상태값을 true로주면 체크가 된상태로 시작

  const onChk = (event) => {
    const {checked} = event.target
    isCheck(checked)
  };
  return (
    <div style={{color: chk ? 'blue': 'pink', margin:30, fontSize: 25}}>
      <input type="checkbox" checked={chk} onChange={onChk} /> Have a nice day!!
      <hr/>
    </div>
  );
};

export default Test02;
