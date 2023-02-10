import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {red, yellow,green,blue,magenta,cyan} from '../store/modules/color';

const Color = () => {
  const color = useSelector(state => state.colorReducer.color) // 여기의 color은 color.js의 상태변수로
  const dispatch = useDispatch()

  return (
    <div>
      <h1 style={{color : color}}>컬러 : {color}</h1>
      <button onClick={()=>dispatch(red())}>빨강</button>
      <button onClick={()=>dispatch(yellow())}>노랑</button>
      <button onClick={()=>dispatch(green())}>초록</button>
      <button onClick={()=>dispatch(blue())}>파랑</button>
      <button onClick={()=>dispatch(magenta())}>보라</button>
      <button onClick={()=>dispatch(cyan())}>하늘</button>

    </div>
  );
};

export default Color;