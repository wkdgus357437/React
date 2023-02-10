import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test02 = () => {
  const [id, setId] = useState('1')
  const [dto, setDto] = useState({})
  const [search, setSearch] = useState('1') //1이란 값은 그냥 아무거나 준거임 (임의값))

  /* 
  // === onChange={e => setId(e.target.value)}
  const onInput =(e) => {
    const {value} = e.target
    setId(value)
  }

  */

  const onSearch = () => {
    setSearch(id)
  }


  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    axios.get(url).then(res => setDto(res.data))
  // }, [id]) // id 의 값이 바뀔 때마다 실행
    }, [search])// 버튼을 누를 때마다 실행

  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)}/> 
      <button onClick={onSearch}>검색</button>
      <h3>{dto.id} : {dto.title}</h3>
    </div>
  );
};

export default Test02;