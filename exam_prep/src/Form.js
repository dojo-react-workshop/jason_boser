'use strict'

import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchText:'',
            disableSearch:true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.runUserSearch(this.state.searchText)
            .then(() => {
                this.setState({
                    searchText:'',
                    disableSearch:true
                })
            })
            .catch(() => {
                window.alert('Unrecognized username')
            })  
    }

    handleChange = (event) => {
        if(event.target.value === ''){
            this.setState({
                searchText:'',
                disableSearch:true
            })
        }else{
            this.setState({
                searchText:event.target.value,
                disableSearch:false
            })
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name='mainRepo' 
                    value={this.state.searchText} 
                    onChange={this.handleChange} 
                    placeholder='Username'
                />
                <input type='submit' disabled={this.state.disableSearch} />
            </form>
        )
    }

}

Form.propTypes = {
    runUserSearch:PropTypes.func.isRequired
}

export default Form;