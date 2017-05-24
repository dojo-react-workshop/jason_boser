'use strict' 

const myPromise = new Promise((resolve,reject) => {
    resolve('PROMISE VALUE');
});

myPromise
    .then(
        (output) => {
            console.log(output);
        });

console.log('MAIN PROGRAM');