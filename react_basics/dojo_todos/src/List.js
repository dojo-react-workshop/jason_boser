'use strict'

import React from 'react';

import TodoItem from './TodoItem';

const List = (props) => {

    const todos = props.todos.map((current,index) => {
        return <TodoItem 
            key={index} 
            text={current.text} 
            isComplete={current.isComplete}
            removeItem={() => props.removeItem(index)}
            toggleComplete={() => props.toggleComplete(index)}
        />
    })

    return(
        <div id='todo-list'>
            {todos}
        </div>
    )
}

export default List;