'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

const UserList = (props) => {

    let userLinks = props.users.map((current,index) => {
        let username = current.login
        return (
            <li key={index}>
                <Link to={`/${username}/repos`}>{username}</Link>
            </li>
        )
    })

    return (
        <ul id='userlist'>
            {userLinks}
        </ul>
    )

}

UserList.propTypes = {
    users:PropTypes.array.isRequired
}

export default UserList;