import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Member from './Member';

const Main = () => {
  const [data, setData] =useState([])

  useEffect(()=>{ //axios 사용전 다운하기 [ yarn add axios ]
    axios.get('https://jsonplaceholder.typicode.com/users') //나중에 연결할때 spring boot 주소 쓰면됨
      .then(res => setData(res.data))
  },[])

  return (
    <div>
      <h1>Main Page / 회원수 : {data.length}</h1>
      {
        data.map(item => <Member key={item.id} item={item}/>)
      }
    </div>
  );
};

export default Main;