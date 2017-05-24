'use strict' 
require('es6-promise');

function all(promise1,promise2){
    return new Promise((resolve,reject) => {
        let counter = 0;
        let result = [];

        promise1
            .then((val) => {
                counter++;
                result[0] = val;
                if(counter==2){
                    resolve(result);
                }
            });

        promise2
            .then((val) => {
                counter++;
                result[1] = val;
                if(counter==2){
                    resolve(result);
                }
            });
        });
}
setTimeout(() => {
    all(getPromise1(),getPromise2())
        .then(console.log);
},300);
