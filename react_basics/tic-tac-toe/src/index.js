'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class Game extends React.Component {

    constructor(){
        super();

        this.state = {
            boardValues:["","","","","","","","",""],
            playerTurn:1
        }
    }

    updateGameboard = (index) => {
        const newValues = Array.from(this.state.boardValues);
        
        if(newValues[index]!=""){
            return;
        }

        newValues[index] = this.state.playerTurn===1? 'X':'O';
        
        this.setState({
            boardValues:newValues
        })

        let status = this.checkGameStatus(newValues);
        if(status==='winner'){
            alert(`Player ${this.state.playerTurn} wins!!!`);
        }else if(status==='keep playing'){
            this.setState({
                playerTurn:(this.state.playerTurn===1? 2:1)
            })
        }else{
            alert(`Game over!!!`);
        }
    }

    checkGameStatus = (values) => {
        //check the rows
        for(let row=0; row<3; row++){
            let currentValue = values[row*3];
            if(currentValue==="") continue;

            for(var col=1; col<3; col++){
                if(values[row*3 + col] != currentValue)
                    break;
            }
            if(col===3) return 'winner';
        }

        //check the columns
        for(let col=0; col<3; col++){
            let currentValue = values[col];
            if(currentValue==="") continue;

            for(var row=1; row<3; row++){
                if(values[row*3 + col] != currentValue)
                    break;
            }
            if(row===3) return 'winner';
        }

        //check the diagonals
        if(values[0]===values[4] && values[4]===values[8] && values[8]!="")
            return 'winner';
        if(values[2]===values[4] && values[4]===values[6] && values[6]!="")
            return 'winner';

        //check if thereh are spaces left to continue
        for(let i=0; i<values.length; i++){
            if(values[i]==="") return 'keep playing'
        }

        return 'game over'
    }

    render(){
        return(
            <div id='game'>
                <h1>Tic-Tac-Toe</h1>
                <h3>Player {this.state.playerTurn}, please choose a square.</h3>
                <Board boardValues={this.state.boardValues} update={this.updateGameboard}/>
            </div>
        )
    }
}

const Board = (props) => {

    const squares = props.boardValues.map((current,index) => {
        return <Square key={index} value={current} update={() => props.update(index)} />
    })

    return(
        <div id='board'>
            {squares}
        </div>
    )
}

const Square = (props) => {
    return (
        <div className='square' onClick={props.update}>{props.value}</div>
    )
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
)