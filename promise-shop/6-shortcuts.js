'use strict' 

const goodPromise1 = new Promise((resolve,reject) => {
    resolve('PROMISE 1 RESOLVED');
});
const goodPromise2 = Promise.resolve('PROMISE 2 RESOLVED');

const badPromise3 = new Promise((resolve,reject) => {
    reject(new Error('PROMISE 3 REJECTED'));
});
const badPromise4 = Promise.reject(new Error('PROMISE 4 REJECTED'));

goodPromise1
    .then(
        (output) => {
            console.log(output);
        });
goodPromise2
    .then(
        (output) => {
            console.log(output);
        });
badPromise3
    .then(
        null,
        (error) => {
            console.log(error.message);
        });
badPromise4
    .catch(
        (error) => {
            console.log(error.message);
        });