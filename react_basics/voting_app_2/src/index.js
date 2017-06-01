'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import imagePath from './images/plus.png';
//import './images/plus.png';

const languages = [
    'React',
    'Vue',
    'Angular',
    'Ember'
]

const Container = (props) => {
    const {languages} = props;

    return (
        <div id='container'>
            <h1>Vote Your JS Library!</h1>
            <LibraryBox languages={languages} />
        </div>
    )
}

class LibraryBox extends React.Component {
    
    constructor(props){
        super(props);

        const counts = new Array(props.languages.length).fill(0);
        
        this.state = {
            libraries:props.languages,
            voteCounts:counts
        }
    }

    //increment the count for the library selected and update the state to re-render
    addVoteToLibrary = (name) => {
        for(let i=0; i<this.state.libraries.length; i++){
            if(this.state.libraries[i] === name){
                this.state.voteCounts[i]++;
            }
        }
        this.sortLibraries();
        this.setState({
            libraries:this.state.libraries,
            voteCounts:this.state.voteCounts
        });
    }

    //one pass with a bubble sort will bubble up the one element that was incremented 
    sortLibraries = () => {
        for(let i=this.state.libraries.length-1; i>=1; i--){
            if(this.state.voteCounts[i] > this.state.voteCounts[i-1]){
                //current count is higher than the next one up the list, swap libraries and counts
                let tempLibrary = this.state.libraries[i];
                let tempVoteCount = this.state.voteCounts[i];
                this.state.libraries[i] = this.state.libraries[i-1];
                this.state.voteCounts[i] = this.state.voteCounts[i-1]; 
                this.state.libraries[i-1] = tempLibrary;
                this.state.voteCounts[i-1] = tempVoteCount;           }
        }
    }

    render(){
        let libraryList = this.state.libraries.map((library, index) => {
            return (
                <Library 
                    key={index} 
                    voteCount={this.state.voteCounts[index]} 
                    text={library} 
                    addVoteToLibrary={this.addVoteToLibrary}
                />
            )
        })

        return (
            <div id='library-box'>
                {libraryList}
            </div>
        )
    }
}

class Library extends React.Component {

    constructor(props){
        super(props);
    }

    addVote = () => {
        this.props.addVoteToLibrary(this.props.text);
    }

    render(){
        return (
            <div className='library'>
                <p className='counter'>{this.props.voteCount}</p>
                <p className='label'>{this.props.text}</p>
                <img src={imagePath} alt='plus sign' onClick={this.addVote}></img>
            </div>
        )
    }
}

ReactDOM.render(
    <Container languages={languages}/>,
    document.getElementById('root')
)