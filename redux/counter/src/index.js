//start with # 23

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {counter,Counter} from './Counter';
// import TodoApp from './TodoApp';

const todo = (state,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id:action.id,
                text:action.text,
                completed:false
            }
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state;
            }
            return{
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}

const todos = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(td => todo(td, action));
        default:
            return state;
    }
}
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce((nextState,key) => {
//             nextState[key] = reducers[key](
//                 state[key],
//                 action
//             );
//             return nextState;
//         },{})
//     }
// }

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})

let nextTodoId = 0;
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

const toggleTodo = (id) => {
    return {
        type:'TOGGLE_TODO',
        id
    }
}

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visiblityFilter,action)
//     }
// }


const Link = ({active,children,onClick}) => {
    if(active){
        return <span>{children}</span>
    }
    return (
        <a href='#' onClick={e => {
            e.preventDefault();
            onClick();
        }}>
        {children}
        </a>
    );
}

const mapStateToLinkProps = (state,ownProps) => {
    return {
        active:(ownProps.filter === state.visibilityFilter)
    }   
}

const mapDispatchToLinkProps = (dispatch,ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

const Footer = () => {
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter='SHOW_ALL' >All</FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE' >Active</FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED' >Completed</FilterLink>
        </p>
    )
}

const Todo = ({onClick,completed,text}) => {
    return (
        <li 
            onClick={onClick}
            style={{textDecoration:completed?'line-through':'none'}}
        >{text}
        </li>
    )
}

const TodoList = ({todos,onTodoClick}) => {
    return (
        <ul>
            {todos.map(todo => 
                <Todo key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
    )
}

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => {input = node;}} />
            <button onClick={() => {
                dispatch(addTodo(input.value))
            }}>
                Add Todo
            </button>
        </div>
    )
}
//default with no arguments passes just dispatch as a prop
AddTodo = connect()(AddTodo)

const getVisibleTodos = (todos,filter) => {
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);

    }
}

const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
}


ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp  />
    </Provider>,
    document.getElementById('root')
);








// const addCounter = (list) => {
//     return [...list,0];
// }

// const removeCounter = (list,index) => {
//     return [
//         ...list.slice(0,index),
//         ...list.slice(index+1)
//     ]
// }

// const incrementCounter = (list,index) => {
//     return [
//         ...list.slice(0,index),
//         list[index]+1,
//         ...list.slice(index+1)
//     ]
// }

// const store2 = createStore(counter); //counter is the reducer

// const render = () => {
//     ReactDOM.render(
//         <Counter 
//             value={store2.getState()} 
//             onIncrement={() => {
//                 store2.dispatch({type:'INCREMENT'})
//             }}
//             onDecrement={() => {
//                 store2.dispatch({type:'DECREMENT'})
//             }}
//         />,
//         document.getElementById('root')
//     );
// }

// store2.subscribe(render);
// render();