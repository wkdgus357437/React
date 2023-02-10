import React from 'react';
import styles from '../css/TodoList.module.css';
import TodoItem from './TodoItem';
//일정출력

const TodoList = ({data,onDel}) => {

  return (
    <ul className={styles.TodoList}>
      { 
        data.map(item=><TodoItem key={item.seq} item={item} onDel={onDel}/>)
      }
    </ul>
  );
};

export default TodoList;