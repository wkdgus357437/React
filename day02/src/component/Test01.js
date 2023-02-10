import React from "react";

const Test01 = () => {
  const test1 = () => {
    alert("test1");
  };

  const test2 = () => {
    alert("test2");
  };

  const test3 = (num) => {
    alert("num = " + num);
  };

  const test4 = (num) => {
    alert(`num = ${num}`);
  };

  return (
    <div>
      <h2>이벤트 : on+첫글자 대문자</h2>
      <p>
        <button onClick={test1}>클릭</button> {/* 함수뒤에 ()하면 안된다. */}
        <button onClick={test2}>클릭</button>
        <button onClick={() => test3(10)}>클릭</button>
        <button onClick={() => test4(20)}>클릭</button>
      </p>
      <p>
        <button onClick={()=>{
          console.log('사자')
          console.log('호랑이')
          console.log('기린')
        }}>클릭</button> {/*여러개 일떄  */}

        <button onClick={() => console.log('빨강사과')}>클릭</button>
        {/* 하나일 때 */}
      </p>
    </div>
  );
};

export default Test01;

/*
리엑트는 순수 자바스크립트가 아니다. =>베이스가 자바스크립트일 뿐이다.
함수 뒤에 ()를 붙이면 새로고침 하자마자 무조건 실행된다.
=> 해결하려면 함수로 한번 묶어준다.
=>값을 넘길때는 함수 ex) () => 함수(값)

*/
