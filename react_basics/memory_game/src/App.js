'use strict'

import React from 'react';

import Header from './Header';
import Board from './Board';
import Footer from './Footer';

class App extends React.Component {

    //gameStatus options: 'new game', 'prepare', 'memorize', 'selecting', 'game over' 
    //tileStatus options: 'selected','unselected'

    constructor(props){
        super(props);

        this.state = {
            gameStatus:'new game',
            timeLeft:0,
            tiles:this.getBlankBoard()
        }
    }

    getBlankBoard = () => {
        return ([
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false},
            {tileStatus:'unselected',inSolution:false}
        ])
    }

    resetGame = () => {
        //reset all tiles on the board
        console.log('resetting game');
        console.log(this.state.tiles);

        this.setState({
            gameStatus:'prepare',
            timeLeft:3,
            tiles:this.getBlankBoard()
        })

        //start 3 second timer and move to display the solution pattern after
        let prepareInterval = setInterval(() => {
            if(this.state.timeLeft===0){
                clearInterval(prepareInterval);
                this.memorizePattern();
            }else{
                this.setState({
                    timeLeft:this.state.timeLeft - 1
                })
            }
        },1000);
    }

    memorizePattern = () => {
        console.log('memorizing pattern');
        console.log(this.state.tiles);

        //display the solution pattern
        let solutionTiles = this.createPattern();
        this.setState({
            gameStatus:'memorize',
            timeLeft:3,
            tiles:solutionTiles
        })

        //start 3 second timer and move to select tiles after
        let displayInterval = setInterval(() => {
            if(this.state.timeLeft===0){
                clearInterval(displayInterval);
                this.selectTiles();
            }else{
                this.setState({
                    timeLeft:this.state.timeLeft - 1
                })
            }
        },1000);
    }

    selectTiles = () => {
        console.log('selecting tiles');
        console.log(this.state.tiles);

        let selectingTiles = this.state.tiles.map((current) => {
            current.tileStatus = 'unselected';
            return current;
        })

        //display the 'selecting' board
        this.setState({
            gameStatus:'selecting',
            timeLeft:3
        })

        //start 3 second timer for selecting tiles and move to check solution after
        let selectInterval = setInterval(() => {
            if(this.state.timeLeft===0){
                clearInterval(selectInterval);
                this.setState({
                    gameStatus:'game over'
                })
            }else{
                this.setState({
                    timeLeft:this.state.timeLeft - 1
                })
            }
        },1000);
    }

    createPattern = () => {
        let patternTiles = this.getBlankBoard();

        for(let i=0; i<5; i++){
            let index = Math.floor(Math.random()*12);
            while(patternTiles[index].inSolution){
                index = Math.floor(Math.random()*12);
            }
            patternTiles[index].inSolution = true;
            patternTiles[index].tileStatus = 'selected';
        }

        return patternTiles;
    }

    toggleTileStatus = (index) => {
        let updatedTiles = [ ...this.state.tiles ];
        updatedTiles[index].tileStatus = updatedTiles[index].tileStatus==='selected'? 'unselected':'selected';
        
        this.setState({
            tiles:updatedTiles
        })
    }

    render(){
        return(
            <div id='memoryApp'>
                <Header /> 
                <Board 
                    tiles={this.state.tiles}
                    gameStatus={this.state.gameStatus}
                    toggleTileStatus={this.toggleTileStatus}

                />
                <Footer 
                    timeLeft={this.state.timeLeft}
                    resetGame={this.resetGame}
                    gameStatus={this.state.gameStatus}
                />
            </div>
        )
    }
}

export default App;