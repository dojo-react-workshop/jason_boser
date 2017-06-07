'use strict'

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class RepoList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            repos:[]
        }
    }

    componentDidMount(){
        let username = this.props.match.params.username;
        
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                this.setState({
                    repos:response.data
                })
            })
    }

    componentWillReceiveProps(nextProps){
        let username = nextProps.match.params.username;
        
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                this.setState({
                    repos:response.data
                })
            })
    }

    render(){
        let repos = this.state.repos.map((current,index) => {
            return <li key={current.id}>{current.name}</li>
        })

        return (
            <ul id='repolist'>
                {repos}
            </ul>
        )
    }
}

export default RepoList;