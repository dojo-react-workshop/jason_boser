'use strict'

import React from 'react';


const Footer = (props) => {
    let results = [];

    if(props.gameStatus === 'new game'){ 
        results.push(<button key={0} onClick={props.resetGame}>Start Game</button>);
    }else if(props.gameStatus === 'prepare'){
        results.push(<p key={0}>Get ready to memorize cells in <span>{props.timeLeft}</span></p>);
    }else if(props.gameStatus === 'memorize'){
        results.push(<p key={0}>Memorize tiles <span>{props.timeLeft}</span></p>);
    }else if(props.gameStatus === 'selecting'){
        results.push(<p key={0}>Guess the correct cells! <span>{props.timeLeft}</span></p>);
    }else{ //defaults to 'game over'
        results.push(<button key={0} onClick={props.resetGame}>Play Again</button>);
    }

    return (
        <div id='footer'>
            {results}
        </div>
    )
}

export default Footer;