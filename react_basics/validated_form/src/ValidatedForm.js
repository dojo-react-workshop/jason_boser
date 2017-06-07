'use strict'

import React from 'react';
import validator from 'validator';
import ErrorList from './ErrorList';

class ValidatedForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            validData:false,
            nameErrors:[],
            emailErrors:[],
            submitted:false
        }
    }

    handleChange = (event) => {
        const { name,value } = event.target;
        let nameErrors = this.state.nameErrors;
        let emailErrors = this.state.emailErrors;
        let validData;
            
        if(name === 'name'){
            nameErrors = this.validateName(value);
        }else if(name === 'email'){
            emailErrors = this.validateEmail(value);
        }

        if(nameErrors.length === 0 && emailErrors.length === 0 &&
            this.state.name.length != 0 && this.state.email.length != 0){
            validData = true;
        }else{
            validData = false;
        }

        this.setState({
            [name]:value,
            validData,
            nameErrors,
            emailErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            submitted:true
        })

        console.log(`submitting name:${this.state.name} and email:${this.state.email}`);
    }

    validateName = (name) => {
        let errors = [];
        if(name.length < 8){
            errors.push('Name must be at least 8 characters.');
        }
        return errors;
    }

    validateEmail = (email) => {
        let errors = [];
        if(!validator.isEmail(email)){
            errors.push('Invalid email address.');
        }
        return errors;
    }

    render(){
        if(this.state.submitted){
            return (
                <div id='validatedForm'>
                    <h1>Thank you for your submission {this.state.name}. We will contact you at {this.state.email}.</h1>
                </div>
            )
        }else{
            return (
                <div id='validatedForm'>
                    <h1>Validated Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Name' value = {this.state.name} name='name' onChange={this.handleChange} />
                        <ErrorList errors={this.state.nameErrors}/>
                        <input type='email' placeholder='Email' value = {this.state.email} name='email' onChange={this.handleChange} />
                        <ErrorList errors={this.state.emailErrors} />
                        <input type='submit' disabled={this.state.validData?false:true} />
                    </form>
                </div>
            )
        }
    }
}


export default ValidatedForm;