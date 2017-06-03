'use strict'

import React from 'react';


const Footer = (props) => {
    let results = [
        <p key={0} className='counter'>{props.countUnfinished} items left</p>
    ];

    if(props.filterState === 'All'){
        results.push(<button key={1} onClick={() => props.filter('All')} className='selected'>All</button>)
    }else{
        results.push(<button key={1} onClick={() => props.filter('All')}>All</button>)
    }

    if(props.filterState === 'Active'){
        results.push(<button key={2} onClick={() => props.filter('Active')} className='selected'>Active</button>)
    }else{
        results.push(<button key={2} onClick={() => props.filter('Active')}>Active</button>)
    }

    if(props.filterState === 'Completed'){
        results.push(<button key={3} onClick={() => props.filter('Completed')} className='selected'>Completed</button>)
    }else{
        results.push(<button key={3} onClick={() => props.filter('Completed')}>Completed</button>)
    }

    if(props.countFinished === 0){
        results.push(<button key={4} onClick={props.clearCompleted} id='clear-completed' className='invisible'>Clear Completed</button>)
    }else{
        results.push(<button key={4} onClick={props.clearCompleted} id='clear-completed'>Clear Completed</button>)
    }

    return (
        <div id='footer'>
            {results}
        </div>
    )
}

export default Footer;