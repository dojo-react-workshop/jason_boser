'use strict'

import React from 'react';

const TodoItem = (props) => {

    console.log(props);

    if(props.isComplete){
        return (
            <div className='todo-item'>
                <p className='todo-checkbox' onClick={props.toggleComplete}>&#10004;</p>
                <p className='todo-label-complete'>{props.text}</p>
                <p className='todo-delete' onClick={props.removeItem}>X</p>
            </div>
        )
    }else{
        return (
            <div className='todo-item'>
                <p className='todo-checkbox' onClick={props.toggleComplete}></p>
                <p className='todo-label'>{props.text}</p>
                <p className='todo-delete' onClick={props.removeItem}>X</p>
            </div>
        )
    }
    
}

export default TodoItem;