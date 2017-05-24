'use strict' 

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('FULFILLED!')
    },700);
});

myPromise
    .then((arg) => {
        console.log(arg);
    });