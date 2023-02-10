import React, { useRef, useState } from 'react';

const Test10 = () => {
  
  const seq =useRef(1) //기본값 잡기
  const nameRef= useRef()
  
  const [data,setData]= useState([]) //배열[]

  const[form,setForm] =useState({ //객체 {}
    name: '', //초기화시키겠다.
    age: ''
  })

  const {name,age} = form

  const onInput =(e) => {
    const {name, value} = e.target
     setForm({
       ...form,
       [name]: value
    })
  }

  const onAdd = (e) => {
    e.preventDefault(); //기존 이벤트 무시하고 onAdd 만 가져가자 //브라우저 교유의 동작을 중단시켜주는 역할을 한다.
    if(!name || !age) return

    setData([
      ...data,
      {
        seq: seq.current++, //seq 값 1씩 증가시킴 current++
       name, // name:name => key와 value가 똑같으면 1번만 써도 된다.
      //  name: name
        age
        // age: age
      }
    ])
    
    // 초기화
    setForm({
      name:'',
      age:''
    })

    //포커스 맞추기
    nameRef.current.focus()
  }

  return (
    <div>
      <form onSubmit={onAdd}>
        이름 : <input type='text' name='name' value={name} onChange={onInput} ref={nameRef}/>
        <br/>
        나이 : <input type='text' name='age' value={age} onChange={onInput}/>
        <br/>
        <button type='submit'>추가</button>
      </form>
      <hr/>
      <ul>
        {
          data.map(item => <li key={item.seq}>
           {item.seq} / {item.name} / {item.age}
          </li>)
        }
      </ul>
    </div>
  );
};

export default Test10;