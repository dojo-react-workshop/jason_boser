'use strict'

import React from 'react';

import Header from './Header';
import List from './List';
import Footer from './Footer';

class App extends React.Component {

    //clear the input text
    //edit todo on double-click
    
    constructor(props){
        super(props);

        this.state = {
            todos:props.todos,
            filterState:'All'
        }
    }

    addItem = (text) => {
        let updatedTodos = [ ...this.state.todos ];
        updatedTodos.push({
            text:text,
            isComplete:false
        })

        this.setState({
            todos:updatedTodos
        })
    }

    removeItem = (index) => {
        let updatedTodos = [ ...this.state.todos ];
        updatedTodos.splice(index,1);

        this.setState({
            todos:updatedTodos
        })
    }

    toggleComplete = (index) => {
        let updatedTodos = [ ...this.state.todos ];
        updatedTodos[index].isComplete = !updatedTodos[index].isComplete;

        this.setState({
            todos:updatedTodos
        })
    }

    selectAll = () => {
        let updatedTodos = this.state.todos.map((current) => {
            current.isComplete = true;
            return current;
        })

        this.setState({
            todos:updatedTodos
        })
    }

    filter = (filter) => {
        this.setState({
            filterState:filter
        })
    }

    clearCompleted = () => {
        let filtered = this.state.todos.filter((current) => {
            if(current.isComplete){
                return false;
            }else{
                return true;
            }
        })
        this.setState({
            todos:filtered
        })
    } 

    countUnfinished = (todos) => {
        let countUnfinished = 0;
        for(let i=0; i<todos.length; i++){
            if(!todos[i].isComplete)
                countUnfinished++;
        }
        return countUnfinished;
    }

    getFilteredTodos = (todos) => {
        let filtered = todos.filter((current) => {
            if(this.state.filterState === 'All'){
                return true;
            }else if(this.state.filterState === 'Active' && !current.isComplete){
                return true;
            }else if(this.state.filterState === 'Completed' && current.isComplete){
                return true;
            }else{
                return false;
            }
        })
        return filtered;
    }

    render(){

        let countUnfinished = this.countUnfinished(this.state.todos);
        let countFinished = this.state.todos.length - countUnfinished;
        let filtered = this.getFilteredTodos(this.state.todos);
        
        return(
            <div id='todo-app'>
                <h1>todos</h1>
                <Header 
                    addItem={this.addItem} 
                    selectAll={this.selectAll}
                /> 
                <List 
                    todos={filtered} 
                    removeItem={this.removeItem} 
                    toggleComplete={this.toggleComplete}
                />
                <Footer 
                    countUnfinished={countUnfinished}
                    countFinished={countFinished}
                    filter={this.filter}
                    filterState={this.state.filterState}
                    clearCompleted={this.clearCompleted}                    
                />
                <br/>
                <p>Double-click to edit a todo.</p>
                <p>Created by Jason Boser</p>
            </div>
        )
    }
}

export default App;