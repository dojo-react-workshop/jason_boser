'use strict'

import React from 'react';

const Tile = (props) => {

    if(props.gameStatus === 'new game' || props.gameStatus === 'prepare'){
        return (
            <div 
                className='tile unselected'
            />
        )
    }else{// if(props.gameStatus === 'memorize'props.gameStatus === 'game over'){

        if(props.tileStatus === 'selected' && props.inSolution){
            return (
                <div 
                    className='tile correct'
                />
            )
        }else if(props.tileStatus === 'selected' && !props.inSolution){// if(props.tileStatus === 'unselected'){
            return (
                <div 
                    className='tile incorrect'
                />
            )
        }else if(props.inSolution){// if(props.tileStatus === 'unselected'){
            return (
                <div 
                    className='tile missed'
                />
            )
        }else{
            return (
                <div 
                    className='tile unselected'
                />
            )
        }
    }
    // }else{//if(props.gameStatus === 'selecting'

    // }

    
}

export default Tile;