'use strict'




const receiptA = new Promise((resolve,reject) => {
    const rand = Math.random() * 1000;
    setTimeout(() => {
        resolve();
    },rand);
});

const receiptB = new Promise((resolve,reject) => {
    const rand = Math.random() * 1000;
    setTimeout(() => {
        resolve();
    },rand);
});

receiptA
    .then(() => {
        console.log('A has resolved');
        return receiptB;
    })
    .then(() => {
        console.log('B has resolved');
    }






// const receipt = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("BOOM!");
//     },2000);
//     //reject();
// });

// receipt
//     .then((arg) => {
//         console.log('This promise has resolved. ' + arg);
//     })
//     .catch(() => {
//         console.log('This promise has rejected.');
//     });


