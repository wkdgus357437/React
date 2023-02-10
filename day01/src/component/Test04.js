import React from "react";
import Cat from "./Cat";
import Lion from "./Lion";
import Person from "./Person";

const Test04 = () => {
  return (
    <div>
      <Cat name="고양이" /> {/* 변수 = 값 */}
      <hr/>
      <Lion name='사자'/>
      <hr/>
      <Person  name='홍길동' age='25'/>
    </div>
  );
};

export default Test04;
