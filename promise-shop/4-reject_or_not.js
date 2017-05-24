'use strict' 

const myPromise = new Promise((resolve,reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onRejected(error){
    console.log(error.message);
}

myPromise
    .then(
        (output) => {
            console.log(output);
        },
        (error) => {
            onReject(error);
        });