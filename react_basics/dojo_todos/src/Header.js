'use strict'

import React from 'react';

const Header = (props) => {

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            props.addItem(e.target.value);
        }
    }

    return (
        <div id='header'>
            <p onClick={props.selectAll}>&#9660;</p>
            <input 
                type='text' 
                placeholder='What needs to be done?' 
                onKeyUp={handleKeyUp}
             />
        </div>
    )
}

export default Header;