'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText:'',
            disabled:true,
            errorText:''
        }
    }

    handleChange = (event) => {
        let validText = this.validateText(event.target.value);
        this.setState({
            searchText:event.target.value,
            disabled:validText
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.getRepoList(this.state.searchText, this.errorCallback)
            .then(() => {
                this.setState({
                    searchText:'',
                    disabled:true,
                    errorText:''
                })
            })
            .catch(() => {
                this.setState({
                    disabled:true,
                    errorText:'Invalid username'
                })
            })
    }

    validateText = (text) => {
        return text.lengh > 0;
    }

    render(){
        return (
            <div id='userSearch'>
                <hr />
                {this.state.errorText.length === 0?null:<p className="notification-box alert">{this.state.errorText}</p>}
                <p>Search repositories by username</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value={this.state.searchText} />
                    <input type='submit' className='button expand' value='Search' disabled={this.state.disabled}/>
                </form>
                <hr />
            </div>
        )
    }
}

UserSearch.propTypes = {
    getRepoList:PropTypes.func.isRequired
}

export default UserSearch;