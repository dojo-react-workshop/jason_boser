var http = require('http');
var bufferList = require('bl');

function promiseBuilder(url){
    return new Promise((resolve,reject) => {
        http.get(url,(response) => {
            response.pipe(bufferList((err,data) => {
                resolve(data.toString());
            }))
        })
    });
}

let promise1 = promiseBuilder(process.argv[2]);
let promise2 = promiseBuilder(process.argv[3]);
let promise3 = promiseBuilder(process.argv[4]);

promise1
    .then((data) => {
        console.log(data);
        return promise2;
    })
    .then((data) => {
        console.log(data);
        return promise3;
    })
    .then((data) => {
        console.log(data);
    })