import React from 'react';
import style from '../styles/TodoList.scss';
import Todo from '../components/Todo';

const TodoList = ({data, remove}) => {

    const listItem = data.map((item) => {
        return (<Todo item={item} key={item.id} remove={remove}/>)
    });

    return (<ul className={style.List}>{listItem}</ul>);
};

export default TodoList;