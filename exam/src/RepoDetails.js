'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RepoDetails = ({ match,repos,username }) => {

    let repo = null;
    for(let i=0; i<repos.length; i++){
        if(repos[i].id == match.params.id)
            repo = repos[i];
    }
    
    let { name, stargazers_count, forks_count, language } = repo;   

    return (
        <div>
            <h3>{name}'s details</h3>
            <table className="table" cols={3}>
                <thead>
                    <tr>
                        <th>Stars</th>
                        <th>Forks</th>
                        <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stargazers_count}</td>
                        <td>{forks_count}</td>
                        <td>{language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

RepoDetails.propTypes = {
    repos:PropTypes.array.isRequired
}

export default RepoDetails;