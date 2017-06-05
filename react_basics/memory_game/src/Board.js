'use strict'

import React from 'react';

import Tile from './Tile';

const Board = (props) => {
    
    const tiles = props.tiles.map((current,index) => {
        return <Tile 
            key={index} 
            tileStatus={current.tileStatus} 
            inSolution={current.inSolution}
            gameStatus={props.gameStatus}
            toggleTileStatus={() => props.toggleTileStatus(index)}/>
    })

    return (
        <div id='board'>
            {tiles}
        </div>
    )
}

export default Board;