import React from 'react';
import Test01 from './component/Test01';
import Test02 from './component/Test02';
import Test03 from './component/Test03';
import Test04 from './component/Test04';
import Test05 from './component/Test05';

const App = () => {
  return (
    <div>
      <Test01/>
      {/* useReducer */}

      <Test02/>
      {/* useReducer 색상변환01 */}

      <Test03/>
      {/* useReducer 색상변환02 */}

      <Test04/>
      {/* useReducer */}

      <Test05/>
      {/*  */}
    </div>
  );
};

export default App;
