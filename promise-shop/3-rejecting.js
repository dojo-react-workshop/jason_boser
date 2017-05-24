'use strict' 

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    },700);
});

function onReject(error){
    console.log(error.message);
}

myPromise
    .then(
        (arg) => {
        },
        (error) => {
            onReject(error);
        });