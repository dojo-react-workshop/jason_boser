'use strict' 
require('es6-promise')

setTimeout(() => {
    first()
        .then(second)
        .then(console.log);
},400)

// function first(){
//     return new Promise((resolve,reject) => {
//         resolve('secret value 1');
//     });
// };

// function second(){
//     return new Promise((resolve,reject) => {
//         resolve('secret value 2');
//     });
// };

// setTimeout(() => {
//     const promise1 = promiseMaker();
//     const promise2 = promiseMaker();

//     promise1
//         .then((output) => {
//             return promise2;
//         })
//         .then((output) => {
//             console.log(output);
//         });
// },800)





// /* global first, second */

// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });

// secondPromise.then(console.log);

