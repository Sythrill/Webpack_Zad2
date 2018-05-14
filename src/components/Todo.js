import React from 'react';
import style from '../styles/TodoList.css';

const Todo = ({item, remove}) => {

    return (
        <li onClick={() => {remove(item.id)}} className={style.ListItem}>{item.text}</li>
    );

};

export default Todo;