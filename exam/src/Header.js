'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom'

const Header = (props) => {

    return(
        <div id='header'>
            <h1>GitHub viewer</h1>
            <Route path="/repos/:id" render={(newProps) => {
                return <Link to='/' ><button className='button' onClick={props.resetHomePage} >Home</button></Link>
            }}/>
            <hr />
        </div>
    )
}

Header.propTypes = {
    resetHomePage:PropTypes.func.isRequired
}

export default Header;


