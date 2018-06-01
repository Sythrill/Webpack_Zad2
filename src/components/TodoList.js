import React from 'react';
import style from '../styles/TodoList.css';

const TodoList = (props) => (
    <ul className={style.List}>
        {
            props.data.map((item) => <li
                onClick={() => {props.remove(item.id)}}
                key={item.id}
                className={style.ListItem}>{item.text}</li>)
        }
    </ul>
);

export default TodoList;