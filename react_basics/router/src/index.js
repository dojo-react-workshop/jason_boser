import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import webRouter from './webRouter';

const JavaScript = () => {return <p>A high-level, dynamic, untyped, and interpreted programming language.</p>}
const Haskell = () => {return <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>}
const CoffeeScript = () => {return <p>CoffeeScript is a programming language that transcompiles to JavaScript, so we'll be redirecting back to JavaScript in 5.</p>}

const Link = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        webRouter.navigateTo(props.path);
    }

    return (
        <div>
            <a href="" onClick={handleClick}>{props.children}</a>
        </div>
    )
}

Link.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

const Route = ({ path, component:Component }) => {
    if(path === webRouter.path()){
        return <Component />;
        //return React.createElement(component);
    }else{
        return null;
    }
}

Route.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
}

class App extends React.Component {
    constructor(props){
        super(props);
        webRouter.subscribe(this.rerender);
    }

    rerender = () => {
        this.forceUpdate();
    }

    render(){
        return (
            <div>
                <Link path="/javascript">JavaScript</Link>
                <Link path="/haskell">Haskell</Link>
                <Link path="/coffeescript">CoffeeScript</Link>
                <hr />
                <Route path="/javascript" component={JavaScript} />
                <Route path="/haskell" component={Haskell} />
                <Route path="/coffeescript" component={CoffeeScript} />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
