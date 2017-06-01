'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class App extends React.Component {

    state = {
        numCounters:1
    }

    addCounter = () => {
        console.log('Added a counter');
        
        this.setState({
            numCounters: this.state.numCounters + 1
        })
    }

    getCounters = () => {
        let counters = [];
        for(let i=0; i<this.state.numCounters; i++){
            counters.push(<Counter key={i}/>);
        }
        return counters;
    }

    render(){
        return (
            <div id='container'>
                <button onClick={this.addCounter}>Add Counter</button>
                {this.getCounters()}
            </div>
        )
    }
}

class Counter extends React.Component {
    state = {
        count:0
    }

    updateCount = (value) => {
        let newCount = this.state.count + value;
        
        this.setState({
            count:newCount
        })
    }

    render(){
        return(
            <div className='counter'>
                <h1>{this.state.count}</h1>
                <button onClick={function(){this.updateCount(1)}.bind(this)}>Increment</button>
                <button onClick={function(){this.updateCount(-1)}.bind(this)}>Decrement</button>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));