import React from 'react';

const TodoList = (props) => (
    <ul>
        {
            props.data.map((item) => <li onClick={() => {props.remove(item.id)}} key={item.id}>{item.text}</li>)
        }
    </ul>
);

export default TodoList;





