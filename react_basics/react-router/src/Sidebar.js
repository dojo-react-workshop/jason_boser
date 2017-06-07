import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const routes = [
    {   
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    {   
        path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {   
        path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
]



const Sidebar = () => {
    return (
        <Router>
            <div style={{width:'400px'}}>
                <div style={{backgroundColor:'lightgray', padding:'10px', width:'120px',display:'inline-block',verticalAlign:'top'}}>
                    <ul style={{listStyleType:'none', padding:'0'}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bubblegum">Bubblegum</Link></li>
                        <li><Link to="/shoelaces">Shoelaces</Link></li>
                    </ul>
                    {
                        routes.map((route,index) => (
                            <Route 
                                key={index}
                                path={route.path} 
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))
                    }
                </div>

                <div style={{width:'220px',display:'inline-block',verticalAlign:'top', marginLeft:'20px'}}>
                    {
                        routes.map((route,index) => (
                            <Route 
                                key={index}
                                path={route.path} 
                                exact={route.exact}
                                component={route.main}
                            />
                        ))
                    }
                </div>
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

export default Sidebar;