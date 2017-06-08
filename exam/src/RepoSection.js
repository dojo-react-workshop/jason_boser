'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoSelector from './RepoSelector';
import RepoTable from './RepoTable';
import { Route } from 'react-router-dom'

const RepoSection = (props) => {

    return (
        <div id='repoList'>
            <h3>{props.username}'s repositories</h3>
            <p>Filter repos by primary language</p>
            <RepoSelector repos={props.repos} updateRepoFilter={props.updateRepoFilter} />
            <RepoTable repos={props.repos} repoFilter={props.repoFilter} />
        </div>
    )
}


RepoSection.propTypes = {
    username:PropTypes.string.isRequired,
    repos:PropTypes.array.isRequired,
    repoFilter:PropTypes.string.isRequired,
    updateRepoFilter:PropTypes.func.isRequired
}

export default RepoSection;