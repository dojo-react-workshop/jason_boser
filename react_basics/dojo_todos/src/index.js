'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

const todos = [
    {
        text:'mow lawn',
        isComplete:false
    },
    {
        text:'clean house',
        isComplete:false
    },
    {
        text:'coach tball',
        isComplete:true
    }
];


ReactDOM.render(
    <App todos={todos}/>,
    document.getElementById('root')
)