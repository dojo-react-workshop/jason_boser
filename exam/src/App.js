'use strict'

import Header from './Header'
import HomePage from './HomePage'
import RepoDetails from './RepoDetails'

import React, { Component } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            repos:[],
            isLoading:false,
            repoFilter:'All'
        }
    }

    resetHomePage = () => {
        this.setState({
            username:'',
            repos:[],
            isLoading:false,
            repoFilter:'All'
        })
    }

    getRepoList = (user) => {
        this.setState({
            repos:[],
            isLoading:true
        })

        return axios.get(`https://api.github.com/users/${user}/repos`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    username:user,
                    repos:response.data,
                    isLoading:false,
                    repoFilter:'All'
                })
            })
            .catch((err) => {
                this.setState({
                    username:'',
                    repos:[],
                    isLoading:false
                })
                throw new Error('Invalid username');
            })
    }

    updateRepoFilter = (text) => {
        this.setState({
            repoFilter:text
        })
    }

    render() {
        return (
            <Router>
                <div id="app">
                    <Header resetHomePage={this.resetHomePage} />
                    <Route exact path='/' render={(props) => {
                        return <HomePage 
                            { ... props} 
                            getRepoList={this.getRepoList}
                            isLoading={this.state.isLoading}
                            repos={this.state.repos}
                            username={this.state.username}
                            repoFilter={this.state.repoFilter}
                            updateRepoFilter={this.updateRepoFilter}
                        />
                    }}/>
                    <Route path='/repos/:id' render={(props) => {
                        return <RepoDetails 
                            { ... props} 
                            repos={this.state.repos}
                        />
                    }}/>

                </div>
            </Router>
        );
    }
}

export default App;
