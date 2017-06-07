import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const URL_Params = () => {
    return (
        <Router>
            <div>
                <h3>Accounts</h3>
                <ul>
                    <li><Link to="/netflix">Netflix</Link></li>
                    <li><Link to="/zillow">Zillow Group</Link></li>
                    <li><Link to="/yahoo">Yahoo</Link></li>
                    <li><Link to="/modus">Modus Create</Link></li>
                </ul>
                <Route path={'/:siteId'} component={IdDetails}/>
                <Route exact path={'/'} render={() => {return null}}/>
            </div>
        </Router>
    )
}

const IdDetails = ({match}) => {
    console.log(match.params);
    console.log(match.path);
    console.log(match.url);
    return (
        <div>
            <h4>ID: {match.params.siteId}</h4>
        </div>
    )
}

export default URL_Params;