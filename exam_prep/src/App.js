'use strict'

import React from 'react';
import axios from 'axios';
import Form from './Form';
import UserList from './UserList';
import RepoList from './RepoList';

import { Route, BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    runUserSearch = (text) => {
        //could set isLoading state here, render UI accordingly
        
        return axios.get(`https://api.github.com/search/users?q=${text}`)
            .then((response) => {
                if(response.data.items.length < 1){
                    this.setState({
                        users:[]
                    })
                    throw new Error('No results');
                }
                //reset the isLoading state
                this.setState({
                    users:response.data.items
                })
            })
    }

    render(){
        return (
            <Router>
                <div id='app'>
                    <h1>GitHub Repo App</h1>
                    <Form runUserSearch={this.runUserSearch} />
                    <UserList users={this.state.users} />
                    <Route path='/:username/repos' component={RepoList} />
                </div>
            </Router>
        )
    }
}

export default App;