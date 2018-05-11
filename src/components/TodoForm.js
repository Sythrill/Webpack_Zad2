import React from 'react';
import style from '../styles/TodoForm.css';

const TodoForm = (props) => {

    let input;

    return (
        <div className={style.container}>
            <input ref={node => {input = node;}} className={style.formInput} />
            <button onClick={() => {props.add(input.value);input.value = '';}} className={style.formButton}>
                +
            </button>
        </div>
    );
};

export default TodoForm;