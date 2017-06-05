'use strict'

import React from 'react';

const Header = (props) => {

    const updateText = (e) => {
        if (e.keyCode === 13) {
            props.addItem(e.target.value);
        }else{
            props.updateDisplayText(e.target.value);
        }
    }

    return (
        <div id='header'>
            <p onClick={props.selectAll}>&#9660;</p>
            <input 
                type='text' 
                placeholder='What needs to be done?' 
                value={props.displayText}
                onKeyDown={updateText}
                onChange={updateText}
             />
        </div>
    )
}

export default Header;