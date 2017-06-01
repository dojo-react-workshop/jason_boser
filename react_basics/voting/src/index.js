import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         name:'Jason'
    //     };
    // }

    state = {
        name:'Jason'
    }

    changeName = () => {
        let newName = (this.state.name==='Jason') ? 'Natalie':'Jason';
        
        this.setState({
            name:newName
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

// const App = () => {
//     return <h1>STATELESS component!</h1>
// }

ReactDOM.render(<App />,document.getElementById('root'));