'use strict' 
require('es6-promise')

function alwaysThrows(){
    throw new Error("OH NOES");
}

function iterate(num){
    console.log(num);
    return num+1;
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null,console.log);