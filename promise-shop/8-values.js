'use strict' 
require('es6-promise')

function attachTitle(title){
    return "DR. " + title;
}

const promise = new Promise((resolve,reject) => {
    resolve('MANHATTAN');
});

promise
    .then(attachTitle)
    .then(console.log);