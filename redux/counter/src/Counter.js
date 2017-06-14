import React from 'react';

const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const Counter = ({
        value,
        onIncrement,
        onDecrement
    }) => {
        return (
            <div>
                <div><h1>{value}</h1></div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    };

export {counter,Counter}