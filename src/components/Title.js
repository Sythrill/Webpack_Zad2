import React from 'react';
import style from '../styles/Title.scss';

const Title = props => <h1 className={style.AppTitle}>{props.title}. Number of tasks: {props.number}</h1>;

export default Title;