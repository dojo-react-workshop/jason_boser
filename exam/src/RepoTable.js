'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const RepoTable = (props) => {

    let filteredRepos = props.repos.filter((current,index) => {
        return ((current.language === null && props.repoFilter === 'null') || 
            current.language === props.repoFilter || 
            props.repoFilter === 'All');
    })

    let repoList = filteredRepos.map((current,index) => {
        let {name} = current;
        return (
            <tr key={index}>
                <td><Link to={`/repos/${current.id}`}>{name}</Link></td>
            </tr>
        )
    })    

    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {repoList}
            </tbody>
        </table>
    )
}

RepoTable.propTypes = {
    repos:PropTypes.array.isRequired,
    repoFilter:PropTypes.string.isRequired
}

export default RepoTable;