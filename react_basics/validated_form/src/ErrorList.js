'use strict'

import React from 'react';

const ErrorList = (props) => {

    let errors = props.errors.map((current,index) => {
        return <p key={index}>{current}</p>
    })

    return(
        <div className='errors'>
            {errors}
        </div>
    )
}

export default ErrorList;