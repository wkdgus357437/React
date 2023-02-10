import React from 'react';
import Test01 from './component/Test01';
import Test02 from './component/Test02';
import Test03 from './component/Test03';
import Todos from './component/Todos';

const App = () => {
  return (
   <div>
    <Test01/>
    {/* useEffect */}

    <Test02/>
    {/* Test02Sub, 좌표 */}

    <Test03/>
    {/* 컴포넌트별로 CSS 작성, Test03.css, Test03.module.css */}
    
    <Todos/>
    {/* 일정관리 (추가,삭제), 로컬스 토리지(데이터 읽기, 쓰기)*/}



   </div>
  );
}

export default App;
